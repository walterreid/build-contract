# AGENTS.md — [PROJECT NAME] AI Context File
# Read this at the start of every session. It is the contract.
# Last updated: [Phase X.X complete — brief description]
#
# (AGENTS.md is the cross-tool standard and the ONLY contract file. Claude Code reads
#  CLAUDE.md natively; CLAUDE.md holds a single `@AGENTS.md` import and nothing else,
#  so there is never a second copy of the contract to drift.)

---

## What This Project Is

[PROJECT NAME] is [one sentence: what it is, for whom, doing what].

[2–3 sentences: what problem it solves, who operates it, what makes it distinct from
obvious alternatives. Be specific. "A game about X" is not enough — describe the
operational or experiential core.]

**Target audience (v1):** [Who uses this at launch. Be concrete. Numbers if possible.]

---

## The Golden Rules

Every rule below carries a tier and a **Protects:** line. Read the tiers correctly:

- **[INVARIANT]** — protects correctness, safety, user trust, or the project's identity.
  Violating one breaks the product in ways that may not show up in tests. These almost
  never change; amending one means re-examining what it protected.
- **[DIRECTION]** — the current strong choice among defensible alternatives. **Enforced
  exactly as absolutely as an invariant** — the tier is not a softness rating. The
  difference is what happens when evidence accumulates against it: a Direction is
  *expected* to be amendable over a long project's life, through the Amendment Protocol
  below — never through quiet erosion.

The **Protects:** line is the rule's reason for existing. When a rule comes under strain,
the conversation is about whether the protected thing still needs protecting (or is now
protected some other way) — not about the rule's wording.

### 1. [RULE NAME — e.g. NO HARDCODING] — [INVARIANT or DIRECTION]
[The rule stated plainly.]

**Protects:** [What breaks, who gets hurt, or what identity is lost if this rule falls.]

[What belongs where — the concrete version of the rule. List specific examples if
the rule governs data placement, naming, or behavior. If the rule sounds abstract
without examples, add them.]

> If you are about to [do the bad thing] — stop. [Ask the right question instead.]

### 2. [RULE NAME] — [tier]
**Protects:** [...]
[Same pattern. State the rule. Make it concrete. Give examples where helpful.]

### 3. [RULE NAME — add as many as the project genuinely requires] — [tier]
**Protects:** [...]
[Rules here are commitments, not preferences. If it would be reasonable to violate this
rule in a specific circumstance, it is not a rule — it is a guideline. Rules live here.
Guidelines live in the relevant implementation section. And if a rule cannot fill in its
Protects: line with something real, it is a preference — demote it.]

---

## The Amendment Protocol — how rules change

Rules are a contract between friends. Neither party edits the contract alone.

**The AI's side:**
1. **Never self-bless.** You may propose amending any rule; you may never edit this file,
   DESIGN.md, or HANDOFF-PROCESS.md to declare your own change compliant. A self-authored
   permission slip is the tell.
2. **Comply while proposing.** Until an amendment is ratified, the standing rule governs —
   fully. "I flagged it" is not a license to build against it.
3. **Log strain instead of swallowing it.** When honoring a rule forces a genuinely awkward
   workaround, do the workaround AND add one line to the STRAIN LOG in BUILD.md:
   `⚠️ STRAIN (YYYY-MM-DD): [rule] forced [workaround] — cost: [what it cost]`.
   **Three strain entries against the same rule = you must raise it as a conversation**
   at the next natural pause. Not a violation — a scheduled talk. This is how rules keep
   a pulse instead of silently strangling the project or silently eroding.

**The human's side:**
4. The human can amend anything — it's their project — but amendments happen *in the
   documents*, out loud, so the contract and the collaboration stay the same thing. If the
   human's messages start contradicting a standing rule ("make it more SaaS" against an
   editorial Direction), don't silently comply and don't silently resist: name the
   conflict in one line and ask whether this is a one-off exception or an amendment.
   One-off → note it inline where it happened. Amendment → ratify it properly:

**Ratifying an amendment (either party's proposal, human's decision):**
- Rewrite the rule to its new form **in place**, and leave a tombstone:
  `AMENDED YYYY-MM-DD: was "[old rule]" → now "[new rule]". Evidence: [what changed our
  minds]. Originally protected: [X] — now protected by [Y / no longer applies].`
- Tombstones are permanent. They exist so no future session resurrects a dead rule or
  re-litigates a settled amendment. An amendment without a tombstone didn't happen.
- If the amendment is to a DESIGN.md Direction, also add a line to the Direction Ledger there.

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| [Framework] | [e.g. Next.js / Unity / Godot / Expo] | [Why this, briefly] |
| [Data] | [e.g. Supabase / SQLite / local state] | [Scope and access pattern] |
| [Auth] | [e.g. Supabase Auth / none / custom token] | |
| [Hosting / Distribution] | [e.g. Render / App Store / itch.io] | |
| [Key external service] | [e.g. Stripe / OpenAI / Twilio] | [What it does here] |
| [Styling] | [e.g. Tailwind + /lib/theme.ts] | [Source of truth rule] |
| [Other layers as needed] | | |

---

## Running Locally

```bash
[install command]
[start command]

# Key entry points:
[url or path]   # [what it is]
[url or path]   # [what it is]

# Verification gate (run before claiming anything works, and at every handoff):
[verification command — tests, checks, lint. If the project doesn't have one yet,
 building it is a Phase 0 task, because "it works" is a claim until this runs.]
```

---

## Domain Knowledge — Do Not Contradict These Facts

[This section is the most important part of AGENTS.md. It is the AI's domain model.
Write it as if explaining to a smart developer who has never encountered this domain.
Correct misunderstandings before they happen. Every fact here should be something
that, if wrong, would produce subtly incorrect behavior that passes tests but fails
in production or in real use.]

### [Core Concept 1]
[Define it. Give the formula or rule if there is one. Note the edge cases.]

### [Core Concept 2]
[Same. Be precise. "Usually" and "sometimes" are not allowed here — if behavior
varies by condition, name the conditions.]

### [Core Concept 3 — add as many as the domain requires]

[If a later finding overturns a fact recorded here — including a founding premise —
amend it in place with the same tombstone format the Golden Rules use. Being accurate
beats being consistent, and the tombstone keeps the old belief from reinfecting a
future session.]

---

## Architecture Decisions (Made — Do Not Relitigate)

[Settled choices. The point of this section is to prevent wasted conversation relitigating
decisions that were made deliberately. Each entry should name the decision and its reason.
If a decision has a known alternative that seems appealing but was rejected, name it —
the rejected alternative is half the information.]

1. **[Decision]** — [Why. One sentence. Rejected: [alternative], because [reason].]
2. **[Decision]** — [Why.]
3. [Continue as needed — but only for genuinely settled decisions. Uncertain choices
   belong in BUILD.md under "DECISION NEEDED," not here. If a settled decision gets
   genuinely reopened by evidence, it amends with a tombstone like everything else.]

---

## What "Done" Means for Any Task

A task is complete when:
1. [Test 1 — the most common failure mode, stated as a pass condition]
2. [Test 2]
3. [Test 3 — include error states, loading states, type safety, etc. as appropriate]
4. [The verification gate ran and passed — observed, not assumed]
5. `BUILD.md` updated to reflect the completed task
6. [Any project-specific "done" criteria — e.g. file structure section updated,
   migrations applied, tests passing]

**A phase is complete when**, additionally: HANDOFF.md has been refreshed to reflect the
new state (see HANDOFF-PROCESS.md — checkpoint saves). The handoff is maintained, never
born; a phase that ends without touching HANDOFF.md is not done.

---

## File Structure

**Maintenance rule**: Update this section whenever you create or delete a file.
This is part of the definition of done.

```
/[root]
  AGENTS.md            — this file (the contract)
  CLAUDE.md            — one line: `@AGENTS.md` (Claude Code entry point; not a copy)
  BUILD.md             — the living to-do list + decision/strain/drift logs
  DESIGN.md            — the visual law + Direction Ledger
  HANDOFF.md           — where we are / what's next (maintained continuously)
  HANDOFF-PROCESS.md   — the session-handoff contract
  SESSION-PROMPT.md    — the onboarding prompt for the next session (two-message)
  /archive/handoffs/   — prior handoffs + session prompts (append-only history)
  /[directory]
    /[file]   — [one-line description of what it does and why it exists]

[Keep this honest. An outdated file structure is worse than none —
it actively misleads. If a file exists, it's here. If it's here, it exists.]
```

---

## When You're Unsure

If a task requires a decision not covered here, add `// DECISION NEEDED:` and describe
the tradeoff. Do not make silent assumptions.

If a piece of [domain-critical logic — e.g. calculations, pricing, scoring] is involved
— write a test. These are the highest-stakes computations. A bug here [costs what,
breaks what, affects whom].

If a standing rule and the current request conflict, that's not an "unsure" — that's the
Amendment Protocol. Name the conflict; don't resolve it alone in either direction.

## BUILD.md Is the To-Do List
Always check BUILD.md before starting any task. Mark tasks done as you complete them.
The file structure section of this document must stay in sync with reality.
Never skip these steps.
