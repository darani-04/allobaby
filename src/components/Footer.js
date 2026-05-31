import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const logo = require('../assets/logo.png');

  return (
    <footer style={{ background: '#222222', color: 'white', padding: '3rem 0 1rem 0' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <img 
              src={logo} 
              alt="AlloBaby Logo" 
              style={{ height: 'clamp(30px, 5vw, 35px)', width: 'auto' }}
            />
            <span style={{ 
              fontSize: 'clamp(1.2rem, 5vw, 1.5rem)', 
              fontWeight: 700, 
              background: 'linear-gradient(135deg, #F46A7A, #F78A9A)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>
              AlloBaby
            </span>
          </div>
          <p style={{ color: '#AAAAAA', lineHeight: 1.6, fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>AI-Enabled Platform for Safe & Healthy Pregnancies</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: 'clamp(32px, 8vw, 36px)', height: 'clamp(32px, 8vw, 36px)', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease' }} aria-label="Facebook"><FaFacebook size={16} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: 'clamp(32px, 8vw, 36px)', height: 'clamp(32px, 8vw, 36px)', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease' }} aria-label="Twitter"><FaTwitter size={16} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: 'clamp(32px, 8vw, 36px)', height: 'clamp(32px, 8vw, 36px)', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease' }} aria-label="Instagram"><FaInstagram size={16} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: 'clamp(32px, 8vw, 36px)', height: 'clamp(32px, 8vw, 36px)', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease' }} aria-label="LinkedIn"><FaLinkedin size={16} /></a>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)', fontWeight: 700, marginBottom: '1rem', color: '#F46A7A' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#about" style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>About Us</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#features" style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>Features</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#how-it-works" style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>How It Works</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#faq" style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)', fontWeight: 700, marginBottom: '1rem', color: '#F46A7A' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="/privacy" style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>Privacy Policy</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/terms" style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>Terms of Service</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/cookies" style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: 'clamp(0.8rem, 3vw, 0.875rem)' }}>Cookie Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)', fontWeight: 700, marginBottom: '1rem', color: '#F46A7A' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#AAAAAA', flexWrap: 'wrap', fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}><FaPhone style={{ color: '#F46A7A', minWidth: '16px' }} /> +91 80952 05092</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#AAAAAA', flexWrap: 'wrap', fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}><FaWhatsapp style={{ color: '#F46A7A', minWidth: '16px' }} /> +91 93615 13147</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#AAAAAA', flexWrap: 'wrap', fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}><FaEnvelope style={{ color: '#F46A7A', minWidth: '16px' }} /> hello@savemom.ai</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#AAAAAA', flexWrap: 'wrap', fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}><FaMapMarkerAlt style={{ color: '#F46A7A', minWidth: '16px' }} /> Madurai, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', paddingTop: '2rem', marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#AAAAAA', fontSize: 'clamp(0.7rem, 3vw, 0.875rem)' }}>
        <p>&copy; 2026 AlloBaby. All rights reserved.</p>
      </div>

      <style>{`
        .social-link:hover {
          background: #F46A7A;
          transform: translateY(-3px);
        }
        .footer-link:hover {
          color: #F46A7A !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
          .contact-list li {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;