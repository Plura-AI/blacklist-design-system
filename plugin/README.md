# Blacklist Designer

Apply The Blacklist Alliance brand to any asset you've already built.

Reads the design system at `https://github.com/Plura-AI/blacklist-design-system` at runtime — so as the design team updates the repo, Blacklist Designer adapts automatically. No plugin update required.

---

## What Blacklist Designer is for

You have content — raw copy, a JSON dump, a half-finished HTML draft, a Notion export, plain text, structured data — and you want it dressed in The Blacklist Alliance brand. Blacklist Designer restyles it without changing a word.

## How to use it

In any Cowork conversation, drop or reference the source content and say one of:

- `Blacklist Designer`
- `use Blacklist Designer`
- `apply the Blacklist Alliance brand`
- `make this on-brand for Blacklist`
- `/blacklist-designer`

Blacklist Designer will:

1. Greet you (in the voice of **AI Matty D**) and ask what asset type you're producing
2. Read your source content (uploaded file, pasted text, or conversation context)
3. Fetch the relevant design system files from GitHub
4. Apply the brand — General Sans, sharp edges, red/black/white, the risk-bar accent, correct casing and typography rules
5. Deliver the branded asset

## Asset types Blacklist Designer handles

| Asset | Output | Notes |
|---|---|---|
| Marketing page / website | HTML | Uses `ui_kits/website` as reference |
| Dashboard / app UI | HTML | Uses `ui_kits/dashboard` as reference |
| PDF / proposal | PDF | Builds branded HTML, then converts via the `pdf` skill |
| Pitch deck | PPTX | Routes through the `pptx` skill with brand parameters |
| Email template | HTML (inline CSS) | Optimized for email client compatibility |
| Word doc / brief | DOCX | Routes through the `docx` skill with brand parameters |
| Spreadsheet | XLSX | Routes through the `xlsx` skill with brand colors |
| Social tile / ad | HTML or PNG | Uses brand tokens + website kit structure |
| Other | Blacklist Designer's pick | Picks the closest kit and tells you what it chose |

## What Blacklist Designer will NOT do

- **Will not write content.** It applies brand to existing content. Need copy written? Write it first — then bring it here to get branded.
- **Will not enforce voice or tone.** The brand voice rules (you-led, declarative, no fluff verbs) are documented in the design system repo's `README.md`. Blacklist Designer is visual-only.
- **Will not publish.** A publisher plugin is on the roadmap (see `ROADMAP.md` in the design system repo). After Blacklist Designer delivers a branded asset, you publish it manually — or wait for the publisher plugin.

## Trigger boundary

Blacklist Designer only triggers when you name it explicitly. Generic phrases like "make this look good", "design this", "brand this", or "build a deck" do NOT fire Blacklist Designer. This is intentional — naming is a deliberate opt-in.

## What's installed

- **One skill:** `blacklist-designer` — the design-system applier
- **No MCP servers, no agents, no hooks** — one thin skill that reads the GitHub repo at runtime

---

## Install instructions

### Option A — Click to install (Cowork UI)

1. Locate `blacklist-designer.plugin` (distributed via Slack by AI Matty D)
2. Click the file — Cowork will show an install prompt
3. Accept
4. Restart Cowork
5. Type `Blacklist Designer` in any new session to confirm it's working

### Option B — Manual install

1. Unzip `blacklist-designer.plugin`
2. Copy the contents into your Cowork plugins directory
3. Restart Cowork

---

## Packaging a new version

When `plugin/` in the design system repo changes, repackage:

```bash
cd plugin
zip -r ../blacklist-designer.plugin . -x "*.DS_Store"
```

Distribute the new `.plugin` file to the org via Slack.

---

## Maintained by

The design system at `https://github.com/Plura-AI/blacklist-design-system` is the single source of truth. The Marketing team maintains it. To propose changes — new kits, new tokens, fixes to the skill — open a PR or message **AI Matty D** on Slack ([@mattd](https://slack.com/app_redirect?channel=mattd)).
