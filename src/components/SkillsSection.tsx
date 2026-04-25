import {
  Code2,
  Zap,
  Figma,
  Palette,
  Globe,
  Layout,
  Github,
  Database,
  Server,
  Braces,
  type LucideIcon,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Level = "Advanced" | "Proficient" | "Intermediate" | "Familiar";

interface Skill {
  name: string;
  icon: LucideIcon;
  level: Level;
  percent: number;
  category: "Frontend" | "Design" | "CMS" | "Backend" | "Tools";
  projects: { label: string; href: string }[];
}

const skills: Skill[] = [
  {
    name: "React",
    icon: Code2,
    level: "Advanced",
    percent: 90,
    category: "Frontend",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "TypeScript",
    icon: Braces,
    level: "Proficient",
    percent: 50,
    category: "Frontend",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "Vite",
    icon: Zap,
    level: "Proficient",
    percent: 80,
    category: "Frontend",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "HTML / CSS",
    icon: Layout,
    level: "Intermediate",
    percent: 40,
    category: "Frontend",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "Figma",
    icon: Figma,
    level: "Proficient",
    percent: 70,
    category: "Design",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "Canva",
    icon: Palette,
    level: "Advanced",
    percent: 90,
    category: "Design",
    projects: [{ label: "Social Media Designs", href: "#projects" }],
  },
  {
    name: "WordPress",
    icon: Globe,
    level: "Intermediate",
    percent: 60,
    category: "CMS",
    projects: [],
  },
  {
    name: "Wix",
    icon: Layout,
    level: "Intermediate",
    percent: 72,
    category: "CMS",
    projects: [],
  },
  {
    name: "GitHub",
    icon: Github,
    level: "Proficient",
    percent: 85,
    category: "Tools",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Neon PostgreSQL",
    icon: Database,
    level: "Proficient",
    percent: 80,
    category: "Backend",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Back-End Concepts",
    icon: Server,
    level: "Proficient",
    percent: 78,
    category: "Backend",
    projects: [
      { label: "Capstone Archiving System", href: "https://capsortustpcdo.vercel.app/" },
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
];

const levelStyles: Record<Level, string> = {
  Advanced: "bg-primary/15 text-primary border-primary/25",
  Proficient: "bg-accent/15 text-accent border-accent/25",
  Intermediate: "bg-secondary text-secondary-foreground border-border",
  Familiar: "bg-muted text-muted-foreground border-border",
};

const SkillsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary text-center mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Tools and technologies I work with, along with related projects where
          I've put them into practice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className={`glass-card p-5 rounded-xl group transition-all duration-300 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 60 + 150}ms` : "0ms" }}
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm truncate">{s.name}</h3>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                      {s.category}
                    </p>
                  </div>
                </div>
                <span
                  className={`shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full border ${levelStyles[s.level]}`}
                >
                  {s.level}
                </span>
              </div>

              <div className="mb-4">
                <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: visible ? `${s.percent}%` : "0%" }}
                  />
                </div>
              </div>

              {s.projects.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {s.projects.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      target={p.href.startsWith("http") ? "_blank" : undefined}
                      rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 hover:text-primary hover:bg-primary/15 font-medium transition-colors"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-[11px] text-muted-foreground italic">
                  Used in client & personal work
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
