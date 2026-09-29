"use client";

import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    number: "01",
    title: "The Beginning",
    text: "Every journey starts with a single step — a curiosity to build, to create, to make something useful for the world.",
  },
  {
    number: "02",
    title: "The Craft",
    text: "Web development, project coordination, digital strategy — disciplines mastered through years of hands-on work and a relentless pursuit of clarity.",
  },
  {
    number: "03",
    title: "The Mission",
    text: "To turn ideas into reliable outcomes. Whether a website, a project plan, or a life insurance policy — the goal remains the same: something built to last.",
  },
  {
    number: "04",
    title: "The Horizon",
    text: "Exploring AI, WebGL, maps and emerging technology — always looking forward, always building for a better tomorrow.",
  },
];

export default function StoryMode({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLast = index === chapters.length - 1;

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase("exit"), 3200);
    return () => clearTimeout(enterTimer);
  }, [index, phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    if (isLast) {
      timerRef.current = setTimeout(() => {
        onComplete();
      }, 900);
      return;
    }

    timerRef.current = setTimeout(() => {
      setIndex((i) => i + 1);
      setPhase("enter");
    }, 900);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, isLast, onComplete]);

  function handleSkip() {
    onComplete();
  }

  const chapter = chapters[index];

  return (
    <div className="story-mode">
      <div className="story-progress">
        {chapters.map((_, i) => (
          <span
            key={i}
            className={`story-dot ${i === index ? "active" : ""} ${
              i < index ? "done" : ""
            }`}
          />
        ))}
      </div>

      <div className={`story-chapter story-${phase}`} key={index}>
        <p className="story-number">{chapter.number}</p>
        <h2 className="story-heading" id="story-intro-title">{chapter.title}</h2>
        <p className="story-text">{chapter.text}</p>
      </div>

      <button className="story-skip" onClick={handleSkip}>
        Skip intro →
      </button>
    </div>
  );
}
