function ProjectCard({
  title,
  type,
  description,
  url,
  image
}) {
  const cardContent = (
    <>
      <div className="project-preview">
         <img
          src={image}
          alt={`${title} preview`}
          className="project-image"
        />


        <div className="preview-lines">

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
    </>
  );

  return (
    url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        {cardContent}
      </a>
    ) : (
      <div className="project-card">
        {cardContent}
      </div>
    )

  );
}

export default ProjectCard;