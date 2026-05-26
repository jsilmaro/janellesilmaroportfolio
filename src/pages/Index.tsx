import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BookshelfSection from "@/components/BookshelfSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import FlyingEnvelope from "@/components/FlyingEnvelope";
import aboutBg from "@/assets/about-bg.jpg";
import experienceBg from "@/assets/experience-bg.jpg";
import skillsBg from "@/assets/skills-bg.jpg";
import projectsBg from "@/assets/projects-bg.jpg";
import bookshelfBg from "@/assets/bookshelf-bg.jpg";
import contactBg from "@/assets/contacts-bg.png";

// Reusable section wrapper — bg image fades in from top, clear middle, fades to midnight at bottom
const SectionBg = ({
  image,
  children,
  dimAmount = 0.55,
}: {
  image: string;
  children: React.ReactNode;
  dimAmount?: number;
}) => (
  <div className="relative">
    {/* Background image — fixed/parallax */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    />

    {/* Base dark overlay */}
    <div
      className="absolute inset-0 -z-10"
      style={{ background: `rgba(4,3,2,${dimAmount})` }}
    />

    {/* Top fade — matches video shadow color */}
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none z-10"
      style={{
        height: "55%",
        background: "linear-gradient(to bottom, rgba(4,3,2,1) 0%, rgba(4,3,2,0.95) 20%, rgba(4,3,2,0.7) 45%, rgba(4,3,2,0.2) 75%, transparent 100%)",
      }}
    />

    {/* Bottom fade — same warm black */}
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
      style={{
        height: "30%",
        background: "linear-gradient(to top, rgba(4,3,2,1) 0%, rgba(4,3,2,0.4) 50%, transparent 100%)",
      }}
    />

    {/* Content */}
    <div className="relative z-10">{children}</div>
  </div>
);

const STARS = Array.from({ length: 140 }, (_, i) => ({
  top: ((i * 137.508) % 100).toFixed(2),
  left: ((i * 97.314) % 100).toFixed(2),
  size: (((i * 31) % 2) + 0.8).toFixed(1),
  delay: ((i * 0.19) % 5).toFixed(2),
  duration: (((i * 53) % 3) + 2.5).toFixed(1),
}));

const Index = () => (
  <div className="relative min-h-screen text-foreground">

    {/* ── Hero: video background (fixed, only behind hero) ── */}
    <div className="relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#070604]" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg-video.mp4"
          autoPlay loop muted playsInline
        />
        <div className="absolute inset-0" style={{ background: "rgba(4, 3, 2, 0.47)0)" }} />

        {/* Stars */}
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${s.top}%`, left: `${s.left}%`,
              width: `${s.size}px`, height: `${s.size}px`,
              animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s`,
            }}
          />
        ))}

        {/* SVG corner ornaments */}
        <svg className="absolute top-0 left-0 pointer-events-none" width="220" height="220" viewBox="0 0 220 220" fill="none" style={{ opacity: 0.55 }}>
          <path d="M8 8 L8 180 Q8 212 40 212 L180 212" stroke="url(#gold1)" strokeWidth="1" fill="none"/>
          <path d="M20 20 C 20 20, 60 30, 55 70 C 50 110, 90 100, 85 140" stroke="url(#gold1)" strokeWidth="0.8" fill="none"/>
          <path d="M20 20 C 40 15, 80 35, 70 65" stroke="url(#gold1)" strokeWidth="0.8" fill="none"/>
          <circle cx="8" cy="8" r="3" fill="#c8a030" opacity="0.8"/>
          <defs>
            <linearGradient id="gold1" x1="0" y1="0" x2="220" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e8c84a" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#a07828" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#c8a030" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 right-0 pointer-events-none" width="220" height="220" viewBox="0 0 220 220" fill="none" style={{ opacity: 0.55 }}>
          <path d="M212 212 L212 40 Q212 8 180 8 L40 8" stroke="url(#gold2)" strokeWidth="1" fill="none"/>
          <path d="M200 200 C 200 200, 160 190, 165 150 C 170 110, 130 120, 135 80" stroke="url(#gold2)" strokeWidth="0.8" fill="none"/>
          <circle cx="212" cy="212" r="3" fill="#c8a030" opacity="0.8"/>
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

      {/* Dark fog closing at the bottom of hero */}
      <div
        className="relative z-10 h-40 -mt-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #000000 100%)" }}
      />
    </div>

    {/* ── About: magical forest scene ── */}
    <SectionBg image={aboutBg} dimAmount={0.45}>
      <AboutSection />
    </SectionBg>

    {/* ── Experience + Skills — shared bg ── */}
    <SectionBg image={experienceBg} dimAmount={0.55}>
      <ExperienceSection />
      <SkillsSection />
    </SectionBg>

    {/* ── Projects ── */}
    <SectionBg image={projectsBg} dimAmount={0.55}>
      <ProjectsSection />
    </SectionBg>

    {/* ── Bookshelf ── */}
    <SectionBg image={bookshelfBg} dimAmount={0.50}>
      <BookshelfSection />
    </SectionBg>

    {/* ── Contact + Footer ── */}
    <SectionBg image={contactBg} dimAmount={0.55}>
      <ContactSection />
      <Footer />
    </SectionBg>

    <MusicPlayer />
    <FlyingEnvelope />

  </div>
);

export default Index;
