import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>ProDesign</h1>
          </div>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">الرئيسية</a>
            <a href="#services" className="nav-link">الخدمات</a>
            <a href="#portfolio" className="nav-link">أعمالنا</a>
            <a href="#about" className="nav-link">من نحن</a>
            <a href="#contact" className="nav-link">اتصل بنا</a>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
