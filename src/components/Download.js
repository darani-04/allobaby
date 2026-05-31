import React from 'react';
import { FaGooglePlay, FaDownload, FaRocket, FaHeart, FaShieldAlt, FaClock } from 'react-icons/fa';

const Download = () => {
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.savemom.allobaby', '_blank');
  };

  return (
    <section id="download" style={{ 
      padding: '5rem 0', 
      background: 'linear-gradient(135deg, #F46A7A, #F78A9A)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: '300px',
        height: '300px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: -80,
        left: -80,
        width: '250px',
        height: '250px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '30%',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.04)',
        borderRadius: '50%',
        animation: 'pulse 4s ease-in-out infinite'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
          {/* Floating download icon */}
          <div style={{
            width: '80px',
            height: '80px',
            background: 'white',
            borderRadius: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <FaDownload size={35} color="#F46A7A" />
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(2rem, 6vw, 3rem)', 
            fontWeight: 800, 
            color: 'white', 
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>Start Your Journey Today!</h2>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 4vw, 1.2rem)', 
            color: 'rgba(255, 255, 255, 0.95)', 
            maxWidth: '550px', 
            margin: '0 auto 2rem auto',
            lineHeight: 1.6
          }}>
            Join 10,000+ happy moms using AlloBaby for a safer, healthier pregnancy
          </p>
          
          {/* Dark Play Store Button */}
          <button onClick={openPlayStore} style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '1rem', 
            padding: '1.2rem 2.5rem', 
            border: 'none', 
            borderRadius: '60px', 
            fontSize: '1.1rem', 
            fontWeight: 600,
            cursor: 'pointer', 
            transition: 'all 0.3s ease', 
            background: '#1a1a2e', 
            color: 'white',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
            marginBottom: '2.5rem'
          }} className="download-main-btn">
            <FaGooglePlay style={{ fontSize: '2rem' }} />
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.75rem', display: 'block', opacity: 0.8 }}>GET IT ON</span>
              <strong style={{ fontSize: '1.3rem' }}>Google Play</strong>
            </div>
          </button>
          
          {/* Trust badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
            padding: '1.5rem 0',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            borderBottom: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '50%' }}>
                <FaHeart style={{ color: 'white', fontSize: '0.9rem' }} />
              </div>
              <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500 }}>10,000+ Happy Moms</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '50%' }}>
                <FaShieldAlt style={{ color: 'white', fontSize: '0.9rem' }} />
              </div>
              <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500 }}>Secure & Private</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '50%' }}>
                <FaClock style={{ color: 'white', fontSize: '0.9rem' }} />
              </div>
              <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500 }}>24/7 AI Support</span>
            </div>
          </div>
          
          {/* Free badge */}
          <div style={{ marginTop: '1.5rem' }}>
            <span style={{
              background: 'rgba(255,255,255,0.15)',
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              color: 'white',
              fontSize: '0.8rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <FaRocket size={12} /> Free to download • No credit card required
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .download-main-btn:hover {
          transform: translateY(-5px) scale(1.02);
          background: #2d2d44 !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .download-main-btn:active {
          transform: translateY(-2px) scale(0.98);
        }
      `}</style>
    </section>
  );
};

export default Download;