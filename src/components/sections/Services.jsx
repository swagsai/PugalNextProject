import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ServiceIconByName } from "@/components/ui/Icons";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Everything your brand needs to show up and stand out."
            description="From the first sketch to the final launch, one tight team handles strategy, design and build."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={index * 100} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-fuchsia-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20">
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-20 -right-20 size-48 rounded-full bg-gradient-to-br from-violet-500 to-orange-400 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  />
                  <div className="relative">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/25">
                      <ServiceIconByName name={service.icon} className="size-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
