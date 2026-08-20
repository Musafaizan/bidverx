import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { scrollToId } from "../../utils/scroll";
import bidverxLogo from "../../assets/bidverx-logo.png";
import "./style.css";

const NAV_LINKS = [
  { id: "trust", label: "Trust" },
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Testimonials" },
  { id: "competitors", label: "Competitors" },
  { id: "faq", label: "FAQ" },
];

const SPY_IDS = ["home", "trust", "features", "testimonials", "competitors", "faq"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);

      const pos = window.scrollY + window.innerHeight * 0.32;
      let current = "home";
      SPY_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 120) {
        current = "faq";
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 120 : 0);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <button
          className="navbar-brand"
          onClick={() => goTo("home")}
          aria-label="BidVerx — back to top"
        >
          <img
            className="navbar-logo"
            src={bidverxLogo}
            alt=""
            aria-hidden="true"
            width={474}
            height={415}
          />
          <span className="navbar-name">
            BID<span className="grad-text">VERX</span>
          </span>
        </button>

        <nav className="navbar-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar-link ${active === link.id ? "active" : ""}`}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="btn btn-primary btn-sm navbar-cta" onClick={() => goTo("contact")}>
            Get Started
            <ArrowRight size={16} aria-hidden="true" />
          </button>
          <button
            className="navbar-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`navbar-mobile ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="navbar-mobile-links" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              className={`navbar-mobile-link ${active === link.id ? "active" : ""}`}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className="btn btn-primary navbar-mobile-cta" onClick={() => goTo("contact")}>
            Get Started
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}
