// src/components/layout/Footer/Footer.tsx
import React from 'react';
import { Link } from 'react-router';
import {
  
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiClock,
} from 'react-icons/fi';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Grid */}
      <div className="footer__main">
        <div className="footer__container footer__grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">MR</span>
              <div className="footer__logo-text">
                <span className="footer__logo-name">MR Fortune Trade</span>
                <span className="footer__logo-sub">Pvt. Ltd.</span>
              </div>
            </Link>

            <p className="footer__brand-desc">
              Your trusted international partner for export excellence. Supplying ISO-certified AdBlue® and quality trade commodities across Middle East and global markets with competitive pricing and dependable logistics.
            </p>

            <div className="footer__badge">
              <FiShield className="footer__badge-icon" />
              <span>ISO 22241 Certified AdBlue® Supplier</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About MR Fortune</Link></li>
              <li><Link to="/products">Product Portfolio</Link></li>
              <li><Link to="/quality">Quality Assurance</Link></li>
              <li><Link to="/logistics">Global Logistics</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer__col">
            <h4 className="footer__title">Contact Us</h4>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <FiMapPin className="footer__contact-icon" />
                <span>84/1 Curzon Road, HNS Shastri Nagar, Kanpur, Uttar Pradesh, India - 208005</span>
              </div>

              <div className="footer__contact-item">
                <FiMail className="footer__contact-icon" />
                <a href="mailto:sridhar@mrfortunetrade.com">sridhar@mrfortunetrade.com</a>
              </div>

              <div className="footer__contact-item">
                <FiPhone className="footer__contact-icon" />
                <a href="tel:+919335962923">+91-9335962923</a>
                <a href="tel:+96877074686">+968-77074686</a>
              </div>

              

              <div className="footer__contact-item">
                <FiClock className="footer__contact-icon" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="footer__bottom">
        <div className="footer__container footer__bottom-container">
          <p className="footer__copyright">
            © {currentYear} <strong>MR Fortune Trade Pvt. Ltd.</strong> All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer__divider">|</span>
            <Link to="/terms-of-trade">Terms of Trade</Link>
            <span className="footer__divider">|</span>
            <Link to="/disclaimer">Export Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;