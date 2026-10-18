# ADOPT PROMPT — Bring the Build Contract to a Project Already Underway

The second on-ramp. SETUP-PROMPT.md formalizes a good conversation into a project's
founding documents; this prompt formalizes a RUNNING REPO — its code, its history, and
whatever docs it accumulated — into the same seven living documents, ending in the same
state a born-with-the-contract project enjoys (often better: adoption's facts can be
verified against a real system; a birth's can only be designed). Use it mid-flight,
especially at the last 10%, when the project is real, the context is deep, and nothing
written down can be taken on faith — a prior session may have written README.md or
BUILD.md from what it *thought* was good.

**Status: PARTIALLY VERIFIED — first real adoption: MERIDIAN (Roblox game, 24 commits,
149 tests), 2026-09-09.** Ran clean end-to-end: two drift finds died in the rewrite, the
receipt caught a staging stumble, and a strain on the README rule was raised, not
swallowed (amended upstream, v1.2.3). Completed its own bar 2026-09-09: a cold session
passed the read-receipt gate, all seven items from disk, runnables run. Still unexecuted: a COLD adopter (MERIDIAN's was
the incumbent), and a messy repo whose rules need excavating rather than tiering.
Upgrade further as those run.

**Requires:** a session WITH REPO ACCESS and generous context. Adoption spends context
deliberately — understanding the repo better than its own docs do is the product. The
chat-only path is birth-only; use SETUP-PROMPT.md there.

---

## STAGE 0 — Staging (the human, two minutes, before pasting the rest)

1. **Commit everything.** `git status` clean, or every exception named on purpose.
   Adoption never runs on an uncommitted tree — git is the rollback.
2. **Stage the contract where nothing can collide** — copy just the `contract/` folder
   from the Build Contract repo into your project root:
   ```bash
   git clone --depth 1 https://github.com/walterreid/build-contract /tmp/bc && cp -R /tmp/bc/contract ./contract && rm -rf /tmp/bc
   ```
   (or download the repo zip and copy `contract/` out of it). Nothing at root is touched —
   your existing README.md, BUILD.md, or CLAUDE.md are safe where they stand.
3. Open a fresh session with repo access and paste this file.
4. **Optional but valuable — the incumbent dossier.** If the session that got you here
   still lives, have IT write a short dump before it dies: decisions made and why, rules
   stated casually, the live thread, what's sacred. If it's gone, its transcript may not
   be: `node contract/tools/extract_tail.mjs --role user` (from the repo root) recovers
   your own recent voice. Paste whatever you get after this file.

## STAGE 1 — Forensics (the AI: spend the context; verify, don't inherit)

Read the repo in this order of authority — each tier outranks everything below it:

1. **Running behavior.** Run the project: start command, tests, any gate you find. What
   actually happens is the ground truth every document must answer to. Play the thing —
   don't just read its logs; you only know what a log means after the experience it
   describes. If it doesn't run, that is finding #1, not a footnote.
2. **The code.** Entry points, data flow, the load-bearing modules, the conventions that
   repeat. Depth over coverage: prioritize the parts that would hurt to get wrong.
3. **Git history.** What changed, what got reverted (a revert is a decision), what the
   messages claim vs what the diffs did.
4. **Existing docs — LAST, and as testimony, not truth.** Classify every load-bearing
   claim: MATCHES the code · CONTRADICTS it (pre-existing drift — log it with both
   locations) · UNVERIFIABLE (carries `REPORTED` or `[ASSUMED]` into the new docs).
   Inventory every agent-instruction file (CLAUDE.md, .cursorrules, an older AGENTS.md):
   mine them for rules and decisions, then mark them for supersession.
5. **Transcripts, if any** (stage 0.4) — the human's voice and recent decisions.

**The fabrication line, extended to archaeology:** never report output of a command you
did not run, and never present an inference from a pattern as a recorded decision — code
that exists is not code that was chosen. An inferred rule or decision is written
`[EXCAVATED: <evidence>]` and stays a candidate until Stage 2 ratifies it.

## STAGE 2 — The dossier + interrogation (STOP — no document writing yet)

Present, compactly:
- **Candidate Golden Rules** — each with its evidence and a proposed tier, labeled as
  candidates: "this pattern is everywhere — law or accident?"
- **Architecture Decisions** found in the code — `Rejected:` reconstructed only where
  evidence exists (a dead branch, a revert, a comment).
- **Domain facts, pre-stamped** — mostly `OBSERVED (file/run, cited)`; `REPORTED` /
  `[ASSUMED]` where verification wasn't possible; `DESIGNED` only for genuinely unbuilt
  plans found in docs.
- **The true current state** — what runs, verified by running it — and the apparent
  live thread.
- **Drift found** in the existing docs.
- **Your questions** — SETUP-PROMPT's Step 0 bar (only questions whose answers change
  the documents), plus adoption's own kinds: pattern-or-law, doc-vs-code contradictions
  to adjudicate, and what the human knows that the repo cannot show. Up to seven; there
  is more material here than at birth.

Then STOP and wait for answers. **Nothing becomes law by archaeology alone.** The human
ratifies every rule and every tier — the Amendment Protocol's no-self-blessing applies
to a contract's birth exactly as to its life. ("I don't know — you decide" is a valid
answer: it ratifies your best-evidence default as a visible `[ASSUMED: …]`, never as
silent law. A human with no context is still the human.)

## STAGE 3 — Generate (the same generator, with adoption deltas)

Follow `contract/SETUP-PROMPT.md` — its Step 1 constraints and Step 2 wiring check —
filling the five templates in `contract/`, with these deltas:
- **Stamps:** default `OBSERVED` with citation, or `REPORTED`; `DESIGNED` is the
  exception. Adoption's Domain Knowledge should be MORE verified than a birth's.
- **BUILD.md:** history before adoption is coarse and honest — "Phases before adoption:
  pre-contract era, see archive/adoption/" — no retroactive roadmap theater. The live
  phase gets the real detail. Pre-populate KNOWN DRIFT with Stage 1 findings not fixed
  during adoption.
- **HANDOFF.md:** seeded MID-FLIGHT — the verified current state and the live thread
  from the dossier; never "nothing built."
- **SESSION-PROMPT instance #1:** gate items are strong here — real commits, a genuinely
  runnable gate, adoption-fresh specifics (what was ratified today).

## STAGE 4 — The move (the order IS the mistake-proofing), then the receipt

1. **Archive first, move second, delete never.** Place the archive by moving
   `contract/archive/` to the project root (the skeleton ships inside the staging —
   assume nothing about the destination). Superseded originals then go to
   `archive/adoption/`, with a `MANIFEST.md`: each file's original path and its fate
   (archived / merged into X / superseded by Y) and why. Future tombstones may cite these.
2. **Move the ratified set to root:** the five generated documents; HANDOFF-PROCESS.md
   copied from `contract/` with its two bracketed slots filled (rule 3's verification
   gate, practice 5's stores); `contract/tools/` to root `tools/`; and write a root
   CLAUDE.md holding exactly one import line — `@AGENTS.md` — plus a comment saying it is
   a pointer, not a copy (an existing CLAUDE.md's content was mined in Stage 1; the
   original is in the archive). The project's own README.md is never
   REPLACED — its front-page identity is the human's, and no template file stands in for
   it. *Editing* it is ordinary ratified work: drift found in Stage 1, or sections the
   new AGENTS.md now owns, get fixed like anything else — original archived first, human's
   go first.
3. **Retire the staging:** `contract/` → `archive/adoption/contract/`, with the template
   tag — it's in `contract/VERSION` — recorded in the MANIFEST. Root now holds living documents only.
4. **The receipt:** run the verification gate and report what it printed; `git status`
   must show exactly the change-set the MANIFEST predicts; AGENTS.md's file map matches
   reality (including `archive/adoption/`); commit as its own commit
   (`docs: adopt the Build Contract <tag>`) — staged explicitly, never `git add -A`.
5. Hand the human SESSION-PROMPT instance #1. **Adoption is complete when a cold session
   passes the read-receipt gate** — the same bar birth is held to.

Keep the one-line attribution in the generated documents (CC BY 4.0 — the Build
Contract repo's LICENSE).
