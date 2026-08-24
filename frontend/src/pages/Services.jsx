import ServiceCard from "../components/Servicecard";

function Services() {

  const services = [

    {
      number: "01",
      title: "Website Development",
      description:
        "Fast, responsive and modern websites built for businesses and individuals."
    },

    {
      number: "02",
      title: "Website Designing",
      description:
        "Clean and attractive UI designs focused on user experience."
    },

    {
      number: "03",
      title: "Business Websites",
      description:
        "Professional websites to help businesses build a strong online presence."
    },

    {
      number: "04",
      title: "E-Commerce Websites",
      description:
        "Modern online stores with product pages and shopping functionality."
    },

    {
      number: "05",
      title: "Portfolio Websites",
      description:
        "Professional portfolio websites for students, developers and professionals."
    },

    {
      number: "06",
      title: "Website Maintenance",
      description:
        "Website updates, improvements and ongoing maintenance."
    }

  ];


  return (

    <main className="page">

      <section className="page-hero">

        <span>
          02 — SERVICES
        </span>

        <h1>
          What We
          <br />
          <strong>Can Build.</strong>
        </h1>

        <p>
          We provide modern website development
          and website designing services.
        </p>

      </section>


      <section className="services-grid">

        {services.map((service) => (

          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
          />

        ))}

      </section>

    </main>

  );
}

export default Services;