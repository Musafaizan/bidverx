import { Check, Sparkles } from "lucide-react";
import Reveal from "../../components/Reveal";
import { pricing } from "../../data";
import { scrollToId } from "../../utils/scroll";
import "./style.css";

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Plans for every house</span>
            <h2 className="section-title">
              Choose Your <span className="grad-text">Auction Plan</span>
            </h2>
            <p className="section-sub">
              Start free, scale as you grow. No hidden fees, no commission on your sales.
            </p>
          </div>
        </Reveal>

        <div className="pricing-grid">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} variant="up" delay={i * 110}>
              <article className={`price-card ${plan.highlighted ? "price-card-featured" : ""}`}>
                {plan.highlighted && (
                  <span className="price-badge">
                    <Sparkles size={13} aria-hidden="true" />
                    Most Popular
                  </span>
                )}
                <h3 className="price-name">{plan.name}</h3>
                <div className="price-amount">
                  <span className="price-value">{plan.price}</span>
                  <span className="price-period">/ {plan.period}</span>
                </div>
                <p className="price-desc">{plan.description}</p>
                <ul className="price-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="price-check">
                        <Check size={13} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn price-btn ${plan.highlighted ? "btn-primary" : "btn-outline"}`}
                  onClick={() => scrollToId("contact")}
                >
                  {plan.cta}
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
