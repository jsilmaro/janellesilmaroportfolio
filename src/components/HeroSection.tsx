import profilePhoto from "@/assets/profile-photo.jpg";
import { MapPin, GraduationCap, ArrowRight, Mail } from "lucide-react";
import Typewriter from "@/components/Typewriter";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
      <div className="flex-1 text-center md:text-left">
        <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4 animate-fade-in-up">
          Hello, I am
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Typewriter
            words={["Janelle B. Silmaro", "a Web Developer", "a UI/UX Designer", "a CS Student"]}
            className="text-gradient"
            cursorClassName="text-primary"
          />
        </h1>
        <p
          className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Computer Science student and developer focused on building clean, user-centered web
          experiences. Experienced with React, TypeScript, and back-end development — collaborating
          with teams to ship reliable, well-designed products.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center gap-5 text-sm text-muted-foreground mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="flex items-center gap-2">
            <GraduationCap size={15} className="text-primary" />
            USTP — Computer Science
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} className="text-primary" />
            Cagayan de Oro, Philippines
          </span>
        </div>
        <div
          className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="group px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Mail size={15} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile photo — clean, minimal */}
      <div className="flex-shrink-0 relative">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-[2px] relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-60" />
          <div className="relative w-full h-full rounded-full bg-background overflow-hidden ring-1 ring-border">
            <img
              src={profilePhoto}
              alt="Janelle Silmaro"
              width={288}
              height={288}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
