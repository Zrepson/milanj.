import Link from "next/link";

export const metadata = {
  title: "Work | Milan Joshi",
  description:
    "Selected projects, case studies and digital work by Milan Joshi.",
};

const projects = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive, modern websites and digital experiences built with contemporary web technologies.",
    tags: ["Next.js", "TypeScript", "UI/UX"],
  },
  {
    number: "02",
    title: "Project Coordination",
    description:
      "Planning, documentation and execution for projects that need structure and momentum.",
    tags: ["Planning", "Documentation", "Delivery"],
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "SEO, analytics and content strategies designed around measurable objectives.",
    tags: ["SEO", "Analytics", "Growth"],
  },
  {
    number: "04",
    title: "Life Insurance",
    description:
      "Professional life insurance services focused on financial protection and long-term security.",
    tags: ["Protection", "Planning", "Security"],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">WORK</p>

          <h1>
            Selected <span>projects & work.</span>
          </h1>

          <p className="hero-description">
            A sample of digital work, project coordination and strategy
            engagements — each focused on delivering a useful, reliable
            outcome.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROJECTS</p>
              <h2>Things I&apos;ve built.</h2>
            </div>
            <p>
              Each engagement is treated as a partnership — clear scope,
              structured delivery and a focus on lasting value.
            </p>
          </div>

          <div className="services-grid">
            {projects.map((project) => (
              <article className="service-card" key={project.number}>
                <span>{project.number}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S BUILD</p>

          <h2>Have a project in mind?</h2>

          <Link href="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
