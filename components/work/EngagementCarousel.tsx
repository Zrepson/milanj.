"use client";

import Image from "next/image";
import { useState } from "react";

type Engagement = {
  name: string;
  src: string;
  href?: string;
};

export default function EngagementCarousel({ items }: { items: Engagement[] }) {
  const [paused, setPaused] = useState(false);

  function renderLogos(isDuplicate = false) {
    return items.map((item) => (
      <li className="work-engagement-item" key={item.src}>
        {item.href ? (
          <a
            className="work-engagement-logo"
            href={item.href}
            target={isDuplicate ? undefined : "_blank"}
            rel={isDuplicate ? undefined : "noopener noreferrer"}
            tabIndex={isDuplicate ? -1 : undefined}
            aria-label={isDuplicate ? undefined : `Visit ${item.name} website (opens in a new tab)`}
          >
            <Image src={item.src} alt={`${item.name} logo`} width={176} height={100} />
          </a>
        ) : (
          <div className="work-engagement-logo">
            <Image src={item.src} alt={`${item.name} logo`} width={176} height={100} />
          </div>
        )}
      </li>
    ));
  }

  return (
    <div className="work-engagements-carousel">
      <div className="work-engagements-controls">
        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          aria-label={paused ? "Resume logo carousel" : "Pause logo carousel"}
        >
          {paused ? "Resume logos" : "Pause logos"}
        </button>
      </div>
      <div
        className="work-engagements-viewport"
        role="region"
        aria-label="Professional affiliations and organizations"
        aria-live="off"
      >
        <div className={`work-engagements-track${paused ? " is-paused" : ""}`}>
          <ul className="work-engagements-list">
            {renderLogos()}
          </ul>
          <ul className="work-engagements-list work-engagements-duplicate" aria-hidden="true">
            {renderLogos(true)}
          </ul>
        </div>
      </div>
    </div>
  );
}
