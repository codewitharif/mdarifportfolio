import { useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">M. Dinesh</div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="github"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </Link>
          <Link
            to="leetcode"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Leetcode
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
