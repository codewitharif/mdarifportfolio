import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>M. Dinesh</h1>
            <h2>I'm a Web Developer!</h2>
            <div className="hero-buttons">
              <a href="/resume.pdf" className="btn" download>
                View Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn btn-outline"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
              alt="Developer"
            />
          </div>
        </div>
        <div className="contact-info">
          <p>
            <i className="fas fa-phone"></i> +91 8072732450
          </p>
          <p>
            <i className="fas fa-envelope"></i> m.dinesh.k27@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Chennai, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
