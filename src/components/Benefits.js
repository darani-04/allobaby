import React from 'react';
import { FaLeaf, FaBell, FaChartLine, FaHospitalUser, FaUserCheck } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "Better Maternal Health",
      description: "Proactive health monitoring leads to healthier pregnancies and fewer complications."
    },
    {
      icon: <FaBell />,
      title: "Early Risk Detection",
      description: "AI identifies warning signs days or weeks before they become serious issues."
    },
    {
      icon: <FaChartLine />,
      title: "Continuous Monitoring",
      description: "Track your health 24/7 without frequent hospital visits."
    },
    {
      icon: <FaHospitalUser />,
      title: "Easy Healthcare Access",
      description: "Connect with doctors instantly and share reports seamlessly."
    },
    {
      icon: <FaUserCheck />,
      title: "Personalized Guidance",
      description: "Get advice tailored to your unique pregnancy journey and health profile."
    }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h2>Why Choose AlloBaby</h2>
        <p className="section-subtitle">
          Transforming pregnancy care with technology and compassion
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-card">
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">
            AlloBaby gave me peace of mind throughout my pregnancy. 
            The AI insights helped me catch a potential issue early, 
            and I felt supported every step of the way.
          </p>
          <div className="testimonial-author">
            <span className="author-name">Priya Sharma</span>
            <span className="author-title">Happy Mom of baby Aarav</span>
          </div>
        </div>
      </div>

      <style>{`
        .benefits {
          background: #FAEDEF;
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
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .benefit-card {
          text-align: center;
          padding: 2rem 1rem;
          background: white;
          border-radius: 24px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
        }
        
        .benefit-card:hover {
          transform: translateY(-5px);
          background: white;
          box-shadow: 0 15px 35px rgba(244, 106, 122, 0.1);
        }
        
        .benefit-icon {
          font-size: 2.5rem;
          color: #F46A7A;
          margin-bottom: 1rem;
        }
        
        .benefit-card h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: #222222;
        }
        
        .benefit-card p {
          font-size: 0.875rem;
          color: #4A4A4A;
          line-height: 1.5;
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, #F46A7A, #F78A9A);
          border-radius: 32px;
          padding: 2rem;
          color: white;
          text-align: center;
          margin-top: 2rem;
          box-shadow: 0 10px 30px rgba(244, 106, 122, 0.2);
        }
        
        .testimonial-quote {
          font-size: 4rem;
          font-family: Georgia, serif;
          opacity: 0.5;
          line-height: 1;
        }
        
        .testimonial-text {
          font-size: 1.125rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 1.5rem auto;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-weight: 700;
        }
        
        .author-title {
          font-size: 0.875rem;
          opacity: 0.9;
        }
        
        @media (max-width: 1000px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 700px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 500px) {
          .benefits-grid {
            grid-template-columns: 1fr;
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

export default Benefits;