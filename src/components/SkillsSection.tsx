import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Skill {
  name: string;
  logo: string; // devicon class
  category: string;
  projects: { label: string; href: string }[];
}

const skills: Skill[] = [
  {
    name: "React",
    logo: "devicon-react-original colored",
    category: "Frontend",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "TypeScript",
    logo: "devicon-typescript-plain colored",
    category: "Frontend",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "JavaScript",
    logo: "devicon-javascript-plain colored",
    category: "Frontend",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "HTML5",
    logo: "devicon-html5-plain colored",
    category: "Frontend",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "CSS3",
    logo: "devicon-css3-plain colored",
    category: "Frontend",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "Tailwind CSS",
    logo: "devicon-tailwindcss-plain colored",
    category: "Frontend",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Vite",
    logo: "devicon-vitejs-plain colored",
    category: "Tooling",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Git",
    logo: "devicon-git-plain colored",
    category: "Tools",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "GitHub",
    logo: "devicon-github-original",
    category: "Tools",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "PostgreSQL",
    logo: "devicon-postgresql-plain colored",
    category: "Backend",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Node.js",
    logo: "devicon-nodejs-plain colored",
    category: "Backend",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
      { label: "Capstone Archiving", href: "https://capsortustpcdo.vercel.app/" },
    ],
  },
  {
    name: "Figma",
    logo: "devicon-figma-plain colored",
    category: "Design",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
];

// Split into two rows for alternating scroll directions
const row1 = skills.slice(0, 6);
const row2 = skills.slice(6);

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => (
  <div className="group relative flex flex-col items-center gap-2 px-5 py-4 rounded-xl glass-card hover:-translate-y-1 transition-all duration-300 cursor-default min-w-[100px]">
    <i className={`${skill.logo} text-4xl`} />
    <span className="text-xs font-medium text-center whitespace-nowrap">{skill.name}</span>

    {/* Hover tooltip with projects */}
    {skill.projects.length > 0 && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col gap-1 bg-popover border border-border rounded-lg p-2 shadow-lg z-20 min-w-[140px]">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Projects</p>
        {skill.projects.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-primary hover:underline whitespace-nowrap"
          >
            {p.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

const MarqueeRow = ({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) => {
  const doubled = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Devicons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

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
          Tools and technologies I work with, along with related projects where I've put them into practice.
        </p>

        <div className="flex flex-col gap-6">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
