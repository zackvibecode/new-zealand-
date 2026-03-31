import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Attractions from "@/components/Attractions";
import Experience from "@/components/Experience";
import Itinerary from "@/components/Itinerary";
import Included from "@/components/Included";
import Pricing from "@/components/Pricing";
import TrustSection from "@/components/TrustSection";
import Payment from "@/components/Payment";
import Urgency from "@/components/Urgency";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyBar from "@/components/StickyBar";
import ScrollAnimations from "@/components/ScrollAnimations";
import EditModeController from "@/components/EditModeController";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Attractions />
        <Experience />
        <Itinerary />
        <Included />
        <Pricing />
        <TrustSection />
        <Payment />
        <Urgency />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyBar />
      <EditModeController />
    </>
  );
}
