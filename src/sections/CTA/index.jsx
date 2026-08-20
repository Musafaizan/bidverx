import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import bidcta11 from "../../assets/bidcta11.png";
import { scrollToId } from "../../utils/scroll";
import "./style.css";

export default function CTA() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY, 900);
      const isMobile = window.matchMedia("(max-width: 1024px)").matches;
      setParallax(isMobile ? 0 : y * -0.05);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section cta" aria-label="Run your auctions">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-grid" />
        <div className="cta-glow" />
        <div className="cta-sweep" />
      </div>

      <div className="container cta-inner">
        <div className="cta-copy">
          <Reveal variant="left">
            <h2 className="cta-title">
              Your Next Auction Could <span className="grad-text">Sell Out in Hours.</span>
            </h2>
          </Reveal>
          <Reveal variant="left" delay={120}>
            <p className="cta-text">
              Run live, timed and hybrid auctions with BidVerx — and turn
              your inventory into sales faster than ever.
            </p>
          </Reveal>
          <Reveal variant="left" delay={240}>
            <button className="btn btn-primary cta-btn" onClick={() => scrollToId("contact")}>
              Get Started
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={150} className="cta-visual-reveal">
          <div
            className="cta-visual"
            style={{ transform: `translateY(${parallax}px)` }}
          >
            <div className="cta-visual-glow" aria-hidden="true" />
            <div className="cta-visual-frame">
              <img
                className="cta-visual-img"
                src={bidcta11}
                alt="A live auction running on BidVerx"
                loading="lazy"
              />
              <span className="cta-visual-shine" aria-hidden="true" />
            </div>
            <span className="cta-visual-ring" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
