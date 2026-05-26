import { useEffect, useState } from "react";
import scarf1 from "@/assets/scarf1.png";
import scarf2 from "@/assets/scarf2.png";

// Each scarf uses CSS keyframe animations for realistic fabric physics:
// - irregular sine-based path (not linear)
// - perspective skew to simulate 3D fabric bending
// - independent x/y/rotation axes with different frequencies
// - upward drift bias

const ScarfOne = ({ size }: { size: number }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      left: "8%",
      bottom: "15%",
      width: size,
      animation: "scarf1-float 11s ease-in-out infinite",
      transformOrigin: "30% 60%",
      filter: [
        "drop-shadow(0 12px 28px rgba(0,0,0,0.7))",
        "drop-shadow(0 3px 8px rgba(0,0,0,0.5))",
        "drop-shadow(0 0 18px rgba(100,0,0,0.2))",
        "brightness(0.85) saturate(1.15) contrast(1.05)",
      ].join(" "),
    }}
  >
    <img
      src={scarf1}
      alt=""
      aria-hidden="true"
      style={{
        width: "100%",
        height: "auto",
        animation: "scarf1-warp 11s ease-in-out infinite",
        transformOrigin: "30% 60%",
      }}
    />
  </div>
);

const ScarfTwo = ({ size }: { size: number }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      right: "12%",
      bottom: "30%",
      width: size,
      animation: "scarf2-float 14s ease-in-out infinite",
      transformOrigin: "70% 40%",
      filter: [
        "drop-shadow(0 10px 24px rgba(0,0,0,0.65))",
        "drop-shadow(0 2px 6px rgba(0,0,0,0.45))",
        "drop-shadow(0 0 14px rgba(100,0,0,0.18))",
        "brightness(0.82) saturate(1.2) contrast(1.05)",
      ].join(" "),
    }}
  >
    <img
      src={scarf2}
      alt=""
      aria-hidden="true"
      style={{
        width: "100%",
        height: "auto",
        animation: "scarf2-warp 14s ease-in-out infinite",
        transformOrigin: "70% 40%",
      }}
    />
  </div>
);

const FloatingScarf = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
      <ScarfOne size={typeof window !== "undefined" && window.innerWidth < 768 ? 140 : 240} />
      <ScarfTwo size={typeof window !== "undefined" && window.innerWidth < 768 ? 110 : 195} />
    </div>
  );
};

export default FloatingScarf;
