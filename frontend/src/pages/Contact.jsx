import { useState } from "react";

function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

      const response = await fetch(
        "http://localhost:5000/api/enquiries",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();

      if (response.ok) {

        console.log(data);

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


      <section className="contact-section">

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
              info@magroup.com
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


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
            minLength="10"
            pattern="[0-9]{10}"
            inputMode="numeric"
            required
            title="Phone number must contain exactly 10 digits"
          />


          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>


          <button
            type="submit"
            disabled={loading}
          >

            {loading ? "Sending..." : "Send Enquiry →"}

          </button>


          {submitted && (

            <p className="success">
              Thank you! Your enquiry has been received.
            </p>

          )}

        </form>

      </section>

    </main>

  );
}

export default Contact;