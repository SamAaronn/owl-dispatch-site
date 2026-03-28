import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GrainOverlay />
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
