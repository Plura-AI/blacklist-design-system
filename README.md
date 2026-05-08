# Blacklist Alliance — Design System

A practical, code-first design system for **The Blacklist Alliance** — TCPA & DNC compliance for contact centers, digital marketers, insurance, VoIP carriers, and AI-driven communications.

> **risk less. connect more.**

This repo contains brand foundations, typography, color tokens, iconography, logos, and reusable UI kits ready for use in production apps, marketing pages, single-page mocks, and slide decks. It is structured so it can be checked into a Git repository and consumed directly from Claude Code or any other editor.

**Repo:** `https://github.com/Plura-AI/blacklist-design-system`
**Maintained by:** Marketing / AI Matty D ([@mattd on Slack](https://slack.com/app_redirect?channel=mattd))

---

## Quick Reference — for AI agents and external consumers

> Read this table first. It tells you where to look for what you need in under 30 seconds.

| I need to… | Go here |
|---|---|
| Understand the brand, voice, and visual rules | This file (`README.md`) |
| Load design tokens into CSS | `colors_and_type.css` |
| Load tokens into JS / React / React Native | `tokens/tokens.js` or `tokens/tokens.json` |
| Build or style a marketing page | `ui_kits/website/` |
| Build or style an app / dashboard | `ui_kits/dashboard/` |
| Get the logo SVG | `assets/blacklist-logo-on-white.svg` or `assets/blacklist-logo-on-black.svg` |
| Get the favicon | `assets/blacklist-favicon.svg` |
| Load fonts | `fonts/` — General Sans woff2 files, 200–700 |
| See a visual spec card (colors, type, spacing, etc.) | `preview/` |
| Install the Cowork plugin | `plugin/` — see `plugin/README.md` |
| Understand what to use for my department | See **Department Guides** section below |

**Hard rules — apply in every context, no exceptions:**

| Rule | Value |
|---|---|
| Colors | `#A50100` red · `#000000` black · `#FFFFFF` white only (+ gray ramp + semantic palette) |
| Typeface | General Sans only — all weights 200–700 |
| Corner radius | **0px everywhere** — buttons, cards, inputs, modals, pills, badges, everything |
| Emoji | **Never** |
| Exclamation marks in marketing copy | **Never** |
| Signature pattern | lowercase Bold tagline + UPPERCASE Medium subhead |
| Icons | Lucide — 2px stroke · 24px · `currentColor` · never filled |
| Red usage | Maximum ~10% of any view — functional, not decorative |

---

## Index — what's where

| Path | Purpose |
|---|---|
| `README.md` | This file. Brand context, content, visuals, iconography, manifest. |
| `SKILL.md` | Agent-Skill front matter so Claude Code can use this as a brand skill. |
| `colors_and_type.css` | All foundation tokens — colors, type, spacing, radius, shadow, motion — plus semantic element styles. **Import this first.** |
| `fonts/` | General Sans web fonts (200–700, italic + roman). |
| `assets/` | Logos, favicon, brand marks, illustrations. |
| `preview/` | Stand-alone HTML "spec cards" — typography, color swatches, components, etc. Used by the Design System tab. |
| `ui_kits/website/` | Marketing-site UI kit: header, hero, feature blocks, footer. |
| `ui_kits/dashboard/` | App UI kit: sidebar nav, data tables, scrub/firewall views, alerts. |
| `ui_kits/<kit>/index.html` | Click-thru prototype for that surface. |
| `ui_kits/<kit>/*.jsx` | Component recreations (cosmetic, not production). |

## What Blacklist Alliance does

Blacklist Alliance helps companies that place phone calls or send SMS at scale stay on the right side of the **TCPA** (Telephone Consumer Protection Act), the **DNC** (Do Not Call) registry, FCC rules, FTC enforcement, and state Attorneys General. It's a B2B compliance & litigation-defense product — the customer is a compliance officer, an in-house attorney, a contact-center ops lead, or a digital-marketing operator.

**Core surfaces**
- **Marketing site** (`blacklistalliance.com`) — explains services & solutions, drives "Book a free demo."
- **App / dashboard** (`www3.blacklistalliance.com`) — Litigation Firewall scrubbing, lookups, data optimization, audit logs, account management.
- **Decks & sales collateral** — used in pitches to insurance carriers, contact centers, lead-gen networks.

**Services** (top-line nav): Litigation Firewall · Legal Support · Data Optimization · Compliance Support · Compliance Resources
**Solutions** (vertical pages): Contact Centers · Digital Marketers · Insurance Companies · VoIP Carriers · AI and Automation

---

## CONTENT FUNDAMENTALS

The voice is **plain-spoken, confident, and slightly punchy** — a compliance company that knows it sells protection from real, expensive lawsuits. It mixes legal precision (TCPA, FCC, DNC, FTC) with operator-friendly plain English ("put TCPA litigation worries to rest and start sleeping better at night").

### Voice & tone
- **You-led**, not we-led. The reader is the operator. ("Protect your business…", "Mitigate your risk…")
- **Risk-aware but never panicky.** Name the threat (predatory litigators, costly settlements) and follow with the remedy.
- **Confident & declarative**, not hedged. Short sentences. Active voice.
- **Plain English over legalese** in headlines; legal precision in body copy when it matters (cite TCPA, FCC declaratory rulings, etc.).
- **No emoji.** Ever. This is a compliance/legal product.
- **No exclamation points** in marketing copy. Power comes from the verb, not the punctuation.

### Casing
| Element | Case |
|---|---|
| Hero tagline | **all lowercase**, e.g. `risk less. connect more.` |
| Big section headers (H1/H2) | Sentence case, sometimes all lowercase for hero pairs |
| Eyebrows / nav / CTAs | **ALL CAPS**, tracked out (e.g. `SERVICES`, `BOOK A FREE DEMO`, `LEARN MORE`) |
| Body copy | Sentence case |
| Product names | Title Case (Litigation Firewall, Compliance Support) |
| Acronyms | Always uppercase: TCPA, DNC, FCC, FTC, VoIP, API |

### Pronouns & framing
- "**You / your**" for the reader (operator).
- "**The Blacklist Alliance** / **we**" for first-person institutional voice. Use the full brand name on first reference per page.
- Avoid "users" — say "operators", "agents", "members", "customers" depending on context.

### Specific copy patterns (lifted from live site)
- Hero pairs: a lowercase tagline + an UPPERCASE subhead.
  > `risk less. connect more.`
  > `TCPA & DNC COMPLIANCE SOLUTIONS TO SAFEGUARD AI-ENABLED COMMUNICATIONS`
- CTA verbs are short and imperative: `BOOK A FREE DEMO`, `LEARN MORE`, `SCHEDULE A DEMO`, `SIGN IN`, `CLICK to Call`.
- Section openers name the audience first, the benefit second: "Robust TCPA Compliance Solutions for Contact Centers" → "Protect your operations with compliance training and real-time risk mitigation."
- Closing CTA blocks are blunt and slightly playful: "**get started · get protected**", "**Put TCPA litigation worries to rest and start sleeping better at night.**"

### Don'ts
- Don't use marketing-fluff verbs like "leverage", "synergize", "empower".
- Don't soften the threat — the product exists because lawsuits are real.
- Don't use friendly mascots, cartoons, or playful illustrations.
- Don't write copy that sounds like a generic SaaS landing page.

---

## VISUAL FOUNDATIONS

The brand is **stark, monochrome, and direct** with one weaponized color (red). It should feel like a serious legal/compliance product — closer to a financial-services or law-firm aesthetic than a friendly SaaS.

### Color
- **Three brand colors only:** `#FFFFFF` white, `#000000` black, `#A50100` red.
- Red is **functional**, not decorative — used for the logo mark, primary CTAs, the "risk-bar" accent rule, destructive/critical states, key data highlights, and selection. Red should never cover more than ~10% of any view.
- **Neutrals are straight gray** (no blue undertone, no warm tan). 12-step ramp from `#FFFFFF` to `#000000` (`gray-00 … gray-100`).
- **Semantic palette is restrained and standard:** muted forest-green for success, ochre for warning, the brand red for danger (it doubles), and a deep navy for info. Each has a paired tinted background.
- Note: the supplied logo SVGs encode the red as `#B5001F`. The brand red is **`#A50100`** per spec; the logos are kept as-is for fidelity. If asset re-export is desired, flag and we'll regenerate.

### Type
- **One typeface: General Sans** (Indian Type Foundry). Clean geometric grotesque — neutral enough for a compliance product, with personality in its semibold and bold weights.
- Display & H1/H2 use **Bold (700)** with tight tracking (`-0.02em` to `-0.03em`). This is what makes a Blacklist headline feel like a Blacklist headline.
- Body uses **Regular (400)**. Buttons use **Semibold (600)**.
- Eyebrows / nav / pill labels are ALL CAPS at 12–14px, tracked out (`+0.06em` to `+0.12em`).
- The signature pattern is the lowercase Bold tagline + a SMALL UPPERCASE subhead beneath it.

### Spacing & layout
- **4px base unit.** `--sp-1`…`--sp-14` from 4 → 160px.
- **12-column grid**, 24px gutter, max content width 1200px (1440px for marketing).
- Sections breathe: 80–128px vertical padding on marketing pages; 24–48px on app surfaces.
- Generous left/right gutters at the breakpoints — copy never edge-bleeds.

### Backgrounds
- **No gradients.** Flat fills only.
- Use **white** as the default canvas, **black** as a punchy alternate for hero/CTA/footer sections.
- **No patterns, textures, or hand-drawn illustrations.**
- **Full-bleed editorial photography** for solution pages (call centers, agents at work, etc.) — kept neutral/desaturated, no heavy filters.

### Imagery vibe
- Photography is **cool/neutral**, slightly desaturated, modern-corporate. Never warm, never grainy, never b&w. Real people in real workspaces — call-center floor, insurance agent at a desk.
- No illustrations. No 3D renders. No abstract shapes.

### Borders
- **1px hairline** in `--border-1` (gray-20). On dark backgrounds use `--border-3` (gray-80).
- Hover state thickens to `--border-2` (gray-30) or to red for emphasis. Never animated thickness.

### Corner radii
- **Square. Always. Everywhere.** `border-radius: 0` on every element — buttons, inputs, cards, sections, badges, pills, status dots, avatars, toasts, search fields, modals, everything.
- All `--r-*` tokens (including `--r-pill`) resolve to `0px`. The scale exists only so consumers can call out the intent ("this is a pill") in code; visually it's still square.
- This is the brand. No exceptions.

### Shadows / elevation
- 4-step elevation scale (`--shadow-1` … `--shadow-4`).
- Most surfaces use `--shadow-1` or are flat with a hairline border. Reserve `--shadow-3`/`--shadow-4` for menus, modals, popovers.
- Focus state is a 3px red glow (`--shadow-focus`) — never a default browser outline.

### Hover / press states
- **Hover:** primary buttons darken (`--bl-red` → `--bl-red-hover`). Secondary buttons gain a 1px red border or shift bg from white to gray-05. Links underline at 3px offset and darken.
- **Active/press:** colors darken one more step (`--bl-red-press`). No scale animation on buttons. Optional `transform: translateY(1px)` on icon buttons.
- **Disabled:** 40% opacity, `cursor: not-allowed`, no hover affordance.

### Animation / motion
- **Restrained and quick.** 120–280ms is the working range; 480ms only for hero entrances.
- **Standard ease-out** for everything reactive. `ease-in-out` for hover swaps. No bounces, no springs, no parallax.
- Page transitions: simple fade + 8px translate-up for incoming content.
- No "scroll-jacked" experiences.

### Transparency & blur
- Almost never. The header may use `backdrop-filter: blur(8px)` over a `rgba(255,255,255,0.85)` fill once it's pinned and scrolled — that's the only sanctioned use.
- No glassmorphism panels, no translucent cards.

### Cards
- White surface, 1px gray-20 border, `--shadow-0` or `--shadow-1`, 0–4px radius, 24px internal padding.
- A 4px brand-red top accent rule is the optional "Blacklist card" pattern — used to flag critical items.
- No colored left-border-only cards (off-brand).

### Layout rules / fixed elements
- **Sticky header** on scroll, with a hairline bottom border that appears at >8px scrollY.
- **No floating chat widgets** by default. CTA bars are anchored to the page, not floating.
- **No drawers** for primary nav on desktop — top-level nav is always visible.

### The "risk bar"
The brand's signature accent: a **56px wide × 4px tall solid red rule** placed above section headlines and product titles. Use it sparingly — at most once per major section.

---

## ICONOGRAPHY

Blacklist Alliance does not ship its own icon font. The live site uses isolated photography and minimal iconography — most "icons" are actually small product screenshots or photographic tiles.

For app surfaces and dashboards, this system standardizes on **[Lucide](https://lucide.dev/)** as the icon set:

- **Why Lucide:** ~1,500+ icons, consistent **2px stroke**, **24×24** grid, MIT-licensed, single-color (currentColor), and CDN-available. The clean geometric stroke pairs naturally with General Sans.
- **Sizes:** 16, 20, 24px. Default is 20px in app UI, 24px in marketing.
- **Stroke:** keep at 2px. Never fill icons.
- **Color:** use `currentColor` so icons inherit the surrounding text color (`--fg-1` / `--fg-2` / `--bl-red`).
- **Substitution flag:** Lucide is a **substitution** — no internal Blacklist icon set was provided. If/when an internal set is delivered, swap by drop-in replacement (same `currentColor` SVGs).

**CDN load**
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<i data-lucide="shield-check"></i>
```

**Emoji & Unicode:** never used as icons. The only Unicode "icons" allowed are typographic — bullet (`•`), em-dash (`—`), middle-dot. No 🔒 🛡️ ⚖️ — substitute Lucide `shield`, `shield-check`, `scale`, etc.

**Logos** live in `assets/`:
- `blacklist-logo-on-white.svg` — wordmark in red on white.
- `blacklist-logo-on-black.svg` — wordmark in red+white on black.
- `blacklist-favicon.svg` — square red mark for tab/avatar use.

---

## How to use this system

1. Drop `colors_and_type.css` onto any page — it brings fonts, tokens, and semantic element styles.
2. Pick a UI kit (`ui_kits/website` for marketing, `ui_kits/dashboard` for app) and either copy components in, or open the kit's `index.html` to study a working assembly.
3. Reach for `assets/blacklist-logo-on-white.svg` (or `-on-black`) when you need the wordmark. Use the favicon as a square mark.
4. For icons, load Lucide from CDN and use `data-lucide="name"`.
5. Tone: lowercase tagline + UPPERCASE subhead pairs are the signature. Sharp corners, generous whitespace, one accent of red per view.

---

## Department Guides

Use this section to find out what files and rules apply to your specific type of output.

### Website & landing pages (Marketing)
- Kit: `ui_kits/website/` — header, hero, service grids, CTA blocks, footer
- Tokens: `colors_and_type.css`
- Rules: marketing site gets 80–128px vertical section padding; copy never edge-bleeds; full-bleed hero sections use black background with white type
- Photography: cool/neutral, slightly desaturated, modern-corporate — real people in real workspaces. No illustrations. No 3D.
- CTAs are ALL CAPS: `BOOK A FREE DEMO`, `LEARN MORE`, `SCHEDULE A DEMO`

### App UI & dashboards (Product / Engineering)
- Kit: `ui_kits/dashboard/` — sidebar nav, data tables, scrub/firewall views, alerts, account UI
- Tokens: `colors_and_type.css` or `tokens/tokens.js` for React/TS projects
- Rules: 24–48px vertical padding on app surfaces; sidebar is always visible on desktop — no drawer nav; sticky header with hairline bottom border
- Red is for critical/destructive states and primary CTAs only — not for data coloring or decorative use

### Pitch decks & sales collateral (Sales)
- No slide kit yet — see `ROADMAP.md`
- Until a slide master ships: use `colors_and_type.css` tokens as reference, General Sans Bold for headlines, white or black slide backgrounds only, red for emphasis bars (the risk-bar pattern), 0px radius on all shapes and boxes
- No clip art. No templates from PowerPoint/Keynote defaults. No custom colors beyond the brand palette.
- Use `assets/blacklist-logo-on-white.svg` on light slides, `assets/blacklist-logo-on-black.svg` on dark slides
- Invoke **Blacklist Designer** in Cowork and specify "Pitch Deck" as the asset type

### Email templates (Marketing)
- No dedicated email kit yet — follow the marketing rules using inline CSS
- Use `colors_and_type.css` tokens as reference for values
- General Sans is a web font — fall back to `Arial, sans-serif` in email clients that strip `@font-face`
- White background, black body copy, red sparingly for CTA buttons
- Invoke **Blacklist Designer** in Cowork and specify "Email" as the asset type

### Proposals & PDFs (Sales / Operations)
- Invoke **Blacklist Designer** in Cowork and specify "PDF/Proposal" as the asset type
- The skill will apply the brand, then convert via the `pdf` skill
- Or: use `ui_kits/website/` as a structural reference to build branded HTML, then export to PDF

### Social tiles & ads (Marketing)
- Use brand tokens from `colors_and_type.css`
- White or black backgrounds only. Red accent at most 10% of the tile.
- General Sans Bold for the headline, sentence case or lowercase for the tagline
- Square aspect ratio for social tiles follows the same 0px radius rule — no rounded tile corners
- No stock photo clip art. No gradients. No illustrations.

### Internal tools & integrations (Engineering / Operations)
- Tokens: `tokens/tokens.json` (Figma, design tooling) or `tokens/tokens.js` (JS/TS)
- Internal tools use the dashboard kit as a reference even if they aren't the main app
- Brand consistency applies to internal tools — no off-palette colors just because it's internal-facing

---

## Plugin — Blacklist Designer

**Blacklist Designer** is the CoWork plugin for this design system. It reads the repo at runtime and applies the Blacklist Alliance brand to any asset you're building — one command, no copy-paste required.

Install it once per Cowork installation. After that, type `Blacklist Designer` in any Cowork session to summon it.

**Plugin location:** `plugin/` — see [`plugin/README.md`](./plugin/README.md) for install instructions.

A publisher plugin (for one-click publishing of branded assets to a live URL) is planned. See [`ROADMAP.md`](./ROADMAP.md).

---

## Caveats

- **Brand red discrepancy.** The provided logo SVGs use `#B5001F`; the spec'd brand red is `#A50100`. The system uses `#A50100` everywhere except inside the supplied logo files (kept verbatim). If the logos should be re-exported in `#A50100`, request and I'll regenerate.
- **Iconography is substituted** with Lucide — there's no native Blacklist icon set.
- **No internal app screenshots/code were available**, so the dashboard UI kit is built from the public site's structure + the marketing language for the app's modules (Litigation Firewall, Data Optimization, etc.). Visual fidelity is best-effort against the existing brand. If you can grant access to the actual app or share screenshots, I will iterate to pixel match.
- **No slide deck samples were attached**, so no `slides/` directory was generated. If you'd like Blacklist-branded slide masters, ask and I'll add a deck template.
