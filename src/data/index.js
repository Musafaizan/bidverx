import {
  Gavel,
  Warehouse,
  ShieldCheck,
  KeyRound,
  Package,
  Zap,
  Factory,
  Landmark,
  BadgeCheck,
  Radio,
  ScanSearch,
  Gauge,
  Headset,
} from "lucide-react";
import bid1 from "../assets/bid1.jpg";
import bid2 from "../assets/bid2.jpg";
import bid3 from "../assets/bid3.png";
import bid4 from "../assets/bid4.png";
import bid5 from "../assets/bid5.png";
import bid6 from "../assets/bid6.png";

export const logos = [
  { name: "Harrington House", icon: Gavel },
  { name: "Meridian Auction Group", icon: Warehouse },
  { name: "Vantage Estate Sales", icon: ShieldCheck },
  { name: "Crown & Co.", icon: KeyRound },
  { name: "Summit Auctioneers", icon: Package },
  { name: "Lakeshore House", icon: Zap },
  { name: "Brightfield Auctions", icon: Factory },
  { name: "Northgate House", icon: Landmark },
];

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

export const testimonials = [
  {
    name: "Ahmed Khan",
    location: "Lahore, Pakistan",
    rating: 5,
    item: "Estate liquidation · 120 lots",
    quote:
      "We used to run sales over phone calls and spreadsheets. With BidVerx, our last estate sale sold 120 lots in two days — fully online, fully tracked.",
  },
  {
    name: "Sara Malik",
    location: "Karachi, Pakistan",
    rating: 5,
    item: "Antiques sale · 80 lots",
    quote:
      "The catalog tool alone saved us a week of work. We uploaded the entire antique collection in an afternoon and our bidders loved how clean it looked.",
  },
  {
    name: "Daniel Foster",
    location: "Dubai, UAE",
    rating: 5,
    item: "Vehicle auction · 45 cars",
    quote:
      "Live bidding changed everything for our car auctions. Hundreds of bidders joined without a single drop, and payments settled automatically that week.",
  },
  {
    name: "Emily Carter",
    location: "London, UK",
    rating: 4,
    item: "Monthly furniture sale",
    quote:
      "Onboarding was genuinely simple. The BidVerx team walked us through our first sale, and support answers within minutes every single time.",
  },
  {
    name: "Marcus Reed",
    location: "Austin, USA",
    rating: 5,
    item: "Coins & collectibles sale",
    quote:
      "I've watched other houses struggle with clunky software. BidVerx feels like a different league — cleaner, faster and our turnout keeps growing.",
  },
  {
    name: "Lena Hoffmann",
    location: "Berlin, Germany",
    rating: 5,
    item: "Camera gear auction",
    quote:
      "As a small house I was nervous about going digital, but the process was so smooth. Our camera gear auction ended over 30% above estimate.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For new houses testing the waters.",
    features: [
      "Up to 50 lots per sale",
      "Timed auctions",
      "Up to 200 registered bidders",
      "Email support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "For growing houses ready to sell more.",
    features: [
      "Unlimited lots",
      "Live & hybrid auctions",
      "Automated payments & checkout",
      "Bidder verification & deposits",
      "Custom branding",
      "Priority email support",
    ],
    cta: "Choose Professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "per month",
    description: "For established auction groups.",
    features: [
      "Everything in Professional",
      "White-label domain & site",
      "API & integrations",
      "Advanced analytics",
      "Dedicated account manager",
    ],
    cta: "Go Enterprise",
    highlighted: false,
  },
];

export const faqs = [
  {
    q: "How does BidVerx work?",
    a: "BidVerx is a complete auction platform for bid houses and auctioneers. Set up your house once — catalog your lots, schedule a sale and go live. BidVerx handles registration, real-time bidding, payments and reporting end to end.",
  },
  {
    q: "Do I need any technical skills to launch?",
    a: "No. You can create your own branded auction site without writing a line of code. Upload your inventory, add your logo and publish your first sale in days — our onboarding team sets everything up with you.",
  },
  {
    q: "Can I run auctions under my own brand?",
    a: "Yes. Professional and Enterprise plans let you fully customize your house: your logo, colors and domain, so your bidders buy from you — not from a generic marketplace.",
  },
  {
    q: "What types of auctions can I run?",
    a: "Live-streamed, timed and hybrid auctions, plus buy-now listings. You can also schedule multi-session sales, run previews and manage absentee bidding from one dashboard.",
  },
  {
    q: "How are payments handled?",
    a: "BidVerx collects winning payments automatically through secure gateways — cards, bank transfers and your own in-house terms. Funds settle directly to your account on your schedule.",
  },
  {
    q: "What fees does BidVerx charge?",
    a: "No commission on your sales. Plans are a flat monthly subscription, and the Starter plan is free. You only pay when you upgrade for unlimited lots and advanced features.",
  },
  {
    q: "Can I import my existing inventory?",
    a: "Yes. Bulk import your lots from CSV or Excel in minutes, or use the API on Enterprise plans to sync directly from your existing systems.",
  },
  {
    q: "How will my bidders get support?",
    a: "Your bidders enjoy a smooth, simple experience, and every plan includes our support. Professional and Enterprise plans add priority support plus a dedicated account manager.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. You can start, pause or cancel anytime. We keep you because your auctions perform, not because you are locked in.",
  },
];