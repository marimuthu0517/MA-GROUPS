import Hero from "../components/Hero";
import ScrollAnimation from "../components/ScrollAnimation";

function Home() {

  const services = [
    {
      title: "Website Development",
      description: "Fast, responsive and modern websites built for businesses and individuals."
    },
    {
      title: "Website Designing",
      description: "Clean and attractive UI designs focused on user experience."
    },
    {
      title: "Business Websites",
      description: "Professional websites to help businesses build a strong online presence."
    }
  ];

  return (

    <>

      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation className="scroll-delay-1">
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
      </ScrollAnimation>

      <ScrollAnimation className="scroll-delay-2">
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
      </ScrollAnimation>

    </>

  );
}

export default Home;