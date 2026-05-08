/* global React */
const { useState } = React;

function Sidebar({ active, onNav }) {
  const items = [
    { id: "overview",  label: "Overview",          icon: "layout-dashboard" },
    { id: "firewall",  label: "Litigation Firewall", icon: "shield-check" },
    { id: "lookups",   label: "Lookups",           icon: "search" },
    { id: "data",      label: "Data Optimization", icon: "database" },
    { id: "audit",     label: "Audit & Reports",   icon: "file-check-2" },
    { id: "team",      label: "Team",              icon: "users" },
    { id: "settings",  label: "Settings",          icon: "settings" },
  ];
  return (
    <aside className="bx-side">
      <div className="bx-side__brand">
        <img src="../../assets/blacklist-logo-on-black.svg" alt="The Blacklist Alliance" />
      </div>
      <nav className="bx-side__nav">
        {items.map(it => (
          <button key={it.id}
            className={"bx-side__item" + (active === it.id ? " is-active" : "")}
            onClick={() => onNav(it.id)}>
            <i data-lucide={it.icon} width="18" height="18" stroke-width="2"></i>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <div className="bx-side__foot">
        <div className="bx-side__user">
          <div className="bx-side__avatar">JS</div>
          <div>
            <div className="bx-side__user-name">Jamie Sun</div>
            <div className="bx-side__user-role">Compliance · Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ title, crumbs }) {
  return (
    <header className="bx-top">
      <div className="bx-top__crumbs">
        {crumbs.map((c, i) => (
          <span key={i}>{c}{i < crumbs.length - 1 ? <span className="bx-top__sep"> / </span> : null}</span>
        ))}
      </div>
      <div className="bx-top__row">
        <h1 className="bx-top__title">{title}</h1>
        <div className="bx-top__actions">
          <div className="bx-search">
            <i data-lucide="search" width="16" height="16" stroke-width="2"></i>
            <input placeholder="Search numbers, cases, audits…" />
            <kbd>⌘K</kbd>
          </div>
          <button className="bx-icon-btn" aria-label="Notifications">
            <i data-lucide="bell" width="18" height="18" stroke-width="2"></i>
            <span className="bx-icon-btn__dot" />
          </button>
          <button className="bx-btn bx-btn--primary">
            <i data-lucide="plus" width="14" height="14" stroke-width="2.5"></i>
            New scrub
          </button>
        </div>
      </div>
    </header>
  );
}

function StatTile({ label, value, delta, tone, sub }) {
  return (
    <div className={"bx-stat" + (tone ? " bx-stat--" + tone : "")}>
      <div className="bx-stat__label">{label}</div>
      <div className="bx-stat__value">{value}</div>
      <div className="bx-stat__delta">
        <span className={"bx-stat__chip" + (tone ? " is-" + tone : "")}>{delta}</span>
        <span>{sub}</span>
      </div>
    </div>
  );
}

function Pill({ tone = "neutral", children }) {
  return <span className={"bx-pill bx-pill--" + tone}><span className="bx-pill__dot" />{children}</span>;
}

function FirewallTable({ rows, onSelect, selectedId }) {
  return (
    <div className="bx-card">
      <div className="bx-card__head">
        <div>
          <span className="bx-risk-bar" />
          <h3>Recent scrubs</h3>
        </div>
        <div className="bx-card__head-actions">
          <button className="bx-btn bx-btn--ghost"><i data-lucide="filter" width="14" height="14" stroke-width="2"></i> Filter</button>
          <button className="bx-btn bx-btn--ghost"><i data-lucide="download" width="14" height="14" stroke-width="2"></i> Export</button>
        </div>
      </div>
      <table className="bx-table">
        <thead>
          <tr>
            <th>Phone</th><th>Carrier</th><th>Type</th><th>Status</th><th>Risk</th><th>Last scrub</th><th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} className={selectedId === r.id ? "is-selected" : ""} onClick={() => onSelect(r.id)}>
              <td className="bx-mono">{r.phone}</td>
              <td>{r.carrier}</td>
              <td>{r.type}</td>
              <td><Pill tone={r.tone}>{r.status}</Pill></td>
              <td><RiskMeter score={r.risk} /></td>
              <td className="bx-fg-2">{r.scrubbed}</td>
              <td><i data-lucide="chevron-right" width="16" height="16" stroke-width="2"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RiskMeter({ score }) {
  const tone = score >= 80 ? "crit" : score >= 40 ? "warn" : "ok";
  return (
    <div className="bx-risk">
      <div className={"bx-risk__bar bx-risk__bar--" + tone} style={{ width: score + "%" }} />
      <span className="bx-risk__num">{score}</span>
    </div>
  );
}

function DetailPanel({ row }) {
  if (!row) return <div className="bx-detail bx-detail--empty"><p>Select a scrub to inspect.</p></div>;
  return (
    <aside className="bx-detail">
      <div className="bx-detail__head">
        <span className="bx-risk-bar" />
        <p className="bx-detail__num bx-mono">{row.phone}</p>
        <Pill tone={row.tone}>{row.status}</Pill>
      </div>
      <dl className="bx-detail__grid">
        <dt>Carrier</dt><dd>{row.carrier}</dd>
        <dt>Type</dt><dd>{row.type}</dd>
        <dt>Ported</dt><dd>{row.ported ? "Yes" : "No"}</dd>
        <dt>State</dt><dd>{row.state}</dd>
        <dt>Litigator score</dt><dd>{row.risk} / 100</dd>
        <dt>Lists matched</dt><dd>{row.lists.join(", ")}</dd>
        <dt>First seen</dt><dd>{row.firstSeen}</dd>
      </dl>
      <div className="bx-detail__actions">
        <button className="bx-btn bx-btn--primary"><i data-lucide="ban" width="14" height="14" stroke-width="2"></i> Block number</button>
        <button className="bx-btn bx-btn--secondary"><i data-lucide="file-text" width="14" height="14" stroke-width="2"></i> View audit</button>
      </div>
      <div className="bx-detail__alert">
        <i data-lucide="shield-alert" width="18" height="18" stroke-width="2"></i>
        <div>
          <strong>Active litigator pattern</strong>
          <p>This number matches a known TCPA litigator profile. Calls have been blocked at the firewall.</p>
        </div>
      </div>
    </aside>
  );
}

function ToastDemo({ visible }) {
  if (!visible) return null;
  return (
    <div className="bx-toast">
      <i data-lucide="shield-check" width="18" height="18" stroke-width="2"></i>
      <div>
        <strong>Number blocked.</strong>
        <span>+1 (310) 555-0144 added to your firewall blocklist.</span>
      </div>
      <button aria-label="Dismiss">×</button>
    </div>
  );
}

Object.assign(window, { Sidebar, TopBar, StatTile, Pill, FirewallTable, RiskMeter, DetailPanel, ToastDemo });
