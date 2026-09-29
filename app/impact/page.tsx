import Link from "next/link";

export const metadata = {
  title: "Impact | Milan Joshi",
  description:
    "Selected contributions across public health, project coordination, sustainable development and emerging technology.",
};

const contributions = [
  {
    title: "Health systems",
    description:
      "Worked with partners on biomedical equipment assessment and management in Bagmati Province government hospitals, contributing to research, field data, reporting, training and capacity building.",
    label: "PUBLIC HEALTH",
    href: "/work#moments",
    linkLabel: "See related field work",
  },
  {
    title: "Connecting teams",
    description:
      "Across development and public health projects, my work has involved bringing people, institutions and practical delivery together around shared objectives.",
    label: "COORDINATION",
    href: "/work#timeline",
    linkLabel: "See related experience",
  },
  {
    title: "Sustainable development",
    description:
      "My personal interest in the SDGs guides ongoing learning about inclusive communities, climate action, health, education, innovation and responsible development. It is not an official UN affiliation.",
    label: "PERSONAL INTEREST",
    href: "/work#sustainable-development",
    linkLabel: "Read about this interest",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">IMPACT &amp; CONTRIBUTIONS</p>

          <h1>
            Exploring ideas with <span>practical impact.</span>
          </h1>

          <p className="hero-description">
            Selected contributions in public health and project coordination,
            alongside a personal interest in sustainable development.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED CONTRIBUTIONS</p>
              <h2>Work with practical purpose.</h2>
            </div>
            <p>
              A snapshot of areas where my experience, collaboration and
              personal interests meet practical needs. Follow each link for
              more context and related material.
            </p>
          </div>

          <div className="explore-grid">
            {contributions.map((item) => (
              <article className="explore-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.label}</span>
                <Link
                  href={item.href}
                  className="text-link impact-related-link"
                  aria-label={`${item.linkLabel}: ${item.title}`}
                >
                  {item.linkLabel} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Have an idea with potential?</h2>
          <Link href="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
