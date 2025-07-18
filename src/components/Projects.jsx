const Projects = () => {
  const projects = [
    {
      title: "Aquaswatt",
      description:
        "A platform to track and monitor water power and electricity in each room in smart homes. It is a full-stack IoT based real-time project.",
      technologies: ["React", "Node.js", "IoT", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      title: "Business Website",
      description:
        "A business website showcasing portfolio, services, client testimonials with modern UI/UX principles.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      title: "Portfolio Website",
      description:
        "My portfolio website, showcasing my professional background. Clean, responsive design.",
      technologies: ["React", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      title: "FoodieHub430",
      description:
        "A modern restaurant discovery platform that helps food lovers find their perfect dining experience.",
      technologies: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      links: {
        live: "#",
        code: "#",
      },
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
