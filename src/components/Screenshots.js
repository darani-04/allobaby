import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart, FaBaby, FaUsers, FaMicrophone, FaClipboardList, FaChartLine } from 'react-icons/fa';

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState('allobot');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const allobotFeatures = [
    { icon: <FaMicrophone />, title: "Vision Agent", description: "Clarify doubts with image analysis" },
    { icon: <FaHeart />, title: "Talk To Your Baby", description: "Real-time conversations with live assistance" },
    { icon: <FaBaby />, title: "AlloCry", description: "Understand baby's needs through cry" },
    { icon: <FaClipboardList />, title: "Kick Counter", description: "Track baby's movements and activity" },
  ];

  const customAgentFeatures = [
    { icon: <FaHeart />, title: "Daily Health", description: "Monitor vitals and health status" },
    { icon: <FaClipboardList />, title: "To-Do List", description: "Organize tasks and stay productive" },
    { icon: <FaMicrophone />, title: "AlloCry", description: "Understand baby's needs through cry" },
    { icon: <FaBaby />, title: "Kickcount", description: "Track baby's movements and activity" },
    { icon: <FaChartLine />, title: "Feeding", description: "Log and monitor feeding" },
    { icon: <FaUsers />, title: "Pregnancy", description: "Track pregnancy progress" },
  ];

  const screenshots = [
    { id: 1, title: "Dashboard", image: require("../assets/screenshot1.png") },
    { id: 2, title: "Baby Growth", image: require("../assets/screenshot2.png") },
    { id: 3, title: "AI Insights", image: require("../assets/screenshot3.png") },
    { id: 4, title: "Health Tracking", image: require("../assets/screenshot4.png") },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const isMobile = windowWidth <= 768;

  return (
    <section id="screenshots" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #FFFFFF, #FDF1F3)' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Inside the <span className="gradient-text">App</span></h2>
          <p className="section-subtitle">A beautiful, intuitive interface designed for busy parents</p>
        </div>

        {/* App Preview Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: '1.5rem',
          marginBottom: '3rem',
          maxWidth: '1000px',
          margin: '0 auto 3rem auto'
        }} data-aos="fade-up">
          
          {/* Allobot Card */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            border: activeTab === 'allobot' ? '2px solid #F46A7A' : '1px solid #EAEAEA',
            transition: 'all 0.3s ease'
          }} onClick={() => setActiveTab('allobot')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #F46A7A, #F78A9A)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🤖</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222222' }}>Allobot</h3>
            </div>
            <p style={{ color: '#4A4A4A', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Start with chat, vision, live assistant, or switch inference mode instantly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {allobotFeatures.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <div style={{ color: '#F46A7A', fontSize: '1rem', minWidth: '24px' }}>{feature.icon}</div>
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: '#222222' }}>{feature.title}</strong>
                    <p style={{ fontSize: '0.75rem', color: '#4A4A4A' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Agent Card */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            border: activeTab === 'custom' ? '2px solid #F46A7A' : '1px solid #EAEAEA',
            transition: 'all 0.3s ease'
          }} onClick={() => setActiveTab('custom')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #F46A7A, #F78A9A)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.2rem' }}>⚡</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222222' }}>Custom Agent</h3>
            </div>
            <p style={{ color: '#4A4A4A', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Powerful tools to enhance your experience. New agents added regularly!
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
              gap: '0.75rem' 
            }}>
              {customAgentFeatures.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ color: '#F46A7A', fontSize: '0.875rem', minWidth: '20px' }}>{feature.icon}</div>
                  <div>
                    <strong style={{ fontSize: '0.8rem', color: '#222222' }}>{feature.title}</strong>
                    <p style={{ fontSize: '0.7rem', color: '#4A4A4A' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot Carousel - Black border, no shadow */}
        <div style={{ 
          background: 'transparent',
          borderRadius: '30px',
          padding: '2rem 0',
          position: 'relative'
        }} data-aos="fade-up">
          
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <button style={{ 
              width: 'clamp(40px, 8vw, 45px)', 
              height: 'clamp(40px, 8vw, 45px)', 
              borderRadius: '50%', 
              background: 'white', 
              border: '1px solid #EAEAEA',
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              transition: 'all 0.3s ease', 
              color: '#F46A7A',
              zIndex: 2
            }} onClick={prevSlide} className="carousel-btn">
              <FaChevronLeft size={18} />
            </button>
            
            <div style={{ overflow: 'hidden', width: isMobile ? '260px' : '300px' }}>
              <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
                {screenshots.map((screenshot) => (
                  <div key={screenshot.id} style={{ flex: `0 0 ${isMobile ? '260px' : '300px'}`, textAlign: 'center', padding: '0 0.75rem' }}>
                    {/* Black border phone mockup - NO SHADOW */}
                    <div style={{ 
                      width: isMobile ? '240px' : '270px', 
                      height: isMobile ? '480px' : '540px', 
                      background: '#000000',
                      borderRadius: '35px',
                      padding: '8px',
                      margin: '0 auto',
                      border: 'none',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.title} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          borderRadius: '28px',
                          transition: 'transform 0.3s ease'
                        }} 
                        className="screenshot-img"
                      />
                    </div>
                    <p style={{ 
                      marginTop: '1rem', 
                      fontWeight: 600, 
                      color: '#222222', 
                      fontSize: isMobile ? '0.85rem' : '0.95rem' 
                    }}>{screenshot.title}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <button style={{ 
              width: 'clamp(40px, 8vw, 45px)', 
              height: 'clamp(40px, 8vw, 45px)', 
              borderRadius: '50%', 
              background: 'white', 
              border: '1px solid #EAEAEA',
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              transition: 'all 0.3s ease', 
              color: '#F46A7A',
              zIndex: 2
            }} onClick={nextSlide} className="carousel-btn">
              <FaChevronRight size={18} />
            </button>
          </div>

          {/* Dots indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem' }}>
            {screenshots.map((_, index) => (
              <button
                key={index}
                style={{
                  width: currentIndex === index ? '28px' : '8px',
                  height: '8px',
                  borderRadius: currentIndex === index ? '10px' : '50%',
                  background: currentIndex === index ? '#F46A7A' : '#EAEAEA',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .carousel-btn:hover {
          background: #F46A7A;
          color: white;
          border-color: #F46A7A;
          transform: scale(1.05);
        }
        .screenshot-img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Screenshots;