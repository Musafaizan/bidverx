import { BadgeCheck, ShieldCheck, Lock, Eye } from "lucide-react";
import Reveal from "../../components/Reveal";
import { logos } from "../../data/logos";
import "./style.css";

const BADGES = [
  { icon: BadgeCheck, title: "Verified Sources", text: "Every listing is sourced from a trusted, vetted auction network." },
  { icon: ShieldCheck, title: "Certified Lots", text: "Every lot passes our checks before it is ever listed on BidVerx." },
  { icon: Lock, title: "Secure Bidding", text: "Your bids, identity and payments are protected end to end." },
  { icon: Eye, title: "Transparent Process", text: "Clear rules, open activity and honest lot information." },
];

export default function Trust() {
  return (
    <section id="trust" className="section trust">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Trusted by design</span>
            <h2 className="section-title">
              Trusted Auctions. <span className="grad-text">Certified Sources.</span>
            </h2>
            <p className="section-sub">
              BidVerx connects you with trusted auction sources so
              you can bid with confidence.
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
