import ProjectCard from "../components/projectcard";
import ScrollAnimation from "../components/ScrollAnimation";

import businessWebsite from "../assets/business-website.png";
import portfolioWebsite from "../assets/portfolio-website.png";

function Projects() {

  const projects = [

    {
      title: "Business Website",
      type: "Demo Project",
      description:
        "A professional business website concept for startups and growing companies.",
      url: "https://smartwayapplianceservices.com",
      image: businessWebsite
    },

    {
      title: "Portfolio Website",
      type: "Demo Project",
      description:
        "A clean portfolio website concept for developers and professionals.",
      url: "https://magroups.vercel.app/",
      image: portfolioWebsite
    },

  ];


  return (

    <main className="page">

      <ScrollAnimation>
        <section className="page-hero">

        <span>
          03 — PROJECTS
        </span>

        <h1>
          Project
          <br />
          <strong>Showcase.</strong>
        </h1>

        <p>
          Explore some demo and concept websites
          created to showcase what MA Group can build.
        </p>

        </section>
      </ScrollAnimation>


      <ScrollAnimation className="scroll-delay-1">
        <section className="projects-grid">

        {projects.map((project, index) => (

          <ProjectCard
            key={index}
            title={project.title}
            type={project.type}
            description={project.description}
            url={project.url}
            image={project.image}
          />

        ))}

        </section>
      </ScrollAnimation>

    </main>

  );
}

export default Projects;