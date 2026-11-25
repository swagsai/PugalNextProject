"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const STORAGE_KEY = "theme";

/** Reads the current theme straight from the <html> class set by the inline script in layout.jsx */
function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

export default function ThemeToggle() {
  // Server snapshot is `false`; React reconciles on hydration without a mismatch warning.
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* storage can be blocked; the toggle still works for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-10 items-center justify-center rounded-full border border-stone-300/80 bg-white/60 text-stone-700 backdrop-blur transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 dark:border-white/15 dark:bg-white/5 dark:text-stone-200 dark:hover:bg-white/10 cursor-pointer"
    >
      {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
    </button>
  );
}
