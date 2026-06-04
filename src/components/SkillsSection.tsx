import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Skill {
  name: string;
  logo: string;
  projects: { label: string; href: string }[];
}

const skills: Skill[] = [
  {
    name: "React",
    logo: "devicon-react-original colored",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "TypeScript",
    logo: "devicon-typescript-plain colored",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "JavaScript",
    logo: "devicon-javascript-plain colored",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "HTML5",
    logo: "devicon-html5-plain colored",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "CSS3",
    logo: "devicon-css3-plain colored",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
  {
    name: "Tailwind CSS",
    logo: "devicon-tailwindcss-plain colored",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Vite",
    logo: "devicon-vitejs-plain colored",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Git",
    logo: "devicon-git-plain colored",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "GitHub",
    logo: "devicon-github-original",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "PostgreSQL",
    logo: "devicon-postgresql-plain colored",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
    ],
  },
  {
    name: "Node.js",
    logo: "devicon-nodejs-plain colored",
    projects: [
      { label: "StewardDesk", href: "https://stewarddesk.vercel.app/" },
      { label: "Capstone Archiving", href: "https://capsortustpcdo.vercel.app/" },
    ],
  },
  {
    name: "Figma",
    logo: "devicon-figma-plain colored",
    projects: [
      { label: "DraftBoard", href: "https://draftboard-b44q.vercel.app" },
    ],
  },
];

interface MarqueeItemProps {
  skill: Skill;
  index: number;
}

const MarqueeItem = ({ skill, index }: MarqueeItemProps) => (
  <div
    className="tech-marquee-item group relative"
    aria-label={skill.name}
  >
    <i className={`${skill.logo} text-3xl`} />
    <span>{skill.name}</span>

    {/* Hover tooltip */}
    {skill.projects.length > 0 && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:flex flex-col gap-1 bg-popover border border-border rounded-lg p-2.5 shadow-xl z-20 min-w-[150px] pointer-events-none">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Used in</p>
        {skill.projects.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-primary hover:underline whitespace-nowrap pointer-events-auto"
          >
            {p.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

const SkillsSection = () => {
  const { ref, visible } = useScrollReveal();

  // Duplicate the full list once for the seamless infinite loop illusion
  const doubled = [...skills, ...skills];

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
      </div>

      {/* Infinite Marquee — intentionally full-bleed outside the max-w container */}
      <div className="tech-marquee-container">
        <div className="tech-marquee-clip">
          <div className="tech-marquee-track">
            {doubled.map((skill, i) => (
              <MarqueeItem key={`${skill.name}-${i}`} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
