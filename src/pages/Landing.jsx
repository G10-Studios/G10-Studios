import "../App.css";
import Navbar from "../components/Navbar";
import ParallaxBackground from "../components/ParallaxBackground";

import { useEffect, useState } from "react";

import { db } from "../firebase";

import {
  doc,
  getDoc,
} from "firebase/firestore";


function App() {

  const [website, setWebsite] = useState({
  studioName: "G10 Studios",
  contactEmail: "",
  discordInvite: "",
});

useEffect(() => {

  loadWebsite();

}, []);

const loadWebsite = async () => {

  try {

    const snap = await getDoc(
      doc(db, "settings", "website")
    );

    if (snap.exists()) {

      setWebsite(snap.data());

    }

  } catch (error) {

    console.log(error);

  }

};

  return (
    <div className="app">
      <ParallaxBackground />

      <Navbar />

      <section className="hero">
      

        <div className="hero-content">
          <span className="studio-tag">
            GAME DEVELOPMENT • WORLD BUILDING • INNOVATION
          </span>

          <h1>
  {website.studioName || "G10 Studios"}
</h1>

          <p>
            Crafting immersive games, cinematic worlds,
            and unforgettable digital experiences.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Enter The Studio
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="section about-section">
  <h2>About G10 Studios</h2>

  <div className="about-grid">

    {/* CARD 1 */}
    <div className="about-card">
      <span className="about-label">
        STUDIO DETAILS
      </span>

      <h3>Who We Are</h3>

      <p>
        G10 Studios is a creative game
        development and technology studio
        focused on immersive gameplay,
        cinematic storytelling, and
        next-generation interactive
        experiences.
      </p>

      <p>
        We aim to blend creativity,
        technology, and innovation into
        memorable digital worlds.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="about-card">
      <span className="about-label">
        OUR VISION
      </span>

      <h3>Building The Future</h3>

      <p>
        Our vision is to create immersive
        worlds and intelligent systems
        that redefine storytelling,
        gameplay, and player interaction.
      </p>

      <p>
        G10 Studios seeks to push beyond
        traditional entertainment and
        build experiences players remember.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="about-card">
      <span className="about-label">
        WHAT DRIVES US
      </span>

      <h3>Innovation & Creativity</h3>

      <p>
        We focus on AI-powered systems,
        world building, interactive design,
        and experimental ideas that shape
        the future of gaming.
      </p>

      <div className="about-mini-stats">
        <span>🎮 Game Dev</span>
        <span>🤖 AI Systems</span>
        <span>🌍 World Building</span>
      </div>
    </div>

  </div>
</section>

{/* SERVICES */}
<section
  id="services"
  className="section services-section"
>
  <h2>Services Offered</h2>

  <p className="services-subtitle">
    G10 Studios delivers innovative digital
    solutions through game development,
    web platforms, and software engineering.
  </p>

  <div className="services-grid">

    {/* GAME DEV */}
    <div className="service-card">
      <div className="service-icon">🎮</div>

      <h3>Game Development</h3>

      <p>
        Designing and developing immersive
        games, gameplay systems, mechanics,
        interactive worlds, and player-driven
        experiences.
      </p>
    </div>

    {/* WEB DEV */}
    <div className="service-card">
      <div className="service-icon">🌐</div>

      <h3>Web Development</h3>

      <p>
        Building modern, responsive, and
        scalable websites, dashboards,
        platforms, and interactive web
        experiences.
      </p>
    </div>

    {/* SOFTWARE DEV */}
    <div className="service-card">
      <div className="service-icon">💻</div>

      <h3>Software Development</h3>

      <p>
        Developing powerful software
        solutions, automation systems,
        tools, desktop applications,
        and intelligent digital products.
      </p>
    </div>

  </div>
</section>

      {/* PROJECTS */}
<section
  id="projects"
  className="section projects-section"
>
  <h2>Projects</h2>

  <div className="projects-card">

    <span className="projects-label">
      OUR MISSION
    </span>

    <h3>
      Building Meaningful Digital Experiences
    </h3>

    <p>
      At G10 Studios, every project is built
      with purpose. Our focus is not simply
      creating products, but designing
      experiences that inspire creativity,
      solve real problems, and leave a lasting
      impact on players, creators, and users.
    </p>

    <p>
      From games and software to innovative
      digital platforms, we aim to combine
      technology, storytelling, and smart
      systems to create projects that push
      boundaries and redefine experiences.
    </p>

    <button
        className="projects-btn"
        onClick={() => window.location.href = "/projects"}
        >
        Explore Our Projects
    </button>

  </div>
</section>

      {/* ROADMAP */}
<section
  id="roadmap"
  className="section roadmap-section"
>
  <h2>Roadmap</h2>

  <p className="roadmap-subtitle">
    Our journey toward building innovative
    games, software, and immersive digital
    experiences.
  </p>

  <div className="roadmap-wrapper">

    <div className="roadmap-line"></div>

    <div className="roadmap-card">
      <div className="roadmap-dot"></div>

      <span className="phase-label">
        PHASE 01
      </span>

      <h3>Foundation</h3>

      <ul>
        <li>Studio branding & identity</li>
        <li>Website launch</li>
        <li>Core team formation</li>
        <li>Community setup</li>
      </ul>
    </div>

    <div className="roadmap-card">
      <div className="roadmap-dot"></div>

      <span className="phase-label">
        PHASE 02
      </span>

      <h3>Development</h3>

      <ul>
        <li>Game prototype creation</li>
        <li>Software systems</li>
        <li>Web development projects</li>
        <li>Testing & iteration</li>
      </ul>
    </div>

    <div className="roadmap-card">
      <div className="roadmap-dot"></div>

      <span className="phase-label">
        PHASE 03
      </span>

      <h3>Expansion</h3>

      <ul>
        <li>Public launches</li>
        <li>Community growth</li>
        <li>Collaborations</li>
        <li>Scaling experiences</li>
      </ul>
    </div>

    <div className="roadmap-card">
      <div className="roadmap-dot"></div>

      <span className="phase-label">
        PHASE 04
      </span>

      <h3>Vision</h3>

      <ul>
        <li>Advanced AI systems</li>
        <li>Immersive game worlds</li>
        <li>Smart ecosystems</li>
        <li>Global creative studio</li>
      </ul>
    </div>

  </div>
</section>

{/* TEAM */}
<section
  id="team"
  className="section team-section"
>
  <h2>Our Team</h2>

  <p className="team-subtitle">
    The minds behind G10 Studios — building
    games, software, and digital experiences
    driven by creativity, innovation, and ambition.
  </p>

  <div className="team-grid">

    {/* Founder */}
    <div className="team-card">
      <span className="team-role-label">
        LEADERSHIP
      </span>

      <h3>Founder & Vision</h3>

      <p>
        Leading the vision, direction,
        innovation, and long-term future
        of G10 Studios while shaping
        ideas into meaningful products.
      </p>
    </div>

    {/* Development */}
    <div className="team-card">
      <span className="team-role-label">
        DEVELOPMENT
      </span>

      <h3>Engineering & Systems</h3>

      <p>
        Focused on building scalable
        software, immersive games,
        web experiences, and powerful
        technical systems.
      </p>
    </div>

    {/* Community */}
    <div className="team-card">
      <span className="team-role-label">
        COMMUNITY
      </span>

      <h3>Community & Growth</h3>

      <p>
        Growing the G10 ecosystem,
        collaborations, partnerships,
        and building a strong creator
        driven community.
      </p>
    </div>

  </div>
</section>

    {/* CONTACT */}
<section
  id="contact"
  className="section contact-section"
>
  <h2>Contact</h2>

  <p className="contact-subtitle">
    Have an idea, project, partnership,
    or want to join the journey?
    Let’s build something meaningful together.
  </p>

  <div className="contact-card">

    <span className="contact-label">
      BUILD WITH G10 STUDIOS
    </span>

    <h3>
      Let’s Create Something Extraordinary
    </h3>

    <p>
      Whether you're looking for game
      development, software solutions,
      web experiences, partnerships, or
      collaborations — G10 Studios is
      always open to innovation.
    </p>

    <div className="contact-grid">

      <div className="contact-item">
        <h4>Email</h4>
        <span>
  {website.contactEmail || "contact@g10studios.com"}
</span>
      </div>

      <div className="contact-item">
        <h4>Discord</h4>
        <a
  href={website.discordInvite}
  target="_blank"
  rel="noopener noreferrer"
>

  Join Our Community

</a>
      </div>

      <div className="contact-item">
        <h4>Collaboration</h4>
        <span>Open for partnerships</span>
      </div>

    </div>

    <div className="contact-buttons">

  <button
    className="contact-btn primary-contact-btn"
    onClick={() => {

      if (website.discordInvite) {

        window.open(
          website.discordInvite,
          "_blank"
        );

      }

    }}
  >

    Join Community

  </button>

  <button
    className="contact-btn secondary-contact-btn"
    onClick={() => {

      if (website.contactEmail) {

        window.location.href =
          `mailto:${website.contactEmail}`;

      }

    }}
  >

    Contact G10

  </button>



    </div>
  </div>
</section>
    </div>
  );
}

export default App;