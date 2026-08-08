import React from 'react';
import { motion} from 'framer-motion';
import type { Variants } from 'framer-motion';

import { 
  FiMail, 
  FiPhone, 
  FiClock, 
  FiArrowRight, 
  
  FiFileText, 
  FiHeadphones, 
  FiGlobe,
  FiSend
} from 'react-icons/fi';
import { HiOutlineBuildingOffice2, HiOutlineDocumentCheck } from 'react-icons/hi2';
import './GetQuote.css';

// Framer Motion Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};



  

export const GetQuote: React.FC = () => {
  

  

  return (
    <div className="gq-page">
      {/* Dynamic Ambient Glow Blobs */}
      <div className="gq-ambient-bg">
        <div className="gq-blob gq-blob-1" />
        <div className="gq-blob gq-blob-2" />
        <div className="gq-blob gq-blob-3" />
      </div>

      {/* =========================================
         1. HERO SECTION
         ========================================= */}
      <section className="gq-hero">
        <div className="gq-hero-overlay" />
        <motion.div 
          className="gq-hero-container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="gq-badge" variants={fadeInUp}>
            <FiGlobe className="badge-icon" /> Global Trade Representative
          </motion.span>

          <motion.h1 className="gq-hero-title" variants={fadeInUp}>
            Let’s Discuss Your <br />
            <span className="gq-gradient-text">Business Requirements</span>
          </motion.h1>

          <motion.p className="gq-hero-subtitle" variants={fadeInUp}>
            Whether you’re looking for bulk AdBlue® supply, private labeling, or international exports, 
            our team is ready to assist you with reliable, ISO-certified industrial solutions.
          </motion.p>

          <motion.div className="gq-hero-actions" variants={fadeInUp}>
            <a 
              href="mailto:sridhar@mrfortunetrade.com?subject=Inquiry%20from%20Website" 
              className="gq-btn gq-btn-primary"
            >
              <FiMail className="btn-icon" /> Email Us
            </a>
            <a 
              href="tel:+919335962923" 
              className="gq-btn gq-btn-secondary"
            >
              <FiPhone className="btn-icon" /> Call Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
         2. CONTACT INFORMATION CARDS (Fixed Layout)
         ========================================= */}
      <section className="gq-container gq-section">
        <motion.div 
          className="gq-info-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Card 1: Email */}
          <motion.div className="gq-glass-card gq-info-card" variants={fadeInUp}>
            <div className="gq-card-icon-wrapper">
              <FiMail className="gq-card-icon" />
            </div>
            <div className="gq-card-content">
              <span className="gq-card-label">Direct Email</span>
              <a href="mailto:sridhar@mrfortunetrade.com" className="gq-card-value">
                sridhar@mrfortunetrade.com
              </a>
              <span className="gq-card-subtext">Response within 24 hours</span>
            </div>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div className="gq-glass-card gq-info-card" variants={fadeInUp}>
            <div className="gq-card-icon-wrapper">
              <FiPhone className="gq-card-icon" />
            </div>
            <div className="gq-card-content">
              <span className="gq-card-label">Phone & WhatsApp</span>
              <a href="tel:+919335962923" className="gq-card-value">
                +91-9335962923
              </a>
              <a href="tel:+96877074686" className="gq-card-value">
                +968-77074686
              </a>
              <span className="gq-card-subtext">Mon–Sat • 9 AM – 6 PM IST</span>
            </div>
          </motion.div>

          {/* Card 3: Office Location */}
          <motion.div className="gq-glass-card gq-info-card" variants={fadeInUp}>
            <div className="gq-card-icon-wrapper">
              <HiOutlineBuildingOffice2 className="gq-card-icon" />
            </div>
            <div className="gq-card-content">
              <span className="gq-card-label">Registered Office</span>
              <span className="gq-card-value address-text">
                84/1 Curzon Road, HNS Shastri Nagar, Kanpur, Uttar Pradesh, India - 208005
              </span>
            </div>
          </motion.div>

          {/* Card 4: Business Hours */}
          <motion.div className="gq-glass-card gq-info-card" variants={fadeInUp}>
            <div className="gq-card-icon-wrapper">
              <FiClock className="gq-card-icon" />
            </div>
            <div className="gq-card-content">
              <span className="gq-card-label">Operating Hours</span>
              <span className="gq-card-value">Mon - Sat</span>
              <span className="gq-card-subtext">9:00 AM - 6:00 PM IST</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
         3. INTERACTIVE LOCATION
         ========================================= */}
      {/* =========================================
         3. INTERACTIVE LOCATION
         ========================================= */}
      
      {/* =========================================
         4. QUICK CONTACT OPTIONS (No Form)
         ========================================= */}
      <section className="gq-container gq-section">
        <motion.div 
          className="gq-section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="gq-subheading">Direct Channels</span>
          <h2 className="gq-section-title">How Can We Help You Today?</h2>
        </motion.div>

        <motion.div 
          className="gq-quick-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Option 1 */}
          <motion.a 
            href="mailto:sridhar@mrfortunetrade.com?subject=Quotation%20Request"
            className="gq-glass-card gq-quick-card"
            variants={fadeInUp}
            whileHover={{ y: -6 }}
          >
            <div className="gq-quick-top">
              <div className="gq-quick-icon-box"><FiSend /></div>
              <FiArrowRight className="gq-quick-arrow" />
            </div>
            <h3>Need a Quotation?</h3>
            <p>Get pricing details, container shipping rates, and product options.</p>
            <span className="gq-quick-action">Email Sales Team</span>
          </motion.a>

          {/* Option 2 */}
          <motion.a 
            href="mailto:sridhar@mrfortunetrade.com?subject=Product%20Brochure%20Request"
            className="gq-glass-card gq-quick-card"
            variants={fadeInUp}
            whileHover={{ y: -6 }}
          >
            <div className="gq-quick-top">
              <div className="gq-quick-icon-box"><FiFileText /></div>
              <FiArrowRight className="gq-quick-arrow" />
            </div>
            <h3>Technical Specifications?</h3>
            <p>Download complete technical datasheets and ISO 22241 compliance specs.</p>
            <span className="gq-quick-action">Request Brochure</span>
          </motion.a>

          {/* Option 3 */}
          <motion.a 
            href="tel:+919335962923"
            className="gq-glass-card gq-quick-card"
            variants={fadeInUp}
            whileHover={{ y: -6 }}
          >
            <div className="gq-quick-top">
              <div className="gq-quick-icon-box"><FiHeadphones /></div>
              <FiArrowRight className="gq-quick-arrow" />
            </div>
            <h3>Urgent Assistance?</h3>
            <p>Speak directly with our export representatives immediately over phone.</p>
            <span className="gq-quick-action">Call Us Now</span>
          </motion.a>

          {/* Option 4 */}
          <motion.a 
            href="mailto:sridhar@mrfortunetrade.com?subject=Distributor%20Partnership%20Inquiry"
            className="gq-glass-card gq-quick-card"
            variants={fadeInUp}
            whileHover={{ y: -6 }}
          >
            <div className="gq-quick-top">
              <div className="gq-quick-icon-box"><HiOutlineDocumentCheck /></div>
              <FiArrowRight className="gq-quick-arrow" />
            </div>
            <h3>Become a Distributor?</h3>
            <p>Explore high-volume partnerships, agency rights, and private labeling.</p>
            <span className="gq-quick-action">Contact Business Team</span>
          </motion.a>
        </motion.div>
      </section>

      {/* =========================================
         5. FREQUENTLY ASKED QUESTIONS
         ========================================= */}
      

      {/* =========================================
         6. FINAL CALL TO ACTION
         ========================================= */}
      <section className="gq-container gq-section gq-cta-section">
        <motion.div 
          className="gq-glass-card gq-cta-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="gq-cta-bg-image" />
          <div className="gq-cta-overlay" />

          <div className="gq-cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Let’s build a long-term business relationship with reliable chemical products, 
              consistent purity, and dependable export services.
            </p>

            <div className="gq-cta-buttons">
              <a 
                href="mailto:sridhar@mrfortunetrade.com?subject=Business%20Partnership" 
                className="gq-btn gq-btn-primary"
              >
                <FiMail className="btn-icon" /> Email Now
              </a>
              <a 
                href="tel:+919335962923" 
                className="gq-btn gq-btn-secondary"
              >
                <FiPhone className="btn-icon" /> Call Us
              </a>
              <a 
                href="/products" 
                className="gq-btn gq-btn-outline"
              >
                View Products <FiArrowRight className="btn-icon" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GetQuote;