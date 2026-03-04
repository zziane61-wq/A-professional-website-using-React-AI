import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">مرحباً بك في عالم التصميم الاحترافي</h1>
        <p className="hero-subtitle">نحن نقدم حلولاً تصميمية ابتكارية وحديثة لعملائك</p>
        <button className="cta-button">ابدأ الآن</button>
      </div>
      <div className="hero-illustration">
        <div className="gradient-circle"></div>
        <div className="floating-element"></div>
      </div>
    </section>
  );
}

export default Hero;
