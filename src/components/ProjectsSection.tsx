import { useState } from "react";
import { ExternalLink, Globe, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoAida from "@/assets/aida's-logo.png";
import logoDraftboard from "@/assets/draftboard-logo.svg";
import logoAureva from "@/assets/aureva-logo.png";
import logoCapsort from "@/assets/capsort-logo.png";
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
import designSample12 from "@/assets/design-sample-12.mp4";
import designSample13 from "@/assets/design-sample-13.mp4";

const designs = [
  { src: designSample1, type: "image"},
  { src: designSample2, type: "image"},
  { src: designSample3, type: "image"},
  { src: designSample4, type: "image"},
  { src: designSample5, type: "image"},
  { src: designSample6, type: "image"},
  { src: designSample7, type: "image"},
  { src: designSample8, type: "image"},
  { src: designSample9, type: "image"},
  { src: designSample10, type: "image"},
  { src: designSample11, type: "image"},
  { src: designSample12, type: "video"},
  { src: designSample13, type: "video"},
];


const projects = [
  {
    title: "AIDA's Tshirt Shop",
    type: "Web Application",
    tags: ["TypeScript", "CSS"],
    links: [],
    url: "https://aidast-shirtshop.vercel.app/",
    logo: logoAida,
  },
  {
    title: "DraftBoard",
    type: "Web Application",
    tags: ["React", "Node js", "Tailwind CSS", "Neon"],
    links: [],
    url: "https://draftboard-b44q.vercel.app/",
    logo: logoDraftboard,
  },
  {
    title: "StewardDesk",
    type: "Web Application",
    tags: ["React", "TypeScript", "Express 5", "PostgreSQL", "Drizzle ORM"],
    links: [],
    url: "https://stewarddesk.vercel.app",
    logo: null,
  },
  {
    title: "Capstone Archiving System",
    type: "Academic Project",
    tags: ["Back-End Development", "USTP-CDO"],
    links: [
      { label: "Demo Video", href: "https://drive.google.com/file/d/19zj7BD08sebUeaGBmMlBy2E0XNdgYLCQ/view" },
    ],
    url: "https://capsortustpcdo.vercel.app/",
    logo: logoCapsort,
  },
  {
    title: "Aureva",
    type: "Web Application",
    tags: ["PHP", "JavaScript"],
    links: [],
    url: "https://aureva.kaisen.cloud/",
    logo: logoAureva,
  },
];

const ProjectIcon = ({ logo, title }: { logo: string | null; title: string }) => {
  if (!logo) return <Globe size={28} className="text-primary/60" />;
  return (
    <img
      src={logo}
      alt={`${title} logo`}
      className="h-8 w-auto max-w-[7rem] object-contain"
    />
  );
};

const ProjectsSection = () => {
  const { ref, visible } = useScrollReveal();
  
  // State for social media design lightbox image index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // State for active live project preview object
  const [activeLiveProject, setActiveLiveProject] = useState<typeof projects[0] | null>(null);

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
          A selection of projects and design work I've done. Click "Live Site" to interact inside a popup preview.
        </p>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card p-5 rounded-xl flex flex-col gap-3 hover:glow-primary hover:-translate-y-1 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: visible ? `${i * 100 + 200}ms` : "0ms" }}
            >
              {/* Type badge */}
              <div className="flex justify-end">
                <span className="text-[10px] text-primary/80 font-medium px-2.5 py-1 rounded-full bg-primary/8">
                  {project.type}
                </span>
              </div>

              {/* Logo above title */}
              <ProjectIcon logo={project.logo} title={project.title} />

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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-1">
                {/* Trigger Modal on Click */}
                <button
                  onClick={() => setActiveLiveProject(project)}
                  className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline bg-primary/5 px-2.5 py-1 rounded border border-primary/10"
                >
                  Live Site <ExternalLink size={11} />
                </button>

                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {l.label}
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
          {designs.map((item, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View social media design ${i + 1}`}
              className={`group relative w-full break-inside-avoid overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background block transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: visible ? `${i * 60 + 400}ms` : "0ms" }}
            >

            {item.type === "image" ? (
              <img
                src={item.src}
                alt={'Social media design ${i + 1}'}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-x1"
              />
            ) : (
              <video  
                src={item.src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
              />
            )}
              


              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <span className="text-white text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/30">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 1. LIVE SITE IFRAME MODAL PREVIEWER */}
      <Dialog open={activeLiveProject !== null} onOpenChange={(open) => !open && setActiveLiveProject(null)}>
        <DialogContent className="max-w-5xl w-[92vw] h-[85vh] p-0 bg-neutral-950 border border-border/60 overflow-hidden shadow-2xl flex flex-col rounded-xl">
          <DialogTitle className="sr-only">
            Live Preview of {activeLiveProject?.title}
          </DialogTitle>
          
          {activeLiveProject && (
            <div className="w-full h-full flex flex-col">
              {/* Browser Window Control Top-Bar */}
<div className="w-full bg-muted/90 backdrop-blur border-b border-border/50 px-4 py-3 flex items-center justify-between gap-4">

  {/* Left: Window dots */}
  <div className="flex gap-1.5 shrink-0 items-center">
    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />

    <span className="text-xs font-medium text-foreground ml-2 hidden sm:inline-block">
      {activeLiveProject.title}
    </span>
  </div>

  {/* Center: URL bar */}
  <div className="flex-1 max-w-xl bg-background/60 rounded-md border border-border/40 px-3 py-1 text-[11px] text-muted-foreground flex items-center gap-1.5 select-none truncate mx-2">
    <Globe size={11} className="text-muted-foreground/60 shrink-0" />
    <span className="truncate">{activeLiveProject.url}</span>
  </div>

  {/* Right: actions */}
  <div className="flex items-center gap-2 shrink-0">
    <a
      href={activeLiveProject.url}
      target="_blank"
      rel="noopener noreferrer"
      title="Open application in a separate browser tab"
      className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded transition-colors"
    >
      <ExternalLink size={14} />
    </a>

    <button
      onClick={() => setActiveLiveProject(null)}
      title="Close live preview"
      className="p-1.5 text-muted-foreground hover:text-rose-400 hover:bg-background/80 rounded transition-colors"
    >
      <X size={15} />
    </button>
  </div>

</div>

              {/* The Live Interactive App Frame */}
              <div className="flex-1 w-full bg-neutral-900 relative">
                <iframe
                  src={activeLiveProject.url}
                  title={`${activeLiveProject.title} Interactive Live Preview Modal`}
                  className="w-full h-full border-none bg-background"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 2. SOCIAL MEDIA IMAGE LIGHTBOX MODAL */}
      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && closeViewer()}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
          <DialogTitle className="sr-only">
            Social media design {activeIndex !== null ? activeIndex + 1 : ""}
          </DialogTitle>
          {activeIndex !== null && (
            <div className="relative">
             
             
              {designs[activeIndex].type === "image" ? (
                <img
                  src={designs[activeIndex].src}
                  alt={`Social media design ${activeIndex + 1}`}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={designs[activeIndex].src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}

              
              <button 
                onClick={showPrev} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                aria-label="Previous image"
              >
                &larr;
              </button>
              <button 
                onClick={showNext} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                aria-label="Next image"
              >
                &rarr;
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;

