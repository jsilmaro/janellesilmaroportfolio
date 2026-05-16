import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BookshelfSection from "@/components/BookshelfSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const STARS = Array.from({ length: 140 }, (_, i) => ({
  top: ((i * 137.508) % 100).toFixed(2),
  left: ((i * 97.314) % 100).toFixed(2),
  size: (((i * 31) % 2) + 0.8).toFixed(1),
  delay: ((i * 0.19) % 5).toFixed(2),
  duration: (((i * 53) % 3) + 2.5).toFixed(1),
}));

const Index = () => (
  <div className="relative min-h-screen text-foreground">
    {/* ── Video background ── */}
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fallback black base */}
      <div className="absolute inset-0 bg-[#070604]" />

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(4, 3, 2, 0.75)" }}
      />

      {/* Keep the golden atmospheric glow on top */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(160, 100, 20, 0.15) 0%, rgba(100, 60, 10, 0.06) 50%, transparent 75%)",
        }}
      />

      {/* Stars */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* SVG ornamental corner — top-left (eagle/phoenix style lines) */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        width="220" height="220" viewBox="0 0 220 220"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.55 }}
      >
        <path d="M8 8 L8 180 Q8 212 40 212 L180 212" stroke="url(#gold1)" strokeWidth="1" fill="none"/>
        <path d="M8 8 L8 80" stroke="url(#gold1)" strokeWidth="0.5" fill="none"/>
        <path d="M20 20 C 20 20, 60 30, 55 70 C 50 110, 90 100, 85 140" stroke="url(#gold1)" strokeWidth="0.8" fill="none"/>
        <path d="M20 20 C 40 15, 80 35, 70 65" stroke="url(#gold1)" strokeWidth="0.8" fill="none"/>
        <path d="M35 8 C 55 25, 45 55, 65 60 C 85 65, 75 90, 90 95" stroke="url(#gold1)" strokeWidth="0.6" fill="none"/>
        <circle cx="8" cy="8" r="3" fill="#c8a030" opacity="0.8"/>
        <circle cx="8" cy="212" r="2" fill="#c8a030" opacity="0.6"/>
        <circle cx="180" cy="212" r="2" fill="#c8a030" opacity="0.6"/>
        <defs>
          <linearGradient id="gold1" x1="0" y1="0" x2="220" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e8c84a" stopOpacity="0.9"/>
            <stop offset="50%" stopColor="#a07828" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#c8a030" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
      </svg>

      {/* SVG ornamental corner — bottom-right */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none"
        width="220" height="220" viewBox="0 0 220 220"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.55 }}
      >
        <path d="M212 212 L212 40 Q212 8 180 8 L40 8" stroke="url(#gold2)" strokeWidth="1" fill="none"/>
        <path d="M200 200 C 200 200, 160 190, 165 150 C 170 110, 130 120, 135 80" stroke="url(#gold2)" strokeWidth="0.8" fill="none"/>
        <path d="M200 200 C 180 205, 140 185, 150 155" stroke="url(#gold2)" strokeWidth="0.8" fill="none"/>
        <circle cx="212" cy="212" r="3" fill="#c8a030" opacity="0.8"/>
        <circle cx="212" cy="8" r="2" fill="#c8a030" opacity="0.6"/>
        <circle cx="40" cy="8" r="2" fill="#c8a030" opacity="0.6"/>
        <defs>
          <linearGradient id="gold2" x1="220" y1="220" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e8c84a" stopOpacity="0.9"/>
            <stop offset="50%" stopColor="#a07828" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#c8a030" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
      </svg>
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

export default Index;
