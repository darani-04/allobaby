import React from 'react';
import { FaClock, FaShieldAlt, FaCloudUploadAlt, FaGooglePlay } from 'react-icons/fa';

const Benefits = () => {
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.savemom.allobaby', '_blank');
  };

  const benefits = [
    {
      icon: <FaClock />,
      title: "Expert Guidance 24/7",
      description: "Never feel alone. Our AI companion is trained on thousands of pediatric data points to give you reliable answers instantly.",
      color: "#F46A7A"
    },
    {
      icon: <FaShieldAlt />,
      title: "Total Peace of Mind",
      description: "Health tracking that alerts you to changes before they become concerns. Secure, private, and always available.",
      color: "#F78A9A"
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Seamless Health Sync",
      description: "Centralize all your data from vitals to feedings. Share reports with your doctor effortlessly at your next appointment.",
      color: "#F46A7A"
    }
  ];

  return (
    <section id="benefits" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #FDF1F3 0%, #FAEDEF 100%)' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">OUR <span className="gradient-text">VALUE</span></h2>
          <p className="section-subtitle">Empowering Your Parenting Journey</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          maxWidth: '1280px',
          margin: '0 auto 3rem auto'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '24px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)'
            }} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div style={{
                width: '70px',
                height: '70px',
                background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                transition: 'transform 0.3s ease'
              }} className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#222222' }}>{benefit.title}</h3>
              <p style={{ color: '#4A4A4A', lineHeight: 1.6 }}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #F46A7A, #F78A9A)',
          borderRadius: '24px',
          padding: 'clamp(2rem, 5vw, 3rem)',
          textAlign: 'center',
          color: 'white'
        }} data-aos="fade-up">
          <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
            Start for Free
          </h3>
          <p style={{ fontSize: 'clamp(0.875rem, 4vw, 1rem)', marginBottom: '1.5rem', opacity: 0.95 }}>
            Join thousands of happy parents using AlloBaby
          </p>
          <button 
            onClick={openPlayStore} 
            style={{
              background: 'white',
              color: '#F46A7A',
              border: 'none',
              padding: '0.875rem 2rem',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            className="cta-btn"
          >
            <FaGooglePlay /> Get Started
          </button>
        </div>
      </div>

      <style>{`
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(244, 106, 122, 0.15);
        }
        .benefit-icon:hover {
          transform: scale(1.05) rotate(5deg);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 768px) {
          .benefit-card {
            max-width: 100%;
            margin: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;