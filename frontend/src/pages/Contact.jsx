import { useState } from "react";
import API_BASE_URL from "../Api";
import ScrollAnimation from "../components/ScrollAnimation";

// Small inline icons (no extra dependency)
function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconMessage(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });


  const handleChange = (event) => {

    const { name, value } = event.target;

    // Phone number: only numbers and maximum 10 digits
    if (name === "phone") {

      const onlyNumbers = value.replace(/\D/g, "");

      if (onlyNumbers.length <= 10) {

        setFormData({
          ...formData,
          phone: onlyNumbers
        });

      }

      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    // Check phone number
    if (!/^[0-9]{10}$/.test(formData.phone)) {

      alert("Phone number must contain exactly 10 digits.");

      return;
    }

    setLoading(true);
    setSubmitted(false);

    try {

      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });


      const data = await response.json();

      if (response.ok) {

        console.log(data);

        if (data.whatsappUrl) {
          const whatsappWindow = window.open("", "_blank");

          if (whatsappWindow) {
            whatsappWindow.location.href = data.whatsappUrl;
          } else {
            window.location.href = data.whatsappUrl;
          }
        }

        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });

      } else {

        console.log("Error:", data.message);

        alert(data.message || "Failed to submit enquiry.");

      }

    } catch (error) {

      console.log("Backend Error:", error);

      alert("Unable to connect to the server.");

    } finally {

      setLoading(false);

    }

  };


  return (

    <main className="page">

      <ScrollAnimation>
        <section className="page-hero">

        <span>
          04 — CONTACT
        </span>

        <h1>
          Let's Build
          <br />
          <strong>Something.</strong>
        </h1>

        <p>
          Have a website idea?
          Tell us about your project.
        </p>

        </section>
      </ScrollAnimation>


      <ScrollAnimation className="scroll-delay-1">
        <section className="contact-section contact-dark">

          {/* Ambient background layers */}
          <div className="contact-bg-gradient" />
          <div className="contact-bg-noise" />
          <div className="contact-glow contact-glow-top" />
          <div className="contact-glow contact-glow-bottom" />

          <div className="contact-info">

            <h2>
              Get In Touch
            </h2>

            <p>
              We are always interested in discussing
              new website ideas and projects.
            </p>


            <div className="contact-detail">

              <span>Email</span>

              <p>
              magroups0517@gmail.com
              </p>

            </div>


            <div className="contact-detail">

              <span>Phone</span>

              <p>
                +91 8344748222
              </p>

            </div>


            <div className="contact-detail">

              <span>Location</span>

              <p>
                Tamil Nadu, India
              </p>

            </div>

          </div>


          <div className="contact-card-frame">

            <div className="contact-card-beam" />

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className={`field-wrap ${focusedInput === "name" ? "is-focused" : ""}`}>
                <IconUser className="field-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </div>


              <div className={`field-wrap ${focusedInput === "email" ? "is-focused" : ""}`}>
                <IconMail className="field-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </div>


              <div className={`field-wrap ${focusedInput === "phone" ? "is-focused" : ""}`}>
                <IconPhone className="field-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("phone")}
                  onBlur={() => setFocusedInput(null)}
                  maxLength="10"
                  minLength="10"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  required
                  title="Phone number must contain exactly 10 digits"
                />
              </div>


              <div className={`field-wrap field-wrap-textarea ${focusedInput === "message" ? "is-focused" : ""}`}>
                <IconMessage className="field-icon field-icon-textarea" />
                <textarea
                  name="message"
                  placeholder="Tell us about your project....!!!"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("message")}
                  onBlur={() => setFocusedInput(null)}
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                disabled={loading}
                className="contact-submit-btn"
              >

                <span className="contact-submit-shine" />

                {loading ? (
                  <span className="contact-spinner" />
                ) : (
                  <span className="contact-submit-label">
                    Send Enquiry
                    <IconArrowRight className="contact-submit-arrow" />
                  </span>
                )}

              </button>


              {submitted && (

                <p className="success">
                  Thank you! Your enquiry has been received.
                </p>

              )}

            </form>

          </div>

        </section>
      </ScrollAnimation>

    </main>

  );
}

export default Contact;