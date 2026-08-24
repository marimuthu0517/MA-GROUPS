import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        <div>

          <div className="footer-logo">

            <div className="logo-box">
              MA
            </div>

            <div>
              <h2>MA GROUP</h2>
              <span>OF COMPANY</span>
            </div>

          </div>

          <p>
            Website Development & Website Designing
          </p>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>

        </div>


        <div>

          <h3>Contact</h3>

          <p>
            info@magroup.com
          </p>

          <p>
            +91 8344748222
          </p>

          <p>
            Tamil Nadu, India
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 MA Group of Company.
          All Rights Reserved.
        </p>

        <p>
          Built with creativity.
        </p>

      </div>

    </footer>

  );
}

export default Footer;