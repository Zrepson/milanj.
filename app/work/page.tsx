import Link from "next/link";
import Image from "next/image";
import EngagementCarousel from "@/components/work/EngagementCarousel";
import PhotoLightboxGallery from "@/components/PhotoLightboxGallery";

export const metadata = {
  title: "Work | Milan Joshi",
  description:
    "Professional experience, project contributions, organizational engagements and field events from Milan Joshi's work.",
};

const experienceAreas = [
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
      "Planning, documentation and execution for projects that need structure and momentum.",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "SEO, analytics and content strategies designed around measurable objectives.",
  },
  {
    number: "04",
    title: "Life Insurance",
    description:
      "Professional life insurance services focused on financial protection and long-term security.",
  },
];


const journey = [
  {
    number: "01",
    period: "2011 — 2017",
    title: "Service, study and business",
    description:
      "I studied Marketing at Janapriya Multiple Campus while gaining experience in hospitality and banking. Later, I worked in administration and ran regional sales and distribution operations.",
  },
  {
    number: "02",
    period: "2020 — 2023",
    title: "Logistics and public health projects",
    description:
      "I moved from delivery operations into development work, coordinating partners on biomedical equipment management and capacity building. The work involved training, research, field data, reporting and connecting teams.",
  },
  {
    number: "03",
    period: "2022 — PRESENT",
    title: "Insurance advice and digital practice",
    description:
      "I became a licensed life insurance agent with Life Insurance Corporation (Nepal) Ltd. Digital work remains part of my practice, from maintaining websites to learning analytics, web development and new tools.",
  },
];

const credentials = [
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

const sdgGoals = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-Being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation and Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnerships for the Goals",
];

const moments = [
  {
    src: "/images/about/conference.jpg",
    alt: "Attendees at the International AI and Robotics Conference",
    caption: "International AI and Robotics Conference",
  },
  {
    src: "/images/about/community-visit.jpg",
    alt: "A group gathered outside Siddhi Shaligram Senior Citizens’ Home in Bhaktapur",
    caption: "Training of Trainers Program — a joint initiative of UNDP, RAN and BSN",
  },
  {
    src: "/images/about/project-team.jpg",
    alt: "Participants at a report dissemination for the biomedical equipment assessment in Bagmati Province government hospitals",
    caption:
      "Report dissemination: Assessment of Biomedical Equipment in Government Hospitals in Bagmati Province, Nepal",
  },
  {
    src: "/images/about/professional-meeting.jpg",
    alt: "Colleagues attending the NRNA Global Knowledge Conference",
    caption: "NRNA Global Knowledge Conference",
  },
];

const profileMoments = [
  {
    src: "/images/work-profile/robotics-demonstration.jpg",
    alt: "Milan exploring a robotics demonstration at an event",
    caption: "Exploring a robotics demonstration",
  },
  {
    src: "/images/work-profile/climate-risk-lab.jpg",
    alt: "Milan trying a virtual reality experience at the Climate Risk and Resilience Lab",
    caption: "At the Climate Risk and Resilience Lab",
  },
];

const engagements = [
  { name: "Nepal Insurance Authority", src: "/images/engagements/nepal-insurance-authority.jpg", href: "https://www.nia.gov.np/" },
  { name: "NRNA Global Knowledge Convention", src: "/images/engagements/nrna-global-knowledge-convention.jpg", href: "https://knowledge.nrna.org/" },
  { name: "Nepal Health Professional Council", src: "/images/engagements/nepal-health-science-council.jpg", href: "https://nhpc.gov.np/" },
  { name: "Grande International Hospital", src: "/images/engagements/grande-international-hospital.jpg", href: "https://www.grandehospital.com/" },
  { name: "Siddhi Memorial Foundation", src: "/images/engagements/siddhi-memorial-foundation.jpg", href: "https://smf.org.np/" },
  { name: "International Nepal Fellowship", src: "/images/engagements/international-nepal-fellowship.jpg", href: "https://inf.org.np/" },
  { name: "Pokhara Grande", src: "/images/engagements/pokhara-grande.jpg", href: "https://www.pokharagrande.com/" },
  { name: "Shangri-La Village Resort Pokhara", src: "/images/engagements/shangri-la-village-pokhara.jpg", href: "https://shangrilavillageresort.com/" },
  { name: "Nepal Investment Mega Bank", src: "/images/engagements/nepal-investment-mega-bank.jpg", href: "https://www.nimb.com.np/" },
  { name: "Himalayan Bank", src: "/images/engagements/himalayan-bank.jpg", href: "https://himalayanbank.com/" },
  { name: "A & D Enterprises", src: "/images/engagements/a-and-d-enterprises.jpg" },
  { name: "Angel Engineering Consultancy Pvt. Ltd.", src: "/images/engagements/angel-engineering-consultancy.jpg", href: "https://www.aecpl.com.np/" },
  { name: "Daraz", src: "/images/engagements/daraz.jpg", href: "https://www.daraz.com.np/" },
  { name: "United Nations Development Programme", src: "/images/engagements/undp.jpg", href: "https://www.undp.org/nepal" },
  { name: "Biotechnology Society of Nepal", src: "/images/engagements/biotechnology-society-of-nepal.jpg", href: "https://www.bsn.org.np/" },
  { name: "Ministry of Health and Population, Nepal", src: "/images/engagements/ministry-of-health-and-population-nepal.jpg", href: "https://www.mohp.gov.np/" },
  { name: "The Asia Foundation", src: "/images/engagements/asia-foundation.jpg", href: "https://asiafoundation.org/country/nepal/" },
  { name: "Mission Oxygen Team", src: "/images/engagements/mission-oxygen-team.jpg", href: "https://www.ran.org.np/mission-oxygen-team/" },
  { name: "Data for Development in Nepal", src: "/images/engagements/data-for-development-nepal.jpg", href: "https://www.d4dnepal.org/" },
  { name: "Robotics Association of Nepal", src: "/images/engagements/robotics-association-of-nepal.jpg", href: "https://www.ran.org.np/" },
  { name: "National Health Action Force Nepal", src: "/images/engagements/nhafn.jpg", href: "https://www.nhafn.org.np/" },
  { name: "Nepal Scouts", src: "/images/engagements/nepal-scouts.jpg", href: "https://www.nepalscouts.org/" },
  { name: "Nepal Cycle Society", src: "/images/engagements/nepal-cycle-society.jpg", href: "https://nepalcyclesociety.org.np/" },
  { name: "International AI and Robotics Conference", src: "/images/engagements/ai-conference.jpg", href: "https://www.ran.org.np/events/" },
  { name: "One Million Leaders Asia (OMLAS)", src: "/images/engagements/omlas.jpg", href: "https://onemillionleadersasia.org/" },
  { name: "NELIS Global", src: "/images/engagements/nelis.jpg", href: "https://nelisglobal.org/" },
];
export default function WorkPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">WORK &amp; EXPERIENCE</p>

          <h1>
            Experience and <span>contribution.</span>
          </h1>

          <p className="hero-description">
            Professional experience, project contributions, organizational
            engagements and field events from across my career.
          </p>
        </div>
      </section>

      <nav className="work-page-nav" aria-label="On this page">
        <div className="container">
          <ul>
            <li><a href="#areas">Areas</a></li>
            <li><a href="#experience">Profile</a></li>
            <li><a href="#timeline">Career</a></li>
            <li><a href="#credentials">Credentials</a></li>
            <li><a href="#sustainable-development">SDGs</a></li>
            <li><a href="#engagements">Organizations</a></li>
            <li><a href="#moments">Field work</a></li>
          </ul>
        </div>
      </nav>

      <section className="section work-areas-section" id="areas">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">AREAS OF EXPERIENCE</p>
              <h2>Where I contribute.</h2>
            </div>
            <p>
              A snapshot of the disciplines that have shaped my work. Selected
              project moments and professional milestones appear below.
            </p>
          </div>

          <div className="services-grid">
            {experienceAreas.map((area) => (
              <article className="service-card" key={area.number}>
                <span>{area.number}</span>

                <h3>{area.title}</h3>

                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-experience-section" id="experience">
        <div className="container work-experience-grid">
          <div className="work-experience-aside">
            <p className="eyebrow">PROFESSIONAL PROFILE</p>
            <span className="work-experience-monogram" aria-hidden="true">MJ</span>
            <p>People, systems,<br />technology and execution.</p>
          </div>
          <div className="work-experience-copy">
            <h2>A multidisciplinary professional.</h2>
            <p>
              My work brings together life insurance advisory, project and
              program coordination, operations, administration, digital
              development and sustainable development initiatives.
            </p>
            <p>
              I currently serve as a Life Insurance Consultant with Life
              Insurance Corporation (Nepal) Limited (LIC Nepal). I work with
              individuals and families to understand life insurance, financial
              protection and long-term security through informed,
              client-focused advice.
            </p>
            <p>
              Earlier in my career, I contributed to public health, biomedical
              engineering, emergency response, humanitarian and development
              initiatives. This work brought me together with government,
              development, technical and private-sector partners, and
              strengthened my capabilities in planning, implementation,
              stakeholder coordination, documentation, operations and
              problem-solving.
            </p>
            <p>
              My professional perspective sits at the intersection of people,
              systems, technology and execution. I bring structured thinking,
              operational discipline and clear communication to complex work,
              connecting strategic objectives with practical implementation
              and measurable outcomes while adapting to changing environments.
            </p>
            <p>
              I am also interested in emerging technologies and modern
              life-saving tools, including artificial intelligence, drones,
              digital communication and user-centered digital experiences.
              My journey reflects an ongoing effort to bridge strategic
              thinking with execution, professional discipline with emerging
              technology, and individual expertise with broader social impact.
            </p>
            <PhotoLightboxGallery
              moments={profileMoments}
              gridClassName="work-profile-gallery-grid"
              itemClassName="work-profile-gallery-item"
              imageClassName="work-profile-gallery-image"
              triggerClassName="work-profile-gallery-trigger"
              imageSizes="(max-width: 700px) 100vw, 340px"
            />
          </div>
        </div>
      </section>

      <section className="section work-journey-section" id="timeline">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CAREER TIMELINE</p>
              <h2>How my work evolved.</h2>
            </div>
            <p>
              Different settings, new responsibilities, and a growing set of
              ways to contribute.
            </p>
          </div>
          <div className="work-timeline">
            {journey.map((item) => (
              <article className="work-timeline-item" key={item.number}>
                <span className="work-timeline-number">{item.number}</span>
                <span className="work-timeline-period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="approach">
        <div className="container">
          <p className="eyebrow">PROFESSIONAL APPROACH</p>
          <h2>Clarity, accountability and practical results.</h2>
          <p>
            Whether I&apos;m coordinating a project, working on a digital
            experience or advising on insurance, I aim to make information
            clear, decisions informed and next steps manageable.
          </p>
        </div>
      </section>

      <section className="work-credentials-section" id="credentials">
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
            {credentials.map((credential) => (
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

      <section className="work-interest-section" id="sustainable-development">
        <div className="container">
          <div className="work-interest-grid">
            <div className="work-interest-heading">
              <p className="eyebrow">PERSONAL INTEREST</p>
              <h2>Interest in sustainable development.</h2>
              <figure className="work-interest-photo">
                <div className="work-interest-photo-image">
                  <Image
                    src="/images/work-profile/sustainable-development-dialogue.jpg"
                    alt="Milan at a Youth Dialogue on the Sustainable Development Goals"
                    fill
                    sizes="(max-width: 850px) 100vw, 32vw"
                  />
                </div>
                <figcaption>Youth Dialogue on the SDGs · June 11, 2022</figcaption>
              </figure>
            </div>
            <div className="work-interest-copy">
              <p>
                I have a strong personal interest in the <strong>United Nations
                Sustainable Development Goals (SDGs)</strong> and the broader
                global development agenda. I see the SDGs as an important
                framework for understanding some of the world&apos;s most pressing
                challenges and for encouraging meaningful action at the
                individual, community, national, and global levels.
              </p>
              <p>
                My interests include <strong>sustainable cities and communities,
                climate action, good health and well-being, quality education,
                decent work, innovation, social inclusion, humanitarian response,
                and responsible development.</strong> Through my professional
                experience, community engagement, volunteering, continuous
                learning, and personal initiatives, I seek opportunities to
                contribute to areas that support a more inclusive, resilient, and
                sustainable future.
              </p>
              <p>
                I am particularly interested in how <strong>individual action,
                technology, community participation, responsible institutions,
                and cross-sector collaboration</strong> can contribute to
                sustainable development. I believe meaningful change does not
                always begin with large organizations—it can also begin with
                informed individuals taking practical action within their
                communities.
              </p>
              <p className="work-interest-disclaimer">
                My engagement with the SDGs represents a <strong>personal
                commitment and area of interest</strong>, rather than an official
                affiliation or representation of the United Nations. I continue
                to learn, participate, and explore ways to translate global
                development principles into practical initiatives and everyday
                action.
              </p>
            </div>
          </div>
          <div className="work-sdg-goals">
            <details className="work-sdg-details">
              <summary className="work-sdg-summary">
                <span className="work-sdg-summary-copy">
                  <span className="work-sdg-summary-title">
                    The 17 Sustainable Development Goals
                  </span>
                  <span className="work-sdg-summary-hint">
                    Explore each goal on the United Nations website.
                  </span>
                </span>
                <span className="work-sdg-summary-indicator" aria-hidden="true">
                  +
                </span>
              </summary>
              <ul
                className="work-sdg-grid"
                aria-label="United Nations Sustainable Development Goals"
              >
                {sdgGoals.map((goal, index) => {
                  const number = index + 1;
                  const goalNumber = String(number).padStart(2, "0");

                  return (
                    <li className="work-sdg-item" key={goal}>
                      <a
                        href={`https://sdgs.un.org/goals/goal${number}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Goal ${number}: ${goal} — opens the United Nations website in a new tab`}
                      >
                        <Image
                          src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${goalNumber}.jpg`}
                          alt={`UN Sustainable Development Goal ${number}: ${goal}`}
                          width={80}
                          height={80}
                          unoptimized
                          loading="lazy"
                        />
                        <span>{goal}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
        </div>
      </section>

      <section className="work-engagements-section" id="engagements">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROFESSIONAL ENGAGEMENTS</p>
              <h2>Organizations and initiatives.</h2>
            </div>
            <p>
              Selected organizations, institutions and project teams connected
              to my work across public health, project coordination, hospitality,
              financial services and digital initiatives.
            </p>
          </div>
          <EngagementCarousel items={engagements} />
        </div>
      </section>

      <section className="work-moments-section" id="moments">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EVENTS &amp; FIELD WORK</p>
              <h2>People and places<br /><span className="muted-heading">along the way.</span></h2>
            </div>
            <p>
              Selected moments from conferences, events, important meetings
              and professional gatherings.
            </p>
          </div>
          <PhotoLightboxGallery
            moments={moments}
            gridClassName="work-moments-grid"
            itemClassName="work-moment"
            imageClassName="work-moment-image"
            triggerClassName="work-moment-trigger"
            imageSizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
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
