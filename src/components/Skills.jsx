const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Java', level: 65 },
    { name: 'MySQL', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'MongoDB', level: 65 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">A modern tech stack designed for impact, efficiency, and scale.</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;