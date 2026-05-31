import React from 'react';

const Features = () => {
  const featureHeartbeat = require('../assets/feature-heartbeat.png');
  const featurePregnancy = require('../assets/feature-pregnancy.png');
  const featureKick = require('../assets/feature-kick.png');
  const featureAI = require('../assets/feature-ai.png');
  const featureFeeding = require('../assets/feature-feeding.png');
  const featureHealth = require('../assets/feature-health.png');

  const features = [
    { 
      image: featureHeartbeat, 
      title: "Baby Heart Rate Monitoring", 
      description: "Listen to and visualize your baby's heartbeat for deep emotional connection",
      badge: "Real-time",
      gradient: "linear-gradient(135deg, #F46A7A, #F78A9A)"
    },
    { 
      image: featurePregnancy, 
      title: "Pregnancy Progress Tracking", 
      description: "Follow your baby's development with stunning 3D models and weekly insights",
      badge: "Weekly Updates",
      gradient: "linear-gradient(135deg, #F78A9A, #F46A7A)"
    },
    { 
      image: featureKick, 
      title: "Baby Kick Counter", 
      description: "Track your baby's movements and ensure their well-being throughout the day",
      badge: "Easy Tracking",
      gradient: "linear-gradient(135deg, #F46A7A, #F78A9A)"
    },
    { 
      image: featureAI, 
      title: "Private AI Assistant", 
      description: "24/7 personalized guidance and expert answers to all your questions",
      badge: "AI Powered",
      gradient: "linear-gradient(135deg, #F78A9A, #F46A7A)"
    },
    { 
      image: featureFeeding, 
      title: "Feeding Tracker", 
      description: "Easily log feeding times and volumes to establish healthy routines",
      badge: "Smart Log",
      gradient: "linear-gradient(135deg, #F46A7A, #F78A9A)"
    },
    { 
      image: featureHealth, 
      title: "Daily Health Monitoring", 
      description: "Keep a close eye on your vitals and baby's trends with smart analysis",
      badge: "24/7 Tracking",
      gradient: "linear-gradient(135deg, #F78A9A, #F46A7A)"
    }
  ];

  return (
    <section id="features" style={{ padding: '5rem 0', background: '#F8F8F8' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Smart <span className="gradient-text">Features</span></h2>
          <p className="section-subtitle">Powerful, intuitive tools designed for every stage of your journey</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0',
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              background: 'white', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              position: 'relative'
            }} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: feature.gradient,
                color: 'white',
                padding: '5px 14px',
                borderRadius: '25px',
                fontSize: '0.7rem',
                fontWeight: 600,
                zIndex: 2,
                letterSpacing: '0.5px'
              }}>
                {feature.badge}
              </div>
              
              {/* Image Container */}
              <div style={{ 
                height: '220px', 
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transition: 'transform 0.5s ease' 
                  }} 
                  className="feature-img" 
                />
              </div>
              
              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  marginBottom: '0.75rem', 
                  color: '#222222'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#4A4A4A', lineHeight: 1.6, marginBottom: 0 }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(244, 106, 122, 0.15);
        }
        .feature-img:hover {
          transform: scale(1.08);
        }
        @media (max-width: 768px) {
          .feature-card {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;