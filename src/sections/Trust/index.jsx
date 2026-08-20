import { BadgeCheck, ShieldCheck, Lock, Eye } from "lucide-react";
import Reveal from "../../components/Reveal";
import { logos } from "../../data";
import "./style.css";

const BADGES = [
  { icon: BadgeCheck, title: "Ready-Made Platform", text: "Launch your own branded auction site in days — no developers, no technical skills." },
  { icon: ShieldCheck, title: "Reliable & Secure", text: "Bank-grade security, stable bidding servers and secure payment handling." },
  { icon: Lock, title: "Bidder Management", text: "Register, verify and approve bidders with custom rules and deposits." },
  { icon: Eye, title: "Full Transparency", text: "Live dashboards and clear reporting — you always know how your sale is performing." },
];

export default function Trust() {
  return (
    <section id="trust" className="section trust">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Trusted by design</span>
            <h2 className="section-title">
              Built for Auction Houses. <span className="grad-text">Trusted by Professionals.</span>
            </h2>
            <p className="section-sub">
              BidVerx gives you everything you need to run, manage and
              grow your bidding business.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal variant="up">
        <div className="trust-marquee" aria-label="Trusted auction sources">
          <div className="trust-track">
            {[...logos, ...logos].map((logo, i) => (
              <span className="trust-logo" key={`${logo.name}-${i}`} aria-hidden={i >= logos.length}>
                <logo.icon size={18} aria-hidden="true" />
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container">
        <div className="trust-badges">
          {BADGES.map((badge, i) => (
            <Reveal key={badge.title} variant="up" delay={i * 90}>
              <div className="trust-badge glass">
                <span className="trust-badge-icon">
                  <badge.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="trust-badge-title">{badge.title}</h3>
                <p className="trust-badge-text">{badge.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
