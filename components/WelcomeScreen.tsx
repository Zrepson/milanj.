"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

const WelcomeExperience = dynamic(() => import("@/components/WelcomeExperience"), {
  ssr: false,
  loading: () => null,
});

export default function WelcomeScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const closeExperience = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        className="text-link welcome-trigger"
        type="button"
        aria-haspopup="dialog"
        onClick={() => setIsOpen(true)}
      >
        Play the site introduction <span aria-hidden="true">↗</span>
      </button>
      {isOpen ? <WelcomeExperience onClose={closeExperience} /> : null}
    </>
  );
}
