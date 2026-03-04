import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>من نحن</h2>
            <p>
              نحن فريق متخصص من المصممين والمطورين يعملون على تحويل أحلامك إلى واقع رقمي.
              بخبرة تزيد عن 10 سنوات، ساعدنا مئات العملاء على النجاح.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>مشروع منجز</p>
              </div>
              <div className="stat">
                <h3>250+</h3>
                <p>عميل سعيد</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>فريق محترف</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-decoration">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
