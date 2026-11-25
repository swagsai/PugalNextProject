import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-10 dark:border-white/10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-stone-500 sm:flex-row sm:items-center dark:text-stone-400">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="transition hover:text-stone-900 dark:hover:text-white"
        >
          {siteConfig.email}
        </a>
      </Container>
    </footer>
  );
}
