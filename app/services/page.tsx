import Link from "next/link";

export const metadata = {
  title: "Services | Milan Joshi",
  description:
    "Web development, project coordination, digital strategy and life insurance services by Milan Joshi.",
};

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

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">SERVICES</p>

          <h1>
            Practical <span>expertise.</span>
          </h1>

          <p className="hero-description">
            Combining structured thinking, technology and communication to turn
            ideas into useful outcomes — across web, projects, strategy and
            insurance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I DO</p>
              <h2>Four areas of focus.</h2>
            </div>
            <p>
              Each service is delivered with clarity, structure and
              follow-through.
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

      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S BUILD</p>

          <h2>Ready to get started?</h2>

          <Link href="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
