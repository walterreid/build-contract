# The Build Contract

A seven-document system for long, multi-session AI builds — designed to be excellent at
the first 90% (getting a project moving fast from a good conversation) and, harder, at the
last 10% (staying honest, coherent, and on-taste across dozens of sessions, context resets,
and the design pivots every real project eventually makes).

It rests on three ideas:

1. **Rules are a contract between friends.** The AI enforces standing rules absolutely —
   including aesthetic ones — but the contract has a built-in amendment channel: rules are
   tiered (INVARIANT vs DIRECTION), every rule names what it *protects*, strain against a
   rule gets logged instead of swallowed, and amendments leave dated tombstones so no
   future session resurrects a retired decision. Neither party edits the contract alone.
2. **A handoff is maintained, never born.** HANDOFF.md exists from day zero and is only
   ever revised — at phase completions, at major decisions, and at ~70–80% of the context
   window. No session ever writes it from scratch at the ragged end of a dying context.
3. **Reading is verified, not claimed.** A fresh session proves it read the docs by
   reproducing non-guessable, session-fresh specifics — with the assignment withheld until
   the receipt clears, so the gate also catches *reading toward the goal*.

Two on-ramps, one destination: `SETUP-PROMPT.md` starts a project from a good
conversation; `ADOPT-PROMPT.md` brings the contract to a project already underway —
mid-flight, at the last 10%, when nothing written down can be taken on faith. Both end
in the same seven living documents.

## The files

Each file exists because it owns a distinct **moment** — a read trigger and a write trigger
no other file shares. That's the test for adding a file or merging any two (ADOPT-PROMPT.md
passed it as the second on-ramp: birth and adoption are different moments).

| File | Read when | Written when |
|---|---|---|
| `SETUP-PROMPT.md` | Once — after the project-idea conversation | Never; retired to `archive/setup/` when setup completes |
| `ADOPT-PROMPT.md` | Once — when bringing the contract to a project already underway | Never; retires with the `contract/` staging into `archive/adoption/` |
| `AGENTS.md` | Every session start | Rule amendments, new domain facts, file-map changes |
| `BUILD.md` | Before every task | After every task; strain/drift/decision logs as they occur |
| `DESIGN.md` | Before touching any UI | Direction Ledger entries, ratified amendments |
| `HANDOFF.md` | Cold start (a new session's orientation) | Checkpoints + every handoff (revised, never rewritten from scratch) |
| `SESSION-PROMPT.md` | Pasted by the human, two messages, into each new session | Born at setup (instance #1, by the setup session); archived + rewritten at each handoff |
| `HANDOFF-PROCESS.md` | At every checkpoint and handoff | When the process itself improves |

`tools/extract_tail.mjs` is the companion for the handoff nobody chooses: after a context
compaction, it recovers the turns the summary flattened — the human's voice and the exact
last steps — straight from the session transcript (see AGENTS.md "Compaction Recovery").

## Quickstart

**Starting a project:**
1. Click **Use this template → Create a new repository**. You get a clean copy with no fork
   lineage and no shared history. (Fork instead only if you intend to send changes back.)
2. **Clear this project's paperwork out of your new repo.** "Use this template" copies
   *every* file on the default branch — GitHub offers no way to exclude any of them, so
   the exclusion has to happen on your side, first thing:
   - **Delete `CITATION.cff`.** GitHub reads this file and renders a "Cite this repository"
     panel on your repo — left in place, your project will invite people to cite *The Build
     Contract*.
   - **Replace `LICENSE`.** CC BY 4.0 covers these documents; it is not a license you want
     governing your code. Keep the one-line attribution (below) in the documents you
     generate and CC BY asks nothing further of your project.
   - **Replace `README.md`** with your project's own.
3. Have a real conversation with your AI about the project idea — the system is designed to
   formalize a good conversation, not to replace one.
4. Paste `SETUP-PROMPT.md`, then the five templates it names (`AGENTS.md`, `BUILD.md`,
   `DESIGN.md`, `HANDOFF.md`, `SESSION-PROMPT.md`). Answer its Step 0 questions — it
   interrogates before it writes.
5. Commit the five generated documents alongside `HANDOFF-PROCESS.md`, which is copied
   as-is and then filled in two places — the verification gate in rule 3, and your
   project's stores in practice 5. Setup's final act retires `SETUP-PROMPT.md` and the
   unfilled `SESSION-PROMPT.md` template to `archive/setup/` (the archive convention's
   first act — at birth, not at the first handoff), leaving root holding only living
   documents. `archive/handoffs/` ships with the template — already there and empty.
6. Nothing to do for Claude Code — `CLAUDE.md` ships with the template and holds a single
   `@AGENTS.md` import line. Claude Code reads CLAUDE.md natively and follows the import,
   so AGENTS.md stays the one contract and no second copy can drift from it. Delete
   `CLAUDE.md` if the project won't use Claude Code.

**Adopting a project already underway:**
1. Commit everything — adoption never runs on an uncommitted tree.
2. Stage the contract where nothing can collide:
   `git clone --depth 1 https://github.com/walterreid/build-contract contract && rm -rf contract/.git`
3. Paste `contract/ADOPT-PROMPT.md` into a session **with repo access** and generous
   context. It reads before it writes, in order of authority: running behavior, code,
   git history — and existing docs last, as testimony to verify, not truth to inherit.
4. Answer its interrogation. Every excavated rule is a candidate until you ratify it.
5. It archives the old docs to `archive/adoption/` (never deletes), moves the ratified
   documents to root, retires `contract/`, and hands you SESSION-PROMPT instance #1.
   Same destination as a birth — with better-verified facts.

**Every session:** paste `SESSION-PROMPT.md` Message 1 alone → verify the read-receipt
against the docs (seconds) → paste Message 2. The split is structural; don't co-deliver.

**Every handoff:** follow `HANDOFF-PROCESS.md` — pre-flight verification (run, never
assert), archive-then-rewrite, and rewrite `SESSION-PROMPT.md` with fresh gate items per
the construction rules in `HANDOFF-PROCESS.md`.

## What "excellent" means here

- A cold session productive in minutes, provably oriented, without re-litigating settled
  decisions — and without treating settled as eternal.
- Rules that hold absolutely while standing and evolve legitimately when evidence
  accumulates — no quiet erosion, no quiet strangling, no self-blessed exceptions.
- Documents that stay true: verified pre-flight, drift flagged where found, file maps that
  match reality, and a permanent record (ledgers, tombstones, archives) of how the project
  changed its mind.

## License & attribution

Templates and process documents: **CC BY 4.0**; session tooling in `tools/`: **MIT**
(both in `LICENSE`). Attribution travels with
the documents — when you copy these templates into a project, keep the attribution line
each copy should carry:

```
Adapted from The Build Contract by Walter Reid
(https://github.com/walterreid/build-contract), licensed CC BY 4.0.
```

The documents you *generate* with these templates — your filled-in AGENTS.md, your
project's HANDOFF.md — are your own work; keep the one-line attribution in them and the
license asks nothing further of your project or its code. A [CITATION.cff](CITATION.cff) 
is included if you want to cite it formally.
