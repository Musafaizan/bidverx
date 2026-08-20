import { ArrowRight, Gavel, TrendingUp } from "lucide-react";
import Reveal from "../../components/Reveal";
import { scrollToId } from "../../utils/scroll";
import "./style.css";

const BIDS = ["$18,200", "$23,750", "$31,480", "$42,850"];

export default function CTA2() {
  return (
    <section className="section cta2" aria-label="Get started">
      <div className="cta2-bg" aria-hidden="true">
        <div className="cta2-glow" />
        <div className="cta2-grid" />
      </div>

      <div className="container cta2-inner">
        <div className="cta2-copy">
          <Reveal variant="left">
            <span className="eyebrow">Your house, online</span>
            <h2 className="cta2-title">
              Stop Managing Sales Manually. <span className="grad-text">Start Automating.</span>
            </h2>
          </Reveal>
          <Reveal variant="left" delay={120}>
            <p className="cta2-text">
              Launch your own branded auction site and let BidVerx handle the
              bidding, payments and reporting.
            </p>
          </Reveal>
          <Reveal variant="left" delay={240}>
            <button className="btn btn-primary cta2-btn" onClick={() => scrollToId("contact")}>
              Get Started
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={150}>
          <div className="auction-panel glass" aria-hidden="true">
            <div className="auction-panel-head">
              <span className="bid-live">
                <span className="pulse-dot" />
                LIVE AUCTION
              </span>
              <Gavel size={16} />
            </div>
            <div className="auction-panel-body">
              <div className="auction-panel-price">$42,850</div>
              <div className="auction-panel-chips">
                {BIDS.map((bid, i) => (
                  <span className="auction-chip" style={{ animationDelay: `${i * 1.4}s` }} key={bid}>
                    <TrendingUp size={11} />
                    {bid}
                  </span>
                ))}
              </div>
              <div className="auction-panel-bar">
                <span />
              </div>
              <div className="auction-panel-footer">
                <span>Auction #312</span>
                <span className="auction-winner">Sold · 48 lots</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
