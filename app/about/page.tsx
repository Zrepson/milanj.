import Link from "next/link";

export const metadata = {
  title: "About | Milan Joshi",
  description:
    "About Milan Joshi — a multidisciplinary professional working across web development, project coordination, digital strategy and life insurance.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">ABOUT</p>

          <h1>
            Turning ideas into <span>useful outcomes.</span>
          </h1>

          <p className="hero-description">
            I work across web development, project coordination, digital
            strategy and life insurance — combining structured thinking,
            technology and clear communication to deliver things that last.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BACKGROUND</p>
              <h2>A versatile foundation.</h2>
            </div>
            <p>
              Years of hands-on experience across disciplines, with a focus on
              practical, maintainable results.
            </p>
          </div>

          <div className="explore-grid">
            <div className="explore-card">
              <h3>Development</h3>
              <p>
                Building responsive, modern websites and digital experiences
                with contemporary web technologies.
              </p>
            </div>

            <div className="explore-card">
              <h3>Coordination</h3>
              <p>
                Planning, documentation and execution for projects that need
                structure and momentum.
              </p>
            </div>

            <div className="explore-card">
              <h3>Strategy</h3>
              <p>
                SEO, analytics and content strategies designed around
                measurable objectives and real growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <p className="eyebrow">PHILOSOPHY</p>

          <h2>
            Clarity, structure and follow-through — on every project.
          </h2>

          <p>
            Whether the work is a website, a project plan or a life insurance
            policy, the goal is the same: something useful, reliable and built
            to last.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="eyebrow">LET&apos;S CONNECT</p>

          <h2>Want to work together?</h2>

          <Link href="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
