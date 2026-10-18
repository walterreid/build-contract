---
name: handoff
description: Run a full Build Contract session handoff — pre-flight verification, archive-then-rewrite of HANDOFF.md, and a fresh SESSION-PROMPT with gate items. Use at session end, at roughly 70-80% of the context window, before risky or long-running work, or when the user says "handoff", "wrap the session", or "transition this session".
---

# Full handoff

**The law for this procedure is the PROJECT'S OWN `HANDOFF-PROCESS.md`** — not this skill
and not the plugin's bundled copy. The project's copy accumulates its own gates (rule 3)
and stores (practice 5); following any other version is drift. Read it and follow it.

If the project has no `HANDOFF-PROCESS.md`, it hasn't adopted the contract — offer
`/build-contract:adopt` (existing project) or `/build-contract:setup` (new), and do not
improvise a handoff format.

The sequence, as a reminder only (the project's file governs where they differ):
1. **Pre-flight (rule 3): run, never assert** — the verification gate (report what it
   printed), project gates, `git status` with exceptions named, stamp upgrades, the
   session's commit range.
2. **Archive, then rewrite (rule 1):** copy the current HANDOFF.md and SESSION-PROMPT.md
   into `archive/handoffs/`, named by date and theme, before rewriting either.
3. **Rewrite HANDOFF.md** per rule 4 — including "hidden assumptions / what we're
   strategically avoiding" (keep it specific) and "how to work with the human" derived
   from THIS session, never copied forward.
4. **Write the next SESSION-PROMPT.md** per the construction rules (§1a): non-guessable,
   session-fresh, at least one runnable, answers never stated, every primary doc touched —
   and preloaded context does not count as reading.
5. **Commit discipline (rule 6):** own commit, staged explicitly by name, never
   `git add -A`. Push when the human says.

If the context window is already deep, the handoff comes FIRST — decline new work until
it is written. A handoff begun at the death is written by the least capable version of
the session.
