import Reveal from "../../components/Reveal";
import { features } from "../../data/features";
import "./style.css";

export default function Features() {
  return (
    <section id="features" className="section features">
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

        <div className="features-grid">
          {features.map((feature, i) => (
            <Reveal key={feature.title} variant="up" delay={(i % 3) * 100}>
              <article className="feature-card">
                <div className="feature-card-inner">
                  <span className="feature-icon">
                    <feature.icon size={23} aria-hidden="true" />
                  </span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-text">{feature.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
