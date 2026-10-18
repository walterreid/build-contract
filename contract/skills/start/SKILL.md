---
name: start
description: The Build Contract's front door. Use when the user mentions the Build Contract or this plugin, asks what it is, asks to "set up the contract" or "adopt the contract" without saying which project kind, or points an AI at it cold. Routes to the right on-ramp with one question.
---

# Start here

The Build Contract is a seven-document system for long, multi-session AI builds. This
plugin ships its templates and on-ramps; the documents it generates live in the USER'S
project and become the law there. The templates bundled with this plugin are UNFILLED —
never follow them as live rules.

**The law for routing is ${CLAUDE_PLUGIN_ROOT}/START-HERE.md — read it and apply its
one-question routing**, with the plugin-delivery deltas:

- Its "new project" door → invoke `/build-contract:setup`.
- Its "existing project" door → invoke `/build-contract:adopt` (no folder is copied in —
  the templates ship with this plugin).
- Its "evaluating" door → as written there (the documents are the product).

If the current project already has a filled AGENTS.md and HANDOFF.md at its root, it is
already running the contract — the session's duties live in those files, not here. For
session wrap-ups use `/build-contract:handoff`; for mid-session saves,
`/build-contract:checkpoint`.

Companion: the before-compact plugin covers the one moment this plugin deliberately does
not — recovering your voice across a context compaction. They compose.
