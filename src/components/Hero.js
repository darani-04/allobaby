import React from 'react';
import { FaGooglePlay, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.savemom.allobaby', '_blank');
  };

  const heroImage = require('../assets/hero-image.png');

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #FDF1F3 0%, #FAEDEF 50%, #FFFFFF 100%)',
      paddingTop: '80px',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Left Content */}
        <div data-aos="fade-up">
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '50px', 
            marginBottom: '1.5rem' 
          }}>
            <span style={{ width: '8px', height: '8px', background: '#F46A7A', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#F46A7A' }}>✨ AI-Enabled Platform</span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 800, 
            lineHeight: 1.2, 
            marginBottom: '1.5rem', 
            color: '#222222' 
          }}>
            Your Intelligent Companion for{' '}
            <span className="gradient-text">Parenthood</span>
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(0.875rem, 4vw, 1.125rem)', 
            color: '#4A4A4A', 
            lineHeight: 1.6, 
            marginBottom: '2rem' 
          }}>
            Navigate the beautiful journey of pregnancy and newborn care with AI-driven insights, 
            personalized health tracking, and 24/7 reassurance support.
          </p>
          
          <button onClick={openPlayStore} className="btn-primary">
            <FaGooglePlay /> Download App
          </button>
          
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(1rem, 4vw, 2rem)', 
            marginTop: '2rem', 
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.7rem, 3vw, 0.875rem)' }}>
              <FaCheckCircle style={{ color: '#F46A7A' }} /> 10,000+ Happy Moms
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.7rem, 3vw, 0.875rem)' }}>
              <FaCheckCircle style={{ color: '#F46A7A' }} /> 98% Satisfaction Rate
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.7rem, 3vw, 0.875rem)' }}>
              <FaCheckCircle style={{ color: '#F46A7A' }} /> 24/7 AI Support
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="200">
          <img 
            src={heroImage} 
            alt="Pregnant mother with phone" 
            style={{ 
              maxWidth: 'min(500px, 90%)', 
              width: '100%', 
              height: 'auto', 
              borderRadius: '24px', 
              boxShadow: '0 30px 50px rgba(0, 0, 0, 0.15)', 
              transition: 'transform 0.3s ease' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          />
          <div style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            left: '-10px', 
            background: 'white', 
            padding: '0.5rem 0.75rem', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' 
          }}>
            <span style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)' }}>❤️</span>
            <div>
              <p style={{ fontSize: '0.6rem', color: '#4A4A4A' }}>Heart Rate</p>
              <p style={{ fontSize: 'clamp(0.7rem, 3vw, 1rem)', fontWeight: 700, color: '#F46A7A' }}>145 bpm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;