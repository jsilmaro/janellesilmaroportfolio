import { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import designSample1 from "@/assets/design-sample-1.png";
import designSample2 from "@/assets/design-sample-2.png";
import designSample3 from "@/assets/design-sample-3.png";
import designSample4 from "@/assets/design-sample-4.jpg";
import designSample5 from "@/assets/design-sample-5.png";
import designSample6 from "@/assets/design-sample-6.png";
import designSample7 from "@/assets/design-sample-7.png";
import designSample8 from "@/assets/design-sample-8.png";
import designSample9 from "@/assets/design-sample-9.png";
import designSample10 from "@/assets/design-sample-10.png";
import designSample11 from "@/assets/design-sample-11.png";

const designs = [designSample1, designSample2, designSample3, designSample4, designSample5, designSample6, designSample7, designSample8, designSample9, designSample10, designSample11];

const projects = [
  {
    title: "DraftBoard",
    type: "Web Application",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [{ label: "Live Site", href: "https://draftboard-b44q.vercel.app" }],
  },
  {
    title: "StewardDesk",
    type: "Web Application",
    tags: ["React", "TypeScript", "Express 5", "PostgreSQL", "Drizzle ORM"],
    links: [{ label: "Live Site", href: "https://stewarddesk.vercel.app/" }],
  },
  {
    title: "Capstone Archiving System",
    type: "Academic Project",
    tags: ["Back-End Development", "USTP-CDO"],
    links: [
      { label: "Live Site", href: "https://capsortustpcdo.vercel.app/" },
      { label: "Demo Video", href: "https://drive.google.com/file/d/19zj7BD08sebUeaGBmMlBy2E0XNdgYLCQ/view" },
    ],
  },
];

const ProjectsSection = () => {
  const { ref, visible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeViewer = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i === null ? i : (i - 1 + designs.length) % designs.length));
  const showNext = () => setActiveIndex((i) => (i === null ? i : (i + 1) % designs.length));

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className={`text-xs font-semibold tracking-[0.25em] uppercase text-primary text-center mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Projects
        </p>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-xl mx-auto mb-14 transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}>
          A selection of projects and design work I've done.
        </p>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card p-5 rounded-xl flex flex-col gap-3 hover:glow-primary hover:-translate-y-1 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: visible ? `${i * 100 + 200}ms` : "0ms" }}
            >
              {/* Icon + type */}
              <div className="flex items-center justify-between gap-2">
                <div className="w-9 h-9 shrink-0 rounded-md bg-primary/10 flex items-center justify-center">
                  <Globe size={16} className="text-primary" />
                </div>
                <span className="text-[10px] text-primary/80 font-medium px-2.5 py-1 rounded-full bg-primary/8">
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base">{project.title}</h3>

              <div className="h-px bg-border/40" />

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 flex-1">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[11px] rounded-full bg-primary/8 text-primary/80 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-1">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    {l.label} <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Designs Gallery */}
        <h3 className="text-lg font-bold mb-2 text-center">
          Social Media <span className="text-gradient-accent">Designs</span>
        </h3>
        <p className="text-muted-foreground text-center text-sm mb-8">
          Sample designs created for TapTopUp & RJ Games social media pages.
        </p>

        {/* Masonry gallery using CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {designs.map((src, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View social media design ${i + 1}`}
              className={`group relative w-full break-inside-avoid overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background block transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: visible ? `${i * 60 + 400}ms` : "0ms" }}
            >
              <img
                src={src}
                alt={`Social media design ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <span className="text-white text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/30">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && closeViewer()}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
          <DialogTitle className="sr-only">
            Social media design {activeIndex !== null ? activeIndex + 1 : ""}
          </DialogTitle>
          {activeIndex !== null && (
            <div className="relative">
              <img
                src={designs[activeIndex]}
                alt={`Social media design ${activeIndex + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-xs text-foreground border border-border">
                {activeIndex + 1} / {designs.length}
              </div>
              <button type="button" onClick={showPrev} aria-label="Previous design" className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-background/70 hover:bg-background backdrop-blur border border-border text-foreground text-xl transition-colors">‹</button>
              <button type="button" onClick={showNext} aria-label="Next design" className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-background/70 hover:bg-background backdrop-blur border border-border text-foreground text-xl transition-colors">›</button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
