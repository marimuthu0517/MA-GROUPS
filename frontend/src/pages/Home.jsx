import { useEffect, useState } from "react";
import Hero from "../components/Hero";

function Home() {

  const [services, setServices] = useState([]);

  useEffect(() => {

    fetch("http://localhost:6000/api/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

  }, []);

  return (

    <>

      <Hero />

      <section className="home-about">

        <div>

          <span>
            ABOUT MA GROUP
          </span>

          <h2>
            Building websites
            <br />
            <strong>with purpose.</strong>
          </h2>

        </div>

        <div>

          <p>
            MA Group of Company is a startup focused
            on website development and website designing.
          </p>

          <p>
            We help businesses and individuals create
            a professional digital presence through
            modern design and web technology.
          </p>

        </div>

      </section>

      <section className="home-services">

        <span>
          WHAT WE DO
        </span>

        <h2>
          Our Services
        </h2>

        <div className="mini-services">

          {services.map((service) => (

            <div key={service._id}>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>

    </>

  );
}

export default Home;