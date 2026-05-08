/* global React */
const { useState } = React;

function Header() {
  const [open, setOpen] = useState(null);
  const services = ["Litigation Firewall","Legal Support","Data Optimization","Compliance Support","Compliance Resources"];
  const solutions = ["Contact Centers","Digital Marketers","Insurance Companies","VoIP Carriers","AI and Automation"];
  return (
    <header className="ba-header">
      <a className="ba-header__logo" href="#"><img src="../../assets/blacklist-logo-on-white.svg" alt="The Blacklist Alliance" /></a>
      <nav className="ba-header__nav">
        <button className={"ba-header__navlink" + (open==="s" ? " is-open" : "")} onMouseEnter={()=>setOpen("s")} onMouseLeave={()=>setOpen(null)}>Services
          {open==="s" && <div className="ba-header__menu">{services.map(s => <a key={s} href="#">{s}</a>)}</div>}
        </button>
        <button className={"ba-header__navlink" + (open==="o" ? " is-open" : "")} onMouseEnter={()=>setOpen("o")} onMouseLeave={()=>setOpen(null)}>Solutions
          {open==="o" && <div className="ba-header__menu">{solutions.map(s => <a key={s} href="#">{s}</a>)}</div>}
        </button>
        <a className="ba-header__navlink" href="#blog">Blog</a>
        <a className="ba-header__navlink" href="#contact">Contact</a>
      </nav>
      <div className="ba-header__cta">
        <a className="ba-header__signin" href="#">Sign in</a>
        <a className="ba-btn ba-btn--primary ba-btn--sm" href="#">Click to call</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="ba-hero ba-on-dark">
      <div className="ba-container">
        <p className="ba-eyebrow ba-eyebrow--red">TCPA · DNC · FCC</p>
        <h1 className="ba-tagline">risk less.<br/>connect more.</h1>
        <p className="ba-subhead">TCPA &amp; DNC compliance solutions to safeguard AI-enabled communications</p>
        <div className="ba-hero__ctas">
          <a className="ba-btn ba-btn--primary" href="#">Book a free demo</a>
          <a className="ba-btn ba-btn--ghost-light" href="#">Learn more →</a>
        </div>
      </div>
      <div className="ba-hero__rule" />
    </section>
  );
}

function FeatureBlock({ eyebrow, title, sub, body, cta, reverse, photo }) {
  return (
    <section className={"ba-feature" + (reverse ? " ba-feature--rev" : "")}>
      <div className="ba-feature__media" style={{background: photo}} aria-hidden="true">
        <span className="ba-feature__photo-stub">Photography placeholder<br/><small>{title}</small></span>
      </div>
      <div className="ba-feature__copy">
        <span className="ba-risk-bar" />
        <p className="ba-eyebrow ba-eyebrow--red">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="ba-feature__sub">{sub}</p>
        <p className="ba-feature__body">{body}</p>
        <a className="ba-link" href="#">{cta} →</a>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const items = [
    { t: "Legal Support", b: "A dedicated team of professionals standing by to provide the help you need." },
    { t: "Compliance Resources", b: "Efficient compliance training platform to remotely train management and staff." },
    { t: "Compliance Support", b: "Online compliance training, compliance audits, and customized policy documents." },
    { t: "Litigation Firewall", b: "Robust API to scrub DNC data in real time in accordance with your appetite for risk." },
    { t: "Data Optimization", b: "API delivers high-level data, including carrier, wireless, landline, ported status, etc." },
  ];
  return (
    <section className="ba-services ba-on-dark">
      <div className="ba-container">
        <span className="ba-risk-bar" />
        <h3 className="ba-services__head">TCPA litigation solutions</h3>
        <p className="ba-services__sub">Sophisticated TCPA litigation tools to reduce risk, minimize cost, enhance productivity, and ensure compliance.</p>
        <div className="ba-services__grid">
          {items.map(it => (
            <a key={it.t} className="ba-service-card" href="#">
              <h4>{it.t}</h4>
              <p>{it.b}</p>
              <span className="ba-service-card__cta">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="ba-closer">
      <div className="ba-container">
        <h2 className="ba-tagline ba-tagline--md">get started<br/>get protected</h2>
        <a className="ba-btn ba-btn--primary ba-btn--lg" href="#">Schedule a demo</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ba-footer ba-on-dark">
      <div className="ba-container ba-footer__grid">
        <div className="ba-footer__brand">
          <img src="../../assets/blacklist-logo-on-black.svg" alt="The Blacklist Alliance" />
          <p>7040 Avenida Encinas, Suite 104<br/>Carlsbad, CA 92011</p>
          <p><a href="mailto:info@blacklistalliance.com">info@blacklistalliance.com</a><br/><a href="tel:+18664890879">+1-866-489-0879</a></p>
        </div>
        <div>
          <p className="ba-footer__head">Services</p>
          <ul><li><a>Legal Support</a></li><li><a>Compliance Resources</a></li><li><a>Compliance Support</a></li><li><a>Litigation Firewall</a></li><li><a>Data Optimization</a></li></ul>
        </div>
        <div>
          <p className="ba-footer__head">Solutions</p>
          <ul><li><a>Contact Centers</a></li><li><a>Digital Marketers</a></li><li><a>Insurance Companies</a></li><li><a>VoIP Carriers</a></li><li><a>AI and Automation</a></li></ul>
        </div>
        <div>
          <p className="ba-footer__head">Legal</p>
          <ul><li><a>Privacy Policy</a></li><li><a>Terms of Use</a></li><li><a>Cookie Policy</a></li></ul>
        </div>
      </div>
      <div className="ba-container ba-footer__legal">© 2026 The Blacklist Alliance, Ltd. — All rights reserved.</div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, FeatureBlock, ServicesGrid, ClosingCTA, Footer });
