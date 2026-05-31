import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import screenshot4 from "../assets/screenshot4.png";

const Screenshots = () => {
  const screenshots = [
    { id: 1, title: "Dashboard", image: screenshot1 },
    { id: 2, title: "Baby Growth", image: screenshot2 },
    { id: 3, title: "AI Insights", image: screenshot3 },
    { id: 4, title: "Health Tracking", image: screenshot4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <h2>App Screenshots</h2>
        <p className="section-subtitle">
          See AlloBaby in action — beautiful, intuitive, and powerful
        </p>

        <div className="screenshots-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot) => (
                <div className="screenshot-card" key={screenshot.id}>
                  <div className="mockup-phone">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="screenshot-image"
                    />
                  </div>
                  <p className="screenshot-label">{screenshot.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="dots">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .screenshots {
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
        
        .screenshots-carousel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        
        .carousel-container {
          overflow: hidden;
          width: 280px;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.4s ease;
        }
        
        .screenshot-card {
          flex: 0 0 280px;
          text-align: center;
          padding: 0 0.5rem;
        }
        
        .mockup-phone {
          width: 250px;
          height: 500px;
          background: #222222;
          border-radius: 36px;
          padding: 12px;
          margin: 0 auto;
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        
        .screenshot-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 28px;
        }
        
        .screenshot-label {
          margin-top: 1rem;
          font-weight: 500;
          color: #222222;
        }
        
        .carousel-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: none;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #F46A7A;
        }
        
        .carousel-btn:hover {
          background: #F46A7A;
          color: white;
        }
        
        .dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #EAEAEA;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          width: 24px;
          border-radius: 10px;
          background: #F46A7A;
        }
        
        @media (max-width: 600px) {
          .carousel-container {
            width: 240px;
          }
          
          .screenshot-card {
            flex: 0 0 240px;
          }
          
          .mockup-phone {
            width: 220px;
            height: 440px;
          }
        }
      `}</style>
    </section>
  );
};

export default Screenshots;