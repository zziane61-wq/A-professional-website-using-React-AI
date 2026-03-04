import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'موقع متجر إلكتروني',
      category: 'E-commerce',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'تطبيق إدارة المشاريع',
      category: 'Web App',
      image: '📊'
    },
    {
      id: 3,
      title: 'منصة تعليمية',
      category: 'Learning',
      image: '📚'
    },
    {
      id: 4,
      title: 'تطبيق الشبكات الاجتماعية',
      category: 'Social',
      image: '👥'
    },
    {
      id: 5,
      title: 'محفظة رقمية',
      category: 'Fintech',
      image: '💳'
    },
    {
      id: 6,
      title: 'تطبيق التوصيل',
      category: 'Delivery',
      image: '🚚'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>أحدث أعمالنا</h2>
          <p>مشاريع ناجحة حققت نتائج مميزة لعملائنا</p>
        </div>
        <div className="portfolio-grid">
          {projects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">{project.image}</div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
