export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg dark:text-stone-400">
          {description}
        </p>
      )}
    </div>
  );
}
