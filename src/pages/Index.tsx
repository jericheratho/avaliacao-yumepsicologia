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
    <div className="min-h-screen relative">
      {/* Decorative gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-sage-light/30 blur-[120px] animate-float-blob" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[150px] animate-float-blob-2" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-warm/10 blur-[120px] animate-float-blob-3" />
        <div className="absolute -bottom-20 right-1/3 w-[450px] h-[450px] rounded-full bg-sage/15 blur-[130px] animate-float-blob" />
      </div>

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