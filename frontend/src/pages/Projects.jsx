import ProjectCard from "../components/projectcard";

function Projects() {

  const projects = [

    {
      title: "E-Commerce Website",
      type: "Demo Project",
      description:
        "A modern online shopping website concept designed to demonstrate our development capabilities."
    },

    {
      title: "Business Website",
      type: "Demo Project",
      description:
        "A professional business website concept for startups and growing companies."
    },

    {
      title: "Restaurant Website",
      type: "Concept Project",
      description:
        "A responsive restaurant website concept with menu, gallery and contact sections."
    },

    {
      title: "Portfolio Website",
      type: "Demo Project",
      description:
        "A clean portfolio website concept for developers and professionals."
    }

  ];


  return (

    <main className="page">

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


      <section className="projects-grid">

        {projects.map((project, index) => (

          <ProjectCard
            key={index}
            title={project.title}
            type={project.type}
            description={project.description}
          />

        ))}

      </section>

    </main>

  );
}

export default Projects;