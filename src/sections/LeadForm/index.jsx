import { useState } from "react";
import {
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
  BadgeCheck,
  Radio,
  Headset,
  RotateCcw,
} from "lucide-react";
import Reveal from "../../components/Reveal";
import { submitLead } from "../../services/leadService";
import "./style.css";

const POINTS = [
  { icon: BadgeCheck, text: "Verified lots from trusted auction sources" },
  { icon: Radio, text: "Real-time bidding on live auctions" },
  { icon: Headset, text: "Dedicated support at every step" },
];

const CATEGORIES = [
  "Antiques & Collectibles",
  "Art & Design",
  "Electronics & Tech",
  "Jewelry & Watches",
  "Vehicles",
  "Real Estate",
  "Furniture & Home",
  "Other",
];

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", category: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.category) next.category = "Please choose a category.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    try {
      await submitLead({
        name: form.name.trim(),
        email: form.email.trim(),
        category: form.category,
        message: form.message.trim(),
      });
      setStatus("success");
    } catch {
      setErrors({ form: "Something went wrong. Please try again or email us directly." });
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="section leadform">
      <div className="leadform-glow" aria-hidden="true" />

      <div className="container leadform-inner">
        <Reveal variant="left">
          <div className="leadform-copy">
            <span className="eyebrow">Get started today</span>
            <h2 className="leadform-title">
              Ready to Win Your <span className="grad-text">Next Lot?</span>
            </h2>
            <p className="leadform-text">
              Tell us what you're looking for and our team will help you get
              started — from your first registration to your first winning bid.
            </p>
            <ul className="leadform-points">
              {POINTS.map((point) => (
                <li key={point.text}>
                  <span className="leadform-point-icon">
                    <point.icon size={15} aria-hidden="true" />
                  </span>
                  {point.text}
                </li>
              ))}
            </ul>
            <div className="leadform-contact">
              Prefer email?{" "}
              <a className="leadform-mail" href="mailto:bidverx@gmail.com">
                <Mail size={14} aria-hidden="true" />
                bidverx@gmail.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="leadform-card glass">
            {status === "success" ? (
              <div className="leadform-success">
                <span className="leadform-success-icon">
                  <CheckCircle2 size={36} aria-hidden="true" />
                </span>
                <h3 className="leadform-success-title">You're all set!</h3>
                <p className="leadform-success-text">
                  Thanks, <strong>{form.name.split(" ")[0]}</strong>. Your details
                  have been received and our team will contact you shortly.
                </p>
                <p className="leadform-success-note">
                  In the meantime, explore live auctions on{" "}
                  <a href="mailto:bidverx@gmail.com">bidverx@gmail.com</a>
                </p>
                <button
                  type="button"
                  className="btn btn-outline leadform-resubmit"
                  onClick={() => {
                    setForm({ name: "", email: "", category: "", message: "" });
                    setErrors({});
                    setStatus("idle");
                  }}
                >
                  <RotateCcw size={15} aria-hidden="true" />
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form className="leadform-form" onSubmit={handleSubmit} noValidate>
                {errors.form && (
                  <div className="leadform-error" role="alert">
                    <AlertCircle size={16} aria-hidden="true" />
                    {errors.form}
                  </div>
                )}

                <div className="leadform-row">
                  <div className="leadform-field">
                    <label className="leadform-label" htmlFor="lead-name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      id="lead-name"
                      className={`leadform-input ${errors.name ? "leadform-input-error" : ""}`}
                      name="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <p className="leadform-errortext">{errors.name}</p>}
                  </div>

                  <div className="leadform-field">
                    <label className="leadform-label" htmlFor="lead-email">
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="lead-email"
                      className={`leadform-input ${errors.email ? "leadform-input-error" : ""}`}
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <p className="leadform-errortext">{errors.email}</p>}
                  </div>
                </div>

                <div className="leadform-field">
                  <label className="leadform-label" htmlFor="lead-category">
                    What are you interested in? <span>*</span>
                  </label>
                  <select
                    id="lead-category"
                    className={`leadform-input leadform-select ${
                      errors.category ? "leadform-input-error" : ""
                    }`}
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p className="leadform-errortext">{errors.category}</p>}
                </div>

                <div className="leadform-field">
                  <label className="leadform-label" htmlFor="lead-message">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="lead-message"
                    className="leadform-input leadform-textarea"
                    name="message"
                    placeholder="Tell us about the lots or auctions you're interested in..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="btn btn-primary leadform-submit"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="leadform-spin" size={17} aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    "Request Consultation"
                  )}
                </button>

                <p className="leadform-privacy">
                  By submitting, you agree to be contacted about BidVerx
                  auctions. We never share your details.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}