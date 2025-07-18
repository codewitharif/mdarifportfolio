const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using modern frameworks like React and Node.js.",
      icon: "fas fa-code",
    },
    {
      title: "Graphic Design",
      description:
        "Creating visually compelling graphics, logos, and branding material to elevate your business presence.",
      icon: "fas fa-paint-brush",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces and experiences that engage and delight users.",
      icon: "fas fa-laptop",
    },
    {
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with React Native for iOS and Android.",
      icon: "fas fa-mobile-alt",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">
          What I <span>Offer</span>
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
