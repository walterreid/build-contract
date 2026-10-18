# Privacy policy: build-contract

Effective 2026-10-18. Applies to the build-contract plugin for Claude Code, by Walter
Reid (walterreid@gmail.com).

## The short version
build-contract is markdown: five skills and a set of document templates. It ships no
hooks, no MCP servers, no executables in `bin/`, and nothing that runs outside Claude
Code's normal permission prompts. It sends nothing to the author or to any service, and
it has no analytics or telemetry.

## What it reads
Its own bundled templates, and — when you invoke a skill — files in the project you are
working in (the contract documents the skills generate and maintain). Nothing else.

## What it writes
The contract documents (AGENTS.md, BUILD.md, DESIGN.md, HANDOFF.md, SESSION-PROMPT.md,
HANDOFF-PROCESS.md, CLAUDE.md, an `archive/` folder, and optionally
`tools/extract_tail.mjs`) into your project, through Claude Code's ordinary file tools —
every write subject to your permission settings. The one bundled script,
`tools/extract_tail.mjs`, runs only if you or your project's documents invoke it; it
reads your own machine's Claude Code transcripts and prints to stdout (see the script's
header).

## What leaves your machine
Nothing, from this plugin. Your conversation itself is processed by Claude per your
Anthropic agreement, as with any session.
