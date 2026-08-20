import { ArrowRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import bidverxHammer from "../../assets/bidverx-hammer.png";
import { scrollToId } from "../../utils/scroll";
import "./style.css";

export default function CTA() {
  return (
    <section className="section cta" aria-label="Run your auctions">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-grid" />
        <div className="cta-glow" />
        <div className="cta-sweep" />
        <div className="cta-hammer">
          <img src={bidverxHammer} alt="" width={310} height={278} />
        </div>
      </div>

      <div className="container cta-inner">
        <Reveal variant="up">
          <h2 className="cta-title">
            Your Next Auction Could <span className="grad-text">Sell Out in Hours.</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <p className="cta-text">
            Run live, timed and hybrid auctions with BidVerx — and turn
            your inventory into sales faster than ever.
          </p>
        </Reveal>
        <Reveal variant="up" delay={240}>
          <button className="btn btn-primary cta-btn" onClick={() => scrollToId("contact")}>
            Get Started
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
