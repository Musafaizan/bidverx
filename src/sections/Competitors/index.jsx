import { Check, X, ChevronRight, Crown } from "lucide-react";
import Reveal from "../../components/Reveal";
import "./style.css";

const ROWS = [
  { label: "Ready-Made Platform", bidverx: "Yes", trad: "No", other: "Sometimes" },
  { label: "Live & Timed Auctions", bidverx: "Yes", trad: "Limited", other: "Yes" },
  { label: "Automated Payments", bidverx: "Yes", trad: "No", other: "Limited" },
  { label: "Bidder Management", bidverx: "Yes", trad: "Limited", other: "Sometimes" },
  { label: "White-Label Branding", bidverx: "Yes", trad: "Yes", other: "No" },
  { label: "No Commission Fees", bidverx: "Yes", trad: "No", other: "No" },
  { label: "Dedicated Support", bidverx: "Yes", trad: "Limited", other: "Limited" },
];

function Cell({ value, best }) {
  if (value === "Yes") {
    return (
      <td className={`comp-cell ${best ? "comp-best-cell" : ""}`}>
        <span className={`comp-check ${best ? "comp-check-best" : ""}`}>
          <Check size={14} strokeWidth={3} aria-hidden="true" />
        </span>
        Yes
      </td>
    );
  }
  if (value === "No") {
    return (
      <td className="comp-cell">
        <span className="comp-x">
          <X size={14} strokeWidth={3} aria-hidden="true" />
        </span>
        No
      </td>
    );
  }
  return <td className={`comp-cell ${best ? "comp-best-cell" : ""}`}>{value}</td>;
}

export default function Competitors() {
  return (
    <section id="competitors" className="section competitors">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">The difference</span>
            <h2 className="section-title">
              Why <span className="grad-text">BidVerx?</span>
            </h2>
            <p className="section-sub">The smarter way to run your bidding business.</p>
          </div>
        </Reveal>

        <Reveal variant="up">
          <div className="comp-scroll" role="region" aria-label="BidVerx comparison table" tabIndex={0}>
            <table className="comp-table">
              <thead>
                <tr>
                  <th scope="col" className="comp-head-label">
                    Feature
                  </th>
                  <th scope="col" className="comp-head-bidverx">
                    <Crown size={15} aria-hidden="true" />
                    BidVerx
                  </th>
                  <th scope="col" className="comp-head-plain">In-House Custom Build</th>
                  <th scope="col" className="comp-head-plain">Offline-Only Auctions</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="comp-row-label">{row.label}</th>
                    <Cell value={row.bidverx} best />
                    <Cell value={row.trad} />
                    <Cell value={row.other} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal variant="up" delay={150}>
          <p className="comp-note">
            <ChevronRight size={14} aria-hidden="true" />
            Every feature on BidVerx is built around one thing — growing your auction business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
