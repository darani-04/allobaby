import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Is my data secure?", answer: "Yes! We use bank-level encryption (AES-256) for all health data. We comply with healthcare data privacy regulations and never share your personal information without explicit consent." },
    { question: "Does the AI replace medical advice?", answer: "No. While AlloBaby provides valuable insights, it is designed to complement, not replace, professional medical care. Always consult your doctor for medical decisions." },
    { question: "Is the app free to use?", answer: "AlloBaby offers a free version with basic tracking features. Premium features including AI insights, risk alerts, and healthcare connectivity are available through a subscription plan." },
    { question: "Can I share my data with my doctor?", answer: "Yes! AlloBaby allows you to generate comprehensive health reports that you can share directly with your healthcare provider via email or PDF export." },
    { question: "At what stage should I start using AlloBaby?", answer: "You can start using AlloBaby as soon as you find out you're pregnant. The app provides relevant information and tracking features for each trimester." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about AlloBaby</p>
        </div>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ 
              background: '#F8F8F8', 
              borderRadius: '16px', 
              marginBottom: '1rem', 
              overflow: 'hidden', 
              transition: 'all 0.3s ease' 
            }} className="faq-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <button style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: 'clamp(1rem, 4vw, 1.25rem) clamp(1rem, 4vw, 1.5rem)', 
                background: 'none', 
                border: 'none', 
                fontSize: 'clamp(0.875rem, 4vw, 1rem)', 
                fontWeight: 600, 
                color: '#222222', 
                cursor: 'pointer', 
                transition: 'background 0.3s ease',
                textAlign: 'left'
              }} className="faq-question" onClick={() => toggleFAQ(index)}>
                <span style={{ flex: 1, paddingRight: '1rem' }}>{faq.question}</span>
                {openIndex === index ? <FaChevronUp style={{ color: '#F46A7A', flexShrink: 0 }} /> : <FaChevronDown style={{ color: '#F46A7A', flexShrink: 0 }} />}
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p style={{ 
                  padding: '0 clamp(1rem, 4vw, 1.5rem) clamp(1rem, 4vw, 1.25rem) clamp(1rem, 4vw, 1.5rem)', 
                  color: '#4A4A4A', 
                  lineHeight: 1.6,
                  fontSize: 'clamp(0.875rem, 4vw, 0.95rem)'
                }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-item:hover {
          box-shadow: 0 5px 20px rgba(244, 106, 122, 0.1);
        }
        .faq-question:hover {
          background: #FDF1F3;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-answer.open {
          max-height: 300px;
        }
        @media (max-width: 768px) {
          .faq-answer.open {
            max-height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;