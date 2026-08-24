# BUILD.md — [PROJECT NAME] Phase Roadmap
# This is the living to-do list. Check it before every task. Update it after every task.
# Format: [ ] = not started | [x] = complete | [~] = in progress | [!] = blocked
#
# Completing a PHASE also triggers a HANDOFF.md refresh (HANDOFF-PROCESS.md — checkpoint saves).
# Full task-level detail for completed phases → BUILD-ARCHIVE.md (created when needed)

---

## Phase Overview

| Phase | Summary | Status |
|-------|---------|--------|
| 0 | [Foundation — environment, tooling, skeleton] | [ ] |
| 1 | [Core — [first real thing the project does]] | [ ] |
| 2 | [Expand — [second major capability]] | [ ] |
| 3 | [etc. — add phases as they become clear] | [ ] |

*Phases beyond the next 2–3 are placeholders. Detail fills in as earlier phases complete.*

---

## PHASE 0 — Foundation
**Goal**: [One sentence. What does "done" look like for this phase? Not a list of tasks —
the observable outcome. e.g. "One command starts the game. A player can create a character
and see the main screen. Nothing has real game logic yet, but the skeleton is correct."]
**Status**: [ ] Not started

### 0.1 [Environment / Tooling]
- [ ] [Task — concrete, specific, verifiable]
- [ ] [Task]
- [ ] [Task — include: create the verification gate command referenced in AGENTS.md,
      even if it starts as a single trivial check. The gate exists from day one so
      "run it, don't reason about it" is a habit from day one.]
- **Acceptance**: [What you can observe or run that proves this is done]

### 0.2 [Project Skeleton]
- [ ] [Task]
- [ ] [Task]
- **Acceptance**: [Observable proof]

### 0.3 [First Deployable Thing]
- [ ] [Task]
- [ ] [Task]
  ⚠️ MANUAL: [If any step requires human action outside the codebase, flag it here]
- **Acceptance**: [Observable proof]

**Phase 0 Done When**: [The phase goal restated as a single concrete check. If you can
observe this, the phase is done. If you can't observe it, rewrite the goal.]

---

## PHASE 1 — [Name: Core / [First Feature]]
**Goal**: [Observable outcome. What does a person see or do when this phase is complete?]
**Status**: [ ] Not started

### 1.1 [Data / Schema / State]
- [ ] [Task]
- [ ] [Task]
- **Acceptance**: [Observable proof]

### 1.2 [Logic / Engine]
- [ ] [Task]
- [ ] [Task]
- **Acceptance**: [Observable proof]

### 1.3 [UI / Interface]
- [ ] [Task]
- [ ] [Task]
- **Acceptance**: [Observable proof]

**Phase 1 Done When**: [Concrete observable check]

---

## PHASE 2 — [Name]
**Goal**: [Observable outcome]
**Status**: [ ] Not started

[Same structure as Phase 1. Add sub-sections as the phase design warrants.
Don't over-plan phases that haven't started — a goal and a few known tasks is enough.
Detail fills in during the phase before work begins.]

---

## ONGOING — Unscoped / Deferred / Future Work

### Deferred from active phases
[Nothing yet — items move here when explicitly deferred during a phase]

### Known future features (no phase assigned)
- [ ] [Feature idea — brief. No implementation detail. Just enough to remember it.]
- [ ] [Feature idea]

[This section is a parking lot, not a backlog. Items here don't get worked until
they're promoted into a numbered phase with a goal and acceptance criteria.]

---

## DECISION NEEDED

[Items land here when a task surfaces a tradeoff that isn't covered by AGENTS.md.
Format: brief description of the tradeoff + options + what's blocked on it.]

- [ ] [Decision topic]: [Option A vs Option B. What's the implication of each? What does
  the project need to know to decide?]

[Move resolved decisions into AGENTS.md's "Architecture Decisions" section and remove them here.]

---

## STRAIN LOG

[When honoring a Golden Rule or a DESIGN.md rule forces an awkward workaround, the rule is
still honored — and one line lands here. This is the pulse of the contract: it's how a rule
that has started strangling the project becomes visible *before* anyone is tempted to break it,
and how a rule that never strains proves it's earning its keep.]

Format: `⚠️ STRAIN (YYYY-MM-DD): [rule] forced [workaround] — cost: [time / complexity / quality]`

**Three entries against the same rule = the AI must raise it as an Amendment Protocol
conversation (AGENTS.md) at the next natural pause.** Clear a rule's entries when it's
amended or when the human explicitly reaffirms it (note the reaffirmation — that's data too).

- [Nothing yet]

---

## KNOWN DRIFT

[Doc claims that no longer match the code, found but not fixed this session. Logged here so
a lie can't outlive the session that spotted it (HANDOFF-PROCESS.md rule 5). Fix and remove,
or escalate. Each entry pairs with an inline `⚠️ DRIFT (YYYY-MM-DD)` flag at the wrong claim.]

- [Nothing yet]
