import { Link } from "react-router-dom";

function Navbar() {

  return (

    <header className="navbar">

      <Link to="/" className="logo">

        <div className="logo-box">
          MA
        </div>

        <div className="logo-text">
          <h2>MA GROUP</h2>
          <span>OF COMPANY</span>
        </div>

      </Link>


      <nav>

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link
          to="/contact"
          className="contact-btn"
        >
          Contact
        </Link>

      </nav>

    </header>

  );
}

export default Navbar;