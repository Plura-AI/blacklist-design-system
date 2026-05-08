# Claude Code Handoff — Blacklist Alliance Design System

This entire project is the handoff package. It is structured to be checked into a Git repo and consumed directly by Claude Code (or any developer / agent).

## What this bundle is
**Design references created in HTML** — prototypes that show the intended look, voice, and component behavior. They are not production code to ship verbatim. Your task is to **recreate these designs in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.) using its established patterns and libraries. If no environment exists yet, pick the most appropriate framework for the project and implement the designs there.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, components, and voice. Recreate pixel-perfectly using the codebase's existing libraries and patterns.

## Where to start
1. Read [`README.md`](./README.md) — full brand & visual foundations, content rules, voice, iconography, caveats.
2. Read [`SKILL.md`](./SKILL.md) — Agent-Skill front matter so Claude Code can invoke this as a brand skill.
3. Open [`Style Guide.html`](./Style%20Guide.html) in a browser — every token + component on one scrollable page.
4. Foundations live in [`colors_and_type.css`](./colors_and_type.css) — colors, type scale, spacing, motion, semantic styles. **Translate these tokens into your codebase's token format** (Tailwind config, CSS-in-JS theme, design-token JSON, etc.) — don't just copy the CSS.
5. UI kits:
   - [`ui_kits/website/`](./ui_kits/website/) — marketing site components (header, hero, services grid, footer).
   - [`ui_kits/dashboard/`](./ui_kits/dashboard/) — app shell components (sidebar with real wordmark, top bar, data table, alerts).
6. Brand assets: [`assets/`](./assets/) — three official SVG marks (on-white wordmark, on-black wordmark, favicon). **Use these SVGs verbatim. Never recreate the wordmark with text.**

## Hard rules
- **Three colors only** — `#A50100` brand red, `#000000` black, `#FFFFFF` white. Red caps at ~10% of any view.
- **Zero radii.** Every corner is square — buttons, inputs, cards, modals, badges, pills, dots, focus rings. No exceptions.
- **One typeface.** General Sans (200/300/400/500/600/700). Files are in [`fonts/`](./fonts/).
- **No emoji. No exclamation points in marketing copy.**
- **Lucide icons** at 24px / 2px stroke / `currentColor`. No fills, no colorization. Substitution flag: replace with the internal Blacklist icon set when delivered.
- **Hero pair pattern:** lowercase Bold tagline + UPPERCASE Medium subhead. This is the brand's signature — use for any major brand moment.
- **Voice:** plain-spoken, confident, you-led. Compliance is serious. See `README.md` § Content Fundamentals.

## Caveats carried forward
- Logo SVGs encode `#B5001F`; system spec is `#A50100`. The system uses `#A50100` everywhere except inside the supplied logo files (kept verbatim). Re-export logos in `#A50100` if desired.
- Iconography is substituted with Lucide — no internal icon set provided.
- Dashboard kit was built from public-site language without access to the real app at `www3.blacklistalliance.com`. Layout is best-effort against the brand; iterate against real screenshots when available.

## Files
- `README.md` — brand & visual foundations
- `SKILL.md` — agent skill manifest
- `HANDOFF.md` — this file
- `Style Guide.html` — single-page visual reference
- `colors_and_type.css` — token + base layer
- `fonts/` — General Sans family (woff2)
- `assets/` — logos & favicon
- `preview/` — per-foundation preview cards (used by the Design System tab)
- `ui_kits/website/` — marketing components + working `index.html`
- `ui_kits/dashboard/` — app components + working `index.html`
