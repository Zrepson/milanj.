import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive, modern websites and digital experiences built with contemporary web technologies.",
  },
  {
    number: "02",
    title: "Project Coordination",
    description:
      "Planning, coordination, documentation and execution for projects that need structure and momentum.",
  },
  {
    number: "03",
    title: "Life Insurance",
    description:
      "Professional life insurance services focused on financial protection and long-term security.",
  },
  {
    number: "04",
    title: "Digital Strategy",
    description:
      "SEO, analytics, content and digital growth strategies designed around measurable objectives.",
  },
];

const explorations = [
  {
    title: "Projects",
    description: "Selected projects, case studies and digital work.",
    href: "/work",
  },
  {
    title: "Digital Lab",
    description: "Experiments with AI, WebGL, maps and emerging technology.",
    href: "/lab",
  },
  {
    title: "Credentials",
    description: "Experience, certifications and professional capabilities.",
    href: "/credentials",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">
            MILAN JOSHI · DIGITAL · PROJECTS · INSURANCE
          </p>

          <h1>
            Building useful things for a{" "}
            <span>better tomorrow.</span>
          </h1>

          <p className="hero-description">
            A multidisciplinary professional working across web development,
            project coordination, digital strategy and life insurance services.
          </p>

          <div className="hero-actions">
            <Link href="/work" className="button button-primary">
              Explore My Work
            </Link>

            <Link href="/contact" className="button">
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I DO</p>
              <h2>Practical expertise.</h2>
            </div>

            <p>
              Combining structured thinking, technology and communication to
              turn ideas into useful outcomes.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span>{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <p className="eyebrow">WORKFLOW</p>

          <h2>
            Discover → Ideate → Plan → Execute → Refine → Deliver
          </h2>

          <p>
            A straightforward process for transforming requirements into
            reliable and maintainable digital outcomes.
          </p>
        </div>
      </section>

      {/* EXPLORATION */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>More than a portfolio.</h2>
            </div>
          </div>

          <div className="explore-grid">
            {explorations.map((item) => (
              <Link
                href={item.href}
                className="explore-card"
                key={item.title}
              >
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span>View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S BUILD</p>

          <h2>Have an idea, project or question?</h2>

          <Link href="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}