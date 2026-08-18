import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "../../components/Reveal";
import { scrollToId } from "../../utils/scroll";
import bidverxHammer from "../../assets/bidverx-hammer.png";
import "./style.css";

const STATS = [
  { value: "120K+", label: "Bids Placed" },
  { value: "45K+", label: "Lots Verified" },
  { value: "850+", label: "Auction Sources" },
  { value: "$2.4B", label: "Auction Volume" },
];

export default function Hero() {
  const visualRef = useRef(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY, 900);
      setParallax(y * -0.07);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal variant="up">
            <span className="hero-badge">
              <span className="pulse-dot" aria-hidden="true" />
              Trusted Live Auctions
            </span>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h1 className="hero-title">
              Bid Smarter.
              <br />
              <span className="grad-text">Win More.</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="hero-sub">
              Discover verified lots, compete in trusted auctions, and win
              with confidence.
            </p>
          </Reveal>

          <Reveal variant="up" delay={300}>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollToId("contact")}>
                Start Bidding
                <ArrowRight size={17} aria-hidden="true" />
              </button>
              <button className="btn btn-outline" onClick={() => scrollToId("features")}>
                Explore How It Works
                <ChevronDown size={17} aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          <Reveal variant="up" delay={420}>
            <div className="hero-stats">
              {STATS.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={250} className="hero-visual-reveal">
          <div className="hero-visual" ref={visualRef} style={{ transform: `translateY(${parallax}px)` }}>
            <div className="hero-hammer-wrap">
              <img
                className="hero-hammer"
                src={bidverxHammer}
                alt="Bidding hammer"
                width={310}
                height={278}
              />
              <span className="hero-hammer-ring" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>

      <button className="hero-scroll" onClick={() => scrollToId("trust")} aria-label="Scroll to trust section">
        <span className="hero-scroll-label">Scroll</span>
        <ChevronDown size={16} aria-hidden="true" />
      </button>
    </section>
  );
}
