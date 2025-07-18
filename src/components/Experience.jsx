const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Mobile Interface Port",
      duration: "Jan 2025 - Jul 2025",
      description: [
        "Developed and maintained dynamic web applications using Frontend frameworks for seamless user experience.",
        "Designed and developed a real-time interactive website that significantly increased user engagement by 40%.",
        "Implemented responsive web design principles, ensuring an optimal mobile-friendly user experience.",
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Selenia.org",
        "Babel.js",
        "Database",
        "GitHub",
      ],
    },
    {
      title: "Web Design and Development Intern",
      company: "Technicalisation Solution",
      duration: "Jan 2025 - May 2025",
      description: [
        "Led a dedicated team of 4 developers in designing and building responsive E-commerce platform.",
        "Successfully launched a responsive modern personal portfolio website, hotel room booking website.",
        "Mentored and guided 4 junior developers in modern web technologies and best coding practices.",
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Babel.js",
        "GitHub",
        "Numpy",
        "Team Leadership",
      ],
    },
    {
      title: "Freelance Designer",
      company: "Self Employed",
      duration: "Dec 2024 - Present",
      description: [
        "Delivered 20+ client projects including logos, UI/UX, mockups, social media graphics with 70% client satisfaction.",
        "Managed end-to-end design workflows, from concept to final deliverables, under tight deadlines.",
      ],
      skills: [
        "UI/UX Design",
        "Adobe Photoshop",
        "Illustrator",
        "Figma",
        "Client Management",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        <p className="section-subtitle">
          From classrooms to codebases — applying knowledge where it matters
          most.
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
              </div>
              <div className="timeline-content">
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="skills">
                  {exp.skills.map((skill, j) => (
                    <span key={j} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
