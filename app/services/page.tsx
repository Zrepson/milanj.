import Link from "next/link";

export const metadata = {
  title: "Services | Milan Joshi",
  description:
    "Web development, project coordination, digital strategy and life insurance guidance from Milan Joshi.",
};

type ServiceOffering = {
  number: string;
  title: string;
  summary: string;
  support: string[];
  note?: string;
};

const services: ServiceOffering[] = [
  {
    number: "01",
    title: "Web development",
    summary:
      "Responsive websites and digital experiences with clear information structure and maintainable implementation.",
    support: [
      "Page structure and responsive layouts",
      "Interface development and integration",
      "Launch handoff and practical next steps",
    ],
  },
  {
    number: "02",
    title: "Project coordination",
    summary:
      "Keep people, workstreams and decisions aligned from planning through delivery.",
    support: [
      "Work plans, milestones and documentation",
      "Stakeholder coordination and clear updates",
      "Follow-through across teams and activities",
    ],
  },
  {
    number: "03",
    title: "Digital strategy",
    summary:
      "Create a practical direction for reaching the right people through search, content and measurement.",
    support: [
      "Search and content priorities",
      "Audience and website goals",
      "Measurement and improvement opportunities",
    ],
  },
  {
    number: "04",
    title: "Life insurance guidance",
    summary:
      "Client-focused conversations through LIC Nepal to help individuals and families understand financial protection and long-term security.",
    support: [
      "Discussing protection needs and priorities",
      "Explaining relevant policy information",
      "Helping people consider informed next steps",
    ],
    note: "Policy terms, eligibility and benefits are subject to LIC Nepal’s official policy information.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We clarify the need, context and people involved.",
  },
  {
    number: "02",
    title: "Agree on a plan",
    description: "We define the scope, priorities and next steps together.",
  },
  {
    number: "03",
    title: "Deliver and follow through",
    description: "I keep communication clear through handoff and close-out.",
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
            ideas into useful outcomes across web, projects, strategy and
            insurance.
          </p>
        </div>
      </section>

      <section className="service-offerings-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WAYS I CAN HELP</p>
              <h2>Clear scope. Useful next steps.</h2>
            </div>
            <p>
              Each engagement starts with a conversation about what you need and
              what a practical result would look like.
            </p>
          </div>

          <div className="service-offerings-list">
            {services.map((service) => (
              <article className="service-offering" key={service.number}>
                <span className="service-offering-number">{service.number}</span>
                <div className="service-offering-intro">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <div className="service-offering-detail">
                  <p className="eyebrow">TYPICAL SUPPORT</p>
                  <ul>
                    {service.support.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {service.note ? (
                    <p className="service-offering-note">{service.note}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2>A clear route from conversation to delivery.</h2>
            </div>
            <p>
              The details vary by service, but good collaboration starts with
              listening and ends with clear next steps.
            </p>
          </div>
          <ol className="service-process-list">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S TALK</p>
          <h2>Tell me what you need help with.</h2>
          <Link href="/contact" className="button button-primary">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
