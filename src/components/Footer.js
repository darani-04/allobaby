import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C11.5 4 8 7.5 8 12C8 16.5 16 28 16 28C16 28 24 16.5 24 12C24 7.5 20.5 4 16 4Z" fill="#F46A7A"/>
                  <circle cx="16" cy="12" r="3" fill="white"/>
                </svg>
              </div>
              <span className="logo-text">AlloBaby</span>
            </div>
            <p className="footer-description">
              AI-Enabled Platform for Safe & Healthy Pregnancies.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <p><FaPhone /> <span className="contact-label">Call Us:</span> +91 80952 05092</p>
              <p><FaWhatsapp /> <span className="contact-label">WhatsApp:</span> +91 93615 13147</p>
              <p><FaEnvelope /> <span className="contact-label">Email:</span> hello@savemom.ai</p>
              <p><FaMapMarkerAlt /> <span className="contact-label">Headquarters:</span> Madurai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 AlloBaby. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #222222;
          color: #fff;
          padding: 3rem 0 1rem 0;
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          justify-content: center;
        }
        
        .footer-logo .logo-icon svg {
          width: 32px;
          height: 32px;
        }
        
        .footer-logo .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .footer-description {
          color: #AAAAAA;
          line-height: 1.6;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        
        .social-link {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background: #F46A7A;
          transform: translateY(-3px);
        }
        
        .footer-section h4 {
          font-size: 1.125rem;
          margin-bottom: 1rem;
          color: #F46A7A;
          text-align: center;
        }
        
        .contact-info {
          text-align: center;
        }
        
        .contact-info p {
          color: #AAAAAA;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          flex-wrap: wrap;
        }
        
        .contact-info svg {
          color: #F46A7A;
          font-size: 0.875rem;
        }
        
        .contact-label {
          font-weight: 500;
          color: #CCCCCC;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #AAAAAA;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .container {
            padding: 0 1rem;
          }
          
          .contact-info p {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;