import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ProDesign</h3>
            <p>حلول تصميم واحترافية لمستقبل رقمي أفضل</p>
          </div>
          <div className="footer-section">
            <h4>الروابط السريعة</h4>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#services">الخدمات</a></li>
              <li><a href="#portfolio">أعمالنا</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>شبكات التواصل</h4>
            <ul>
              <li><a href="#facebook">فيسبوك</a></li>
              <li><a href="#twitter">تويتر</a></li>
              <li><a href="#instagram">انستجرام</a></li>
              <li><a href="#linkedin">لينكدإن</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ProDesign. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
