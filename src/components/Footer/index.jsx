import { Mail, ArrowUpRight } from "lucide-react";
import { scrollToId } from "../../utils/scroll";
import bidverxLogo from "../../assets/bidverx-logo.png";
import "./style.css";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5.98 5.98 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { id: "trust", label: "Trust" },
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Testimonials" },
  { id: "competitors", label: "Competitors" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Get Started" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/bidver.x", icon: InstagramIcon },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1ETm5AkA1h/",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/showcase/bidverx/?viewAsMember=true",
    icon: LinkedinIcon,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-name">
                BID<span className="grad-text">VERX</span>
              </span>
              <img
                className="footer-logo-img"
                src={bidverxLogo}
                alt=""
                aria-hidden="true"
                width={474}
                height={415}
              />
            </div>
            <p className="footer-desc">
              Smarter auctions. Bigger sales. Trusted platform.
            </p>
            <div className="footer-socials">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social"
                  aria-label={social.label}
                >
                  <social.icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-col" aria-label="Footer navigation">
            <h4 className="footer-title">Navigate</h4>
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.id}
                className="footer-link"
                onClick={() => scrollToId(link.id)}
              >
                {link.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            ))}
          </nav>

          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <a className="footer-link footer-mail" href="mailto:bidverx@gmail.com">
              <Mail size={15} aria-hidden="true" />
              bidverx@gmail.com
            </a>
            <p className="footer-note">
              Questions about launching or growing your auction house on
              BidVerx? Reach out anytime — our team responds fast.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BidVerx. All rights reserved.</p>
          <p className="footer-tagline">Run Smarter. Sell More.</p>
        </div>
      </div>
    </footer>
  );
}
