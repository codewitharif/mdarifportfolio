const Education = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sri Sairam Institutions of Technology, Chennai",
      duration: "2023 - 2027",
      score: "CGPA: 8.78/10"
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "St Mary Matriculation Higher Secondary School",
      duration: "2022 - 2023",
      score: "Percentage: 74%"
    },
    {
      degree: "Secondary (X)",
      institution: "New Prince Matriculation Higher Secondary School",
      duration: "2020 - 2021",
      score: "Percentage: 83%"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">A solid academic foundation fueling my passion for tech innovation.</p>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <div className="education-meta">
                <span><i className="far fa-calendar-alt"></i> {edu.duration}</span>
                <span><i className="fas fa-graduation-cap"></i> {edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;