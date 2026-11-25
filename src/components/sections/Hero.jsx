import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8 yrs", label: "Of craft" },
  { value: "98%", label: "Client retention" },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background: gradient blobs + dotted grid (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 size-[28rem] animate-float rounded-full bg-violet-400/40 blur-3xl dark:bg-violet-600/30" />
        <div className="absolute top-1/3 -right-24 size-[30rem] animate-float-slow rounded-full bg-fuchsia-400/40 blur-3xl dark:bg-fuchsia-600/25" />
        <div className="absolute -bottom-32 left-1/3 size-[26rem] animate-float rounded-full bg-orange-300/50 blur-3xl dark:bg-orange-500/20" />
        <div className="bg-grid absolute inset-0 text-stone-900 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:text-white" />
      </div>

      <Container>
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-stone-600 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-stone-300">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Now booking new projects
        </p>

        <h1
          id="hero-heading"
          className="animate-fade-up mt-6 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-balance [animation-delay:100ms] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-stone-500 dark:text-stone-400">{siteConfig.name}</span>
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
            Design that moves people.
          </span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-stone-600 [animation-delay:200ms] sm:text-xl dark:text-stone-300">
          {siteConfig.tagline}
        </p>

        <div className="animate-fade-up mt-10 flex flex-col gap-3 [animation-delay:300ms] sm:flex-row">
          <LinkButton href="#contact">
            Get Started
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </LinkButton>
          <LinkButton href="#work" variant="secondary">
            View Work
          </LinkButton>
        </div>

        <dl className="animate-fade-up mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-stone-300/70 pt-8 [animation-delay:400ms] dark:border-white/10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 text-xs text-stone-500 sm:text-sm dark:text-stone-400">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
