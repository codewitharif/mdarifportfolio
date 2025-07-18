const GitHub = () => {
  const repositories = [
    {
      name: "Technologies-Portfolio-Website-MDinesh30",
      description:
        "Personal portfolio website built with HTML, CSS, and JavaScript. Features modern design, responsive layout, etc.",
      language: "HTML",
      stars: 12,
      forks: 3,
    },
    {
      name: "DSA-In-JAVA",
      description:
        "Data Structures and Algorithms implementation in Java with various problem solutions and algorithms.",
      language: "Java",
      stars: 24,
      forks: 8,
    },
    {
      name: "Corelity-Data-Analysis",
      description:
        "Data analysis projects using Python and Jupyter Notebooks for comprehensive data insights and visualization.",
      language: "Python",
      stars: 18,
      forks: 5,
    },
  ];

  return (
    <section id="github" className="section">
      <div className="container">
        <h2 className="section-title">
          GitHub <span>Contributions</span>
        </h2>
        <p className="section-subtitle">
          Code that lives, breathes, and contributes — open source and beyond.
        </p>

        <div className="github-grid">
          {repositories.map((repo, index) => (
            <div key={index} className="github-card">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-meta">
                <span className="language">{repo.language}</span>
                <span className="stars">
                  <i className="fas fa-star"></i> {repo.stars}
                </span>
                <span className="forks">
                  <i className="fas fa-code-branch"></i> {repo.forks}
                </span>
              </div>
              <a
                href={`https://github.com/MDinesh30/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        <div className="github-profile">
          <div className="profile-card">
            <div className="profile-header">
              <img
                src="https://avatars.githubusercontent.com/u/12345678?v=4"
                alt="GitHub Profile"
                className="profile-avatar"
              />
              <div className="profile-info">
                <h3>Dinesh M</h3>
                <p>
                  Fourth Year B.Tech IT – Web Developer + AI Tech Enthusiast
                </p>
                <p>
                  GitHub Foundations certified | Python | DSA | Exploring AI &
                  IoT
                </p>
              </div>
            </div>
            <div className="profile-stats">
              <div className="stat">
                <h4>Repositories</h4>
                <p>42</p>
              </div>
              <div className="stat">
                <h4>Followers</h4>
                <p>128</p>
              </div>
              <div className="stat">
                <h4>Following</h4>
                <p>56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
