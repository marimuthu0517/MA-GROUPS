import { Link } from "react-router-dom";
import FloatingPaths from "./floatingpath";

// Splits a line of text into individually animated letter spans.
function AnimatedLine({ text, startIndex = 0, className = "" }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={startIndex + i}
          className="hero-letter"
          style={{ "--delay": `${(startIndex + i) * 0.03}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function Hero() {

  const line1 = "We Build";
  const line2 = "Digital Experiences.";

  return (
    <section className="hero">

      <div className="hero-bg">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="hero-content">

        <span className="hero-tag">
          WEB DEVELOPMENT & DESIGN
        </span>

        <h1>
          <AnimatedLine text={line1} />
          <br />
          <AnimatedLine text={line2} startIndex={line1.length} className="hero-line-muted" />
        </h1>

        <p>
          MA Group of Company is a growing startup
          focused on creating modern, responsive and
          professional websites for businesses,
          startups and individuals.
        </p>

        <div className="hero-buttons">

          <Link to="/services" className="primary-btn">
            <span className="btn-label">Explore Services</span>
            <span className="btn-arrow">→</span>
          </Link>

          <Link to="/contact" className="secondary-btn">
            Start a Project
          </Link>

        </div>

      </div>

      <div className="hero-card">

        <div className="hero-logo">
          MA
        </div>

        <h2>MA GROUP</h2>

        <p>
          WEB DEVELOPMENT
          <br />
          &
          <br />
          WEBSITE DESIGNING
        </p>

      </div>

    </section>
  );
}

export default Hero;