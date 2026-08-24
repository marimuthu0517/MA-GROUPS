import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function Hero() {


  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          WEB DEVELOPMENT & DESIGN
        </span>

        <h1>
          We Build
          <br />
          <span>Digital Experiences.</span>
        </h1>

        <p>
          MA Group of Company is a growing startup
          focused on creating modern, responsive and
          professional websites for businesses,
          startups and individuals.
        </p>

        <div className="hero-buttons">

          <Link to="/services" className="primary-btn">
            Explore Services →
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