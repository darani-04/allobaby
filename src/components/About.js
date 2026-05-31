import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About AlloBaby</h2>
        <p className="section-subtitle">
          Revolutionizing maternal and child care with AI technology
        </p>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-card">
              <h3>What is AlloBaby?</h3>
              <p>
                AlloBaby is an innovative maternal and child care platform designed to support expectant 
                mothers and their partners throughout pregnancy and early childcare. It offers continuous 
                pregnancy monitoring by tracking vital signs such as heart rate, blood pressure, and glucose 
                levels while providing real-time risk alerts and wellness tips.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To empower every expecting mother with accessible, AI-driven pregnancy care that ensures 
                safe and healthy pregnancies. We believe that technology should bridge the gap between 
                mothers and quality healthcare, making professional-grade monitoring available to everyone.
              </p>
            </div>

            <div className="about-card">
              <h3>Why AlloBaby Was Created</h3>
              <p>
                AlloBaby was created to address the critical need for continuous pregnancy monitoring, 
                especially in areas with limited access to healthcare facilities. By combining medical-grade 
                accuracy with AI intelligence, we provide mothers with peace of mind and early detection 
                of potential complications.
              </p>
            </div>
          </div>

          <div className="about-benefits">
            <h3>Overall Benefits</h3>
            <ul className="benefits-list">
              <li>✓ Continuous 24/7 pregnancy monitoring</li>
              <li>✓ Early detection of potential health risks</li>
              <li>✓ Real-time AI-powered insights and alerts</li>
              <li>✓ Medical-grade accuracy (CE & FDA certified)</li>
              <li>✓ Easy access to health data anytime, anywhere</li>
              <li>✓ Peace of mind for expectant mothers</li>
              <li>✓ Reduced anxiety with professional monitoring</li>
              <li>✓ Seamless sharing with healthcare providers</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background: #FDF1F3;
          padding: 5rem 0;
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #222222;
        }
        
        .section-subtitle {
          text-align: center;
          font-size: 1.125rem;
          color: #4A4A4A;
          max-width: 700px;
          margin: -1rem auto 3rem auto;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 3rem;
          align-items: start;
        }
        
        .about-card {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border-left: 4px solid #F46A7A;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }
        
        .about-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(244, 106, 122, 0.1);
        }
        
        .about-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #F46A7A;
        }
        
        .about-card p {
          color: #4A4A4A;
          line-height: 1.6;
        }
        
        .about-benefits {
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          border-radius: 24px;
          padding: 2rem;
          color: white;
          box-shadow: 0 10px 30px rgba(244, 106, 122, 0.2);
        }
        
        .about-benefits h3 {
          color: white;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .benefits-list {
          list-style: none;
          padding: 0;
        }
        
        .benefits-list li {
          padding: 0.5rem 0;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        
        .benefits-list li:last-child {
          border-bottom: none;
        }
        
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;