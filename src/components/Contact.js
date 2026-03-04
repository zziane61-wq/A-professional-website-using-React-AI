import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سيتم الرد عليك قريباً.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>تواصل معنا</h2>
          <p>نحن هنا لمساعدتك - لا تتردد في التواصل</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>العنوان</h3>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>الهاتف</h3>
                <p>+966 50 123 4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>البريد الإلكتروني</h3>
                <p>info@prodesign.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="اسمك"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="بريدك الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="رسالتك"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">إرسال الرسالة</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
