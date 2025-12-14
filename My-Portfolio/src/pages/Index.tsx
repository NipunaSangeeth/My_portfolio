import FloatingOrbs from '@/components/FloatingOrbs';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
// import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Floating gradient orbs */}
      <FloatingOrbs />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        {/* <ServicesSection /> */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
