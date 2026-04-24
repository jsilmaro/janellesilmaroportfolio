import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
}

const Typewriter = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseTime = 1600,
  className = "",
  cursorClassName = "",
}: TypewriterProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className={`inline-block w-[2px] ml-1 align-middle animate-cursor-blink ${cursorClassName}`}>
        |
      </span>
    </span>
  );
};

export default Typewriter;
