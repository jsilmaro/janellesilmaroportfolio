import { Code2, Palette, BookOpen, Megaphone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { icon: Code2, label: "Web Development", desc: "React, TypeScript, Back-End" },
  { icon: Palette, label: "UI/UX Design", desc: "Clean interfaces, User-first" },
  { icon: Megaphone, label: "Social Media", desc: "Content, Design, Strategy" },
  { icon: BookOpen, label: "Continuous Learner", desc: "CS Student, Avid Reader" },
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary text-center mb-3">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          A bit about <span className="text-gradient">me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          I'm a 3rd-year Computer Science student at USTP, passionate about building things for the
          web, designing clean user experiences, and continuously learning new technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.label}
              className={`glass-card p-6 hover:-translate-y-1 transition-all duration-300 cursor-default group rounded-xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 80 + 200}ms` : "0ms" }}
            >
              <div className="w-11 h-11 mb-4 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">{s.label}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
