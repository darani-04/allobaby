import React from 'react';
import { 
  FaHeartbeat, FaChartLine, FaExclamationTriangle, FaCloud,
  FaMobileAlt, FaShieldAlt, FaCalendarCheck, FaClipboardList,
  FaRobot, FaUsers, FaMicrophone, FaGraduationCap
} from 'react-icons/fa';

const Features = () => {
  const featuresData = [
    {
      icon: <FaHeartbeat />,
      title: "Fetal Heart Rate Monitoring",
      what: "Continuous tracking of baby's heartbeat patterns",
      how: "Uses advanced sensors to detect and monitor fetal heart rate in real-time",
      benefit: "Early detection of abnormalities and peace of mind about baby's health"
    },
    {
      icon: <FaChartLine />,
      title: "Real-Time Monitoring",
      what: "Live tracking of vital signs and pregnancy parameters",
      how: "Continuous data collection and analysis of mother's health metrics",
      benefit: "Immediate awareness of any changes requiring attention"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "AI-Powered Risk Alerts",
      what: "Intelligent warning system for potential complications",
      how: "AI algorithms analyze health data to predict and alert about risks",
      benefit: "Early intervention and prevention of serious conditions"
    },
    {
      icon: <FaCloud />,
      title: "Cloud-Based Access",
      what: "Secure storage and access to health data from anywhere",
      how: "All data is encrypted and stored in secure cloud servers",
      benefit: "Access your pregnancy data anytime, anywhere, on any device"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Integration",
      what: "Seamless mobile experience for on-the-go monitoring",
      how: "User-friendly mobile app with all features accessible",
      benefit: "Convenient tracking and monitoring from your smartphone"
    },
    {
      icon: <FaShieldAlt />,
      title: "CE & FDA 510(k) Certified",
      what: "Medical-grade accuracy and certification",
      how: "Rigorous testing and certification by healthcare authorities",
      benefit: "Trustworthy, clinically validated monitoring you can rely on"
    },
    {
      icon: <FaCalendarCheck />,
      title: "Appointment Management",
      what: "Smart scheduling and reminders for medical visits",
      how: "Calendar integration with automatic appointment reminders",
      benefit: "Never miss important prenatal appointments again"
    },
    {
      icon: <FaClipboardList />,
      title: "Daily Check-In",
      what: "Quick daily health and wellness logging",
      how: "Simple interface to log symptoms, mood, and daily vitals",
      benefit: "Consistent tracking leading to better health insights"
    },
    {
      icon: <FaRobot />,
      title: "AI Assistant",
      what: "24/7 virtual assistant for pregnancy questions",
      how: "AI-powered chatbot answers questions and provides guidance",
      benefit: "Instant answers to common concerns anytime you need"
    },
    {
      icon: <FaUsers />,
      title: "Connect",
      what: "Share data with family and healthcare providers",
      how: "Secure sharing options for partners and doctors",
      benefit: "Involve your support system in your pregnancy journey"
    },
    {
      icon: <FaMicrophone />,
      title: "Baby Cry",
      what: "AI-powered baby cry analysis and interpretation",
      how: "Microphone records and AI classifies different cry patterns",
      benefit: "Understand your baby's needs and respond appropriately"
    },
    {
      icon: <FaGraduationCap />,
      title: "Awareness",
      what: "Educational content and pregnancy guidance",
      how: "Weekly articles, videos, and tips for each pregnancy stage",
      benefit: "Stay informed and confident throughout your journey"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Powerful Features</h2>
        <p className="section-subtitle">
          Smart Fetal Monitoring for a Safe Pregnancy
        </p>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <div className="feature-detail">
                <span className="detail-label">What it does:</span>
                <p>{feature.what}</p>
              </div>
              <div className="feature-detail">
                <span className="detail-label">How it works:</span>
                <p>{feature.how}</p>
              </div>
              <div className="feature-detail">
                <span className="detail-label">Benefit:</span>
                <p className="benefit-text">{feature.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features {
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
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        
        .feature-card {
          background: white;
          border-radius: 24px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(244, 106, 122, 0.1);
        }
        
        .feature-icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        
        .feature-icon-wrapper svg {
          font-size: 1.5rem;
          color: white;
        }
        
        .feature-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #222222;
        }
        
        .feature-detail {
          margin-bottom: 1rem;
        }
        
        .detail-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #F46A7A;
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .feature-detail p {
          font-size: 0.8rem;
          color: #4A4A4A;
          line-height: 1.5;
        }
        
        .benefit-text {
          color: #F46A7A;
          font-weight: 500;
        }
        
        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;