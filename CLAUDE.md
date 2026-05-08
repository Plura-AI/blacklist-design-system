# Blacklist Alliance — Design System

This repository is the single source of truth for The Blacklist Alliance brand. It contains design tokens, fonts, logos, component HTML, and UI kits for every surface the company ships.

**Repo:** `https://github.com/Plura-AI/blacklist-design-system`
**Maintained by:** Marketing / AI Matty D ([@mattd on Slack](https://slack.com/app_redirect?channel=mattd))

---

## What this repo is for

Any agent or developer working on Blacklist Alliance output — website, app UI, pitch deck, email, proposal, print collateral, social media — should read this file first, then load the relevant files listed below.

---

## Load order for agents

1. **Read `README.md`** — brand context, voice rules, visual foundations, iconography, caveats.
2. **Load `colors_and_type.css`** — the complete token layer. Every CSS custom property the brand uses is defined here.
3. **Load `tokens/tokens.json`** — if you need machine-readable tokens (React Native, Figma, Tailwind config, non-CSS stacks).
4. **Pick a UI kit** based on surface type:
   - Marketing / website → `ui_kits/website/`
   - App / dashboard → `ui_kits/dashboard/`
5. **Use `assets/`** for logo SVGs. Never recreate the wordmark in text.

---

## Non-negotiable brand rules

These rules are absolute. Do not override them for any reason.

| Rule | Value |
|---|---|
| Brand colors | `#A50100` red · `#000000` black · `#FFFFFF` white — only these three |
| Typeface | General Sans (files in `fonts/`) — the only typeface, all weights 200–700 |
| Border radius | **0px everywhere** — buttons, inputs, cards, modals, badges, pills, avatars, everything |
| Emoji | **Never** |
| Exclamation marks in marketing copy | **Never** |
| Logo | Use SVGs from `assets/` verbatim — never recreate with text |
| Icon set | Lucide, 2px stroke, 24px (20px in app), `currentColor` — never fill |
| Red usage | Cap at ~10% of any view — functional, not decorative |

---

## Signature patterns

**Hero pair** — the brand's most recognizable moment:
```
risk less. connect more.           ← lowercase Bold tagline (.ds-tagline)
TCPA & DNC COMPLIANCE SOLUTIONS    ← UPPERCASE Medium subhead (.ds-subhead)
```

**Risk bar** — 56×4px solid red rule above section headlines:
```html
<span class="ds-risk-bar"></span>
```
Use at most once per major section.

**Eyebrows / CTAs** — ALL CAPS, tracked out, semibold:
```
BOOK A FREE DEMO    SERVICES    LEARN MORE
```

---

## Casing rules at a glance

| Element | Case |
|---|---|
| Hero tagline | all lowercase |
| H1/H2 | Sentence case (or all lowercase for hero pairs) |
| Eyebrows / nav / CTAs | ALL CAPS |
| Body copy | Sentence case |
| Product names | Title Case (Litigation Firewall, Compliance Support) |
| Acronyms | Always uppercase: TCPA, DNC, FCC, FTC, VoIP, API |

---

## File map

| File / folder | What it contains |
|---|---|
| `README.md` | Brand context, voice, visual spec, iconography |
| `CLAUDE.md` | This file — AI agent entry point |
| `CONTRIBUTING.md` | Rules for submitting changes |
| `SKILL.md` | Claude Code agent-skill front matter |
| `HANDOFF.md` | Developer handoff instructions |
| `ROADMAP.md` | Planned future work (publisher plugin) |
| `colors_and_type.css` | All CSS custom properties — load this first |
| `tokens/tokens.json` | Machine-readable tokens |
| `tokens/tokens.js` | ESM token exports |
| `fonts/` | General Sans woff2 files (200–700, roman + italic) |
| `assets/` | Logo SVGs and favicon |
| `preview/` | 21 standalone HTML spec cards |
| `ui_kits/website/` | Marketing site kit (header, hero, sections, footer) |
| `ui_kits/dashboard/` | App kit (sidebar, data tables, alerts) |
| `plugin/` | Blacklist Designer CoWork plugin files |

---

## Don'ts for any agent working in this brand

- Do not introduce new colors. The three brand colors + gray ramp + semantic palette is everything.
- Do not use gradients, patterns, textures, or illustrations.
- Do not round corners — ever.
- Do not use emoji or exclamation marks in copy.
- Do not use a typeface other than General Sans.
- Do not recreate the logo wordmark in text.
- Do not fill Lucide icons or swap to a different icon library.
- Do not use marketing-fluff verbs: "leverage", "synergize", "empower", "solution" as a verb.
- Do not soften the threat in compliance copy. Name the risk. Follow with the remedy.

---

## Plugin

The **Blacklist Designer** CoWork plugin lives in `plugin/`. Install it to give any Cowork session one-command access to this design system. See `plugin/README.md` for install instructions.

A publisher plugin (similar to Plura's Pubby) is planned — see `ROADMAP.md` for the spec.
