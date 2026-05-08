# Contributing to the Blacklist Alliance Design System

This repo is the single source of truth for The Blacklist Alliance brand. Changes here ripple to every surface — website, app, pitch decks, emails, and printed collateral. Treat it with the same care you'd treat the product.

**Owner:** Marketing / AI Matty D ([@mattd on Slack](https://slack.com/app_redirect?channel=mattd))
**Questions:** Slack [@mattd](https://slack.com/app_redirect?channel=mattd) before opening a PR.

---

## Who can propose changes

Any department can propose a change. The Marketing team approves and merges. No one self-merges.

---

## What belongs in this repo

| Type | Belongs here | Does NOT belong here |
|---|---|---|
| Brand colors, type, spacing tokens | Yes — in `colors_and_type.css` and `tokens/` | One-off color choices for a single project |
| Fonts | Yes — woff2 files in `fonts/` | Client or project-specific fonts |
| Logo SVGs and brand marks | Yes — in `assets/` | Campaign or event-specific lockups |
| UI kit components | Yes — in `ui_kits/` | Production code (components go here as HTML/CSS/JSX reference, not shipped code) |
| Spec cards / preview HTML | Yes — in `preview/` | Fully built pages or apps |
| Slide deck masters | Yes — propose via `ui_kits/slides/` when that kit is built | Individual pitch decks |
| Plugin files | Yes — in `plugin/` | Team-specific Cowork skills |

---

## How to propose a change

### For non-developers (Marketing, Sales, Design)

1. Open a Slack thread in the brand channel and describe what you need changed.
2. AI Matty D ([@mattd](https://slack.com/app_redirect?channel=mattd)) will either make the change or guide you through the process.
3. You will be notified when the change is live in the repo.

### For developers and agents

1. **Branch** off `main`: `git checkout -b your-name/description-of-change`
2. Make your changes following the rules below.
3. Open a Pull Request against `main` with a clear title and description.
4. Tag `@mattd` for review.
5. Do not merge without approval.

---

## Rules for changes

### Colors
- The brand palette is fixed: `#A50100` red, `#000000` black, `#FFFFFF` white, plus the 12-step gray ramp, plus the semantic palette already in `colors_and_type.css`.
- Do not add new brand colors. If a surface genuinely needs a new color, open a Slack thread — this is a brand decision, not a code decision.
- The gray ramp uses straight gray (no blue or warm undertone). Keep it that way.

### Typography
- General Sans only. Do not add new font families.
- If adding new weights or styles, add the woff2 to `fonts/` and the `@font-face` declaration to `colors_and_type.css`.

### Spacing
- All spacing values must be multiples of 4px. Do not introduce half-steps or arbitrary values.
- Add new spacing tokens to both `colors_and_type.css` and `tokens/tokens.json` / `tokens/tokens.js`.

### Radius
- All radius tokens must remain 0px. This is a brand decision — square corners are the visual identity. Do not change this.

### Components and UI kits
- Components in `ui_kits/` are **reference implementations** — cosmetic, not production. They show correct use of brand tokens.
- New components must follow: General Sans, 3 brand colors only, 0px radius, Lucide icons, no emoji.
- New UI kits (e.g., `ui_kits/slides/`, `ui_kits/email/`) go in `ui_kits/` with their own `README.md` and `index.html`.

### Preview cards
- Each `preview/*.html` file covers one design foundation (color, type, spacing, etc.).
- If adding a new token category, add a corresponding preview card.

### Tokens
- Any token added to `colors_and_type.css` must also be added to `tokens/tokens.json` and `tokens/tokens.js`.
- Keep all three files in sync. A token that exists in CSS but not in JSON is a bug.

### Plugin
- The `plugin/` directory is managed by Marketing. Do not edit plugin files without coordinating with AI Matty D.
- Plugin changes require re-packaging and re-distributing the `.plugin` file to the org.

---

## What will be rejected

- New colors outside the established palette.
- Any `border-radius` value other than `0px`.
- New fonts other than General Sans.
- Emoji in any file.
- Gradients, patterns, textures, or drop shadows heavier than `--shadow-4`.
- Rounded avatars, badges, pills, or any other element.
- Tokens that exist in one file but not the others (CSS/JSON/JS out of sync).
- PRs that modify multiple unrelated things in one branch.

---

## Releasing a `.plugin` file

When the `plugin/` directory changes, a new `.plugin` file must be packaged and distributed:

```bash
cd plugin
zip -r ../blacklist-designer.plugin . -x "*.DS_Store"
```

Distribute via Slack to all org members who use Cowork, with install instructions from `plugin/README.md`.
