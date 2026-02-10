import React, { useState } from "react";
import "./app.css";
import ppic from "./assets/ppic.png";
import gogrocers_screenshot from "./assets/gogrocers_screenshot.png";
import quizo_screenshot from "./assets/quizo_screenshot.png";

function App() {
  const [result, setResult] = useState("");
  const ACCESS_KEY = (process.env.REACT_APP_WEB3_ACCESS_KEY || "").trim();

  const isUUID = (val) => {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      val
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    if (!ACCESS_KEY) {
      setResult(
        "Missing access key: set REACT_APP_WEB3_ACCESS_KEY in project root .env and restart the dev server."
      );
      return;
    }

    if (!isUUID(ACCESS_KEY)) {
      setResult(
        "Invalid access key format. Ensure REACT_APP_WEB3_ACCESS_KEY is a valid UUID."
      );
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Message sent.");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (err) {
      setResult("Error connecting to server.");
    }
  };

  return (
    <div className="App">
      <header>
        <div className="container nav-bar">
          <div className="logo">V Abhijith</div>
          <nav>
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="greeting">
              Hello<span>.</span>
            </p>
            <h1>I'm Abhijith</h1>
            <h2 className="role">Software Developer</h2>
            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() => (window.location.href = "#contact")}
              >
                Got a project?
              </button>
              <button className="btn-secondary">My resume</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="circle-bg">
              <img src={ppic} alt="Abhijith" />
            </div>
          </div>
        </div>
        <div className="tech-bar">
          <span>React.js</span> <span>Node.js</span> <span>Next.js</span>{" "}
          <span>TypeScript</span> <span>Kafka</span> <span>Redis</span>{" "}
          <span>AWS</span>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container about-grid">
          <div className="services">
            <div className="service-item">
              <span>🏗️</span> Distributed Systems
            </div>
            <div className="service-item">
              <span>🤖</span> AI Automation
            </div>
            <div className="service-item">
              <span>👥</span> Technical Leadership
            </div>
          </div>
          <div className="about-content">
            <h3>About me</h3>
            <p>
              IIT (BHU) Engineer focused on the future of scalable web
              ecosystems. Expert in crafting responsive UIs and microservices
              architectures that thrive under pressure. Whether it's automating
              tasks with AI or optimizing backend performance, I build software
              designed for the real world.
            </p>
            <div className="stats">
              <div className="stat-box">
                <span className="stat-number">600+</span>
                <span className="stat-label">LeetCode Problems</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">98.14%</span>
                <span className="stat-label">JEE Main Percentile</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">12+</span>
                <span className="stat-label">Projects Managed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Skills</h2>
            <div className="horizontal-bar"></div>
          </div>

          <section className="skills">
            <div className="container">
              <div className="skills-grid">
                {/* Card 1: Core Engineering */}
                <div className="skill-card">
                  <h4>Core Engineering</h4>
                  <div className="skill-tags">
                    <span>JavaScript</span> <span>TypeScript</span>{" "}
                    <span>C++</span>
                    <span>Python</span> <span>Data Structures</span>{" "}
                    <span>Algorithms</span>
                  </div>
                </div>

                {/* Card 2: Frontend Engineering */}
                <div className="skill-card">
                  <h4>Frontend Engineering</h4>
                  <div className="skill-tags">
                    <span>React.js</span> <span>Next.js</span>{" "}
                    <span>Tailwind CSS</span>
                    <span>HTML5</span> <span>CSS3</span> <span>Bootstrap</span>
                    <span>Responsive Design</span> <span>Framer Motion</span>
                  </div>
                </div>

                {/* Card 3: Backend & Infrastructure */}
                <div className="skill-card">
                  <h4>Backend & Infrastructure</h4>
                  <div className="skill-tags">
                    <span>Node.js</span> <span>Express.js</span>{" "}
                    <span>PostgreSQL</span>
                    <span>MongoDB</span> <span>Redis</span>{" "}
                    <span>Apache Kafka</span>
                    <span>NGINX</span> <span>Microservices</span>{" "}
                    <span>JWT Auth</span>
                  </div>
                </div>

                {/* Card 3: AI & Automation */}
                <div className="skill-card">
                  <h4>AI & Automation</h4>
                  <div className="skill-tags">
                    <span>Gemini API</span> <span>n8n Workflows</span>
                    <span>NLP Integration</span>{" "}
                    <span>Large Language Models</span>
                  </div>
                </div>

                {/* Card 4: DevOps & Cloud */}
                <div className="skill-card">
                  <h4>Cloud & Tooling</h4>
                  <div className="skill-tags">
                    <span>AWS</span> <span>Firebase</span> <span>Vercel</span>
                    <span>Git / GitHub</span> <span>REST APIs</span>{" "}
                    <span>JWT Auth</span>
                  </div>
                </div>
                {/* Card 5: Web & UI Design */}
                <div className="skill-card ">
                  <h4>Design & Media</h4>
                  <div className="skill-tags">
                    <span>Figma</span> <span>Web Design</span>{" "}
                    <span>Tailwind CSS</span>
                    <span>OBS Studio</span> <span>OpenShot Editor</span>
                    <span>UI/UX </span> <span>Video Production</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Projects</h2>
            <div className="horizontal-bar"></div>
          </div>

          <div className="projects-stack">
            {/* Project 1: GoGrocers */}
            <div className="project-card-wide">
              <div className="project-grid-inner">
                {/* Left Side: Content */}
                <div className="project-content">
                  <div className="project-header">
                    <div className="header-left">
                      <span className="featured-badge">Featured Project</span>
                      <h3>GoGrocers</h3>
                    </div>
                    <div className="project-tags">
                      <span>React</span> <span>Kafka</span> <span>AWS</span>
                    </div>
                  </div>
                  <p className="project-description">
                    GoGrocers is an{" "}
                    <strong>AI-enhanced e-commerce platform</strong> built with
                    <strong>React.js</strong> and a{" "}
                    <strong>microservices backend</strong> on{" "}
                    <strong>AWS</strong>. It utilizes <strong>NGINX</strong>,{" "}
                    <strong>Redis</strong>, and <strong>Apache Kafka</strong>
                    to ensure <strong>high performance</strong> and{" "}
                    <strong>scalable, event-driven communication</strong>. A key
                    highlight is its <strong>Gemini API integration</strong>,
                    which powers an
                    <strong>intelligent assistant</strong> for recipe-driven
                    shopping suggestions.
                  </p>
                  <div className="project-footer">
                    <a
                      href="https://github.com/VAbhijith2003github/gogrocers"
                      className="btn-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>

                {/* Right Side: Image/Screenshot */}
                <div className="project-image-container">
                  <img
                    src={gogrocers_screenshot}
                    alt="GoGrocers Preview"
                    className="project-img"
                  />
                  <div className="image-overlay-glow"></div>
                </div>
              </div>
            </div>

            {/* Project 2: Juniper AI */}
            <div className="project-card-wide">
              <div className="project-grid-inner">
                <div className="project-content">
                  <div className="project-header">
                    <div className="header-left">
                      <span className="featured-badge">Automation System</span>
                      <h3>Juniper AI</h3>
                    </div>
                    <div className="project-tags">
                      <span>n8n</span> <span>Gemini API</span> <span>NLP</span>{" "}
                      <span>Notion</span>
                    </div>
                  </div>
                  <p>
                    An <strong>AI-driven automation system</strong> built with
                    n8n workflows. Juniper enables NLP-driven file search and
                    automated delivery via WhatsApp, integrating Gemini models
                    to retrieve task and calendar data directly from Notion.
                  </p>
                  <div className="project-footer">
                    <a href="#" className="btn-secondary disabled">
                      Internal Tool
                    </a>
                    <span className="project-status">Automation Engine</span>
                  </div>
                </div>
                <div className="project-image-container">
                  <img
                    src={quizo_screenshot}
                    alt="Juniper Workflow"
                    className="project-img"
                  />
                  <div className="image-overlay-glow"></div>
                </div>
              </div>
            </div>

            {/* Project 3: Quizo */}
            <div className="project-card-wide">
              <div className="project-grid-inner">
                <div className="project-content">
                  <div className="project-header">
                    <div className="header-left">
                      <span className="featured-badge">Ed-Tech Solution</span>
                      <h3>Quizo</h3>
                    </div>
                    <div className="project-tags">
                      <span>React.js</span> <span>Real-time UI</span>{" "}
                      <span>NTA Interface</span>
                    </div>
                  </div>
                  <p>
                    A high-fidelity testing platform modeled after the{" "}
                    <strong>National Testing Agency (NTA)</strong> interface.
                    Replicates real-exam environments for JEE/NEET, focusing on{" "}
                    <strong>time-constraint logic</strong> and pixel-perfect UI
                    replication.
                  </p>
                  <div className="project-footer">
                    <a
                      href="https://github.com/VAbhijith2003github/quizo"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      View Code
                    </a>
                    <span className="project-status">UI/UX Focused</span>
                  </div>
                </div>
                <div className="project-image-container">
                  <img
                    src={quizo_screenshot}
                    alt="Quizo Interface"
                    className="project-img"
                  />
                  <div className="image-overlay-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-header">
            <h3>Get In Touch</h3>
            <p>I'm currently looking for new challenges—let's connect.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div className="info-text">
                  <span className="label">Location</span>
                  <span className="value">IIT (BHU), Varanasi</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div className="info-text">
                  <span className="label">Email</span>
                  <a href="mailto:vabhijith2003@gmail.com" className="value">
                    vabhijith2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-links">
                <a
                  href="https://github.com/VAbhijith2003github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/v-abhijith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/vabhijith2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LeetCode
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
              {result && (
                <p
                  className="form-result"
                  style={{ marginTop: "15px", color: "var(--accent)" }}
                >
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
