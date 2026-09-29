"use client";

import { useEffect, useRef, useState } from "react";

type AccessibilityPreferences = {
  pageZoom: number;
  highContrast: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
  systemFont: boolean;
};

const defaultPreferences: AccessibilityPreferences = {
  pageZoom: 1,
  highContrast: false,
  underlineLinks: false,
  reduceMotion: false,
  systemFont: false,
};

const preferencesKey = "milan-joshi-accessibility-preferences";

function clampZoom(value: number) {
  return Math.min(1.5, Math.max(0.9, Math.round(value * 10) / 10));
}

export default function AccessibilityTools() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [preferences, setPreferences] =
    useState<AccessibilityPreferences>(defaultPreferences);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(preferencesKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<AccessibilityPreferences>;
        setPreferences({
          pageZoom:
            typeof parsed.pageZoom === "number"
              ? clampZoom(parsed.pageZoom)
              : defaultPreferences.pageZoom,
          highContrast: parsed.highContrast === true,
          underlineLinks: parsed.underlineLinks === true,
          reduceMotion: parsed.reduceMotion === true,
          systemFont: parsed.systemFont === true,
        });
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const root = document.documentElement;
    root.style.setProperty("--a11y-page-zoom", String(preferences.pageZoom));
    root.classList.toggle("a11y-high-contrast", preferences.highContrast);
    root.classList.toggle("a11y-underline-links", preferences.underlineLinks);
    root.classList.toggle("a11y-reduce-motion", preferences.reduceMotion);
    root.classList.toggle("a11y-system-font", preferences.systemFont);
    try {
      window.localStorage.setItem(preferencesKey, JSON.stringify(preferences));
    } catch {}
  }, [preferences, ready]);

  const updatePreference = <K extends keyof AccessibilityPreferences>(
    key: K,
    value: AccessibilityPreferences[K],
  ) => {
    setPreferences((current) => ({ ...current, [key]: value }));
  };

  const togglePreference = (
    key: "highContrast" | "underlineLinks" | "reduceMotion" | "systemFont",
  ) => updatePreference(key, !preferences[key]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closePanel = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <div className="accessibility-tools">
      <button
        ref={triggerRef}
        className="accessibility-tools-trigger"
        type="button"
        aria-label={open ? "Close accessibility tools" : "Open accessibility tools"}
        aria-expanded={open}
        aria-controls="accessibility-tools-panel"
        onClick={() => setOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="4.5" r="2" />
          <path d="M4.5 8.5h15M12 7v6m0 0-4.5 7m4.5-7 4.5 7M7.5 8.5l1.2 4.2h6.6l1.2-4.2" />
        </svg>
        <span>Access</span>
      </button>

      <section
        className="accessibility-tools-panel"
        id="accessibility-tools-panel"
        aria-labelledby="accessibility-tools-title"
        aria-describedby="accessibility-tools-description"
        hidden={!open}
      >
        <div className="accessibility-tools-heading">
          <div>
            <h2 id="accessibility-tools-title">Accessibility tools</h2>
            <p id="accessibility-tools-description">
              Adjust how this site looks and moves.
            </p>
          </div>
          <button
            className="accessibility-tools-close"
            type="button"
            onClick={closePanel}
            aria-label="Close accessibility tools"
          >
            ×
          </button>
        </div>

        <div className="accessibility-zoom-control">
          <span>Page zoom</span>
          <div className="accessibility-zoom-buttons">
            <button
              type="button"
              onClick={() =>
                updatePreference("pageZoom", clampZoom(preferences.pageZoom - 0.1))
              }
              disabled={preferences.pageZoom <= 0.9}
              aria-label="Decrease page zoom"
            >
              A−
            </button>
            <output aria-live="polite">
              {Math.round(preferences.pageZoom * 100)}%
            </output>
            <button
              type="button"
              onClick={() =>
                updatePreference("pageZoom", clampZoom(preferences.pageZoom + 0.1))
              }
              disabled={preferences.pageZoom >= 1.5}
              aria-label="Increase page zoom"
            >
              A+
            </button>
          </div>
        </div>

        <div className="accessibility-tools-options">
          <button
            className="accessibility-tool-option"
            type="button"
            aria-pressed={preferences.highContrast}
            onClick={() => togglePreference("highContrast")}
          >
            <span>High contrast</span>
            <span className="accessibility-tool-state" aria-hidden="true">
              {preferences.highContrast ? "On" : "Off"}
            </span>
          </button>
          <button
            className="accessibility-tool-option"
            type="button"
            aria-pressed={preferences.underlineLinks}
            onClick={() => togglePreference("underlineLinks")}
          >
            <span>Underline links</span>
            <span className="accessibility-tool-state" aria-hidden="true">
              {preferences.underlineLinks ? "On" : "Off"}
            </span>
          </button>
          <button
            className="accessibility-tool-option"
            type="button"
            aria-pressed={preferences.reduceMotion}
            onClick={() => togglePreference("reduceMotion")}
          >
            <span>Reduce motion</span>
            <span className="accessibility-tool-state" aria-hidden="true">
              {preferences.reduceMotion ? "On" : "Off"}
            </span>
          </button>
          <button
            className="accessibility-tool-option"
            type="button"
            aria-pressed={preferences.systemFont}
            onClick={() => togglePreference("systemFont")}
          >
            <span>System font</span>
            <span className="accessibility-tool-state" aria-hidden="true">
              {preferences.systemFont ? "On" : "Off"}
            </span>
          </button>
        </div>

        <button
          className="accessibility-tools-reset"
          type="button"
          onClick={() => setPreferences(defaultPreferences)}
        >
          Reset settings
        </button>
      </section>
    </div>
  );
}
