import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is AlloBaby free to use?",
      answer: "AlloBaby offers a free version with basic tracking features. Premium features including AI insights, risk alerts, and healthcare connectivity are available through a subscription plan with flexible monthly and yearly options."
    },
    {
      question: "How accurate is the AI health monitoring?",
      answer: "Our AI models are trained on thousands of pregnancy cases and validated by medical professionals. While AlloBaby provides valuable insights, it is designed to complement, not replace, professional medical care. Always consult your doctor for medical decisions."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256) for all health data. We comply with healthcare data privacy regulations and never share your personal information without explicit consent."
    },
    {
      question: "Can I share my data with my doctor?",
      answer: "Yes! AlloBaby allows you to generate comprehensive health reports that you can share directly with your healthcare provider via email or PDF export."
    },
    {
      question: "At what stage of pregnancy should I start using AlloBaby?",
      answer: "You can start using AlloBaby as soon as you find out you're pregnant. The app provides relevant information and tracking features for each trimester, from early pregnancy through postpartum."
    },
    {
      question: "Does AlloBaby work without internet?",
      answer: "Most tracking features work offline. Data syncs automatically when you reconnect to the internet. AI insights and real-time alerts require an internet connection."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about AlloBaby
        </p>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq {
          background: #faf9ff;
        }
        
        .faq-grid {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-item {
          background: white;
          border-radius: 16px;
          margin-bottom: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }
        
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        
        .faq-question:hover {
          background: #f5f3ff;
        }
        
        .faq-icon {
          color: #8B5CF6;
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 1.5rem;
        }
        
        .faq-answer.open {
          max-height: 300px;
          padding: 0 1.5rem 1.25rem 1.5rem;
        }
        
        .faq-answer p {
          color: #4a5568;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .faq-question {
            padding: 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;