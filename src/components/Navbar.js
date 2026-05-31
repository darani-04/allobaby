import React, { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.savemom.allobaby', '_blank');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="AlloBaby Logo" className="logo-image" />
          <span className="logo-text">Allo<span className="logo-highlight">Baby</span></span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-download-mobile" onClick={openPlayStore}>
            <FaDownload /> Download App
          </button>
        </div>

        <button className="nav-download-btn btn-primary" onClick={openPlayStore}>
          <FaDownload /> Download
        </button>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1rem 0;
          background: transparent;
        }
        
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
          padding: 0.75rem 0;
        }
        
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .logo-image {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        
        .logo-text {
          color: #222222;
        }
        
        .logo-highlight {
          color: #F46A7A;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link {
          text-decoration: none;
          color: #4A4A4A;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #F46A7A;
        }
        
        .nav-download-btn {
          padding: 0.5rem 1.25rem;
          font-size: 0.875rem;
        }
        
        .btn-download-mobile {
          display: none;
        }
        
        .hamburger {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #222222;
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: white;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            transition: 0.3s ease;
            box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
          }
          
          .nav-menu.active {
            right: 0;
          }
          
          .nav-link {
            font-size: 1.25rem;
          }
          
          .nav-download-btn {
            display: none;
          }
          
          .btn-download-mobile {
            display: block;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(135deg, #F46A7A, #F78A9A);
            color: white;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
          }
          
          .hamburger {
            display: block;
            z-index: 1001;
          }
          
          .navbar.scrolled .nav-menu {
            background: white;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;