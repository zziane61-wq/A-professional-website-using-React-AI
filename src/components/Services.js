import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'تصميم الويب',
      description: 'تصاميم ويب حديثة وجميلة تجذب العملاء وتحقق أهدافك'
    },
    {
      id: 2,
      icon: '📱',
      title: 'تطبيقات الهاتف',
      description: 'تطبيقات احترافية للأندرويد والآيفون بأحدث التقنيات'
    },
    {
      id: 3,
      icon: '🎬',
      title: 'الرسوميات والفيديو',
      description: 'محتوى بصري مميز يساعد على نشر رسالتك بقوة'
    },
    {
      id: 4,
      icon: '💡',
      title: 'استشارات التصميم',
      description: 'نصائح واستشارات من خبراء الصناعة لتطوير علامتك التجارية'
    },
    {
      id: 5,
      icon: '⚡',
      title: 'تحسين الأداء',
      description: 'تحسين سرعة وكفاءة الموقع لأفضل تجربة مستخدم'
    },
    {
      id: 6,
      icon: '🔒',
      title: 'الأمان والحماية',
      description: 'حماية شاملة لموقعك وبيانات عملائك من التهديدات'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>خدماتنا المتميزة</h2>
          <p>نقدم مجموعة شاملة من الخدمات المتخصصة</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
