import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IdentificationSection from "@/components/IdentificationSection";
import AssessmentSection from "@/components/AssessmentSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <IdentificationSection />
      <AssessmentSection />
      <SpecialtiesSection />
      <ProcessSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
