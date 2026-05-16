import { useEffect, useRef, useState } from "react";
import img1 from "@/assets/flying-eagle-wgirl1.png";
import img2 from "@/assets/flying-eagle-wgirl2.png";
import img3 from "@/assets/flying-eagle-wgirl3.png";
import img4 from "@/assets/flying-eagle-wgirl4.png";

const FRAMES = [img1, img2, img3, img4, img3, img2];
const FRAME_MS = 75;

interface TrailPuff {
  id: number;
  x: number;
  y: number;
  born: number;
  size: number;
}

const TRAIL_LIFE = 2200;
const TRAIL_INTERVAL = 25;
const PASS_DURATION = 750;
const PAUSE_BETWEEN = 8000;

const FlyingEagle = () => {
  const [frame, setFrame] = useState(0);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [trail, setTrail] = useState<TrailPuff[]>([]);
  const [visible, setVisible] = useState(false);
  const animRef = useRef<number>();
  const trailIdRef = useRef(0);
  const trailTimerRef = useRef(0);

  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % FRAMES.length), FRAME_MS);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let running = true;

    const MAX_RUNS = 3;
    let runCount = 0;

    const doStreak = () => {
      if (!running || runCount >= MAX_RUNS) return;
      runCount++;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Slanted path: start bottom-left area, end upper-right area
      const startX = vw * 0.05 + Math.random() * vw * 0.2;
      const startY = vh + 100;
      const endX = startX + vw * 0.45 + Math.random() * vw * 0.15;
      const endY = -180;

      setVisible(true);
      const streakStart = performance.now();
      let lastPos = { x: startX, y: startY };

      const tick = (now: number) => {
        if (!running) return;
        const elapsed = now - streakStart;
        const t = Math.min(elapsed / PASS_DURATION, 1);
        // Ease-in-out
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const x = startX + (endX - startX) * eased;
        const y = startY + (endY - startY) * eased;
        lastPos = { x, y };

        setPos({ x, y });

        if (now - trailTimerRef.current > TRAIL_INTERVAL) {
          trailTimerRef.current = now;
          const size = 55 + Math.random() * 40;
          setTrail(prev => [
            ...prev,
            { id: trailIdRef.current++, x: x + 20, y: y + 40, born: now, size },
          ]);
        }

        if (t < 1) {
          animRef.current = requestAnimationFrame(tick);
        } else {
          setVisible(false);
          setPos(null);

          setTimeout(() => { if (running) doStreak(); }, PAUSE_BETWEEN);
        }
      };

      animRef.current = requestAnimationFrame(tick);
    };

    const init = setTimeout(doStreak, 2000);
    return () => {
      running = false;
      clearTimeout(init);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Prune old trail puffs
  useEffect(() => {
    const pruner = setInterval(() => {
      const now = performance.now();
      setTrail(prev => prev.filter(d => now - d.born < TRAIL_LIFE));
    }, 100);
    return () => clearInterval(pruner);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>

      {/* Trail fog puffs */}
      {trail.map(dot => {
        const age = performance.now() - dot.born;
        const progress = Math.min(age / TRAIL_LIFE, 1);
        const opacity = progress < 0.15
          ? (progress / 0.15) * 0.7          // fade in
          : 0.7 * (1 - (progress - 0.15) / 0.85); // fade out
        const scale = 1 + progress * 3;
        return (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size * 0.65,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              background:
                "radial-gradient(ellipse, rgba(240,235,225,0.85) 0%, rgba(210,200,190,0.5) 35%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
        );
      })}

      {/* Eagle sprite */}
      {visible && pos && (
        <img
          src={FRAMES[frame]}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: 200,
            height: "auto",
            transform: "translate(-50%, -50%) rotate(-28deg)",
            filter:
              "drop-shadow(0 0 16px rgba(212,175,55,0.5)) drop-shadow(0 2px 8px rgba(0,0,0,0.4)) blur(0.5px)",
            opacity: 0.92,
          }}
        />
      )}
    </div>
  );
};

export default FlyingEagle;
