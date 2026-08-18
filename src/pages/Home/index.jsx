import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../sections/Hero";
import Trust from "../../sections/Trust";
import CTA from "../../sections/CTA";
import Features from "../../sections/Features";
import Testimonials from "../../sections/Testimonials";
import Competitors from "../../sections/Competitors";
import CTA2 from "../../sections/CTA2";
import Pricing from "../../sections/Pricing";
import FAQ from "../../sections/FAQ";
import LeadForm from "../../sections/LeadForm";
import "./style.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <CTA />
        <Features />
        <Testimonials />
        <Competitors />
        <CTA2 />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
