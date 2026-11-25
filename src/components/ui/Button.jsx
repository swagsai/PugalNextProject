const variants = {
  primary:
    "bg-stone-900 text-white hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200",
  secondary:
    "border border-stone-300 bg-white/60 text-stone-900 backdrop-blur hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
};

const baseStyles =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60";

/** <button> styled with variant "primary" (default) or "secondary" */
export function Button({ variant = "primary", className = "", ...props }) {
  return <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />;
}

/** <a> styled like a Button, for links and in-page anchors */
export function LinkButton({ variant = "primary", className = "", ...props }) {
  return <a className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />;
}
