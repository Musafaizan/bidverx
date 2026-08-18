import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "../../components/Reveal";
import { faqs } from "../../data/faq";
import "./style.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Questions, answered</span>
            <h2 className="section-title">
              Frequently Asked <span className="grad-text">Questions</span>
            </h2>
          </div>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} variant="up" delay={Math.min(i * 60, 300)}>
                <div className={`faq-item glass ${isOpen ? "faq-open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`} aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className="faq-panel"
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                  >
                    <div className="faq-panel-inner">
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
