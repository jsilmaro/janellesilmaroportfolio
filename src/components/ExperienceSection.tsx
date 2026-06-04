import { Briefcase, ExternalLink, Church } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import churchMedia1 from "@/assets/church-media-1.jpg";
import churchMedia2 from "@/assets/church-media-2.jpg";

const experiences = [
  { role: "Social Media Manager", company: "TapTopUp & RJ Games", period: "Nov 2025 – February 2025 · 4 mos", location: "Remote · Part-time", desc: "Create designs and posters for Facebook and TikTok pages to maintain online presence for 2 game-credit top-up sites rjgamesph.com and taptopup.net (MLBB, Genshin Impact, etc.).", link: "https://taptopup.net/", linkLabel: "View Taptop site" },
  { role: "Back-End Developer", company: "SE Business Solutions", period: "Aug 2025 – Oct 2025 · 3 mos", location: "Remote · Part-time", desc: "Back-end web development for client projects." },
  { role: "Wordpress Website Administrator", company: "SE Business Solutions", period: "Jul 2025 – Jan 2026 · 7 mos", location: "Remote · Part-time", desc: "Managed and maintained client websites, ensuring uptime and content updates. Added designs on some sections and kept plugins updated for site stability.", link: "https://sebusinesssolutions.co/", linkLabel: "Visit Site" },
  { role: "Data Entry Assistant", company: "SE Business Solutions", period: "Apr 2025 – Jun 2025 · 3 mos", location: "Remote · Part-time", desc: "Data maintenance and data entry for business operations." },
  { role: "Web Designer", company: "Freelance", period: "Oct 2023 – Jan 2025 · 1 yr 4 mos", location: "Cagayan de Oro · Remote", desc: "Designed 3 websites with Wix builder for clients.", link: "https://poiemavirtualservi.wixstudio.io/my-site-4", linkLabel: "View Sample" },
  { role: "Media & Worship Tech Volunteer", company: "Life Haven Community Builders", period: "Ongoing", location: "Cagayan de Oro", desc: "Facilitate on-screen presentations during worship services — managing lyrics, slides, and visuals so the audience can follow along. Also create and post announcement posters for church events.", isChurch: true },
];

const ExperienceSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className={`text-xs font-semibold tracking-[0.25em] uppercase text-primary text-center mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Experience
        </p>
        <h2 className={`text-3xl md:text-4xl font-bold mb-14 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-card p-5 rounded-xl flex flex-col gap-3 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: visible ? `${i * 100 + 200}ms` : "0ms" }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="w-9 h-9 shrink-0 rounded-md bg-primary/10 flex items-center justify-center">
                  {(exp as any).isChurch
                    ? <Church size={16} className="text-primary" />
                    : <Briefcase size={16} className="text-primary" />}
                </div>
                <span className="text-[10px] text-primary/80 font-medium px-2.5 py-1 rounded-full bg-primary/8 text-right leading-tight">
                  {exp.period}
                </span>
              </div>

              {/* Role & Company */}
              <div>
                <h3 className="font-semibold text-sm leading-snug">{exp.role}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{exp.company}</p>
                <p className="text-[11px] text-muted-foreground/70 mt-0.5">{exp.location}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/40" />

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{exp.desc}</p>

              {/* Link */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-card-link inline-flex items-center gap-1 text-xs text-primary"
                >
                  {exp.linkLabel || "View"} <ExternalLink size={11} className="exp-card-link-icon" />
                </a>
              )}

              {/* Church media thumbnails */}
              {(exp as any).isChurch && (
                <div className="flex gap-2 mt-1">
                  {[churchMedia1, churchMedia2].map((src, j) => (
                    <div key={j} className="w-16 h-16 rounded-lg overflow-hidden border border-border/30">
                      <img src={src} alt={`Church media work ${j + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
