import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import contactBtn from "@/assets/contact-btn.png";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div
        className={`max-w-2xl mx-auto text-center relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free
          to reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground min-w-0">
            <Mail size={16} className="text-primary shrink-0" />
            <a href="mailto:silmaro.janelle84686@gmail.com" className="text-sm hover:text-foreground transition-colors break-all">
              silmaro.janelle84686@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground shrink-0">
            <Phone size={16} className="text-primary shrink-0" />
            <a href="tel:+639271537446" className="text-sm hover:text-foreground transition-colors">
              +63 927 153 7446
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
          <MapPin size={16} className="text-primary" />
          <span className="text-sm">Cagayan de Oro, Philippines</span>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/jsilmaro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full glass-card text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/janelle-silmaro-323852281/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full glass-card text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/janellesilmaro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-full glass-card text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Envelope landing anchor — the flying envelope snaps here on scroll */}
        <div id="envelope-anchor" className="flex items-center justify-center" style={{ minHeight: 100 }}>
          {/* This content is hidden until the flying envelope lands */}
          <a
            id="envelope-anchor-content"
            href="/resume.pdf"
            download
            aria-label="Download Resume"
            className="inline-flex flex-col items-center gap-2 group"
            style={{ opacity: 0, transition: "transform 0.3s ease" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px) scale(1.04)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
          >
            <div className="relative">
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-4 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)",
                  filter: "blur(6px)",
                }}
              />
              <img
                src={contactBtn}
                alt="Download Resume"
                className="h-20 w-auto object-contain relative z-10"
                style={{
                  filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.6)) drop-shadow(0 2px 4px rgba(0,0,0,0.4)) drop-shadow(0 0 12px rgba(212,175,55,0.25))",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLImageElement).style.filter =
                    "drop-shadow(0 10px 24px rgba(0,0,0,0.7)) drop-shadow(0 2px 6px rgba(0,0,0,0.5)) drop-shadow(0 0 22px rgba(212,175,55,0.45))")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLImageElement).style.filter =
                    "drop-shadow(0 6px 16px rgba(0,0,0,0.6)) drop-shadow(0 2px 4px rgba(0,0,0,0.4)) drop-shadow(0 0 12px rgba(212,175,55,0.25))")
                }
              />
            </div>
            <span
              className="text-xs tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: "#d4af37", fontFamily: "'Cinzel', serif" }}
            >
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
