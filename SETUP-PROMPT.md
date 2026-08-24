# SETUP PROMPT — Fill the Project Templates

Use this prompt after you've already discussed your project idea in this chat.
Drop it in at the point where you're ready to formalize the build documents.

What this generates: **AGENTS.md, BUILD.md, DESIGN.md, a seeded HANDOFF.md, and SESSION-PROMPT.md
instance #1** (five documents — the handoff system AND its delivery mechanism are born at setup,
not improvised at the end of a dying session; the setup session is the only author who can write
day-zero gate items, because it alone holds the founding conversation and the docs it just wrote).
One more file — **HANDOFF-PROCESS.md** — is a process document this prompt does not generate. Copy
it into the repo as-is, then fill its bracketed slots: the verification gate in rule 3, and the
project's stores in practice 5. The documents this prompt *does* generate must reference it.

---

## The Prompt

We've discussed the idea enough that you have a working model of what I'm building.
I need you to fill in the project documents using the templates I'm about to share.

### Step 0 — Interrogate before you write (the gap-closing gate)

Before writing anything, re-read the full conversation above and pull out:
- The core idea and who it's for
- Any rules or principles I've stated (even casually)
- Any technical choices I've made or implied
- Any domain knowledge you'd need to build this correctly
- Any design language I've used — aesthetic words, reference points, moods

Then — before filling anything in — ask me the questions whose answers would **change what you
write**. Up to five. Not clarifications for completeness; questions where two plausible answers
produce two different documents. If a question wouldn't alter the docs, don't ask it. If nothing
meets that bar, say so and proceed. Wait for my answers before writing.

(This is the difference between documents that are *filled in* and documents that are *earned*.
A [TBD] I could have resolved in one sentence at setup is a debt every future session pays.)

### Step 1 — Fill the templates

**For AGENTS.md:**
- The "What This Project Is" section should be specific enough that a developer
  who has never spoken to me could orient themselves in 60 seconds. Not a pitch —
  a map.
- The Golden Rules should only contain things that, if violated, would produce
  meaningfully wrong behavior. If it's a preference, it doesn't belong here.
- **Classify every rule as INVARIANT or DIRECTION** (the template defines these), and give
  every rule its **Protects:** line — the thing the rule exists to defend. A rule that can't
  name what it protects is a preference wearing a rule's clothes; demote it.
- Domain Knowledge should capture any non-obvious facts about how the game/product
  actually works — the model, the math, the vocabulary. If I used domain-specific
  language in our conversation, define it here.
- Stamp every Domain Knowledge concept's **Status:** at birth: `REPORTED (source)` for
  facts about the world I supplied; `DESIGNED (unexecuted)` for behavior we invented that
  nothing has run yet. Nothing gets `PARTIALLY VERIFIED` or `OBSERVED` at setup — nothing
  has run. Do not misfile an invented mechanic as a world-fact.
- Architecture Decisions should only include choices that are genuinely settled.
  If I haven't decided yet, flag it as DECISION NEEDED in BUILD.md instead.
- "What Done Means" should be concrete and project-specific. Not generic checklists.

**For BUILD.md:**
- Phase 0 is always: environment, tooling, skeleton — the minimum to start building.
  Its goal should be something you can run and see, not "have good architecture."
- Phase 1 is the first thing that makes the project feel like itself. Not CRUD, not
  auth — the first piece of actual product.
- Don't plan more than 3 phases ahead with real detail. After that, placeholders only.
- Every acceptance criterion should be observable — something you can see, click,
  or run. "The code is clean" is not acceptance criteria.
- If something is deferred or uncertain, it goes in ONGOING or DECISION NEEDED.
  Don't bury it inside a phase.

**For DESIGN.md:**
- The philosophy section should feel earned — grounded in the world the product
  inhabits, not generic design platitudes.
- **Open the Direction Ledger with v1** — one dated line stating the founding direction and
  why. This is the document admitting, on day one, that its direction may evolve — and
  building the place where that evolution gets recorded instead of fought.
- Every color family needs a reason, not just a hex value. Why does this product
  use this color? What does it mean in context?
- Font choices should be justified in terms of what they communicate, not just
  what they look like.
- Sort "What To Never Do" into **Design Invariants** (protect users, accessibility,
  information integrity — nearly permanent) and **Direction Rules** (enforce the current
  aesthetic absolutely, but expected to evolve with the direction). Same enforcement,
  different amendment cost.
- The prohibitions should be project-specific violations, not generic best practices.
  If it could apply to any product, remove it.
- If the product doesn't have a secondary interface (mobile, portal, etc.), omit
  that section. Don't invent structure that doesn't exist yet.

**For HANDOFF.md (seeded):**
- Fill the template for a project at hour zero: current state is "nothing built; documents
  ratified [date]," the live thread is Phase 0, and "how to work with the human" carries
  whatever collaboration patterns actually showed up in this conversation — how I decide,
  what I pushed back on, what I got excited about. Derive them; don't invent them.
- This file exists from day one so no session ever writes it from scratch. Every session
  revises it; none authors it.

**For SESSION-PROMPT.md (instance #1):**
- Fill the SESSION-PROMPT template completely — every bracket, template notes deleted. The
  result is the finished two-message prompt the human pastes to open the FIRST working
  session. It is an instance, not a template: nothing in it may be addressed to an AI
  filling it in.
- Construct Message 1's 5–7 gate items per the template's construction rules, with the
  session-1 substitutions the template defines: *setup-fresh* stands in for session-fresh
  (the setup commit, a specific [ASSUMED] tag, the founding premise), and if no
  verification gate exists yet, the runnable item is an honest report of its absence plus
  the Phase 0 task that creates it — never simulated output.
- Message 2 is Phase 0 marching orders, drawn from the BUILD.md you just wrote.

### General rules

- Nuance is a feature. Don't flatten distinctions I've made in conversation.
  If I described something with care, preserve that care in the document.
- Where I haven't specified something, make a reasonable choice and flag it
  with [ASSUMED: reason] so I can correct it.
- Where something is genuinely unknown, write [TBD] and note what decision
  would resolve it.
- Do not invent domain knowledge. If I haven't told you how something works,
  ask — don't assume.
- Keep the documents as short as they need to be and no shorter. A mature project's
  AGENTS.md is long because it holds many phases of accumulated domain knowledge.
  A Phase 0 project's AGENTS.md should be shorter. Match the length to what's actually
  known. (Practical ceiling: models reliably follow a bounded number of instructions —
  every line that isn't load-bearing dilutes the lines that are.)

### Step 2 — Close the loop

After filling in all five documents:
1. List any remaining open questions — things I'd need to answer before you could fill
   in a [TBD] or correct an [ASSUMED].
2. Confirm the wiring: AGENTS.md references BUILD.md as the to-do list and HANDOFF-PROCESS.md
   as the session contract; DESIGN.md's amendment path points at the Amendment Protocol in
   AGENTS.md; HANDOFF.md references all of them; SESSION-PROMPT.md instance #1's gate items
   touch every primary doc. A document set that doesn't reference itself falls apart the
   first time only one file gets read.
3. Remind me to copy HANDOFF-PROCESS.md into the repo and fill its two bracketed slots.
   Claude Code needs nothing extra: CLAUDE.md ships alongside AGENTS.md holding a single
   `@AGENTS.md` import line, so AGENTS.md remains the one contract with no copy to drift.
4. Retire the setup artifacts — the archive convention's first act, at birth: copy the
   unfilled SESSION-PROMPT template to `archive/setup/SESSION-PROMPT_TEMPLATE.md`, move
   this file to `archive/setup/SETUP-PROMPT.md`, and note at the top of each which Build
   Contract version stamped this project (the template repo's tag). Then instance #1
   replaces SESSION-PROMPT.md at root. Root ends the day holding only living documents.
   (If I'm running you somewhere without repo access, list these moves for me to make.)

---

## Templates

Paste the contents of AGENTS.md, BUILD.md, DESIGN.md, HANDOFF.md, and SESSION-PROMPT.md
(the template — its bracketed construction rules are part of what you're pasting) after this line.
