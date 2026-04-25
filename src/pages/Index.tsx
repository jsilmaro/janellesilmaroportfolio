import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BookshelfSection from "@/components/BookshelfSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Forest background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/forest-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay — darker in dark mode, lighter tint in light mode */}
        <div
          className="absolute inset-0"
          style={{
            background:
              theme === "dark"
                ? "rgba(10, 14, 10, 0.72)"
                : "rgba(240, 245, 235, 0.60)",
          }}
        />
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BookshelfSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
