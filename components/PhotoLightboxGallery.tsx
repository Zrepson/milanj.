"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type GalleryMoment = {
  src: string;
  alt: string;
  caption: string;
};

type PhotoLightboxGalleryProps = {
  moments: GalleryMoment[];
  gridClassName: string;
  itemClassName: string;
  imageClassName: string;
  triggerClassName: string;
  imageSizes: string;
};

export default function PhotoLightboxGallery({
  moments,
  gridClassName,
  itemClassName,
  imageClassName,
  triggerClassName,
  imageSizes,
}: PhotoLightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const imageButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const visibleIndex = activeIndex ?? 0;
  const activeMoment = activeIndex === null ? null : moments[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const previousIndex = activeIndex;
        setActiveIndex(null);
        if (previousIndex !== null) {
          window.requestAnimationFrame(() => imageButtons.current[previousIndex]?.focus());
        }
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % moments.length,
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? 0
            : (current - 1 + moments.length) % moments.length,
        );
      } else if (event.key === "Tab") {
        const focusable = dialog.current?.querySelectorAll<HTMLButtonElement>(
          "button:not(:disabled)",
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, moments.length]);

  const closeLightbox = () => {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    if (previousIndex !== null) {
      window.requestAnimationFrame(() => imageButtons.current[previousIndex]?.focus());
    }
  };

  return (
    <>
      <div className={gridClassName}>
        {moments.map((moment, index) => (
          <figure
            className={`${itemClassName} ${itemClassName}-${index + 1}`}
            key={moment.src}
          >
            <div className={imageClassName}>
              <button
                className={`photo-gallery-trigger ${triggerClassName}`}
                type="button"
                ref={(element) => {
                  imageButtons.current[index] = element;
                }}
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger photo: ${moment.caption}`}
              >
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  sizes={imageSizes}
                />
                <span className="photo-gallery-view-label" aria-hidden="true">
                  View photo <span>↗</span>
                </span>
              </button>
            </div>
            <figcaption>{moment.caption}</figcaption>
          </figure>
        ))}
      </div>

      {activeMoment && (
        <div
          className="photo-lightbox-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div
            className="photo-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeMoment.caption}
            ref={dialog}
          >
            <button
              className="photo-lightbox-close"
              type="button"
              onClick={closeLightbox}
              ref={closeButton}
              aria-label="Close enlarged photo"
            >
              <span aria-hidden="true">×</span>
            </button>
            <button
              className="photo-lightbox-nav photo-lightbox-previous"
              type="button"
              onClick={() =>
                setActiveIndex(
                  (visibleIndex - 1 + moments.length) % moments.length,
                )
              }
              aria-label="View previous photo"
            >
              <span aria-hidden="true">←</span>
            </button>
            <div className="photo-lightbox-image">
              <Image
                src={activeMoment.src}
                alt={activeMoment.alt}
                fill
                sizes="(max-width: 900px) 94vw, 82vw"
                priority
              />
            </div>
            <button
              className="photo-lightbox-nav photo-lightbox-next"
              type="button"
              onClick={() => setActiveIndex((visibleIndex + 1) % moments.length)}
              aria-label="View next photo"
            >
              <span aria-hidden="true">→</span>
            </button>
            <div className="photo-lightbox-caption">
              <p>{activeMoment.caption}</p>
              <span>
                {String(visibleIndex + 1).padStart(2, "0")} / {String(moments.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
