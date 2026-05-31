import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="section-subtitle">
          Get in touch with our support team
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <h3>Call Us</h3>
            <p>+91 80952 05092</p>
            <small>Mon-Sat, 9AM to 6PM</small>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p><a href="mailto:hello@savemom.ai">hello@savemom.ai</a></p>
            <small>We respond within 24 hours</small>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Headquarters</h3>
            <p>Madurai, Tamil Nadu, India</p>
            <small>Global support available</small>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <h3>Chat on WhatsApp</h3>
            <p><a href="https://wa.me/919361513147" target="_blank" rel="noopener noreferrer">+91 93615 13147</a></p>
            <small>Quick responses on WhatsApp</small>
          </div>
        </div>
      </div>

      <style>{`
        .contact {
          background: #FDF1F3;
          padding: 5rem 0;
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #222222;
        }
        
        .section-subtitle {
          text-align: center;
          font-size: 1.125rem;
          color: #4A4A4A;
          max-width: 700px;
          margin: -1rem auto 3rem auto;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 2rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(244, 106, 122, 0.1);
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }
        
        .contact-icon svg {
          font-size: 1.5rem;
          color: white;
        }
        
        .contact-card h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: #222222;
        }
        
        .contact-card p {
          color: #F46A7A;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .contact-card p a {
          color: #F46A7A;
          text-decoration: none;
        }
        
        .contact-card p a:hover {
          text-decoration: underline;
          color: #EA5568;
        }
        
        .contact-card small {
          color: #4A4A4A;
          font-size: 0.75rem;
        }
        
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 500px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;