import { Briefcase, ExternalLink, Church } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import churchMedia1 from "@/assets/church-media-1.jpg";
import churchMedia2 from "@/assets/church-media-2.jpg";

const experiences = [
  { role: "Social Media Manager", company: "TapTopUp & RJ Games", period: "Nov 2025 – Present · 5 mos", location: "Remote · Part-time", desc: "Create designs and posters for Facebook and TikTok pages to maintain online presence for 2 game-credit top-up sites (MLBB, Genshin Impact, etc.)." },
  { role: "Back-End Developer", company: "SE Business Solutions", period: "Aug 2025 – Oct 2025 · 3 mos", location: "Remote · Part-time", desc: "Back-end web development for client projects." },
  { role: "Website Administrator", company: "SE Business Solutions", period: "Jul 2025 – Jan 2026 · 7 mos", location: "Remote · Part-time", desc: "Managed and maintained client websites, ensuring uptime and content updates. Added designs on some sections and kept plugins updated for site stability.", link: "https://sebusinesssolutions.co/", linkLabel: "Visit Site" },
  { role: "Data Entry Assistant", company: "SE Business Solutions", period: "Apr 2025 – Jun 2025 · 3 mos", location: "Remote · Part-time", desc: "Data maintenance and data entry for business operations." },
  { role: "Web Designer", company: "Freelance", period: "Oct 2023 – Jan 2025 · 1 yr 4 mos", location: "Cagayan de Oro · Remote", desc: "Designed 3 websites with Wix builder for clients.", link: "https://poiemavirtualservi.wixstudio.io/my-site-4", linkLabel: "View Sample" },
  { role: "Media & Worship Tech Volunteer", company: "Life Haven Community Builders", period: "Ongoing", location: "Cagayan de Oro", desc: "Facilitate on-screen presentations during worship services — managing lyrics, slides, and visuals so the audience can follow along. Also create and post announcement posters for church events.", isChurch: true },
];

const ExperienceSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <p className={`text-xs font-semibold tracking-[0.25em] uppercase text-primary text-center mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Experience
        </p>
        <h2 className={`text-3xl md:text-4xl font-bold mb-14 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="relative">
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-border/40" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-14 md:pl-16 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: visible ? `${i * 120 + 200}ms` : "0ms" }}
              >
                <div className="absolute left-3.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-primary/80 border-[3px] border-background" />
                <div className="glass-card p-6 hover:glow-primary hover:scale-[1.01] transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-base">{exp.role}</h3>
                    <span className="text-xs text-primary/80 font-medium px-3 py-1 rounded-full bg-primary/8">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    {(exp as any).isChurch ? <Church size={13} className="text-primary/50" /> : <Briefcase size={13} className="text-primary/50" />}
                    <span>{exp.company}</span>
                    <span className="text-border">·</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-2">
                      {exp.linkLabel || "View"} <ExternalLink size={11} />
                    </a>
                  )}
                  {(exp as any).isChurch && (
                    <div className="flex gap-3 mt-4">
                      {[churchMedia1, churchMedia2].map((src, j) => (
                        <div key={j} className="w-20 h-20 rounded-lg overflow-hidden border border-border/30">
                          <img src={src} alt={`Church media work ${j + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
