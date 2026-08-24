# HANDOFF.md — where we are and what's next

*Rewritten [DATE] ([Nth] handoff; prior archived as
[archive/handoffs/HANDOFF_[date]_[theme].md]; all earlier in [archive/handoffs/]).
Process contract: [HANDOFF-PROCESS.md](HANDOFF-PROCESS.md) — follow its read-receipt gate
before your first edit.*

[This file is born at project setup and REVISED at every checkpoint and handoff — it is
never written from scratch. If you are reading this as a template: the seeded first version
says "nothing built yet, documents ratified [date], the live thread is Phase 0." Every
section below carries a note on what makes it earn its place. Delete the notes as you fill
it; keep the sections. Sections may be added; these may not be dropped.]

## TL;DR / current state
[3–6 bullets. The test: a cold session reads ONLY this block and does no damage in its
first ten minutes. Must cover:]
- [Does it run / is anything broken? Say "nothing is broken" explicitly if true — absence
  of bad news reads as ambiguity, not safety.]
- [Verification gate status — run it during pre-flight, report what it printed. Never assert.]
- [Commit range this session (first → last, count). Origin synced or push pending?]
- [Anything IN FLIGHT that is a plan but not yet code — say so in bold. The single most
  dangerous handoff failure is a cold session "fixing" the code to match a plan.]
- [Working-tree exceptions — files that look wrong but are intentional (the human's test
  rigs, local configs). Name them: do NOT stage/revert without asking.]

## 🎯 THE LIVE THREAD
[The one thing the next session should continue, with the reading order that gets them
there fastest. If decisions were LOCKED by the human, list them here explicitly — locked
decisions a cold session doesn't know about are decisions it will accidentally reopen.
If there's an open worry the thread exists to answer ("does X feel as good as Y?"),
name the worry — it's the point of the work, not a footnote.]

## What we did this session (by theme, with commits)
1. **[Theme]** — [what changed, which commits, what's shipped vs. planned]
2. **[Theme]** — [same]
[Themes, not chronology. A cold session needs the shape of the work, not the diary.]

## Files to read first
The **primaries** (HANDOFF-PROCESS §2, non-negotiable): **AGENTS.md, BUILD.md, DESIGN.md,
HANDOFF.md** (+ README). Then, for the live thread: [your call — the 2–4 files that get
the next session productive fastest, in order, with one line each on why].
[If a needed artifact is NOT in the repo (a prompt the human holds, an external doc),
say so here — a pointer to something unfindable is a trap.]

## Domain facts that are EASY TO GET WRONG
[Numbered. Each one is a mistake a smart, well-intentioned cold session would actually
make — not general knowledge. The best entries are: plans-vs-code gaps, pillar/decision
REVERSALS (where a later finding overrode an earlier doc — cite the tombstone), invariants
that silently break, and "the thing that looks like a bug but is intentional."]
1. [...]
2. [...]

## Deferred / best next steps
- **Highest-value:** [...]
- **Riskiest:** [...]
- [Other parked items, one line each — enough to remember, not enough to start]

## Hidden assumptions / missed implications / what we're strategically avoiding
[The de-filter applied to the WHOLE project at close, not just a single answer: the
non-obvious traps a cold session would miss. Where can correctness silently break? What
debt is compounding quietly? What safety or depth work keeps getting deferred — and does
the current shiny work FEEL like progress on the real risk without being it? Name the
load-bearing avoided thing plainly. This section has repeatedly been the most valuable
one — do not let it go generic.]

## How to work with the human (what worked THIS session)
[Derive from what actually happened — never copy the previous handoff's version forward
unverified, and never write boilerplate. What did they push back on? What did their gut
catch that your analysis missed? Where did you over-claim and get corrected — and what's
the verification habit that would have caught it? Include amendment/strain activity: any
rules amended, reaffirmed, or under strain this session, so the next session knows where
the contract is warm.]

## How to run
```
[dev command]        # [what it starts, where]
[verification gate]  # [what it checks, what passing looks like]
[other commands a cold session needs in its first hour]
```
[Environment requirements. Branch map if more than main. Then:]
Handoff contract: **HANDOFF-PROCESS.md**. [Pointer to any live-thread charter doc.]
