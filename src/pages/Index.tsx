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
      {/* Plain professional background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(ellipse 80% 60% at 20% 0%, hsl(80 30% 22% / 0.45) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 80% 100%, hsl(28 35% 22% / 0.40) 0%, transparent 65%), hsl(30 12% 8%)"
                : "radial-gradient(ellipse 80% 60% at 20% 0%, hsl(80 30% 80% / 0.55) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 80% 100%, hsl(28 40% 82% / 0.50) 0%, transparent 65%), hsl(40 30% 96%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)",
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
