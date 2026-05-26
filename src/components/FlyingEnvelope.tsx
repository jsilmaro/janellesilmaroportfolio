import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactBtn from "@/assets/contact-btn.png";

gsap.registerPlugin(ScrollTrigger);

const FlyingEnvelope = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img  = imgRef.current;
    if (!wrap || !img) return;

    // Hide on touch/mobile — envelope animation is desktop-only
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      gsap.set(wrap, { opacity: 0, pointerEvents: "none" });
      // Still reveal the button immediately on mobile
      setLanded(true);
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // ── All positions in pixels from the start — no unit mixing ──────────
    gsap.set(wrap, {
      x: vw * 0.74,
      y: vh * 0.18,
      width: 120,
      opacity: 1,
    });
    gsap.set(img, { rotateY: -25, rotateX: 15, rotateZ: -12 });

    // Idle float
    const floatTween = gsap.to(wrap, {
      y: `+=${vh * 0.025}`,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Idle 3D wobble
    const wobbleTween = gsap.to(img, {
      rotateZ: "+=8",
      rotateY: "+=15",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // ── Scroll phases — all pixel-based x/y ───────────────────────────────
    // Phase 1: Hero → sweep LEFT, grow
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });
    tl1
      .to(wrap, { x: vw * 0.08, y: vh * 0.30, width: 160 }, 0)
      .to(img,  { rotateY: 30, rotateX: -10, rotateZ: 8 }, 0);

    // Phase 2: About → sweep RIGHT, bigger
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    tl2
      .to(wrap, { x: vw * 0.70, y: vh * 0.14, width: 190 }, 0)
      .to(img,  { rotateY: -42, rotateX: 20, rotateZ: -16 }, 0);

    // Phase 3: Experience → sweep LEFT, large
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    tl3
      .to(wrap, { x: vw * 0.05, y: vh * 0.38, width: 200 }, 0)
      .to(img,  { rotateY: 50, rotateX: -24, rotateZ: 20 }, 0);

    // Phase 4: Projects → sweep RIGHT, biggest
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    tl4
      .to(wrap, { x: vw * 0.72, y: vh * 0.22, width: 220 }, 0)
      .to(img,  { rotateY: -36, rotateX: 16, rotateZ: -12 }, 0);

    // Phase 5: Bookshelf → drift toward center, calm down
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#bookshelf",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    tl5
      .to(wrap, { x: vw * 0.32, y: vh * 0.20, width: 160 }, 0)
      .to(img,  { rotateY: 14, rotateX: -7, rotateZ: 5 }, 0);

    // ── Landing ────────────────────────────────────────────────────────────
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top 55%",
      once: true,
      onEnter: () => {
        floatTween.pause();
        wobbleTween.pause();

        const anchor = document.getElementById("envelope-anchor");
        if (!anchor) return;

        // getBoundingClientRect gives viewport-relative coords — perfect for fixed elements
        const rect   = anchor.getBoundingClientRect();
        const envW   = 120;
        const envH   = 80; // approximate rendered height of the image

        // Center the envelope on the anchor
        const targetX = rect.left + rect.width  / 2 - envW / 2;
        const targetY = rect.top  + rect.height / 2 - envH / 2;

        // Glide sideways first (horizontal), then drop down — "floating on wind"
        gsap.to(wrap, {
          x: targetX,
          duration: 1.1,
          ease: "power2.inOut",
        });
        gsap.to(wrap, {
          y: targetY,
          width: envW,
          duration: 0.9,
          delay: 0.7,
          ease: "power3.out",
        });

        // Unwind 3D rotation in parallel
        gsap.to(img, {
          rotateY: 0,
          rotateX: 0,
          rotateZ: 0,
          duration: 1.6,
          ease: "power2.out",
        });

        // Fade out flying envelope, reveal real button
        gsap.to(wrap, {
          opacity: 0,
          duration: 0.4,
          delay: 1.8,
          ease: "power2.in",
          onComplete: () => setLanded(true),
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      floatTween.kill();
      wobbleTween.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={wrapRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 45,
          pointerEvents: "none",
          perspective: "700px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          ref={imgRef}
          style={{
            width: "100%",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <img
            src={contactBtn}
            alt=""
            draggable={false}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter:
                "drop-shadow(0 14px 30px rgba(0,0,0,0.85)) " +
                "drop-shadow(0 4px 8px rgba(0,0,0,0.6)) " +
                "drop-shadow(0 0 22px rgba(212,175,55,0.4))",
            }}
          />
        </div>
      </div>

      {landed && (
        <style>{`
          #envelope-anchor-content {
            opacity: 1 !important;
            pointer-events: auto !important;
            animation: envLand 0.55s cubic-bezier(0.34,1.56,0.64,1) both;
          }
          @keyframes envLand {
            from { opacity:0; transform: scale(0.55) translateY(20px); }
            to   { opacity:1; transform: scale(1)    translateY(0); }
          }
        `}</style>
      )}
    </>
  );
};

export default FlyingEnvelope;
