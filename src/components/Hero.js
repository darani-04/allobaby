import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.savemom.allobaby', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge">✨ AI-Enabled Platform for Safe & Healthy Pregnancies</span>
          </div>
          <h1 className="hero-title">
            <span className="brand-name">AlloBaby</span>
          </h1>
          <p className="hero-tagline">
            AI-Enabled Platform for Safe & Healthy Pregnancies
          </p>
          <p className="hero-description">
            AlloBaby is an innovative maternal and child care platform designed to support expectant mothers 
            and their partners throughout pregnancy and early childcare. It offers continuous pregnancy 
            monitoring by tracking vital signs such as heart rate, blood pressure, and glucose levels while 
            providing real-time risk alerts and wellness tips.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary hero-btn" onClick={openPlayStore}>
              <FaGooglePlay /> Download App
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">Normal</span>
              <span className="stat-label">Health Status</span>
            </div>
            <div className="stat">
              <span className="stat-number">28-03-2025</span>
              <span className="stat-label">Last Screened</span>
            </div>
            <div className="stat">
              <span className="stat-number">FREE</span>
              <span className="stat-label">Subscription Plan</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="mockup-screen">
              <div className="mockup-header">
                <div className="mockup-time">9:41</div>
              </div>
              <div className="mockup-content">
                <div className="app-logo">
                  <svg width="50" height="50" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C11.5 4 8 7.5 8 12C8 16.5 16 28 16 28C16 28 24 16.5 24 12C24 7.5 20.5 4 16 4Z" fill="#F46A7A"/>
                    <circle cx="16" cy="12" r="3" fill="white"/>
                  </svg>
                </div>
                <h3>AlloBaby</h3>
                <p className="status-badge">NORMAL</p>
                <p className="health-status">Health Status</p>
                <div className="vitals">
                  <div className="vital">
                    <span>❤️ Heart Rate</span>
                    <strong>78 bpm</strong>
                  </div>
                  <div className="vital">
                    <span>💓 BP</span>
                    <strong>120/80</strong>
                  </div>
                  <div className="vital">
                    <span>🍬 Glucose</span>
                    <strong>95 mg/dL</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #FDF1F3 0%, #FAEDEF 50%, #FFFFFF 100%);
          padding-top: 80px;
        }
        
        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-badge {
          margin-bottom: 1.5rem;
        }
        
        .badge {
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .hero-title {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }
        
        .brand-name {
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-tagline {
          font-size: 1.5rem;
          color: #222222;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .hero-description {
          font-size: 1rem;
          color: #4A4A4A;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .hero-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
        }
        
        .hero-stats {
          display: flex;
          gap: 2rem;
          background: white;
          padding: 1rem;
          border-radius: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .stat {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-size: 1rem;
          font-weight: 800;
          color: #F46A7A;
        }
        
        .stat-label {
          font-size: 0.7rem;
          color: #4A4A4A;
        }
        
        .hero-image {
          display: flex;
          justify-content: center;
        }
        
        .phone-mockup {
          width: 300px;
          height: 600px;
          background: #222222;
          border-radius: 40px;
          padding: 12px;
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
        }
        
        .mockup-screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #F46A7A, #F78A9A);
          border-radius: 32px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }
        
        .mockup-header {
          text-align: center;
          color: white;
          font-size: 0.8rem;
        }
        
        .mockup-content {
          text-align: center;
          color: white;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .app-logo svg {
          margin: 0 auto;
        }
        
        .mockup-content h3 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          color: white;
        }
        
        .status-badge {
          background: rgba(255,255,255,0.2);
          display: inline-block;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          margin: 0.5rem auto;
        }
        
        .health-status {
          font-size: 0.7rem;
          opacity: 0.8;
        }
        
        .vitals {
          margin-top: 1rem;
          text-align: left;
        }
        
        .vital {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.7rem;
        }
        
        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-tagline {
            font-size: 1.25rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .hero-btn {
            justify-content: center;
          }
          
          .phone-mockup {
            width: 260px;
            height: 520px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;