---
name: adopt
description: Bring the Build Contract to a project already underway — forensics first, human ratification, then the seven documents, archive-first. Use when the user asks to adopt the contract on an existing repo, "transition this project", "put the contract on this codebase", or an established project needs the contract mid-flight.
---

# Adopt an existing project

**Requires** repo access and generous context — adoption spends context deliberately;
understanding the repo better than its own docs do is the product.

**The law for this procedure is ${CLAUDE_PLUGIN_ROOT}/ADOPT-PROMPT.md. Read it and follow
its stages exactly** — Stage 1 forensics (running behavior > code > git history > existing
docs as testimony; the fabrication line extends to archaeology), Stage 2 dossier +
interrogation (STOP and wait; nothing becomes law by archaeology alone; "I don't know —
you decide" lands as visible [ASSUMED]), Stage 3 generation (the five templates in
${CLAUDE_PLUGIN_ROOT}/, with ADOPT-PROMPT's adoption deltas), Stage 4 the move
(archive-first, then the receipt). This skill adds only the plugin-delivery deltas:

- **Stage 0 shrinks to:** commit everything (`git status` clean or every exception named —
  adoption never runs on an uncommitted tree; git is the rollback). No staging folder is
  copied in: the templates ship with this plugin.
- Optional incumbent dossier: if the project has `tools/extract_tail.mjs`, or the
  before-compact plugin is installed, recover the human's recent voice as Stage 1 input.
- **Stage 4 deltas:** create `archive/adoption/` (and `archive/handoffs/` with a
  `.gitkeep`). The MANIFEST.md records provenance from the plugin: the version in
  ${CLAUDE_PLUGIN_ROOT}/VERSION. There is no staging folder to retire. Copy
  ${CLAUDE_PLUGIN_ROOT}/HANDOFF-PROCESS.md (fill its two slots),
  write a root CLAUDE.md holding exactly one import line — `@AGENTS.md` (any existing
  CLAUDE.md's content was mined in Stage 1, its original archived), and copy
  ${CLAUDE_PLUGIN_ROOT}/tools/extract_tail.mjs into the project's `tools/`.

The Stage 2 STOP is absolute. Adoption is complete when a cold session passes the
read-receipt gate — same bar as birth.
