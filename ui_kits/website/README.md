# Marketing Website UI Kit

Hi-fi recreation of the public Blacklist Alliance site (`blacklistalliance.com`). Components are cosmetic — they recreate the visual & interaction patterns, not production logic.

## Components (`Components.jsx`)
- `<Header />` — sticky top nav with hover-revealed Services/Solutions menus + sign-in & click-to-call CTAs.
- `<Hero />` — black-canvas hero with the lowercase tagline + UPPER subhead + CTA pair + bottom red rule.
- `<FeatureBlock />` — alternating media/copy section used for each Solution (`reverse` flips orientation).
- `<ServicesGrid />` — 5-card services overview on a black canvas with hairline grid dividers.
- `<ClosingCTA />` — "get started · get protected" closing block with red bottom rule.
- `<Footer />` — 4-column dark footer with brand block + service/solution/legal columns.

## Files
- `index.html` — full home-page click-thru assembly. Open this to study the kit.
- `Components.jsx` — all components in one file (small, self-contained).
- `site.css` — kit-local class styles. Imports tokens from `/colors_and_type.css`.

## Caveats
- Photography is replaced with neutral dark gradient placeholders. The live site uses editorial workplace photography in the same hero positions — slot real assets into `.ba-feature__media` when you have them.
- Software-compatibility logo strip ("Twilio, Plivo, Vonage…") is omitted; add it as a simple horizontal flex of grayscale logos if needed.
