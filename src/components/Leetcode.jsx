const Leetcode = () => {
  const problems = [
    { id: "25.2.1.4", title: "Two Sum", difficulty: "Easy" },
    { id: "25.2.1.5", title: "Add Two Numbers", difficulty: "Medium" },
    { id: "25.2.1.6", title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: "25.2.1.7", title: "Median of Two Sorted Arrays", difficulty: "Hard" }
  ];

  return (
    <section id="leetcode" className="section">
      <div className="container">
        <h2 className="section-title">Leetcode <span>Progress</span></h2>
        <p className="section-subtitle">Coding isn't just practice — it's how I sharpen problem-solving daily.</p>
        
        <div className="leetcode-stats">
          <div className="stats-card">
            <h3>MDinesh_scoder30</h3>
            <div className="stats-grid">
              <div className="stat">
                <h4>Solved</h4>
                <p>181</p>
              </div>
              <div className="stat">
                <h4>Medium</h4>
                <p>141</p>
              </div>
              <div className="stat">
                <h4>Hard</h4>
                <p>39</p>
              </div>
            </div>
          </div>
        </div>

        <div className="leetcode-content">
          <div className="recent-solutions">
            <h3>Recent Solutions</h3>
            <div className="problems-list">
              {problems.map((problem, index) => (
                <div key={index} className="problem">
                  <span className="problem-id">{problem.id}</span>
                  <span className="problem-title">{problem.title}</span>
                  <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                    {problem.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="leetcode-journey">
            <h3>My Leetcode Journey</h3>
            <p>
              Solving problems on Leetcode has helped me strengthen my Data Structures and Algorithms skills. 
              I enjoy tackling challenges that push my problem-solving abilities and prepare me for technical interviews.
            </p>
            <p>
              I've completed hundreds of problems across a variety of topics, including arrays, trees, graphs, 
              and dynamic programming. My goal is to keep improving and stay consistent in learning and solving 
              new problems daily.
            </p>
            <a 
              href="https://leetcode.com/MDinesh_scoder30/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leetcode;