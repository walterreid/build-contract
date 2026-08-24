# HANDOFF-PROCESS.md — the handoff contract

*A sibling to AGENTS.md / DESIGN.md. This defines how a session HANDS OFF to the next one —
and how the handoff stays cheap by being maintained, not born. Follow it whenever you
checkpoint or wrap a session, and keep it current as the project evolves. The learned rules
below each cost a session's trust once in a prior project; they carry over because they worked.*

## Why this exists
A cold session should get productive in minutes, not re-derive a day of decisions. Handoff docs
are the compounding asset that makes that possible. This contract keeps them honest, keeps
history intact, and — critically — keeps the handoff from ever being written at the ragged end
of a dying context window, where the author is at their worst exactly when the writing matters most.

## Checkpoint saves — the handoff is maintained, never born
HANDOFF.md exists from project setup (seeded by the setup prompt). From then on it is only ever
*revised*. Refresh it — a 5-minute delta pass, not a rewrite — at each of these triggers:
- **A phase completes** (this is part of the phase's definition of done — AGENTS.md).
- **A major decision, pivot, or amendment lands** — anything a cold session would need to know
  landed, even if the session isn't ending.
- **Before risky or long-running work begins** — so an interrupted session hands off cleanly
  by default.
- **At roughly 70–80% of the context window** — begin the FULL handoff here, not at the end.
  The final 20% is for finishing the handoff and the receipt, not for starting it. A handoff
  begun at the death is a handoff written by the least capable version of the session.

The delta pass updates: TL;DR, the live thread, session-so-far themes, and anything newly
easy-to-get-wrong. The full pass (session end) does everything in rule 4, gated by rule 3.

## The read-receipt gate — the incoming session's first act
A handoff only works if it's actually read. **"I've read them" is unfalsifiable** — an AI can say
it and then act on training-prior instincts anyway. So saying it is **not** the gate.
**Reproducing current, non-guessable specifics is.**

Before its first edit, the incoming session must play back — briefly, in its own words — the 5–7
gate items in SESSION-PROMPT.md, drawn from the docs and the repo, **not** from memory. The prompt
phrases them as questions and **never states their own answers** — a gate that hands you the answer
is passable by echo, which is the same failure as not reading. The items are constructed fresh at
each handoff (SESSION-PROMPT.md carries the construction rules: non-guessable, session-fresh,
at least one runnable, answers only in the docs, every primary doc touched).

The human verifies the playback against the docs in seconds. If the session can't produce the
items, it hasn't read them — it stops and reads. This isn't ceremony; it's the difference between
a session that *has* the context and one *performing* that it does.

**Withhold the assignment until the receipt clears.** The gate does *two* jobs — catch *not
reading* and catch *reading toward the goal* — but only while the session hasn't yet seen what
it's being asked to build. Deliver the assignment in the same message as the gate and it degrades
to one: it can still tell if the session skimmed, not whether the assignment bent the read. So
SESSION-PROMPT.md is **staged** — Message 1 is the frame + the gate, sent alone; Message 2 is the
assignment, sent only once the receipt checks out. The split is structural.

## The artifacts
- **HANDOFF.md** — the living "where we are / what's next." Seeded at setup, revised at
  checkpoints, fully refreshed each handoff.
- **SESSION-PROMPT.md** — the tight, paste-able two-message onboarding prompt for a fresh session.
  Rewritten each handoff from its template.
- **`archive/handoffs/HANDOFF_<date>_<phase-or-theme>.md`** / **`SESSION-PROMPT_<…>.md`** —
  archived prior versions (never deleted; they live under `archive/handoffs/`, not the repo root).
- **This file** — the process itself.

## The rules

### 1. Archive, then rewrite (never overwrite history)
Before fully rewriting HANDOFF.md or SESSION-PROMPT.md at a handoff, copy the existing one into
**`archive/handoffs/`** named for its date and phase or theme. The archive is append-only history;
the two *current* docs live in root, all priors in the archive. (The first handoff archives the
seeded version — the convention starts there. Checkpoint delta passes do NOT archive; only full
handoff rewrites do.)

### 2. The primaries are ALWAYS read-first
File importance in "read first" is the AI's discretion — EXCEPT these, which are non-negotiable
and always included: **AGENTS.md, BUILD.md, DESIGN.md, HANDOFF.md** (+ README if it carries the
file map and run basics). Everything else — source files, design charters, research docs — is the
handing-off AI's judgment about what gets the next session productive fastest.

### 3. Pre-flight before you document (verify, don't assert)
Document the *delivered* state, not the intended one. Before writing the full handoff, RUN
(never assert):
- **[The verification gate]** — every check must pass. Report what it printed, not that it passed.
- **[Any project-specific gates — probes, determinism checks, build steps. List them here as the
  project acquires them; this list is part of what this file accumulates.]**
- **`git status` clean** — name the expected exceptions explicitly (build outputs, the human's
  local rigs). If a *tracked* file is uncommitted, surface it and ASK.
- Note the session's commit range (first → last).
If a gate legitimately moved because of a content change, that's a *finding* — record it in
BUILD.md, don't bury it.

### 4. What a full HANDOFF.md refresh must cover
The template (HANDOFF.md itself carries the section notes) — at minimum: TL;DR/current state ·
what we built (themes + commits) · files to read first · domain facts easy to get wrong
(especially plans-vs-code gaps and decision REVERSALS with their tombstones) · deferred/best
next steps flagging highest-value and riskiest · **hidden assumptions / what we're strategically
avoiding** (the de-filter applied to the whole project at close — repeatedly the most valuable
section; keep it specific) · how to work with the human (derived from THIS session, never copied
forward — include any strain/amendment activity so the next session knows where the contract is
warm) · how to run · a reference to this file.

### 5. Keep the structure docs honest
If files moved or were added, keep the file map (README/AGENTS.md) and BUILD.md's notes in sync
as part of "done." A handoff that points at a stale file tree has failed.

When you find drift you're **not** fixing this session — a doc claim that no longer matches the
code — don't let it evaporate: log it in BUILD.md's **KNOWN DRIFT** list and drop an inline
`⚠️ DRIFT (YYYY-MM-DD)` flag at the wrong claim. It's the cheapest guard against a lie outliving
the session that spotted it.

### 6. Commit discipline
Commit the handoff docs as their own commit with a clear message (e.g. `docs: session handoff —
<theme>`). **Stage the docs EXPLICITLY — never `git add -A`.** (Learned the hard way: `add -A`
swept private working docs into a commit. The human may edit files in parallel; their working
tree is not yours to sweep.) Push per the project's convention — when the human says.

## Working-method rules (learned the hard way — non-negotiable)
1. **An AI never edits the rulebook to bless its own edit.** The Golden Rules in AGENTS.md and
   the law in DESIGN.md are the architect's call. You may *propose* changing one — through the
   Amendment Protocol (AGENTS.md), which is the formal channel for exactly this; you may not
   edit AGENTS.md, DESIGN.md, or this file to declare your own change compliant. A self-authored
   permission slip is the tell — surface the proposal and let the human decide. (Precedent: a
   design-rule exception was once declined *by the AI citing DESIGN.md*, and the human accepted —
   the docs are the authority in both directions.)
2. **A missing reference is a question, not a search.** If the human points at a file that isn't
   in front of you, ask which file they mean. Do not go hunting for candidates and reason off
   whatever you find.
3. **Don't reason off another project's docs without confirming they're current.** "I can find a
   file" is not "I understand the situation." Confirm staleness with the human before building
   on it.

## Working-method practices (what worked — earn these, don't perform them)
4. **Reverse honestly.** When measurement overturns your own earlier answer — even one from this
   session — say so plainly and revise, and tombstone the old belief if it lived in a doc. Being
   *accurate* beats being *consistent*.
5. **Check the existing stores before proposing a new mechanism.** Most "we need a new system"
   ideas are already covered by an existing extension point. [As the project matures, list its
   actual stores here: "combat behavior → a content def; run-level state → a field on X; a
   balance question → a probe, not an argument." This list is project-specific and accumulates.]
6. **Test cold on the real artifact, not the model's prose.** A written claim ("gates pass",
   "the flow works") is a claim until verified against actual output — run the check, drive the
   UI, read the log. The strongest signal is two independent methods converging on the same fact.
7. **Pre-register before you measure.** Any experiment that will settle a design question gets
   its decision rule written down BEFORE the run. A verdict chosen after seeing the numbers is
   motivated reasoning with charts.
8. **The de-filter.** Before a substantive answer or design: name three things the reader might
   want that you were about to leave out — too obvious, too demanding, outside the genre — plus
   one thing that would make the answer wrong — then decide if they belong. One line each, then
   proceed; if one is executable, run it instead of reasoning about it. It is a de-filter, not a
   ceremony — do not let it grow sections.

## Self-perpetuation
This contract is only useful if it's followed and maintained. So on every handoff: **follow this
file, and update this file** when the process itself improves — new gates in rule 3, new stores
in practice 5, new learned rules if one gets earned. Reference it from HANDOFF.md so the next
session discovers it.
