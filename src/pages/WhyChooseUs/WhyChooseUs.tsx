import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { 
  FiShield, FiDroplet, FiTruck, FiPackage, FiDollarSign, 
  FiHeadphones, FiGlobe, FiTarget, FiAward,
  FiArrowRight 
} from 'react-icons/fi';
import './WhyChooseUs.css';
import logo from "../../assets/icons/ChatGPT Image May 30, 2026, 01_29_56 PM (1).png";

// --- DATA ARRAYS ---

const ADVANTAGES = [
  { icon: <FiShield />, title: 'ISO 22241 Certified Quality', desc: 'Manufactured according to international quality standards ensuring consistent performance.' },
  { icon: <FiDroplet />, title: 'Premium Raw Materials', desc: 'Produced using automotive-grade urea and demineralized water for maximum purity.' },
  { icon: <FiTruck />, title: 'Reliable Export Logistics', desc: 'Efficient global shipping with secure packaging and timely deliveries.' },
  { icon: <FiPackage />, title: 'Consistent Supply Chain', desc: 'Scalable production capable of handling both small and bulk export orders.' },
  { icon: <FiDollarSign />, title: 'Competitive Global Pricing', desc: 'Excellent value without compromising product quality.' },
  { icon: <FiHeadphones />, title: 'Dedicated Customer Support', desc: 'Responsive assistance from inquiry through delivery.' }
];

const STATS = [
  { target: 100, suffix: '%', label: 'ISO Compliant' },
  { target: 24, suffix: '/7', label: 'Customer Support' },
  { target: 50, suffix: '+', label: 'Worldwide Export Ready' },
  { target: 32.5, suffix: '%', label: 'High Purity Urea Solution' }
];

const TRUST_STATEMENTS = [
  'Consistent Product Quality',
  'Reliable Documentation',
  'Secure Packaging',
  'Transparent Communication',
  'Timely Deliveries',
  'Professional Export Support'
];

const CERTIFICATES = [
  { title: 'ISO 22241', desc: 'Internationally recognized standard for Diesel Exhaust Fluid.' },
  { title: 'Export Ready', desc: 'Fully compliant with international shipping regulations.' },
  { title: 'Quality Tested', desc: 'Every batch undergoes rigorous laboratory testing.' },
  { title: 'Environment Friendly', desc: 'Dramatically reduces NOx emissions for a greener planet.' }
];

// --- HELPER COMPONENTS ---

const AnimatedCounter = ({ target, suffix, label }: { target: number, suffix: string, label: string }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [hasStarted, target]);

  const displayCount = target % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <div className="stat-card glass-panel" ref={counterRef}>
      <h3 className="stat-number">
        {displayCount}{suffix}
      </h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

// --- MAIN COMPONENT ---

export default function WhyChooseUs() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="wcu-page">
      {/* Ambient Background Blob Layer */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* SECTION 1: HERO (Structured exactly like About Hero) */}
      <section className="wcu-hero reveal">
        <div className="wcu-hero__overlay" />
        <div className="wcu-hero__container">
          <div className="wcu-hero__grid">
            
            {/* Hero Left Content */}
            <div className="wcu-hero__content">
              <span className="wcu-hero__badge">Global Export Leader</span>
              <h1 className="wcu-hero__title">
                Why Choose <br />
                <span className="text-gradient">MR FORTUNE TRADE?</span>
              </h1>
              <p className="wcu-hero__description">
                Trusted by international businesses seeking reliable AdBlue® (DEF) supply chains engineered on chemical purity, ISO certification, and logistics excellence.
              </p>
              <div className="wcu-hero__actions">
                <Link to="/contact" className="btn-primary glow-btn">
                  Request a Quote <FiArrowRight className="btn-icon" />
                </Link>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="wcu-hero__visual">
              <div className="wcu-hero__logo-wrapper">
                <img 
                  src={logo}
                  alt="MR Fortune Trade / Velvex Logo" 
                  className="wcu-hero__logo-img" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: OUR ADVANTAGES */}
      <section className="wcu-section light-section">
        <div className="wcu-container">
          <h2 className="section-title light-title reveal">Our Advantages</h2>
          <div className="advantages-grid">
            {ADVANTAGES.map((adv, idx) => (
              <article 
                key={idx} 
                className="advantage-card light-card reveal" 
                style={{ '--delay': `${idx * 0.1}s` } as React.CSSProperties}
              >
                <div className="adv-icon">{adv.icon}</div>
                <h3 className="adv-title">{adv.title}</h3>
                <p className="adv-desc">{adv.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: NUMBERS THAT MATTER */}
      <section className="wcu-container wcu-section stats-section">
        <h2 className="section-title reveal">Numbers That Matter</h2>
        <div className="stats-grid reveal">
          {STATS.map((stat, idx) => (
            <AnimatedCounter key={idx} target={stat.target} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      {/* SECTION 4: WHY BUYERS TRUST US */}
      <section className="wcu-section light-section trust-section">
        <div className="wcu-container">
          <h2 className="section-title light-title reveal">Why Buyers Trust Us</h2>
          <div className="trust-grid">
            {TRUST_STATEMENTS.map((statement, idx) => (
              <div key={idx} className="trust-card light-card reveal" style={{ '--delay': `${idx * 0.1}s` } as React.CSSProperties}>
                <FiTarget className="trust-icon" />
                <h4 className="trust-text">{statement}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CERTIFICATES & COMPLIANCE */}
      <section className="wcu-container wcu-section">
        <h2 className="section-title reveal">Certificates & Compliance</h2>
        <div className="certificates-grid">
          {CERTIFICATES.map((cert, idx) => (
            <div key={idx} className="certificate-card glass-panel reveal" style={{ '--delay': `${idx * 0.15}s` } as React.CSSProperties}>
              <div className="cert-front">
                <FiAward className="cert-icon" />
                <h3 className="cert-title">{cert.title}</h3>
              </div>
              <div className="cert-overlay">
                <p className="cert-desc">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="wcu-section wcu-container cta-section reveal">
        <div className="cta-glass glass-panel">
          <div className="cta-bg-elements">
            <FiGlobe className="bg-globe" />
            <div className="glowing-particle p1"></div>
            <div className="glowing-particle p2"></div>
            <div className="glowing-particle p3"></div>
          </div>
          <div className="cta-content">
            <h2>Partner with a Trusted Global AdBlue® Supplier</h2>
            <p>
              Whether you're a distributor, fleet operator, industrial buyer, or international importer, 
              MR Fortune Trade delivers premium AdBlue® backed by consistent quality and dependable export services.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary glow-btn">Request a Quote</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}