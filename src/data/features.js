import {
  BadgeCheck,
  Radio,
  ScanSearch,
  Gauge,
  ShieldCheck,
  Headset,
} from "lucide-react";
import bid1 from "../assets/bid1.jpg";
import bid2 from "../assets/bid2.jpg";
import bid3 from "../assets/bid3.png";
import bid4 from "../assets/bid4.png";
import bid5 from "../assets/bid5.png";
import bid6 from "../assets/bid6.png";

export const features = [
  {
    icon: Radio,
    title: "Live & Timed Auctions",
    text: "Host live-streamed, timed and hybrid auctions from a single dashboard.",
    image: bid1,
  },
  {
    icon: Gauge,
    title: "Real-Time Bidding Engine",
    text: "Handle thousands of simultaneous bidders with instant, lag-free bid updates.",
    image: bid2,
  },
  {
    icon: BadgeCheck,
    title: "Catalog & Lot Management",
    text: "Build beautiful catalogs, upload images and publish lots in minutes.",
    image: bid3,
  },
  {
    icon: ShieldCheck,
    title: "Bidder Management",
    text: "Register, verify and approve bidders with custom rules and deposits.",
    image: bid4,
  },
  {
    icon: ScanSearch,
    title: "Payments & Checkout",
    text: "Collect winning payments automatically — cards, transfers and your own terms.",
    image: bid5,
  },
  {
    icon: Headset,
    title: "Analytics & Support",
    text: "Track sales performance with live dashboards backed by a dedicated team.",
    image: bid6,
  },
];
