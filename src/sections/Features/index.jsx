import Reveal from "../../components/Reveal";
import { features } from "../../data/features";
import "./style.css";

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="features-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">The BidVerx platform</span>
            <h2 className="section-title">
              Everything You Need to <span className="grad-text">Bid With Confidence</span>
            </h2>
            <p className="section-sub">
              A complete bidding experience — built for speed, built on trust.
            </p>
          </div>
        </Reveal>

        <div className="features-stack">
          {features.map((feature, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={feature.title}
                className={`feature-row ${flip ? "feature-row-flip" : ""}`}
              >
                <Reveal
                  variant={flip ? "right" : "left"}
                  className="feature-media-wrap"
                >
                  <div className="feature-media">
                    <img
                      className="feature-media-img"
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                    />
                    <span className="feature-media-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="feature-media-shine" aria-hidden="true" />
                  </div>
                </Reveal>

                <Reveal
                  variant={flip ? "left" : "right"}
                  delay={150}
                  className="feature-body-wrap"
                >
                  <div className="feature-body">
                    <span className="feature-icon">
                      <feature.icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-text">{feature.text}</p>
                    <span className="feature-tag">BidVerx · Feature {i + 1}</span>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}