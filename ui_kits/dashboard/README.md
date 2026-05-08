# Dashboard UI Kit

Hi-fi recreation of the Blacklist Alliance app surface (`www3.blacklistalliance.com`) — a compliance operator's workspace centered on the **Litigation Firewall** module. Components are cosmetic.

## Components (`Components.jsx`)
- `<Sidebar />` — black left rail with brand mark, primary nav (using Lucide icons), and a user block.
- `<TopBar />` — page header with breadcrumbs, page title, command-palette search, notifications, and a primary CTA.
- `<StatTile />` — KPI card with label, big number, delta chip, and subtext. `tone="ok|warn|crit"` re-tints.
- `<Pill />` — status pill with a colored dot and tone variants.
- `<FirewallTable />` — sortable-looking data table with phone numbers, carriers, status pills, and a `<RiskMeter />` cell. Row hover + selection states.
- `<RiskMeter />` — inline 0–100 score bar (green/amber/red).
- `<DetailPanel />` — right-rail inspector for the selected row, with metadata grid + action buttons + critical alert banner.
- `<ToastDemo />` — fixed bottom-right toast with a red accent stripe.

## Files
- `index.html` — full app shell wired together: Litigation Firewall live-scrubs view, with stats + table + selectable rows + detail panel.
- `Components.jsx` — components in one file.
- `app.css` — kit-local styles. Imports tokens from `/colors_and_type.css`. Icons via Lucide CDN.

## Caveats
- **No internal app screenshots or codebase were provided**, so the dashboard layout is built from first principles using the brand foundations + the marketing-site language for app modules (Litigation Firewall, Data Optimization, Compliance Support, etc.). Visual fidelity is best-effort — once we get access to the real app or screenshots, we'll pixel-match.
- Charts/graphs are not included (no provided usage to recreate). Easy to slot in via Recharts/Chart.js if needed.
