import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const logo = require('../assets/logo.png');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: scrolled ? '0.75rem 0' : '1rem 0',
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo with curved corners */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{
            width: windowWidth <= 480 ? '40px' : '45px',
            height: windowWidth <= 480 ? '40px' : '45px',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #F46A7A, #F78A9A)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(244, 106, 122, 0.25)'
          }}>
            <img 
              src={logo} 
              alt="AlloBaby Logo" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '14px'
              }}
            />
          </div>
          <span style={{ fontSize: windowWidth <= 480 ? '1.2rem' : '1.5rem', fontWeight: 700, color: '#222222' }}>
            Allo<span style={{ color: '#F46A7A' }}>Baby</span>
          </span>
        </div>

        {/* Desktop Menu */}
        {windowWidth > 768 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                style={{ textDecoration: 'none', color: '#4A4A4A', fontWeight: 500, transition: 'color 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => e.target.style.color = '#F46A7A'}
                onMouseLeave={(e) => e.target.style.color = '#4A4A4A'}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }} onClick={() => scrollToSection('#download')}>
              <FaDownload /> Download
            </button>
          </div>
        )}

        {/* Hamburger Menu Button */}
        {windowWidth <= 768 && (
          <div style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#222222' }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && windowWidth <= 768 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              style={{ fontSize: '1.25rem', textDecoration: 'none', color: '#4A4A4A' }}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary" onClick={() => scrollToSection('#download')} style={{ width: '100%', justifyContent: 'center' }}>
            <FaDownload /> Download App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;