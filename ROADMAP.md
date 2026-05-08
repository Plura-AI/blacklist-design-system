# Blacklist Alliance Design System — Roadmap

This document tracks planned work for the design system and its companion tooling. It exists so the next session or a new team member can pick up exactly where we left off without losing context.

**Owner:** Marketing / AI Matty D ([@mattd on Slack](https://slack.com/app_redirect?channel=mattd))

---

## Current state (v1.0.0)

Shipped:
- `colors_and_type.css` — full token layer
- `tokens/tokens.json` + `tokens/tokens.js` — machine-readable tokens for non-CSS stacks
- `fonts/` — General Sans woff2 family (200–700, roman + italic)
- `assets/` — three SVG brand marks
- `preview/` — 21 HTML spec cards
- `ui_kits/website/` — marketing site kit
- `ui_kits/dashboard/` — app/dashboard kit
- `plugin/` — **Blacklist Designer** CoWork plugin (v1.0.0)

---

## Phase 2 — Publisher plugin (next major project)

### What it is

A lightweight CoWork plugin — working title **"The Wire"** (or TBD) — that ships a pre-built, branded HTML asset to a live URL in one step. Modeled on Plura's Pubby plugin.

Workflow becomes:
> **Design with Blacklist Designer → publish with [publisher plugin]**

### What needs to be built

#### Infrastructure (Vercel)

1. **Create a Vercel project** under the Plura account (same as Pubby's `go.plura.ai`).
2. **Set up a subdomain** — options:
   - `go.blacklistalliance.com` (preferred — on-brand, client-shareable)
   - `publish.blacklistalliance.com`
   - `view.blacklistalliance.com`
   - Internal option: `bl.plura.ai` (keeps everything under Plura infrastructure)
   - Decision needed from Matt before build begins.
3. **Build three API routes** (Next.js serverless functions — same pattern as `go.plura.ai`):
   - `POST /api/publish` — accepts `{ slug, html }`, writes HTML to GitHub, triggers Vercel deploy
   - `GET /api/list` — returns `{ slugs: [...] }` for slug collision checking
   - `DELETE /api/delete` — removes a published page by slug
4. **Admin dashboard** at `/admin` — protected by HTTP Basic Auth (`ADMIN_USER`/`ADMIN_PASS` env vars). Lists all published pages with slug, date, and a delete button.
5. **Generate a publish API key** — format: `bl_pub_[random]`. Store as a Vercel env var. Bake into the skill file (same pattern as Pubby's `plura_pub_*` key).

#### GitHub repo for published pages

- Create `Plura-AI/blacklist-proposals` (or `blacklist-published`) as the storage repo for published HTML.
- Vercel auto-deploys on push to `main`.
- Same gotcha as Pubby: **always commit with `mattd@plura.ai`** as the git email — Vercel deployment protection only allows commits from the `pluraai` GitHub account. Using `mattd@strikedm.com` maps to `rocketbrand` and will be blocked.

#### The plugin file

Structure (identical to Brandy/Pubby pattern):

```
blacklist-wire.plugin
├── .claude-plugin/
│   └── plugin.json        ← name: blacklist-wire, version: 0.1.0
├── skills/
│   └── blacklist-wire/
│       └── SKILL.md       ← lightweight publisher skill
└── README.md
```

#### The SKILL.md (spec)

The publisher skill (Blacklist Wire) is explicitly thin — it does NOT:
- Generate HTML
- Apply branding (that's Blacklist Designer's job)
- Modify user-provided HTML in any way

It ONLY:
1. Accepts a finished, branded HTML asset (from conversation, file upload, or workspace)
2. Suggests a slug derived from the asset title / first H1
3. Asks user to confirm or provide a different slug
4. Calls `GET [publish-url]/api/list` to check for slug collisions
5. Posts to `POST [publish-url]/api/publish`
6. Returns the live URL

**Trigger boundary:** Same as Blacklist Designer — explicit invocation only.
Trigger phrases: `Blacklist Wire`, `use Blacklist Wire`, `publish with Blacklist Wire`, `/blacklist-wire`.

**Failure scenarios:**
- Slug taken → name who has it, ask for a new slug or explicit overwrite confirmation
- API unreachable → surface error, ping Matty D on Slack
- HTML is empty / no asset provided → refuse and ask for asset first

#### Credentials structure (to fill in at build time)

```
Publish URL:    https://[subdomain-tbd]
Publish API key: bl_pub_[to-be-generated]
GitHub repo:    Plura-AI/blacklist-proposals
GitHub token:   [from Plura-AI org — same as existing pluraai token pattern]
Git commit email: mattd@plura.ai (CRITICAL — never mattd@strikedm.com)
Admin URL:      https://[subdomain-tbd]/admin
Admin user:     blacklist
Admin pass:     [to-be-set-at-deploy-time]
```

### Known gotchas (from Pubby build — carry forward)

1. **macOS Icon\r files** in mounted Google Drive folders corrupt git refs. Always clone the proposals repo to a clean sandbox path (`/tmp/` or `/sessions/[session-id]/`), not the mounted Drive folder.
2. **Vercel deployment protection blocks commits from unrecognized GitHub users.** The Vercel project must be configured to allow the `pluraai` GitHub account. Always use `mattd@plura.ai` as the git commit email.
3. **JS in published HTML:** Unknown whether the publish API sanitizes JavaScript. Validate by publishing a JS-heavy asset (with Chart.js, animations, etc.) and checking if the live URL renders correctly. If JS is stripped, the API needs modification before the plugin is ready for broad use.
4. **The `.plugin` file** is a zip archive. Package with: `zip -r ../blacklist-wire.plugin . -x "*.DS_Store"` from within the plugin directory.

### Prerequisites before starting Phase 2

- [ ] Decide on the subdomain (`go.blacklistalliance.com` is the recommendation)
- [ ] Confirm DNS access for the chosen subdomain (who manages `blacklistalliance.com` DNS?)
- [ ] Confirm Vercel account has capacity for a new project under the Plura org
- [ ] Create the `blacklist-proposals` GitHub repo under `Plura-AI`
- [ ] Generate and store the publish API key

---

## Phase 3 — Additional UI kits (future)

These kits are not yet built. When requested by a department, add them to `ui_kits/`:

| Kit | Surface | Notes |
|---|---|---|
| `ui_kits/slides/` | Pitch decks | Blacklist-branded slide master for PowerPoint/Keynote |
| `ui_kits/email/` | Email templates | Pre-built HTML email components (header, body, footer, CTA button) |
| `ui_kits/print/` | Printed collateral | One-pager, brochure, data sheet layouts |
| `ui_kits/social/` | Social tiles | LinkedIn/Twitter/Instagram card templates |

---

## Phase 4 — Analytical skills integration (long-term)

If The Blacklist Alliance builds Claude Cowork skills that produce data reports or analytical outputs (similar to Plura's admediary/mva transfer analysis skills), those skills should follow this pattern:

1. Skills handle data extraction only — no embedded design
2. Output structured data (JSON)
3. Blacklist Designer applies the brand
4. Blacklist Wire (the publisher plugin) publishes the result

This keeps design concerns out of analytical skill files and ensures brand consistency across all report outputs. This is a multi-sprint project and requires coordination with whoever builds the analytical skills.

---

## Decisions log

| Decision | Why |
|---|---|
| Plugin named "Blacklist Designer" | User decision — explicit command trigger, not "Forma" or other proposed names |
| Explicit trigger only (not auto-trigger) | User decision — deliberate opt-in, same pattern as Brandy/Pubby |
| No dark mode toggle by default | Blacklist Alliance is light-first; no dark variant specified in brand |
| General Sans via raw GitHub URLs for self-contained HTML | Font is not on any CDN — only way to embed in standalone artifacts |
| Publisher plugin as a separate Phase 2 | Requires Vercel subdomain setup and additional infrastructure — separate project scope |
| Repo under Plura-AI org | User decision — using existing org even though brand is Blacklist Alliance |
