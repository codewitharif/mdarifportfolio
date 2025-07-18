const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Passionate developer building innovative solutions and solving real-world problems.</h3>
            <div className="divider"></div>
            
            <p>
              Hey there! 🌧 I'm M Dinesh, a B.Tech Information Technology student passionate about building web applications 
              that solve real-world problems. I've created projects like Aquaswatt for monitoring the usage of water and electricity, 
              with skills in React, Node.js, and Python. I love exploring new technologies, solving DSA problems and working on 
              AI-powered solutions.
            </p>
            
            <div className="about-grid">
              <div className="about-column">
                <h4>Who I Am</h4>
                <ul>
                  <li>A web developer with interest in software engineering.</li>
                  <li>Enjoy solving problems and building scalable applications.</li>
                  <li>Always learning new technologies to improve my skills.</li>
                </ul>
              </div>
              
              <div className="about-column">
                <h4>My Goals</h4>
                <ul>
                  <li>Build digital products that solve real-world challenges at scale.</li>
                  <li>Advance as a web developer with modern frameworks.</li>
                  <li>Grow the developer community through open-source contributions.</li>
                </ul>
              </div>
            </div>
            
            <div className="philosophy">
              <h4>My Philosophy</h4>
              <ul>
                <li>Technology should simplify lives, not complicate them.</li>
                <li>Great software solves problems, not just writes code.</li>
                <li>Continuous learning keeps you ahead in tech.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;