import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiCheckCircle, 
  FiShield, 
  FiArrowRight, 
  FiChevronLeft,
  FiChevronRight,
  FiFileText,
  FiGlobe,
  FiZap,
  FiFeather
} from 'react-icons/fi';
import './ProductPage.css';
import adBlue from "../../assets/images/adblue2.png";
import illustration from "../../assets/images/undraw_delivery-truck_mjui.svg";
import img1 from "../../assets/images/adblue2.png";
import img2 from "../../assets/images/61-3PjcTyL Background Removed._SX466_.png";
import img3 from "../../assets/images/Group-Shot.png";
import img4 from "../../assets/images/old-Adblue-ADS-2025-2-1.png";

// --- DATA ARRAYS ---
const HERO_FEATURES = [
  { 
    id: 1, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12L16 12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12L2 12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    text: 'Reduces NOx\nEmissions' 
  },
  { id: 2, icon: <FiShield size={22} />, text: 'Protects SCR\nSystems' },
  { 
    id: 3, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    text: 'Supports\nBS-VI / Euro VI' 
  },
];

// 8 TOTAL BENEFITS (4 SHOWN PER PAGE)
const BENEFITS = [
  { 
    id: 1, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="b-icon">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"/>
        <path d="M15 9V9.01"/><path d="M9 9V9.01"/>
      </svg>
    ), 
    text: 'Reduces harmful\nNOx emissions' 
  },
  { id: 2, icon: <FiShield className="b-icon" />, text: 'Protects SCR\ncatalyst systems' },
  { 
    id: 3, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="b-icon">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <circle cx="7" cy="16" r="2"/><circle cx="17" cy="16" r="2"/>
        <path d="M7 11V7C7 5.89543 7.89543 5 9 5H15C16.1046 5 17 5.89543 17 7V11"/>
      </svg>
    ), 
    text: 'Supports fuel-efficient\nemissions control' 
  },
  { 
    id: 4, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="b-icon">
        <circle cx="12" cy="8" r="5"/>
        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"/>
      </svg>
    ), 
    text: 'Consistent ISO 22241\nquality' 
  },
  { id: 5, icon: <FiZap className="b-icon" />, text: 'Prevents harmful\ndeposit formation' },
  { id: 6, icon: <FiGlobe className="b-icon" />, text: 'Meets international\nexport standards' },
  { id: 7, icon: <FiFeather className="b-icon" />, text: 'Eco-friendly &\nnon-toxic formula' },
  { id: 8, icon: <FiCheckCircle className="b-icon" />, text: 'Maximizes engine\nlongevity & power' },
];

const APPLICATIONS = [
  'Commercial Trucks',
  'Buses',
  'Construction Equipments',
  'Agricultural Machinery',
  'Mining Equipments',
  'Industrial Diesel Equipments'
];

const GALLERY = [img1, img2, img3, img4];

export default function ProductPage() {
  // Carousel Pagination State (0 = First 4, 1 = Last 4)
  const [benefitPage, setBenefitPage] = useState<number>(0);

  const handlePrevPage = () => {
    setBenefitPage((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNextPage = () => {
    setBenefitPage((prev) => (prev === 0 ? 1 : 0));
  };

  // Get current 4 benefits based on state page
  const currentBenefits = BENEFITS.slice(benefitPage * 4, benefitPage * 4 + 4);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="velvex-dark-theme">
      
      {/* HERO SECTION */}
      <section className="v-hero-section">
        <div className="v-hero-glow"></div>
        <div className="v-container v-hero-grid">
          
          {/* Left Content */}
          <div className="v-hero-content reveal-on-scroll">
            <div className="v-hero-badge">
              <FiCheckCircle size={14} /> ISO 22241 COMPLIANT <span className="badge-dot">•</span>
            </div>
            
            <h1 className="v-hero-title">
              VELVEX <br />
              <span className="text-gradient">AdBlue<sup className="reg-mark">®</sup></span>
            </h1>
            
            <div className="v-yellow-dash"></div>
            
            <p className="v-hero-desc">
              High-purity Diesel Exhaust Fluid for cleaner<br />
              emissions, superior engine performance,<br />
              and a greener tomorrow.
            </p>
            
            <div className="v-hero-actions">
              <Link to="/contact" className="v-btn v-btn-primary">
                Get a Quote <FiArrowRight />
              </Link>
            </div>
            
            <div className="v-hero-mini-features">
              {HERO_FEATURES.map((feat) => (
                <div key={feat.id} className="v-mini-feature-card">
                  <div className="v-mf-icon">{feat.icon}</div>
                  <span className="v-mf-text">{feat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="v-hero-visual reveal-on-scroll">
            <div className="v-visual-glow-ring"></div>
            <img 
              src={adBlue}
              alt="VELVEX AdBlue IBC Tank" 
              className="v-hero-img"
            />
          </div>

        </div>
      </section>

      <div className="v-container">
        
        {/* ABOUT SECTION */}
        <section className="v-about-section reveal-on-scroll">
          <h3 className="v-section-heading">ABOUT VELVEX ADBLUE</h3>
          <p className="v-about-text">
            VELVEX AdBlue® is a high-purity Diesel Exhaust Fluid manufactured from 32.5% automotive-grade urea and 67.5% demineralized water in accordance with ISO 22241. It is designed for SCR-equipped diesel engines to reduce nitrogen oxide (NOx) emissions and support BS-VI / Euro VI compliance.
          </p>
        </section>

        {/* KEY BENEFITS SECTION (8 items total, 4 displayed dynamically per page) */}
        <section className="v-benefits-section reveal-on-scroll">
          <h3 className="v-section-heading">KEY BENEFITS</h3>
          <div className="v-glass-panel v-carousel-panel">
            <button 
              className="v-carousel-arrow left" 
              onClick={handlePrevPage}
              aria-label="Previous benefits"
            >
              <FiChevronLeft size={24} />
            </button>
            
            <div className="v-benefits-grid">
              {currentBenefits.map((b) => (
                <div key={b.id} className="v-benefit-item fade-in-item">
                  <div className="v-benefit-icon">{b.icon}</div>
                  <p className="v-benefit-text">{b.text}</p>
                </div>
              ))}
            </div>
            
            <button 
              className="v-carousel-arrow right" 
              onClick={handleNextPage}
              aria-label="Next benefits"
            >
              <FiChevronRight size={24} />
            </button>
            
            <div className="v-carousel-dots">
              <span 
                className={`dot ${benefitPage === 0 ? 'active' : ''}`}
                onClick={() => setBenefitPage(0)}
              ></span>
              <span 
                className={`dot ${benefitPage === 1 ? 'active' : ''}`}
                onClick={() => setBenefitPage(1)}
              ></span>
            </div>
          </div>
        </section>

        {/* SPLIT SECTION: APPLICATIONS & PACKAGING */}
        <section className="v-split-section">
          
          {/* Applications Card */}
          <div className="v-glass-panel v-split-card reveal-on-scroll">
            <h3 className="v-section-heading">APPLICATIONS</h3>
            <div className="v-app-content">
              <ul className="v-app-list">
                {APPLICATIONS.map((app, i) => (
                  <li key={i}>{app}</li>
                ))}
              </ul>
              
              {/* Asset Illustration Container */}
              <div className="v-app-bg-graphic">
                <img 
                  src={illustration} 
                  alt="Application Illustration" 
                  className="v-app-illustration"
                />
              </div>
            </div>
          </div>

          {/* Packaging Card */}
          <div className="v-glass-panel v-split-card reveal-on-scroll">
            <h3 className="v-section-heading">PACKAGING OPTIONS</h3>
            <div className="v-packaging-grid">
              <div className="v-pack-item">
                <div className="v-pack-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="6" y="6" width="12" height="15" rx="2"/>
                    <path d="M9 6V3H12V6"/>
                    <path d="M8 12L16 12M10 16L14 16"/>
                  </svg>
                </div>
                <span>10L</span>
              </div>
              <div className="v-pack-item">
                <div className="v-pack-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M5 6C5 4.89543 8.13401 4 12 4C15.866 4 19 4.89543 19 6V18C19 19.1046 15.866 20 12 20C8.13401 20 5 19.1046 5 18V6Z"/>
                    <path d="M5 6C5 7.10457 8.13401 8 12 8C15.866 8 19 7.10457 19 6"/>
                    <path d="M5 12C5 13.1046 8.13401 14 12 14C15.866 14 19 13.1046 19 12"/>
                  </svg>
                </div>
                <span>20L</span>
              </div>
              <div className="v-pack-item">
                <div className="v-pack-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="4" y="4" width="16" height="16" rx="1"/>
                    <path d="M4 8H20M4 12H20M4 16H20M8 4V20M12 4V20M16 4V20"/>
                  </svg>
                </div>
                <span>IBC</span>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="v-gallery-section reveal-on-scroll">
          <div className="v-glass-panel v-gallery-panel">
            <h3 className="v-section-heading">PRODUCT GALLERY</h3>
            <div className="v-gallery-grid">
              {GALLERY.map((img, i) => (
                <div key={i} className="v-gallery-img-wrap">
                  <img src={img} alt={`Gallery item ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="v-cta-section reveal-on-scroll">
          <div className="v-glass-panel v-cta-banner">
            <div className="v-cta-left">
              <div className="v-cta-icon">
                <FiFileText size={32} />
                <div className="v-cta-check"><FiCheckCircle size={14}/></div>
              </div>
              <div className="v-cta-text">
                <h2>Need a custom quote for your business?</h2>
                <p>We provide reliable supply, competitive pricing and global delivery.</p>
              </div>
            </div>
            <Link to="/contact" className="v-btn v-btn-yellow">
              Get a Quote Now <FiArrowRight />
            </Link>
          </div>
        </section>
        
      </div>
    </div>
  );
}