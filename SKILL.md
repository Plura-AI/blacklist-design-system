---
name: blacklist-alliance-design
description: Use this skill to generate well-branded interfaces and assets for The Blacklist Alliance — a TCPA & DNC compliance / litigation-defense product — either for production or throwaway prototypes, mocks, decks, and one-off pages. Contains essential design guidelines, colors, type, fonts, logos, iconography rules, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, single HTML pages, etc.), copy the assets you need out of `assets/` and `fonts/` into your output, then create static HTML files for the user to view. Always include `colors_and_type.css` so the brand tokens (colors, type scale, spacing, radius, shadow, motion) and General Sans font faces are available.

If working on production code, copy the assets, read the rules in this skill, and become an expert in designing with this brand. Match the **content fundamentals** and **visual foundations** sections of the README exactly — they encode the voice, casing rules, and visual rhythm that make a Blacklist Alliance design feel like a Blacklist Alliance design.

Never invent new colors. Use only `#A50100` red, `#000000` black, `#FFFFFF` white, the gray-00…gray-100 ramp, and the standard semantic palette already defined in `colors_and_type.css`.

Type is always General Sans. Headlines are tight-tracked Bold. Eyebrows and CTAs are ALL CAPS, tracked out. The signature pattern is a **lowercase Bold tagline** stacked over an **UPPERCASE subhead** (e.g. "risk less. connect more." over "TCPA & DNC COMPLIANCE SOLUTIONS TO SAFEGUARD AI-ENABLED COMMUNICATIONS"). Use the 56×4px red "risk-bar" rule as a section accent, sparingly.

For UI compositions, start from the existing kits in `ui_kits/website` (marketing) or `ui_kits/dashboard` (app) — they cover the most common surfaces and use the brand correctly out of the box.

For icons, use [Lucide](https://lucide.dev/) at 2px stroke, 24×24 grid, color via `currentColor`. Never use emoji.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few targeted questions (audience, surface, scope, variations), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
