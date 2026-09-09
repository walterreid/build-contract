#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// extract_tail.mjs — pull the tail of THIS project's Claude Code conversation
// into a compact, paste-ready "remembrance" for a fresh or just-compacted session.
//
// WHY: after a compaction, the model keeps the facts but loses the *feel* — how
// you actually talk and how each decision got made. An agent summary flattens
// that; the raw last-N turns keep your voice. This extracts those turns cheaply.
//
// WHERE THE CONVERSATION LIVES (so a path never has to be hardcoded again):
//   Claude Code writes each project's transcripts to
//     ~/.claude/projects/<encoded-cwd>/<session-uuid>.jsonl
//   where <encoded-cwd> is the absolute working directory with every "/" and
//   " " turned into "-".  This script derives that from process.cwd() and then
//   picks the MOST-RECENTLY-MODIFIED .jsonl in it (the live/most-recent session).
//   The transcript is appended live, so it also contains the current turns.
//   Override discovery with --file <path> or --project <encoded-dir-name>.
//
// USAGE (run from the repo root, so it can find this project's transcript):
//   node tools/extract_tail.mjs                    # last 60 turns, this project, newest session
//   node tools/extract_tail.mjs --recover          # the turns right BEFORE the last compaction —
//                                                  #   the voice + last steps the summary flattened
//                                                  #   (if the summary OPENS the newest file, falls
//                                                  #   back to the tail of the previous session file)
//   node tools/extract_tail.mjs --recover --role user   # cheapest recovery: just your voice
//   node tools/extract_tail.mjs --turns 120        # more history
//   node tools/extract_tail.mjs --role user        # ONLY your turns — cheapest "how I speak" sample
//   node tools/extract_tail.mjs --assistant-max 0  # keep assistant headers only (skeleton of the thread)
//   node tools/extract_tail.mjs --raw              # no truncation, no noise-stripping (verbatim)
//   node tools/extract_tail.mjs --file /path/to/session.jsonl
//   node tools/extract_tail.mjs > tail.txt         # capture to a file to read/paste
//
// It prints oldest -> newest with a per-turn [-N] index counting back from the
// latest, and ends with a stats line (turn counts + estimated token cost +
// resolved source path) so you can weigh "useful vs the cost of reading" first.
//
// FUTURE IMPROVEMENTS (not built — noted so a future session knows the ask if a
// handoff deems it needed. Tier 1, in force today: a manual "Compaction Recovery"
// clause in AGENTS.md + HANDOFF-PROCESS.md tells the agent to run --recover):
//   • Tier 2 — automatic on compaction: a Claude Code `SessionStart` hook (source
//     "compact") that runs `--recover --role user` and injects the result, so
//     recovery needs no agent memory. (Claude-Code-specific; lives in settings.)
//   • Tier 3 — prepared, not reconstructed: a `PreCompact` hook that curates a
//     small recovery bundle BEFORE the window overflows — the parallel to
//     HANDOFF-PROCESS's "write the handoff at 70–80%, not at the death."
//   • Early clean compaction (a larger design conversation): a way to TRIGGER a
//     compaction voluntarily at a clean checkpoint (natural break, tree clean)
//     instead of waiting for an involuntary mid-task overflow — so the boundary
//     lands where state is tidy and `--recover` catches a coherent seam.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname, resolve } from 'node:path';

// ---- tiny flag parser ("--name value", or "--name" alone => true) ----------
const argv = process.argv.slice(2);
function flag(name, def) {
  const i = argv.indexOf(`--${name}`);
  if (i === -1) return def;
  const v = argv[i + 1];
  return v === undefined || v.startsWith('--') ? true : v;
}
if (flag('help', false)) {
  console.log('extract_tail.mjs — see the comment header of this file for full usage.');
  console.log('Common: --turns N | --role user|assistant|both | --assistant-max CHARS | --raw | --file PATH');
  process.exit(0);
}
const TURNS       = Number(flag('turns', 60));
const ROLE        = String(flag('role', 'both')).toLowerCase();     // both | user | assistant
const ASSIST_MAX  = Number(flag('assistant-max', 700));             // chars per assistant turn; 0 = header only
const USER_MAX    = Number(flag('user-max', 0)) || Infinity;        // chars per user turn; 0/omitted = unlimited
const RAW         = Boolean(flag('raw', false));                    // verbatim: no truncation, no noise-stripping
const RECOVER     = Boolean(flag('recover', false));                // recover the turns before the last compaction
const FILE_OVR    = flag('file', null);
const PROJECT_OVR = flag('project', null);

// ---- locate the transcript -------------------------------------------------
const projectsRoot = () => join(homedir(), '.claude', 'projects');
const encodedCwd = () => process.cwd().replace(/[/ ]/g, '-');

function pickTranscript() {
  if (typeof FILE_OVR === 'string') return FILE_OVR;
  const dirName = typeof PROJECT_OVR === 'string' ? PROJECT_OVR : encodedCwd();
  const dir = join(projectsRoot(), dirName);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.jsonl'));
  } catch {
    let avail = [];
    try { avail = readdirSync(projectsRoot()); } catch { /* none */ }
    console.error(`extract_tail: no project dir at ${dir}`);
    if (avail.length) console.error(`Available projects (pass one as --project):\n  ${avail.join('\n  ')}`);
    process.exit(1);
  }
  if (!files.length) { console.error(`extract_tail: no .jsonl transcripts in ${dir}`); process.exit(1); }
  // newest by mtime == the session most recently written to
  files.sort((a, b) => statSync(join(dir, b)).mtimeMs - statSync(join(dir, a)).mtimeMs);
  return join(dir, files[0]);
}

let T = pickTranscript();

// ---- text extraction + noise handling --------------------------------------
function textOf(content) {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return '';
  return content.filter((b) => b && b.type === 'text').map((b) => b.text).join('\n');
}
// Harness-injected blocks are not the human/assistant voice — drop them unless --raw.
// (system-reminders, slash-command wrappers, and background-task notifications all
//  arrive inside user-role events; stripping them leaves only what you actually typed.)
function stripNoise(t) {
  if (RAW) return t.trim();
  return t
    .replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, '')
    .replace(/<task-notification>[\s\S]*?<\/task-notification>/g, '')
    .replace(/<local-command-[\s\S]*?<\/local-command-[^>]*>/g, '')
    .replace(/<command-[\s\S]*?<\/command-[^>]*>/g, '')
    .trim();
}
// Anchored to the START of the turn: a turn that merely QUOTES the marker sentence
// must neither end the --recover scan nor be dropped as an injected summary.
const isCompactionSummary = (t) =>
  t.trimStart().startsWith('This session is being continued from a previous conversation');

function truncate(t, max) {
  if (!isFinite(max)) return t;          // unlimited
  if (max <= 0) return '';               // caller renders a header only
  if (t.length <= max) return t;
  return t.slice(0, max) + `\n  …[+${t.length - max} chars truncated — rerun with --raw or a larger --*-max to see all]`;
}

// ---- walk BACKWARD from the end, collecting only real text turns -----------
// (parsing from the tail means we never parse more of a huge transcript than we need)
const loadLines = (p) => readFileSync(p, 'utf8').split('\n').filter(Boolean);
let lines = loadLines(T);

// --recover: a compaction leaves a marker in the SAME transcript — the injected
// "This session is being continued…" summary. The lossy thing is what it REPLACED:
// the real turns just before it (your voice + the exact last steps). Find the most
// recent such marker and recover the turns immediately BEFORE it. (Falls back to the
// plain tail if none is found — i.e. the session was never compacted.)
let startIdx = lines.length - 1;
let recoverNote = '';
let mark = -1;
if (RECOVER) {
  for (let i = lines.length - 1; i >= 0; i--) {
    let ev; try { ev = JSON.parse(lines[i]); } catch { continue; }
    const t = ev && ev.message ? textOf(ev.message.content) : '';
    if (t && isCompactionSummary(t)) { mark = i; break; }
  }
  if (mark >= 0) { startIdx = mark - 1; recoverNote = `recovered the turns BEFORE the last compaction (transcript event ${mark} of ${lines.length})`; }
  else recoverNote = 'no compaction boundary found — this session was not compacted; showing the normal tail';
}

function collectFrom(lns, from) {
  const out = [];
  for (let i = from; i >= 0 && out.length < TURNS; i--) {
    let ev;
    try { ev = JSON.parse(lns[i]); } catch { continue; }
    const role = ev.type === 'user' ? 'USER' : ev.type === 'assistant' ? 'ASSISTANT' : null;
    if (!role) continue;
    if (ROLE !== 'both' && ROLE !== role.toLowerCase()) continue;
    const msg = ev.message;
    if (!msg) continue;
    const content = msg.content;
    // skip pure tool-result / tool-use turns (no human-readable text in them)
    if (Array.isArray(content) && content.length &&
        content.every((b) => b && (b.type === 'tool_result' || b.type === 'tool_use'))) continue;
    let txt = stripNoise(textOf(content));
    if (!txt) continue;
    if (!RAW && isCompactionSummary(txt)) continue;       // the injected summary, not a real turn
    txt = truncate(txt, role === 'USER' ? USER_MAX : ASSIST_MAX);
    out.push({ role, txt: txt || '(omitted — assistant-max 0)' });
  }
  return out;
}

let collected = collectFrom(lines, startIdx);
if (RECOVER && mark >= 0 && collected.length === 0) {
  // Nothing before the marker: the summary OPENS this transcript (the continuation began
  // a fresh session file), so the seam lives in the previous one — next-newest .jsonl
  // in the same directory.
  const dir = dirname(resolve(T));
  const sibs = readdirSync(dir).filter((f) => f.endsWith('.jsonl')).map((f) => join(dir, f))
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  const prev = sibs[sibs.findIndex((f) => resolve(f) === resolve(T)) + 1];
  if (prev) {
    T = prev; lines = loadLines(T);
    collected = collectFrom(lines, lines.length - 1);
    recoverNote = 'the summary opens the newest transcript — recovered the TAIL of the previous session file instead';
  } else {
    recoverNote = 'the summary opens the ONLY transcript here — the pre-compaction turns are in another project dir; rerun with --project or --file';
  }
}
collected.reverse(); // oldest -> newest

// ---- emit ------------------------------------------------------------------
const body = collected.map((c, n) => `\n===== ${c.role}  [${n - collected.length}] =====\n${c.txt}`);
console.log(body.join('\n'));

const chars = collected.reduce((s, c) => s + c.txt.length, 0);
const users = collected.filter((c) => c.role === 'USER').length;
console.log(
  `\n\n[${collected.length} turns (${users} user / ${collected.length - users} assistant)` +
  `  ·  ~${Math.round(chars / 4)} tokens  ·  source: ${T}]`
);
if (RECOVER) console.log(`[recover: ${recoverNote}]`);
console.log(
  `[knobs: --turns ${TURNS} --role ${ROLE} --assistant-max ${ASSIST_MAX}` +
  `${isFinite(USER_MAX) ? ' --user-max ' + USER_MAX : ''}${RAW ? ' --raw' : ''}` +
  `  ·  tip: --role user for the cheapest voice sample]`
);
