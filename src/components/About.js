import React from 'react';
import { FaRobot, FaHeart, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const aboutImage = require('../assets/about-illustrated.png');

  const items = [
    { icon: <FaRobot />, title: "Overview", description: "An AI-driven ecosystem supporting parents from conception to early childhood." },
    { icon: <FaHeart />, title: "Purpose", description: "Bridging the gap between cutting-edge technology and intuitive emotional care." },
    { icon: <FaShieldAlt />, title: "Benefits", description: "Personalized insights, 24/7 support, and secure data encryption for peace of mind." }
  ];

  return (
    <section id="about" style={{ padding: '5rem 0', background: 'white' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div data-aos="fade-right" style={{ textAlign: 'center' }}>
          <img 
            src={aboutImage} 
            alt="Mother and baby"
            style={{ 
              width: '100%', 
              maxWidth: 'min(450px, 100%)', 
              borderRadius: '24px', 
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s ease' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        
        <div data-aos="fade-left">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            A Sanctuary of Care and{' '}
            <span className="gradient-text">Intelligent Support</span>
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            {items.map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '1rem', 
                padding: '1.25rem', 
                background: '#F8F8F8', 
                borderRadius: '20px', 
                transition: 'all 0.3s ease',
                flexDirection: 'row',
                alignItems: 'flex-start'
              }} className="about-card">
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'white', 
                  borderRadius: '15px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#F46A7A', 
                  fontSize: '1.5rem', 
                  transition: 'transform 0.3s ease',
                  flexShrink: 0
                }} className="about-icon">{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#222222' }}>{item.title}</h3>
                  <p style={{ color: '#4A4A4A', lineHeight: 1.5 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-card:hover {
          transform: translateX(10px);
          background: #FDF1F3;
          box-shadow: 0 10px 25px rgba(244, 106, 122, 0.1);
        }
        .about-icon:hover {
          transform: scale(1.1) rotate(5deg);
        }
        @media (max-width: 768px) {
          .about-card {
            flex-direction: column !important;
            text-align: center;
            align-items: center !important;
          }
          .about-card:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default About;