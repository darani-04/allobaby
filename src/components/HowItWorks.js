import React from 'react';
import { FaDownload, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    { number: "01", icon: <FaDownload />, title: "Download & Set Up", description: "Get the app and personalize your profile with your pregnancy or baby's details to start your custom journey." },
    { number: "02", icon: <FaMobileAlt />, title: "Track and Monitor", description: "Log daily health stats, track kicks, or use AI tools to monitor your progress with intuitive, easy-to-use logs." },
    { number: "03", icon: <FaChartLine />, title: "Get AI Insights", description: "Receive personalized notifications and talk to your AI companion whenever you need expert-backed parenting support." }
  ];

  return (
    <section id="how-it-works" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #FFFFFF, #FDF1F3)' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Simple Path to <span className="gradient-text">Better Parenting</span></h2>
          <p className="section-subtitle">Three easy steps to start your journey with AlloBaby</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem',
          position: 'relative',
        }} className="steps-container">
          {steps.map((step, index) => (
            <div key={index} style={{ 
              textAlign: 'center', 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '24px', 
              position: 'relative', 
              transition: 'all 0.3s ease', 
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)' 
            }} className="step-card" data-aos="fade-up" data-aos-delay={index * 150}>
              <div style={{ 
                position: 'absolute', 
                top: '-15px', 
                left: '20px', 
                background: 'white', 
                color: '#F46A7A', 
                fontWeight: 700, 
                fontSize: '0.875rem', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px', 
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)', 
                border: '1px solid #F46A7A' 
              }}>{step.number}</div>
              <div style={{ 
                width: '70px', 
                height: '70px', 
                background: 'linear-gradient(135deg, #F46A7A, #F78A9A)', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '1rem auto', 
                color: 'white', 
                fontSize: '2rem', 
                transition: 'transform 0.3s ease' 
              }} className="step-icon">{step.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#222222' }}>{step.title}</h3>
              <p style={{ color: '#4A4A4A', lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(244, 106, 122, 0.15);
        }
        .step-card:hover .step-icon {
          transform: scale(1.05) rotate(5deg);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;