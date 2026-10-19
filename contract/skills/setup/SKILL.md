---
name: setup
description: Birth a new project's Build Contract — generate AGENTS.md, BUILD.md, DESIGN.md, a seeded HANDOFF.md, and SESSION-PROMPT instance #1 from the project-idea conversation. Use when starting a new project with the contract, or when the user says "set up the build contract", "formalize this project", or "generate the contract docs".
---

# Set up a new project

**Precondition:** a real project-idea conversation in this session. If it hasn't happened,
say so and have it first — Step 0 interrogates a conversation, not a vacuum. And if it
emerges that there is no project at all — the human is exploring and picked "new project"
as the nearest door — that is not a failed precondition: offer the sixty-second tour
(START-HERE's just-looking door) and stand down. Nothing is generated until a real
project exists.

**The law for this procedure is ${CLAUDE_PLUGIN_ROOT}/SETUP-PROMPT.md. Read it and follow
it exactly** — Step 0 (ask only questions whose answers change the documents, then STOP
and wait), Step 1 (fill the five templates: AGENTS.md, BUILD.md, DESIGN.md, HANDOFF.md,
SESSION-PROMPT.md, all in ${CLAUDE_PLUGIN_ROOT}/), Step 2 (close the loop). This skill
adds only the plugin-delivery deltas:

- The five filled documents land at the project root. No staging folder exists or is
  needed — the templates ship with this plugin.
- Copy ${CLAUDE_PLUGIN_ROOT}/HANDOFF-PROCESS.md to the project root and fill its two
  bracketed slots (the verification gate in rule 3; the project's stores in practice 5).
- Write a root CLAUDE.md holding exactly one import line — `@AGENTS.md` — plus a comment
  saying it is a pointer, not a copy. Skip if the project won't run under Claude Code.
- Copy ${CLAUDE_PLUGIN_ROOT}/tools/extract_tail.mjs to the project's `tools/` — cheap
  insurance for future sessions that don't have the before-compact plugin.
- Create `archive/handoffs/` (empty, with a `.gitkeep`) and `archive/setup/`. In place of
  retiring a staging folder, write `archive/setup/PROVENANCE.md`: one line recording the
  Build Contract plugin version (read ${CLAUDE_PLUGIN_ROOT}/VERSION) and today's date.
- Commit as its own commit, staged explicitly by name — never `git add -A`.

End by handing the human SESSION-PROMPT.md and reminding them how it is used: Message 1
alone in a fresh session, Message 2 only after the read-receipt checks out. The split is
structural.
