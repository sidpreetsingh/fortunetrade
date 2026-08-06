import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

import { 
  FiMail, 
  FiPhone, 
  FiClock, 
  FiArrowRight, 
  FiChevronDown, 
  FiFileText, 
  FiHeadphones, 
  FiGlobe,
  FiSend,
  FiExternalLink
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

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you export internationally?",
    answer: "Yes, Mr Fortune Trade exports AdBlue® (DEF) and industrial chemical products worldwide. We manage complete international shipping logistics, customs documentation, and compliance across global markets."
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our standard minimum order quantity for international shipments is a 20-foot full container load (FCL) packaged in 1000L IBC totes or 210L drums. For domestic bulk orders, custom quantities can be arranged upon discussion."
  },
  {
    question: "Can you provide private labeling and OEM packaging?",
    answer: "Yes, we offer specialized private labeling services for global buyers. We can manufacture and package under your custom brand name adhering strictly to ISO 22241 quality standards and customized design specs."
  },
  {
    question: "What are your standard delivery timelines?",
    answer: "Domestic dispatches within India are processed within 2 to 4 business days. For international exports, transit times range from 10 to 25 days depending on the destination sea port and custom clearances."
  }
];

export const GetQuote: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
      <section className="gq-container gq-section">
        <motion.div 
          className="gq-glass-card gq-map-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Real Google Map Embed Container */}
          <div className="gq-map-graphic">
            <iframe
              title="HQ Google Map Location"
              src="https://maps.google.com/maps?q=84%2F1%20Curzon%20Road%2C%20HNS%20Shastri%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208005&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="gq-map-details">
            <div className="gq-map-tag">
              <span className="gq-dot-live" /> Google Maps Integration
            </div>
            <h3>Strategic HQ Location</h3>
            <p>Serving clients seamlessly across India and major international markets.</p>
            <div className="gq-map-footer">
              <a 
                href="https://maps.google.com/?q=84/1+Curzon+Road,+HNS+Shastri+Nagar,+Kanpur,+Uttar+Pradesh+208005" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gq-map-link"
              >
                Open HQ Map Location <FiExternalLink />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

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
      <section className="gq-container gq-section">
        <motion.div 
          className="gq-section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="gq-subheading">Inquiries & Answers</span>
          <h2 className="gq-section-title">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div 
          className="gq-faq-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className={`gq-glass-card gq-faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="gq-faq-header">
                  <h4>{faq.question}</h4>
                  <motion.div 
                    className="gq-faq-icon"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="gq-faq-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </section>

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