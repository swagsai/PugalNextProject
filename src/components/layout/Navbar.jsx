"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-lg dark:border-white/10 dark:bg-neutral-950/80"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="size-6 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400"
          />
          {siteConfig.name}
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-stone-300/80 bg-white/60 backdrop-blur focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 dark:border-white/15 dark:bg-white/5"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="md:hidden">
        <Container className="flex flex-col gap-1 pb-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-medium text-stone-700 hover:bg-stone-200/60 dark:text-stone-200 dark:hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
