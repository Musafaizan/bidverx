import { useRef } from "react";
import { Star, MapPin, ChevronLeft, ChevronRight, Gavel } from "lucide-react";
import Reveal from "../../components/Reveal";
import { testimonials } from "../../data/testimonials";
import "./style.css";

function Stars({ count }) {
  return (
    <div className="test-stars" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          className={i < count ? "star-on" : "star-off"}
          fill={i < count ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".test-card");
    const amount = card ? card.getBoundingClientRect().width + 24 : 380;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">House success stories</span>
            <h2 className="section-title">
              Auction Houses That <span className="grad-text">Run on BidVerx</span>
            </h2>
            <p className="section-sub">
              Real houses, real sales, real growth.
            </p>
          </div>
        </Reveal>

        <div className="test-carousel">
          <Reveal variant="up">
            <div className="test-track" ref={trackRef}>
              {testimonials.map((t) => (
                <article className="test-card glass" key={t.name}>
                  <div className="test-head">
                    <div className="test-avatar" aria-hidden="true">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="test-name">{t.name}</h3>
                      <p className="test-location">
                        <MapPin size={12} aria-hidden="true" />
                        {t.location}
                      </p>
                    </div>
                  </div>
                  <Stars count={t.rating} />
                  <p className="test-quote">“{t.quote}”</p>
                  <div className="test-vehicle">
                    <Gavel size={14} aria-hidden="true" />
                    Sold: {t.item}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <div className="test-controls">
            <button
              className="test-arrow"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              className="test-arrow"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonials"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
