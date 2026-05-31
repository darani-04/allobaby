import React from 'react';
import { FaDownload, FaUserPlus, FaCalendarAlt, FaHeartbeat, FaRobot, FaBaby } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    { icon: <FaDownload />, title: "Download App", description: "Get AlloBaby from Google Play Store" },
    { icon: <FaUserPlus />, title: "Create Profile", description: "Set up your account with basic info" },
    { icon: <FaCalendarAlt />, title: "Enter Pregnancy Details", description: "Due date, trimester, and health history" },
    { icon: <FaHeartbeat />, title: "Track Health", description: "Log daily vitals and symptoms" },
    { icon: <FaRobot />, title: "Receive AI Insights", description: "Get personalized health recommendations" },
    { icon: <FaBaby />, title: "Monitor Baby Growth", description: "Watch your baby's weekly development" }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>How AlloBaby Works</h2>
        <p className="section-subtitle">
          Your simple 6-step journey to a healthier pregnancy
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-wrapper" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-card">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works {
          background: #F8F8F8;
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
        
        .steps-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .step-wrapper {
          flex: 1;
          text-align: center;
          position: relative;
          min-width: 140px;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin: 0 auto 1rem auto;
        }
        
        .step-card {
          background: white;
          border-radius: 20px;
          padding: 1.5rem 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(244, 106, 122, 0.1);
        }
        
        .step-icon {
          font-size: 2rem;
          color: #F46A7A;
          margin-bottom: 1rem;
        }
        
        .step-card h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #222222;
        }
        
        .step-card p {
          font-size: 0.75rem;
          color: #4A4A4A;
        }
        
        .step-connector {
          position: absolute;
          top: 20px;
          right: -50%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #F46A7A, #F78A9A);
          z-index: 0;
        }
        
        .step-wrapper:last-child .step-connector {
          display: none;
        }
        
        @media (max-width: 800px) {
          .steps-container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .step-wrapper {
            width: 100%;
          }
          
          .step-connector {
            display: none;
          }
          
          .step-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            text-align: left;
          }
          
          .step-icon {
            margin-bottom: 0;
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

export default HowItWorks;