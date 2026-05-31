import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';

const Download = () => {
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.savemom.allobaby', '_blank');
  };

  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-content">
          <h2>Download AlloBaby Today</h2>
          <p className="section-subtitle">
            Start your journey to a safer, healthier pregnancy
          </p>

          <div className="download-buttons">
            <button className="btn-primary download-btn" onClick={openPlayStore}>
              <FaGooglePlay /> 
              <div className="btn-text">
                <span>GET IT ON</span>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .download {
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          color: white;
          text-align: center;
          padding: 5rem 0;
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        h2 {
          color: white;
        }
        
        .section-subtitle {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .download-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 0;
          flex-wrap: wrap;
        }
        
        .download-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: white;
          color: #222222;
          border: none;
        }
        
        .download-btn svg {
          font-size: 1.5rem;
        }
        
        .download-btn .btn-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        
        .download-btn .btn-text span {
          font-size: 0.7rem;
          font-weight: normal;
        }
        
        .download-btn .btn-text strong {
          font-size: 1rem;
        }
        
        @media (max-width: 600px) {
          .download-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Download;