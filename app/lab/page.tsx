import Link from "next/link";

export const metadata = {
  title: "Digital Lab | Milan Joshi",
  description:
    "Experiments with AI, WebGL, maps and emerging technology by Milan Joshi.",
};

const experiments = [
  {
    title: "AI Experiments",
    description:
      "Exploring generative models, prompt design and practical AI integrations.",
  },
  {
    title: "WebGL & Graphics",
    description:
      "Interactive 3D scenes, shaders and visual experiments on the web.",
  },
  {
    title: "Maps & Data",
    description:
      "Geospatial visualizations and data-driven interactive experiences.",
  },
];

export default function LabPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">DIGITAL LAB</p>

          <h1>
            Experiments with <span>emerging tech.</span>
          </h1>

          <p className="hero-description">
            A space for exploring AI, WebGL, maps and other emerging
            technologies — turning curiosity into working prototypes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Current experiments.</h2>
            </div>
            <p>
              Ongoing explorations at the intersection of design, data and
              technology.
            </p>
          </div>

          <div className="explore-grid">
            {experiments.map((item) => (
              <div className="explore-card" key={item.title}>
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span>In progress →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S CONNECT</p>

          <h2>Curious about something here?</h2>

          <Link href="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
