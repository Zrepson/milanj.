const projects = [
  {
    title: "Milan Joshi Personal Website",
    description:
      "A modern personal portfolio platform combining professional experience, project work, digital credentials, and personal initiatives.",
    status: "In Development",
    progress: "75%",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "https://www.milanjoshi.com.np",
  },
  {
    title: "Digital Project Laboratory",
    description:
      "An experimental space for exploring web technologies, UI systems, interactive experiences, and emerging digital tools.",
    status: "Work in Progress",
    progress: "45%",
    technologies: ["Next.js", "React", "Three.js"],
    url: "#",
  },
];

export default function WorkInProgress() {
  return (
    <section id="work-in-progress" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.25em]">
            Currently Building
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Work in Progress
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-500">
            Selected digital projects currently being designed, developed,
            tested, and refined.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-neutral-800 p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border px-3 py-1 text-xs">
                  {project.status}
                </span>

                <span className="text-sm text-neutral-500">
                  {project.progress}
                </span>
              </div>

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-neutral-500">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-neutral-900 px-3 py-1 text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-medium"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
