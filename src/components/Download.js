import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Download = () => {
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.savemom.allobaby', '_blank');
  };

  return (
    <section id="download" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #F46A7A, #F78A9A)', textAlign: 'center' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} data-aos="fade-up">
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', 
          fontWeight: 800, 
          color: 'white', 
          marginBottom: '1rem' 
        }}>Ready to nurture your journey?</h2>
        <p style={{ 
          fontSize: 'clamp(0.875rem, 4vw, 1.125rem)', 
          color: 'rgba(255, 255, 255, 0.9)', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          Join thousands of parents who trust AlloBaby for their daily parenting and pregnancy needs.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'clamp(1rem, 4vw, 1.5rem)', 
          marginTop: '2rem', 
          flexWrap: 'wrap',
          flexDirection: 'row'
        }}>
          <button onClick={openPlayStore} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            padding: 'clamp(0.6rem, 3vw, 0.75rem) clamp(1rem, 4vw, 1.5rem)', 
            border: 'none', 
            borderRadius: '12px', 
            fontSize: 'clamp(0.875rem, 4vw, 1rem)', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease', 
            background: 'white', 
            color: '#222222' 
          }} className="download-btn">
            <FaGooglePlay style={{ fontSize: 'clamp(1rem, 5vw, 1.5rem)' }} />
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: 'clamp(0.6rem, 3vw, 0.7rem)' }}>GET IT ON</span><br />
              <strong style={{ fontSize: 'clamp(0.8rem, 4vw, 1rem)' }}>Google Play</strong>
            </div>
          </button>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            padding: 'clamp(0.6rem, 3vw, 0.75rem) clamp(1rem, 4vw, 1.5rem)', 
            border: 'none', 
            borderRadius: '12px', 
            fontSize: 'clamp(0.875rem, 4vw, 1rem)', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease', 
            background: '#222222', 
            color: 'white' 
          }} className="download-btn">
            <FaApple style={{ fontSize: 'clamp(1rem, 5vw, 1.5rem)' }} />
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: 'clamp(0.6rem, 3vw, 0.7rem)' }}>Download on the</span><br />
              <strong style={{ fontSize: 'clamp(0.8rem, 4vw, 1rem)' }}>App Store</strong>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 480px) {
          .download-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Download;