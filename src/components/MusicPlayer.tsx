import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.35;
      audio.loop = true;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bg-music.mp4" preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "rgba(8,6,3,0.85)",
          border: "1px solid rgba(212,175,55,0.45)",
          boxShadow: playing
            ? "0 0 18px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.12)"
            : "0 2px 12px rgba(0,0,0,0.5)",
        }}
      >
        {playing
          ? <Volume2 size={16} style={{ color: "#d4af37" }} />
          : <VolumeX size={16} style={{ color: "rgba(212,175,55,0.5)" }} />
        }
      </button>
    </>
  );
};

export default MusicPlayer;
