import Ticker from "@/components/Ticker";
import HeroCountdown from "@/components/HeroCountdown";
import ParticipantsGrid from "@/components/ParticipantsGrid";
import HeadlineSection from "@/components/HeadlineSection";
import VSLSection from "@/components/VSLSection";
import GallerySection from "@/components/GallerySection";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MethodologySection from "@/components/MethodologySection";
import DeliverablesSection from "@/components/DeliverablesSection";
import PricingSection from "@/components/PricingSection";
import FacilitatorsSection from "@/components/FacilitatorsSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Ticker />
      <HeroCountdown />
      <ParticipantsGrid />
      <HeadlineSection />
      <VSLSection />
      <GallerySection />
      <ForWhoSection />
      <TestimonialsSection />
      <Ticker />
      <MethodologySection />
      <Ticker />
      <DeliverablesSection />
      <PricingSection />
      <FacilitatorsSection />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
