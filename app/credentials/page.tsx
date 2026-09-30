import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Credentials | Milan Joshi",
  description:
    "Experience, certifications and professional capabilities of Milan Joshi.",
};

const capabilityCredentials = [
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

const recognitionCredentials = [
  {
    src: "/images/credentials/governor-for-the-future.jpg",
    alt: "Governor for the Future badge from the 100 Country Summit 2025",
    title: "Governor for the Future",
    detail: "100 Country Summit · 2025",
    description:
      "The badge carries the “Governor for the Future” designation shown at the 2025 summit, in the wider context of NELIS and One Million Leaders’ work with emerging sustainability leaders.",
  },
  {
    src: "/images/credentials/blueprint-better-tomorrow.jpg",
    alt: "Blueprint for a Better Tomorrow sustainable leadership badge",
    title: "Blueprint for a Better Tomorrow",
    detail: "Sustainable Leadership Workshop · NELIS",
    description:
      "The Blueprint brings together ideas from more than 1,000 young people for a more sustainable and inclusive future.",
  },
  {
    src: "/images/credentials/omlas-champions-2025.jpg",
    alt: "OMLAS Champions 2025 badge",
    title: "OMLAS Champions",
    detail: "One Million Leaders Asia · 2025",
    description:
      "A 2025 OMLAS badge connected with One Million Leaders’ work to develop young sustainability leaders across regions, including Asia.",
  },
  {
    src: "/images/credentials/core-humanitarian-certification.jpg",
    alt: "Core Humanitarian Certification badge from DisasterReady.org",
    title: "Core Humanitarian Certification",
    detail: "DisasterReady.org",
    description:
      "Covers humanitarian basics, legal frameworks, cross-cutting issues, safety and security, duty of care, and the humanitarian project cycle.",
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
            {capabilityCredentials.map((item) => (
              <article className="service-card" key={item.number}>
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-credentials-section" id="recognition">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">LEADERSHIP &amp; LEARNING</p>
              <h2>Credentials and recognition.</h2>
            </div>
            <p>
              Badges and certificates from sustainable leadership, future-focused
              initiatives and humanitarian learning.
            </p>
          </div>
          <div className="work-credentials-grid">
            {recognitionCredentials.map((credential) => (
              <article className="work-credential" key={credential.src}>
                <div className="work-credential-image">
                  <Image
                    src={credential.src}
                    alt={credential.alt}
                    fill
                    sizes="(max-width: 600px) 44vw, (max-width: 900px) 40vw, 24vw"
                  />
                </div>
                <div className="work-credential-copy">
                  <h3>{credential.title}</h3>
                  <p>{credential.detail}</p>
                  <p className="work-credential-description">{credential.description}</p>
                </div>
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
