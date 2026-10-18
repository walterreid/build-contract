---
name: start
description: The Build Contract's front door. Use when the user mentions the Build Contract or this plugin, asks what it is, asks to "set up the contract" or "adopt the contract" without saying which project kind, or points an AI at it cold. Routes to the right on-ramp with one question.
---

# Start here

The Build Contract is a seven-document system for long, multi-session AI builds. This
plugin ships its templates and on-ramps; the documents it generates live in the USER'S
project and become the law there. The templates bundled with this plugin are UNFILLED —
never follow them as live rules.

Ask the human ONE question — "new project, existing project, or just evaluating?" — then:

- **New project** → invoke `/build-contract:setup`. If the project-idea conversation
  hasn't happened yet, have it first — the system formalizes a good conversation, it
  does not replace one.
- **Existing project** (code already exists; docs may lie) → invoke `/build-contract:adopt`.
- **Evaluating** → the product is the documents: read the Golden Rules preamble in
  ${CLAUDE_PLUGIN_ROOT}/AGENTS.md and ${CLAUDE_PLUGIN_ROOT}/HANDOFF-PROCESS.md.
  Source, history, and validation record: https://github.com/walterreid/build-contract

If the current project already has a filled AGENTS.md and HANDOFF.md at its root, it is
already running the contract — the session's duties live in those files, not here. For
session wrap-ups use `/build-contract:handoff`; for mid-session saves,
`/build-contract:checkpoint`.

Companion: the before-compact plugin covers the one moment this plugin deliberately does
not — recovering your voice across a context compaction. They compose.
