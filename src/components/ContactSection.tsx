import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail size={16} className="text-primary" />
            <a href="mailto:silmaro.janelle84686@gmail.com" className="text-sm hover:text-foreground transition-colors">
              silmaro.janelle84686@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone size={16} className="text-primary" />
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

        <a
          href="mailto:silmaro.janelle84686@gmail.com"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300"
        >
          Say Hello
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
