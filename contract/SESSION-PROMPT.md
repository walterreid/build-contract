# SESSION-PROMPT.md — the onboarding prompt for a fresh session

[TEMPLATE NOTE — for the AI writing this file: the SETUP session at project birth
(instance #1 — you have the founding conversation and the docs you just wrote; no one else
can author day-zero gate items), or the OUTGOING session at each handoff after that. Fill
every bracket, then delete the template notes. The two-message structure and the gate are
structural — keep them. Construct the gate items yourself, per the rules in the gate
section (canonical copy for handoff time: HANDOFF-PROCESS.md, "Writing the next
SESSION-PROMPT" — after setup, this template lives only in archive/setup/). The finished
file is what the human pastes; it should contain nothing addressed to you.]

> **Delivered in TWO messages, on purpose — paste Message 1 alone, wait for the read-receipt
> to check out, THEN paste Message 2.** The split isn't cosmetic: the read-receipt gate does
> *two* jobs — catch *not reading* AND catch *reading toward the goal* — but only while the
> assignment is withheld until the receipt passes. Co-deliver the assignment and the gate
> degrades to one job (it can still tell if you skimmed; it can no longer tell if the
> assignment bent your read). Process: HANDOFF-PROCESS.md.

---

═══════════ **MESSAGE 1 — the frame + the gate. Send alone; withhold Message 2 until the receipt checks out.** ═══════════

You are picking up **[PROJECT NAME]**, [one line: what it is + stack + environment].
[Repo location / how you're accessing it.] Do not propose or build anything yet — read,
then produce the receipt below.

## The habit that shapes this whole collaboration — adopt it before anything else
> **Before you trust an answer, name what would prove it WRONG — and if that check is
> runnable (a test, the verification gate, a live UI drive, a diff), RUN it instead of
> reasoning about it.** [If the project has a sharpest domain form of this — e.g. "PLAY
> the game before you trust a balance number" — state it here. The playtest is the
> deliverable, not the number.]

Then, as a completeness backstop, name three things a reader might want that you were about
to leave out — one too obvious, one too demanding, one outside the genre — plus one thing
that would make the answer *wrong*. Decide whether each belongs. One line each, then
proceed. It's a de-filter, not a ceremony — don't let it grow sections.

## The rules are a contract — here is how it works
The Golden Rules (AGENTS.md) and DESIGN.md are law while they stand — including
[DIRECTION]-tier rules, which you enforce exactly as hard as invariants. But the contract
has an amendment channel: if a rule strains against the work, comply, log it in BUILD.md's
STRAIN LOG, and at three strains raise it as a conversation. Never self-bless a change;
never silently erode a rule; never silently obey a human instruction that contradicts one —
name the conflict and ask: exception or amendment? (AGENTS.md → Amendment Protocol.)

## Your first act — the read-receipt gate (no edits, no proposals, before this)
Read, in order: **AGENTS.md, BUILD.md, DESIGN.md, HANDOFF.md, README.md**
[+ any archive file that carries narrative history]. Then play back, briefly, **in your
own words from the docs — not from memory, not from context preloaded at session start
(an auto-imported contract does not count as reading), and not by echoing this prompt.**
These items
deliberately do NOT state their own answers; reproducing a non-guessable specific is the
gate, and parroting the prompt back isn't reading:

[GATE CONSTRUCTION — for the AI writing this file. Write 5–7 items. Every item must have
ALL of these properties, or it isn't a gate item:
  (a) NON-GUESSABLE from training data or from this prompt — its answer exists only in
      this repo's docs or state;
  (b) at least two items must be SESSION-FRESH — things that changed this session
      (latest commit, newest dated BUILD.md block, the current live thread) so the gate
      can't be passed from a stale read;
  (c) at least one item must be RUNNABLE — a command whose output proves the toolchain
      works (the verification gate is ideal: run-and-report embodies "run it, don't
      reason" at step one);
  (d) the item TELLS the reader where to look, but NEVER states the answer;
  (e) between them, the items must touch every primary doc — a doc no item touches is
      a doc that won't get read.
SESSION-1 CLAUSE (instance #1 only — two properties go degenerate at birth):
  (b′) session-fresh becomes SETUP-FRESH — the setup commit, a specific [ASSUMED] tag,
      the founding premise and its tier; nothing has happened yet, so freshness means
      "ratified today," not "changed this session."
  (c′) if no verification gate exists yet, the runnable item is an HONEST REPORT of its
      absence plus the Phase 0 task that creates it ("no gate exists; creating it is task
      0.1") — which doubles as a fabrication check on day one. Never simulate output.
The shape that has worked:]
1. [The project's most load-bearing INVARIANT — which rule, and what must happen when
   [its most commonly violated condition] occurs. (AGENTS.md + [where it bites in code].)]
2. [The single riskiest or most important open item named in HANDOFF.md.]
3. [This session's starting commit — run `git log -1 --oneline`.]
4. [The most recent dated block in BUILD.md (date + one line) — the running log changes
   every session and cannot be guessed; it is the truest tell the file was opened.]
5. [One rule from DESIGN.md's "What To Never Do" — and which tier it is.]
6. [Run [verification gate command] and report the final line it prints — it appears only
   if all checks passed, so it proves the toolchain runs AND the invariants hold.]
7. [Optional: one tombstone — a rule or premise that was AMENDED, and what it used to say.
   Nothing catches a training-prior session faster than knowing what this project used to
   believe and no longer does.]

If you can't produce these from the docs, STOP and READ. Produce them, then **STOP** —
I'll hand you the assignment (Message 2) once the receipt checks out.

---

═══════════ **MESSAGE 2 — the assignment. Send only after the receipt passes.** ═══════════

[THE FRAME — 3–6 sentences: the theme of the last session/window, and above all any gap
between PLANS and CODE. If something pivoted, say what pivoted, where the plan lives, and
state in bold that the shipped code does not reflect it yet.]

## 🎯 THE JOB — [one line]
[The live thread from HANDOFF.md, expanded to marching orders: reading order for the
thread-specific docs, then the build order. If the human LOCKED decisions, list them under
"do not re-open." If the thread exists to answer an open worry, state the worry — the next
session should know what question the work is asking.]

## 🚦 The facts that will bite you
[3–6 bullets, lifted from HANDOFF.md's "easy to get wrong" — but only the ones that bite
THIS assignment. Plans-vs-code gaps first. Include the working-tree exceptions (files not
to stage/revert) and the invariant that verifies the work.]

## The load-bearing thing we're AVOIDING (say it plainly)
[Carry this forward from HANDOFF.md every single session until it's addressed. The pattern
this section exists to break: adjacent shiny work FEELS like progress on the real risk
without being it. Name the real risk. If this session's job doesn't touch it, say so.]

## Standing constraints (verify in the docs)
- [The 2–4 hard invariants restated in one line each — e.g. the source-of-truth rule,
  the determinism check, staging discipline]
- [Commit/push conventions — e.g. stage explicitly, never `git add -A`; push when the
  human says]

## How to work with the human
[Copy the current "How to work with the human" section from HANDOFF.md — the version
derived from what actually worked, including any live strain/amendment context. End with:]
Handoff contract: **HANDOFF-PROCESS.md** — the two-message split is structural, keep it.
