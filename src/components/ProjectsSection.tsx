import { useState } from "react";
import { ExternalLink } from "lucide-react";
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

        <div className={`glass-card p-6 md:p-8 mb-14 hover:glow-primary hover:scale-[1.005] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "200ms" }}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <span className="text-xs font-medium text-primary/80 uppercase tracking-[0.15em]">Web Application</span>
              <h3 className="text-xl font-bold mt-2 mb-3">DraftBoard</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                A marketplace platform connecting brands with talented creators. Built with modern web technologies featuring authentication, user dashboards, and a matching system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Tailwind CSS", "Supabase"].map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/8 text-primary/80 font-medium">{t}</span>
                ))}
              </div>
              <a href="https://draftboard-b44q.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                Visit Live Site <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className={`glass-card p-6 md:p-8 mb-14 hover:glow-primary hover:scale-[1.005] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "275ms" }}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <span className="text-xs font-medium text-primary/80 uppercase tracking-[0.15em]">Web Application</span>
              <h3 className="text-xl font-bold mt-2 mb-3">StewardDesk</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                A full-stack Kanban task manager with a forest/nature theme. Features email/password & Google OAuth authentication, drag & drop boards, and a pnpm monorepo architecture with Express 5, PostgreSQL + Drizzle ORM, and React + Vite frontend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Express 5", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "TanStack Query"].map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/8 text-primary/80 font-medium">{t}</span>
                ))}
              </div>
              <a href="https://stewarddesk.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                Visit Live Site <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className={`glass-card p-6 md:p-8 mb-14 hover:glow-primary hover:scale-[1.005] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "350ms" }}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <span className="text-xs font-medium text-primary/80 uppercase tracking-[0.15em]">Academic Project</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Capstone Archiving System</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                An archiving system built for the USTP-CDO IT Department. Handled the back-end development for this capstone project.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Back-End Development", "USTP-CDO", "IT Department"].map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/8 text-primary/80 font-medium">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://capsortustpcdo.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  Visit Live Site <ExternalLink size={13} />
                </a>
                <a href="https://drive.google.com/file/d/19zj7BD08sebUeaGBmMlBy2E0XNdgYLCQ/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  Watch Demo Video <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold mb-6 text-center">
          Social Media <span className="text-gradient-accent">Designs</span>
        </h3>
        <p className="text-muted-foreground text-center text-sm mb-8">
          Sample designs created for TapTopUp & RJ Games social media pages.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {designs.map((src, i) => {
            const isWide = i >= 8 && i <= 9; // banners 9 & 10 are wide headers
            const isTall = i === 10; // poster 11 is portrait
            return (
              <button
                type="button"
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`View social media design ${i + 1}`}
                className={`glass-card overflow-hidden group cursor-pointer hover:scale-[1.03] hover:glow-primary transition-all duration-500 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl
                  ${isWide ? "col-span-2 md:col-span-2" : ""}
                  ${isTall ? "col-span-1" : ""}
                  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: visible ? `${i * 80 + 400}ms` : "0ms" }}
              >
                <div className={`overflow-hidden ${isWide ? "aspect-[4/1]" : "aspect-square"}`}>
                  <img src={src} alt={`Social media design ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </button>
            );
          })}
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
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous design"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-background/70 hover:bg-background backdrop-blur border border-border text-foreground text-xl transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next design"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-background/70 hover:bg-background backdrop-blur border border-border text-foreground text-xl transition-colors"
              >
                ›
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
