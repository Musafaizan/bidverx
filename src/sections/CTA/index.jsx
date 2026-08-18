import { ArrowRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import bidverxHammer from "../../assets/bidverx-hammer.png";
import { scrollToId } from "../../utils/scroll";
import "./style.css";

export default function CTA() {
  return (
    <section className="section cta" aria-label="Start bidding">
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
            Your Next Win Could Be <span className="grad-text">One Bid Away.</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <p className="cta-text">
            Join BidVerx and discover a smarter way to win lots through
            trusted auctions.
          </p>
        </Reveal>
        <Reveal variant="up" delay={240}>
          <button className="btn btn-primary cta-btn" onClick={() => scrollToId("contact")}>
            Start Bidding
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
