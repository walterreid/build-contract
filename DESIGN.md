# DESIGN.md — [PROJECT NAME] Visual Design System
# This file is the single source of truth for all visual decisions.
# Read this before touching any component or screen. Never override these values inline.
# All color tokens live in [/lib/theme.ts or equivalent] — import from there, never redeclare.
#
# This file is LAW, and law has an amendment process: AGENTS.md → The Amendment Protocol.
# Enforce what's written absolutely. Propose changes out loud. Never self-bless.

---

## Direction Ledger

[The design direction is a DIRECTION in the AGENTS.md sense: held absolutely while standing,
and expected to evolve over a long project's life. This ledger is where that evolution is
recorded — one line per direction change, append-only, newest last. Seven sessions from now,
when the aesthetic shifts, the shift lands HERE as one ratified line instead of as a fight
between the docs and the human's intent. A future session reads the ledger and knows not
just what the direction IS, but what it USED TO BE and why it moved — which is the only
thing that stops a well-meaning session from resurrecting a retired aesthetic.]

- **v1 — [2–3 word direction name]** ([date ratified]). [One line: the founding direction
  and the reason it fit.]
- [v2, when it happens: **v2 — [name]** ([date]). Was: [old]. Now: [new]. Evidence: [what
  the project learned — playtests, sessions of friction, a strategic shift]. Carried
  forward unchanged: [the parts of v1 that survive — often more than you'd think].]

---

## Design Philosophy  *(current direction — see ledger)*

**[2–3 word aesthetic name.]**

[1–2 sentences: what world does this interface inhabit? What does it feel like to use?
Not a list of adjectives — a specific sensory description. "Clean and modern" is not a
philosophy. "The weight of a well-worn clipboard trusted for years" is.]

[1–2 sentences: the principle that governs every decision that follows. If a design
choice can't be justified by this principle, remove it. Name the principle explicitly
so it can be tested against: "nuance is a feature," "motion communicates, not decorates,"
"the player should never feel lost," etc.]

---

## Color Palette

[Note: The palette should grow from the philosophy above. Every color family should have
a reason grounded in the world the product inhabits. Name that reason in the comment.]

```typescript
// [/lib/theme.ts or equivalent] — source of truth. Import this everywhere.
export const COLORS = {

  // --- [Family Name: e.g. "Core Brand"] ---
  // "[Name]" — [why this color, what it does in the interface]
  [name]: {
    [shade]: '[hex]',   // [usage note — where does this specific shade appear?]
    [shade]: '[hex]',   // [usage note]
    [shade]: '[hex]',   // [usage note]
  },

  // "[Family 2 Name]" — [reason: why this color family exists in this product]
  [name]: {
    [shade]: '[hex]',   // [usage note]
    [shade]: '[hex]',   // [usage note]
  },

  // --- [Semantic / Status] ---
  // [These should map to real states in the product's domain — not generic UI states.
  //  If the product has "safe / warning / danger," name those. If it has "day / night /
  //  storm," name those. Generic "success/error" is fine as a baseline; extend it.]
  status: {
    [state_name]: { bg: '[hex]', text: '[hex]', border: '[hex]' }, // [when used]
    [state_name]: { bg: '[hex]', text: '[hex]', border: '[hex]' }, // [when used]
    [state_name]: { bg: '[hex]', text: '[hex]', border: '[hex]' }, // [when used]
  },

  // [Domain-specific color families — add only if the product has meaningful categorical
  //  distinctions that need to be visually differentiable. e.g. fuel types, character
  //  classes, item rarities. Skip this if there are no such distinctions.]
  [domain_category]: {
    [item]: '[hex]', // [what this represents, why this color]
    [item]: '[hex]',
  },

  // Chart palette — used for data visualization only
  chart: ['[hex]', '[hex]', '[hex]', '[hex]'],
}
```

---

## Typography

**[Display / Headings]: `[Font Name]`**
[Why this font. Not "it looks good" — what does it communicate? What feeling does it
create at the scale it's used? What alternatives were considered and why were they rejected?]
Use at [size threshold] and above for [specific use cases].

**[Body / UI]: `[Font Name]`**
[Same rationale. What makes this font work for dense UI or small text? What's the
relationship to the display font — companion, contrast, neutral?]
Use for [specific use cases].

**[Monospace] (if applicable): `[Font Name]`**
[When does this product need monospace? If it doesn't, omit this entirely.]

```css
/* In [globals.css or equivalent] */
@import url('[google fonts or self-hosted url]');

:root {
  --font-display: '[Font]', [fallback stack];
  --font-body: '[Font]', [fallback stack];
  --font-mono: '[Font]', [fallback stack]; /* omit if not used */
}
```

**Type Scale:**
```
[Scale name]:  [size]px / [Font] [weight] / [color token]  — [use cases]
[Scale name]:  [size]px / [Font] [weight] / [color token]  — [use cases]
[Scale name]:  [size]px / [Font] [weight] / [color token]  — [use cases]
[Scale name]:  [size]px / [Font] [weight] / [color token]  — [use cases]
[Scale name]:  [size]px / [Font] [weight] / [color token]  — [use cases]
```

---

## Layout Architecture

### [The layout model — give it a name if it has one]
[Describe the fundamental layout in prose first. What are the zones? How do they relate?
What is the primary navigation metaphor? Then use ASCII art or a diagram if useful.]

```
[ASCII diagram of the layout if helpful]
```

[Explain the decisions that might seem arbitrary but aren't. Why a sidebar instead of
a top nav? Why a slide-in panel instead of a modal? Why mobile-first or desktop-first?
Each of these has an answer grounded in how the product is actually used.]

### [Primary View / Main Screen]
```
[Concrete spec: dimensions, colors (by token name), font sizes, spacing.
Be specific enough that two developers produce the same thing independently.]
```

### [Secondary Views / Other Key Screens]
```
[Same level of specificity for any screen that has distinct layout rules.]
```

---

## Component Patterns

### [The most important UI element in the product]
[The one element that appears everywhere, carries the most information, and has the most
nuanced rules. Document it first and most completely.]

```
Rules:
- [Rule 1 — specific, testable]
- [Rule 2]
- [Rule 3 — especially: what does "no data" look like? What does each state look like?]
```

### [Status / State Badges]
```
[State]     [Color spec]     [Notes — when does this state appear? Any behaviors?]
[State]     [Color spec]     [Notes]

Rules:
- [Any rules about when/how badges appear]
- [Max width, truncation, text source]
```

### [Data Tables / Lists (if applicable)]
```
[Header, body, hover, selected, striping rules, density, pagination]
```

### [Buttons]
```
Primary:    [bg, text, font, border-radius]
            Hover: [state]
            Active: [state]
Secondary:  [spec]
Destructive: [spec — always note: confirm step required before action]
Ghost:      [spec]

Size variants:
  sm: [height, padding, text size]
  md: [height, padding, text size]  ← default
  lg: [height, padding, text size]
```

### [Forms and Inputs]
```
Label:  [spec]
Input:  [spec]
        Focus: [state]
        Error: [state, message placement]
        Disabled: [state]

[Any hard rules — e.g. "never use floating labels"]
```

### [Any other components the product defines — add sections as needed]
```
[Same pattern: name → spec → rules]
```

---

## [Secondary Interface (if exists: mobile, player HUD, customer-facing, etc.)]

[If the product has a meaningfully different second interface — a mobile driver app, a
customer portal, a player HUD, a public-facing page — document it here. Same philosophy:
what world does it inhabit, what is the user doing when they're here, how does the design
serve that context?]

```
[Specs that differ from the primary interface — same token system, different application]
```

---

## Motion and Animation

**The rule: [state the motion philosophy in one sentence.]**

```
[Animation type]:  [duration]ms [easing] — [what it communicates, when it fires]
[Animation type]:  [duration]ms [easing] — [same]

Loading:  [skeleton or spinner? when is each appropriate?]
Offline:  [how does the UI communicate connection loss?]
```

---

## What To Never Do

These are violations. No exceptions while they stand. They come in two tiers — **enforced
identically**, amended differently (AGENTS.md → Amendment Protocol):

[A *Protects:* line may not name the rule's own aesthetic as the protected thing —
"protects the [hard-edges] premise" is a rule protecting itself. It must point outside the
rule: a user, a meaning the interface depends on, the governing principle. The correct form
looks like *Protects: red's meaning — scarcity is what makes it land*, or *Protects: [the
philosophy's principle] — every pixel states a fact*. If the only honest completion is "the
direction itself," the item is direction-taste: keep it, but as a line in the Direction
Ledger entry it enforces — not dressed in a Protects: line here.]

### Design Invariants
[Rules that protect users, accessibility, information integrity, or the theme system
itself. These survive direction changes — v1 editorial or v5 SaaS, these hold. Amending
one is rare and means re-examining what it protects.]

1. **No status conveyed by color alone.** Always pair color with text or an icon.
   *Protects: colorblind and low-vision users.*
2. **No hardcoding color values.** Import from [theme file]. Always.
   *Protects: the ability to change direction at all — a hardcoded palette makes every
   future pivot an archaeology project.*
3. **[Project-specific invariant].** *Protects: [...]*
4. **[Project-specific invariant — e.g. "destructive actions always confirm."]** *Protects: [...]*

### Direction Rules  *(bound to the current direction — see ledger)*
[Rules that enforce the CURRENT aesthetic. Project-specific violations, not generic best
practices — if a rule could apply to any product, it isn't a direction rule. When the
direction is amended, each rule here gets re-ratified, amended with a tombstone, or
retired. When one of these strains repeatedly, that's a STRAIN LOG entry in BUILD.md —
comply, log, and at three strains, raise it.]

5. **[Prohibition — e.g. "Never use red outside the final boss."]** [Why this is a
   violation in THIS direction, not just a preference.] *Protects: [e.g. red's meaning —
   scarcity is what makes it land].*
6. **[Prohibition].** [Why.] *Protects: [...]*
7. **[Prohibition].** [Why.] *Protects: [...]*
8. **No decorative elements that don't carry information.** [Restate in terms of this
   product's context — what does "decorative" look like here?] *Protects: [...]*

[The combined list should be 6–12 items. Fewer means the design system isn't specific
enough. More means some aren't really rules. If an item can't name what it protects,
it's taste: generic taste lives in the philosophy section; direction-bound taste lives in
the Direction Ledger entry it enforces. Neither lives here, in the law.]
