function ProjectCard({
  title,
  type,
  description
}) {

  return (

    <div className="project-card">

      <div className="project-preview">

        <div className="preview-logo">
          MA
        </div>

        <div className="preview-lines">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>


      <div className="project-content">

        <small>
          {type}
        </small>

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

      </div>

    </div>

  );
}

export default ProjectCard;