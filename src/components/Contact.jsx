import { useRef } from 'react';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent successfully!');
    formRef.current.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <span>m.dinesh.k27@gmail.com</span>
              </div>
              <div className="contact-method">
                <i className="fab fa-github"></i>
                <span>github.com/MDinesh30</span>
              </div>
              <div className="contact-method">
                <i className="fab fa-linkedin"></i>
                <span>linkedin.com/in/m-dinesh-30</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;