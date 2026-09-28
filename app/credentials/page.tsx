import Link from "next/link";

export const metadata = {
  title: "Credentials | Milan Joshi",
  description:
    "Experience, certifications and professional capabilities of Milan Joshi.",
};

const credentials = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Hands-on experience building responsive, modern websites and digital experiences.",
  },
  {
    number: "02",
    title: "Project Management",
    description:
      "Planning, coordination and delivery across multi-disciplinary projects.",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "SEO, analytics and content strategy for measurable digital growth.",
  },
  {
    number: "04",
    title: "Life Insurance",
    description:
      "Professional life insurance services focused on protection and security.",
  },
];

export default function CredentialsPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">CREDENTIALS</p>

          <h1>
            Experience & <span>capabilities.</span>
          </h1>

          <p className="hero-description">
            A summary of professional experience, certifications and
            capabilities across web development, project coordination, digital
            strategy and life insurance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CAPABILITIES</p>
              <h2>What I bring.</h2>
            </div>
            <p>
              A versatile skill set honed across multiple disciplines and
              project types.
            </p>
          </div>

          <div className="services-grid">
            {credentials.map((item) => (
              <article className="service-card" key={item.number}>
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S BUILD</p>

          <h2>Want to learn more?</h2>

          <Link href="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
