import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
  ChevronDown,
  Menu,
  X,
  Target,
  Rocket,
  Lightbulb,
  Users,
  MessageCircle,
  Instagram,
  Send,
} from "lucide-react";
import { FaWhatsapp, FaDocker } from "react-icons/fa";
import { SiClerk, SiStripe, SiRazorpay } from "react-icons/si";
import heroimg from "../assets/heroimg.jpg";
import myimg from "../assets/myimg.jpeg";
import indieshows from "../assets/indieshows.png";
import bgremover from "../assets/bgremover.png";
import jobmarket from "../assets/jobmarket.png";
import bizstripe from "../assets/bizstripe.png";
import urbankart from "../assets/urbankart.png";
import bg from "../assets/bg.png";
import blogapp from "../assets/blogapp.png";
import { TypeAnimation } from "react-type-animation";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/codewitharif",
      color: "text-gray-600 hover:text-gray-800",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mdarif1522003",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/sayarifff",
      color: "text-pink-600 hover:text-pink-800",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/917772884698?text=Hello%20Arif%2C%20I%20want%20to%20connect%20with%20you",
      color: "text-green-600 hover:text-green-800",
    },
    {
      icon: Mail,
      href: "mailto:mdarif1522003@gmail.com",
      color: "text-red-600 hover:text-red-800",
    },
  ];

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${
        mobile
          ? "block w-full text-left px-4 py-2 text-lg"
          : "px-3 py-2 text-sm font-medium"
      } transition-all duration-300 hover:scale-105 ${
        activeSection === href
          ? darkMode
            ? "text-blue-400 bg-blue-500/10"
            : "text-blue-600 bg-blue-50"
          : darkMode
          ? "text-gray-300 hover:text-white hover:bg-gray-800"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      } rounded-lg`}
    >
      {children}
    </button>
  );

  const Card = ({ children, className = "", hover = true }) => (
    <div
      className={`${
        darkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
      } border rounded-xl backdrop-blur-sm transition-all duration-500 ${
        hover
          ? "hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
          : ""
      } ${className}`}
      style={{
        background: hover
          ? darkMode
            ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
            : "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)"
          : undefined,
      }}
    >
      {children}
    </div>
  );

  const SkillBadge = ({ skill }) => (
    <span
      className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
        darkMode
          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
          : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200"
      }`}
    >
      {skill}
    </span>
  );

  // Reusable Contact Item Component
  const ContactItem = ({ icon, text }) => (
    <div className="flex items-center space-x-4 group">
      {icon}
      <span className="group-hover:text-white text-gray-300 text-[16px] transition">
        {text}
      </span>
    </div>
  );

  const Card2 = ({ icon, title, description, darkMode }) => (
    <div
      className={`p-6 rounded-xl shadow-md border transition ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-gray-100"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm">
        {description.map((item, i) => (
          <li key={i} className="leading-relaxed">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode
            ? "bg-gray-900/95 border-gray-800"
            : "bg-white/95 border-gray-200"
        } backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MD ARIF
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="hero">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="skills">Skills</NavLink>

              <NavLink href="projects">Projects</NavLink>
              <NavLink href="experience">Experience</NavLink>

              <NavLink href="education">Education</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-gray-900" : "bg-white"
            } border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink href="hero" mobile>
                Home
              </NavLink>
              <NavLink href="about" mobile>
                About
              </NavLink>
              <NavLink href="skills" mobile>
                Skills
              </NavLink>
              <NavLink href="projects" mobile>
                Projects
              </NavLink>
              <NavLink href="experience" mobile>
                Experience
              </NavLink>

              <NavLink href="education" mobile>
                Education
              </NavLink>
              <NavLink href="contact" mobile>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden "
      >
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Mobile-first column layout (image first) */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            {/* Text Content - comes after image in DOM for mobile */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
                  Hey! 👋 I'm
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Md Arif
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-6 h-8">
                  <span className="text-gray-500">I'm a </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                    <TypeAnimation
                      sequence={[
                        "Full Stack Developer",
                        2000,
                        "Frontend Developer",
                        2000,
                        "Backend Developer",
                        2000,
                        "MERN Stack Developer",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" size={20} />
                  <span>+91 7772884698</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <span>mdarif1522003@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="text-blue-400" size={20} />
                  <span>Bokaro, Jharkhand, India</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-600/10 transition-all"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 mt-8">
                <a
                  href="https://github.com/codewitharif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mdarif1522003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>

                <a
                  href="https://x.com/mdarif1522003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="mailto:mdarif1522003@gmail.com"
                  className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Mail size={24} className="text-red-600 hover:text-red-800" />
                </a>

                <a
                  href="https://wa.me/917772884698?text=Hello%20Arif%2C%20I%20want%20to%20connect%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <FaWhatsapp
                    size={24}
                    className="text-green-600 hover:text-green-800"
                    href="https://wa.me/917772884698?text=Hello%20Arif%2C%20I%20want%20to%20connect%20with%20you"
                  />
                </a>
              </div>
            </div>

            {/* Image - appears first on mobile */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Main Image with Gradient Border */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden p-1.5 relative z-10">
                <img
                  src={myimg}
                  draggable={false}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Tech Icons (Subtle) */}
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center animate-float">
                <Code className="text-blue-400" size={18} />
              </div>

              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center animate-float-delay">
                <Briefcase className="text-purple-400" size={18} />
              </div>

              <div className="absolute top-1/4 -right-4 w-10 h-10 rounded-full bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 flex items-center justify-center animate-float">
                <span className="text-pink-400 text-lg">⚡</span>
              </div>

              {/* Subtle Connecting Dots */}
              <div className="absolute top-2 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-2 right-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            </div>

            {/* Add to your CSS */}
            <style jsx>{`
              @keyframes float {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-8px);
                }
              }
              .animate-float {
                animation: float 5s ease-in-out infinite;
              }
              .animate-float-delay {
                animation: float 5s ease-in-out 1.5s infinite;
              }
            `}</style>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"} ${
          darkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Passionate developer building innovative solutions and solving
            real-world problems.
          </p>

          <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-6">
            Hey there! 👋 I'm{" "}
            <span className="font-semibold text-blue-600">Arif</span>, a Full
            Stack Developer...
          </p>

          {/* Button */}
          <button
            className={`mt-4 px-6 py-3 font-medium rounded-lg shadow-md transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-400 text-white hover:bg-blue-500"
            }`}
          >
            🚀 I like to build products and solve problems
          </button>
        </div>

        {/* 4 Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Who I Am */}
          <Card2
            icon={<Code className="text-blue-600" size={28} />}
            title="Who I Am"
            description={[
              "A passionate full-stack developer with a strong foundation in software engineering.",
              "Thrives on solving complex problems and delivering clean, scalable solutions.",
              "Committed to continuous learning and staying ahead of emerging technologies.",
            ]}
            darkMode={darkMode}
          />

          {/* What I Do */}
          <Card2
            icon={<Target className="text-purple-600" size={28} />}
            title="What I Do"
            description={[
              "Craft high-performance, responsive web applications with modern tech stacks.",
              "Write clean, maintainable code and optimize for speed and scalability.",
              "Explore new tools, contribute to open source, and adapt to industry trends.",
            ]}
            darkMode={darkMode}
          />

          {/* My Goals */}
          <Card2
            icon={<Rocket className="text-green-600" size={28} />}
            title="My Goals"
            description={[
              "Develop impactful tech products that address real-world problems.",
              "Master cutting-edge frameworks and backend architectures.",
              "Share knowledge, mentor others, and grow the developer community.",
            ]}
            darkMode={darkMode}
          />

          {/* My Philosophy */}
          <Card2
            icon={<Lightbulb className="text-orange-600" size={28} />}
            title="My Philosophy"
            description={[
              "Technology should empower and simplify, not overwhelm.",
              "Great software is measured by the problems it solves, not lines of code.",
              "Lifelong learning is the key to staying relevant in a fast-evolving tech world.",
            ]}
            darkMode={darkMode}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p
              className={`text-lg md:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              Tools and technologies I use to bring ideas to life — efficiently
              and at scale.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
            {/* HTML */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  className="w-8 h-8"
                  alt="HTML"
                />
              </div>
              <span className="font-medium text-sm">HTML</span>
            </Card>

            {/* CSS */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  className="w-8 h-8"
                  alt="CSS"
                />
              </div>
              <span className="font-medium text-sm">CSS</span>
            </Card>

            {/* JavaScript */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="w-8 h-8"
                  alt="JavaScript"
                />
              </div>
              <span className="font-medium text-sm">JavaScript</span>
            </Card>

            {/* Bootstrap */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  className="w-8 h-8"
                  alt="Bootstrap"
                />
              </div>
              <span className="font-medium text-sm">Bootstrap</span>
            </Card>

            {/* Tailwind */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-8 h-8"
                  alt="Tailwind"
                />
              </div>
              <span className="font-medium text-sm">Tailwind</span>
            </Card>

            {/* React */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="w-8 h-8"
                  alt="React"
                />
              </div>
              <span className="font-medium text-sm">React</span>
            </Card>

            {/* Redux */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  className="w-8 h-8"
                  alt="Redux"
                />
              </div>
              <span className="font-medium text-sm">Redux</span>
            </Card>

            {/* Next.js */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  className="w-8 h-8"
                  alt="Next.js"
                />
              </div>
              <span className="font-medium text-sm">Next.js</span>
            </Card>

            {/* Node.js */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="w-8 h-8"
                  alt="Node.js"
                />
              </div>
              <span className="font-medium text-sm">Node.js</span>
            </Card>

            {/* MongoDB */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  className="w-8 h-8"
                  alt="MongoDB"
                />
              </div>
              <span className="font-medium text-sm">MongoDB</span>
            </Card>

            {/* MySQL */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  className="w-8 h-8"
                  alt="MySQL"
                />
              </div>
              <span className="font-medium text-sm">MySQL</span>
            </Card>

            {/* SQL Server */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg"
                  className="w-8 h-8"
                  alt="SQL Server"
                />
              </div>
              <span className="font-medium text-sm">SQL Server</span>
            </Card>

            {/* SQLite */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                  className="w-8 h-8"
                  alt="SQLite"
                />
              </div>
              <span className="font-medium text-sm">SQLite</span>
            </Card>

            {/* Firebase */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  className="w-8 h-8"
                  alt="Firebase"
                />
              </div>
              <span className="font-medium text-sm">Firebase</span>
            </Card>

            {/* TypeScript */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  className="w-8 h-8"
                  alt="TypeScript"
                />
              </div>
              <span className="font-medium text-sm">TypeScript</span>
            </Card>

            {/* Python */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="w-8 h-8"
                  alt="Python"
                />
              </div>
              <span className="font-medium text-sm">Python</span>
            </Card>

            {/* VS Code */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  className="w-8 h-8"
                  alt="VS Code"
                />
              </div>
              <span className="font-medium text-sm">VS Code</span>
            </Card>

            {/* Git */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  className="w-8 h-8"
                  alt="Git"
                />
              </div>
              <span className="font-medium text-sm">Git</span>
            </Card>

            {/* GitHub */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  className="w-8 h-8"
                  alt="GitHub"
                />
              </div>
              <span className="font-medium text-sm">GitHub</span>
            </Card>

            {/* Vercel */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                  className="w-8 h-8"
                  alt="Vercel"
                />
              </div>
              <span className="font-medium text-sm">Vercel</span>
            </Card>

            {/* Netlify */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
                  className="w-8 h-8"
                  alt="Netlify"
                />
              </div>
              <span className="font-medium text-sm">Netlify</span>
            </Card>
            {/* Docker */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <FaDocker className="w-8 h-8 text-blue-600" alt="Docker" />
              </div>
              <span className="font-medium text-sm">Docker</span>
            </Card>
            {/* Postman */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                  className="w-8 h-8"
                  alt="Postman"
                />
              </div>
              <span className="font-medium text-sm">Postman</span>
            </Card>

            {/* Canva */}
            <Card className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                  className="w-8 h-8"
                  alt="Canva"
                />
              </div>
              <span className="font-medium text-sm">Canva</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"} ${
          darkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p
              className={`text-lg md:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              Every project, a product. Every product, a solution with a story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ecommerce App */}

            <Card className="overflow-hidden group ">
              {/* Tag */}
              <span className="absolute top-1/4 right-1 -translate-y-1/2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md z-10">
                In Development
              </span>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={urbankart}
                  alt="UrbanKart Ecommerce App"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Icons */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">
                  UrbanKart Ecommerce App
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewitharif/ecommerceapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-blue-500 transition" />
                  </a>
                  <a
                    href="https://urbankartx.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-green-500 transition" />
                  </a>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="p-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Full-featured ecommerce platform with product management,
                  secure payments, order tracking, and admin tools for managing
                  categories and products.
                </p>

                {/* Small tech stack icons */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                    alt="React"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-6"
                    alt="Node.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-6 h-6"
                    alt="MongoDB"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-6 h-6"
                    alt="Express"
                  />

                  <div className="flex flex-wrap gap-2 items-center">
                    <SiStripe className="w-5 h-5 text-purple-600" />
                    {/* <SiClerk className="w-5 h-5 text-blue-600" /> */}
                  </div>
                </div>
              </div>
            </Card>
            {/* IndieShows Movie Booking App */}
            <Card className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={indieshows}
                  alt="IndieShows Movie App"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Icons */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">
                  Movie Show Booking App
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewitharif/movieticketbookingapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-blue-500 transition" />
                  </a>
                  <a
                    href="https://movieticketbookingapp.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-green-500 transition" />
                  </a>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="p-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Full-featured movie booking platform with seat reservation,
                  Stripe payments, instant confirmation emails, and admin tools
                  for managing movies and shows.
                </p>

                {/* Small tech stack icons */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                    alt="React"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-6"
                    alt="Node.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-6 h-6"
                    alt="MongoDB"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-6 h-6"
                    alt="Express"
                  />

                  <div className="flex flex-wrap gap-2 items-center">
                    <SiStripe className="w-5 h-5 text-purple-600" />
                    <SiClerk className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Blog App */}
            <Card className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blogapp}
                  alt="Blog App"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Icons */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">
                  Social Blogging Platform
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewitharif/blogapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-blue-500 transition" />
                  </a>
                  <a
                    href="https://blogappclientx.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-green-500 transition" />
                  </a>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="p-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Full-featured blogging platform with user accounts, blog
                  creation, likes, comments, shares, category filters, and
                  community engagement.
                </p>

                {/* Small tech stack icons */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                    alt="React"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-6"
                    alt="Node.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-6 h-6"
                    alt="MongoDB"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-6 h-6"
                    alt="Express"
                  />

                  <div className="flex flex-wrap gap-2 items-center">
                    <SiClerk className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </Card>

            {/* bg remover saasapp */}
            <Card className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={bgremover}
                  alt="Bg Remover SAAS"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Icons */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">BG Remover SAAS</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewitharif/bgremoversaasapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-blue-500 transition" />
                  </a>
                  <a
                    href="https://bgremoversaasapp.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-green-500 transition" />
                  </a>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="p-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Background Remover SaaS application, featuring secure payment
                  integration, subscription-based pricing plans, and
                  lightning-fast image processing.
                </p>

                {/* Small tech stack icons */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                    alt="React"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-6"
                    alt="Node.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-6 h-6"
                    alt="MongoDB"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-6 h-6"
                    alt="Express"
                  />

                  <div className="flex flex-wrap gap-2 items-center">
                    <SiRazorpay className="w-5 h-5 text-blue-600" />
                    <SiClerk className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </Card>

            {/* JobMarket Portal */}
            <Card className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={jobmarket}
                  alt="JobMarket Portal"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Icons */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">Job Portal Platform</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewitharif/jobportalapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-blue-500 transition" />
                  </a>
                  <a
                    href="https://jobportalappclient.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-green-500 transition" />
                  </a>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="p-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Full-featured MERN stack job portal for recruiters and job
                  seekers with advanced filtering.
                </p>

                {/* Small tech stack icons */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                    alt="React"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-6"
                    alt="Node.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-6 h-6"
                    alt="MongoDB"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-6 h-6"
                    alt="Express"
                  />
                  <div className="flex flex-wrap gap-2 items-center">
                    <SiClerk className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </Card>
            {/* ERP Billing Software */}
            <Card className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={bizstripe}
                  alt="ERP Billing Software"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Icons */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">ERP Billing Software</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewitharif/erpapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 stroke-[2.5] text-gray-950 dark:text-gray-500 hover:text-blue-500 transition" />
                  </a>
                  <a
                    href="https://bizstripe.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 stroke-[2.5] text-gray-950 dark:text-gray-500 hover:text-green-500 transition" />
                  </a>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="p-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  All-in-one ERP billing software streamlining sales, purchases,
                  inventory management, and financial operations.
                </p>

                <div className="flex flex-wrap gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                    alt="React"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-6"
                    alt="Node.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-6 h-6"
                    alt="MongoDB"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-6 h-6"
                    alt="Express"
                  />
                </div>
              </div>
            </Card>

            {/* Personal Finance App */}
            <Card className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80"
                  alt="Finance Tracker"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Icons */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">Finance Tracker</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/codewitharif/expensetrackerapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-blue-500 transition" />
                  </a>
                  <a
                    href="https://expensetrackerappclient.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-500 hover:text-green-500 transition" />
                  </a>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="p-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Full-stack finance tracker with multi-currency support and
                  exchange rate APIs.
                </p>

                {/* Small tech stack icons */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                    alt="React"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-6 h-6"
                    alt="Node.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-6 h-6"
                    alt="MongoDB"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-6 h-6"
                    alt="Express"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-6 `}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p
              className={`text-lg md:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              From classrooms to codebases — applying knowledge where it matters
              most.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative flex items-start">
                {/* Marker */}
                <div className="absolute left-6 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600 z-10"></div>

                {/* Card */}
                <div
                  className={`ml-16 ${
                    darkMode
                      ? "bg-gray-800 text-gray-100"
                      : "bg-white text-gray-900"
                  } shadow-lg rounded-xl p-6 relative flex-1`}
                >
                  {/* Connector line from dot to card */}
                  <div
                    className={`absolute left-0 top-6 w-4 h-1 transform -translate-x-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>

                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    BIZNWEB TECHNOLOGIES
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    October 2024 – Present
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Architected and developed an ERP system using React.js and
                      Node.js, streamlining business operations and improving
                      efficiency by
                      <strong>20%</strong>.
                    </li>
                    <li>
                      Implemented advanced modules like booking calendars, room
                      availability systems, and payment integration for seamless
                      user experience.
                    </li>
                    <li>
                      Revamped homepage UI for better usability, resulting in a
                      <strong>15% increase in user retention</strong>.
                    </li>
                    <li>
                      Delivered custom admin dashboards with analytics and video
                      management features for LMS platforms.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "React.js",
                      "Node.js",
                      "MongoDB",
                      "Express.js",
                      "Angular",
                      "NestJS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative flex items-start">
                {/* Marker */}
                <div className="absolute left-6 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 bg-purple-600 z-10"></div>

                {/* Card */}
                <div
                  className={`ml-16 ${
                    darkMode
                      ? "bg-gray-800 text-gray-100"
                      : "bg-white text-gray-900"
                  } shadow-lg rounded-xl p-6 relative flex-1`}
                >
                  {/* Connector line from dot to card */}
                  <div
                    className={`absolute left-0 top-6 w-4 h-1 transform -translate-x-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>

                  <h3 className="text-xl font-bold">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    BIZNWEB TECHNOLOGIES
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    April 2024 – October 2024
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      {" "}
                      Developed full-stack web applications using React.js and
                      Node.js, ensuring seamless user experience.
                    </li>
                    <li>
                      {" "}
                      Built and integrated RESTful APIs for real-time data flow,
                      reducing latency by <strong>20%</strong>.
                    </li>
                    <li>
                      Enhanced performance by implementing code-splitting and
                      lazy loading, achieving{" "}
                      <strong>30% faster load times</strong>.
                    </li>
                    <li>
                      Collaborated with cross-functional teams for
                      pixel-perfect, responsive UIs.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
              {/* Eperience 3 */}
              <div className="relative flex items-start">
                {/* Marker */}
                <div className="absolute left-6 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 bg-purple-600 z-10"></div>

                {/* Card */}
                <div
                  className={`ml-16 ${
                    darkMode
                      ? "bg-gray-800 text-gray-100"
                      : "bg-white text-gray-900"
                  } shadow-lg rounded-xl p-6 relative flex-1`}
                >
                  {/* Connector line from dot to card */}
                  <div
                    className={`absolute left-0 top-6 w-4 h-1 transform -translate-x-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>

                  <h3 className="text-xl font-bold">Web Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    CODECLAUSE PVT LTD
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    June 2023 – August 2023
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Designed and optimized responsive landing pages, improving
                      loading speed by <strong>35%</strong> using React.js and
                      modern CSS techniques.
                    </li>
                    <li>
                      Worked closely with designers to enhance UI/UX, boosting
                      user engagement by <strong>25%</strong>.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-20 px-6 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p
              className={`text-lg md:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              A solid academic foundation fueling my passion for tech
              innovation.
            </p>
          </div>

          {/* Education Container */}
          <div className="space-y-8">
            {/* Education 1 - B.Tech */}
            <div className="relative">
              <div
                className={`${
                  darkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                } shadow-lg rounded-xl p-6 relative`}
              >
                {/* Connecting line */}
                <div className="absolute left-1/2 -bottom-8 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      B.Tech in Computer Science
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      Millennium Institute Of Technology & Science, Bhopal
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Sep 2021 – June 2025
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Score: 73%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education 2 - Higher Secondary */}
            <div className="relative">
              <div
                className={`${
                  darkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                } shadow-lg rounded-xl p-6 relative`}
              >
                {/* Connecting line */}
                <div className="absolute left-1/2 -bottom-8 w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2"></div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      Higher Secondary Certificate
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      Mithila Academy Public School, Bokaro
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        April 2020 - May 2021
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Score: 72%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education 3 - Secondary */}
            <div className="relative">
              <div
                className={`${
                  darkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                } shadow-lg rounded-xl p-6 relative`}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      Secondary School Certificate
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      Mithila Academy Public School, Bokaro
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        April 2018 - May 2019
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Score: 79%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl opacity-80">
              Let's collaborate on your next big idea — I'm just a message away.
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              } rounded-2xl p-8 h-full`}
            >
              <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">mdarif1522003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">github.com/mdarif15</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">linkedin.com/in/mdarif15</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">+91 7772884698</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              } rounded-2xl p-8`}
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                    <input
                      type="text"
                      name="name"
                      value=""
                      onChange=""
                      placeholder="Enter your name"
                      className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                    <input
                      type="email"
                      name="email"
                      value=""
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-4 w-5 h-5 opacity-50" />
                    <textarea
                      name="message"
                      value=""
                      placeholder="Enter your message"
                      rows={6}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg border resize-none ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      required
                    />
                  </div>
                </div>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <footer
          className={`py-12 px-4 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                "Home",
                "About",
                "Skills",

                "Projects",
                "Experience",
                "Education",
                "Contact",
              ].map((link, index) => (
                <NavLink
                  key={index}
                  href={`${link.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    darkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link}
                </NavLink>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    darkMode
                      ? "hover:bg-gray-800"
                      : "hover:bg-white hover:shadow-md"
                  }`}
                >
                  <social.icon className={`w-5 h-5 ${social.color}`} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-600"
                } text-sm`}
              >
                © 2025 Md Arif. All rights reserved.
              </p>
              <p
                className={`text-xs flex items-center justify-center gap-1 ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Built with <span className="text-blue-500">⚛️</span> using{" "}
                <span className="text-yellow-500">⚡</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
