import Image from "next/image";
import { ArrowUpRightIcon } from "./Icons";

/**
 * One portfolio tile: thumbnail, hover overlay and title.
 * Props: project ({ title, category, image, alt }), priority (boolean)
 */
export default function ProjectCard({ project, priority = false }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200 dark:bg-white/5">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {project.category}
          </span>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-stone-900 transition-transform duration-300 group-hover:rotate-12">
            <ArrowUpRightIcon className="size-4" />
          </span>
        </div>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight">{project.title}</h3>
    </article>
  );
}
