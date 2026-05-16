import profilePhoto from "@/assets/profile-photo.jpg";
import { MapPin, GraduationCap, ArrowRight, Mail } from "lucide-react";
import Typewriter from "@/components/Typewriter";

// Gold diamond divider — like the HL UI dividers
const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-0 ${className}`}>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(180,130,40,0.25), rgba(180,130,40,0.6))" }} />
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <rect x="5" y="5" width="10" height="10" transform="rotate(45 10 10)" stroke="#c8a030" strokeWidth="1" fill="rgba(200,160,50,0.15)" />
      <rect x="7.5" y="7.5" width="5" height="5" transform="rotate(45 10 10)" fill="#c8a030" opacity="0.6" />
    </svg>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(180,130,40,0.6), rgba(180,130,40,0.25), transparent)" }} />
  </div>
);

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
  >
    {/* Ambient golden orb */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
      style={{
        background: "radial-gradient(circle, rgba(180,120,30,1) 0%, transparent 65%)",
        filter: "blur(60px)",
      }}
    />

    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
      <div className="flex-1 text-center md:text-left">

        {/* Eyebrow label */}
        <p
          className="text-[11px] tracking-[0.45em] uppercase mb-6 animate-fade-in-up"
          style={{ color: "rgba(180,130,40,0.75)", fontFamily: "'Cinzel', serif" }}
        >
          ✦ &nbsp; Hello, I am &nbsp; ✦
        </p>

        {/* Name — HL gold metallic */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-2 animate-fade-in-up"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            animationDelay: "0.1s",
            filter: "drop-shadow(0 0 20px rgba(200,144,48,0.45))",
          }}
        >
          <Typewriter
            words={["Janelle B. Silmaro", "Web Developer", "UI/UX Designer", "CS Student"]}
            className=""
            cursorClassName="text-[#c8a030]"
            style={{
              background: "linear-gradient(180deg,#f5e070 0%,#c89030 22%,#e8c040 45%,#9a6818 68%,#d4a830 85%,#f0d060 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          />
        </h1>

        {/* HL-style diamond divider */}
        <GoldDivider className="mb-6 mt-4 max-w-sm mx-auto md:mx-0 animate-fade-in-up" />

        <p
          className="text-base md:text-lg max-w-xl mb-8 leading-relaxed animate-fade-in-up"
          style={{
            color: "rgba(220, 195, 140, 0.75)",
            fontFamily: "'IM Fell English', serif",
            animationDelay: "0.2s",
          }}
        >
          Computer Science student and developer focused on building clean,
          user-centered web experiences. Experienced with React, TypeScript,
          and back-end development — collaborating with teams to ship reliable,
          well-designed products.
        </p>

        {/* Meta info */}
        <div
          className="flex flex-col sm:flex-row items-center gap-5 text-xs mb-10 animate-fade-in-up"
          style={{ color: "rgba(180,140,70,0.65)", fontFamily: "'Cinzel', serif", animationDelay: "0.3s", letterSpacing: "0.08em" }}
        >
          <span className="flex items-center gap-2">
            <GraduationCap size={13} style={{ color: "rgba(200,160,60,0.8)" }} />
            USTP — Computer Science
          </span>
          <span className="hidden sm:block" style={{ color: "rgba(180,130,40,0.3)" }}>◆</span>
          <span className="flex items-center gap-2">
            <MapPin size={13} style={{ color: "rgba(200,160,60,0.8)" }} />
            Cagayan de Oro, Philippines
          </span>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="group px-7 py-3 text-xs font-semibold inline-flex items-center gap-2 transition-all duration-300"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.12em",
              background: "linear-gradient(135deg, rgba(160,110,25,0.9), rgba(100,65,12,0.9))",
              color: "rgba(245,225,140,0.95)",
              border: "1px solid rgba(180,130,40,0.55)",
              boxShadow: "0 0 24px rgba(160,110,25,0.3), inset 0 1px 0 rgba(220,170,60,0.2)",
            }}
          >
            View Projects
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 text-xs font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:bg-white/[0.03]"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.12em",
              color: "rgba(200,160,60,0.8)",
              border: "1px solid rgba(160,110,30,0.35)",
            }}
          >
            <Mail size={13} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile photo — gold ring with HL glow */}
      <div className="flex-shrink-0 relative animate-float">
        {/* Outer glow ring */}
        <div
          className="absolute inset-[-8px] rounded-full"
          style={{
            background: "transparent",
            boxShadow: "0 0 50px rgba(180,130,40,0.25), 0 0 100px rgba(160,110,25,0.10)",
          }}
        />
        <div
          className="w-56 h-56 md:w-72 md:h-72 rounded-full p-[2px]"
          style={{
            background: "linear-gradient(135deg, #f5e070 0%, #a07828 30%, #e8c040 55%, #7a5818 75%, #d4a830 100%)",
            boxShadow: "0 0 40px rgba(180,130,40,0.35)",
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "#070604" }}>
            <img
              src={profilePhoto}
              alt="Janelle Silmaro"
              width={288}
              height={288}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sparkle dots */}
        {[
          { top: "6%",  left: "86%", delay: "0s",   size: 6 },
          { top: "88%", left: "8%",  delay: "1.2s", size: 5 },
          { top: "18%", left: "2%",  delay: "2.1s", size: 4 },
          { top: "78%", left: "92%", delay: "0.7s", size: 5 },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: pos.top, left: pos.left,
              width: pos.size, height: pos.size,
              background: "radial-gradient(circle, #f5e070, #c8a030)",
              boxShadow: "0 0 8px rgba(200,160,50,0.8)",
              animationDelay: pos.delay,
            }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
