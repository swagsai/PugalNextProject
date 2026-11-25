import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-stone-100/70 py-24 sm:py-32 dark:bg-white/[0.02]"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            title="Projects we're proud of."
            description="A few recent collaborations with ambitious teams across finance, food, fitness and more."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.id}>
              <Reveal delay={(index % 3) * 100}>
                {/* The first row is above the fold on large screens, so prioritise it */}
                <ProjectCard project={project} priority={index < 3} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
