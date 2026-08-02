// src/pages/About/About.tsx
import React from 'react';
import { 
  FiGlobe, 
   
  FiCheckCircle,
  
  
} from 'react-icons/fi';
import './About.css';
import img1 from "../../assets/images/Nov-11-top-pic-5-steps-for-building-customer-trust.jpg"

export const About: React.FC = () => {
  return (
    <div className="about-page">
      
      {/* ========================================================
          1. HERO BANNER SECTION
         ======================================================== */}
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="about-hero__container">
          <span className="about-hero__badge">Global Trade Excellence</span>
          <h1 className="about-hero__title">
            Architecting Seamless <br />
            <span className="text-gradient">International Supply Chains</span>
          </h1>
          <p className="about-hero__description">
            MR Fortune Trade Pvt. Ltd. is a premier global trading enterprise specializing in ISO-certified Automotive Grade Urea (DEF / AdBlue®) and high-value export commodities across the Middle East, Asia, and worldwide markets.
          </p>
        </div>
      </section>

      {/* ========================================================
          2. COMPANY OVERVIEW & STORY (Text + Contained Grid)
         ======================================================== */}
      <section className="about-story">
        <div className="about-story__container">
          <div className="about-story__grid">
            
            {/* Left Column: Text & Credibility */}
            <div className="about-story__content">
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title">
                Bridging Continents with Uncompromising Precision
              </h2>
              <p className="about-story__p">
                Founded with a relentless commitment to trade excellence, <strong>MR Fortune Trade Pvt. Ltd.</strong> has rapidly emerged as a cornerstone in cross-border commodity export and chemical supply solutions. Headquartered in India with dedicated operations extending into the Middle East, we simplify international commerce through direct producer relationships, Tier-1 pricing models, and end-to-end logistics mastery.
              </p>
              <p className="about-story__p">
                At our core is our specialization in <strong>Automotive Grade Urea (AUS 32 / DEF)</strong>—delivering pure, ISO 22241-compliant emissions solutions to fleet operators, distributors, and industrial conglomerates who demand zero supply-chain downtime.
              </p>

              <div className="about-story__highlights">
                <div className="story-highlight-item">
                  <FiCheckCircle className="highlight-icon" />
                  <div>
                    <h4>Direct Producer Networks</h4>
                    <p>Eliminating middleman costs to pass maximum margin to our global buyers.</p>
                  </div>
                </div>
                <div className="story-highlight-item">
                  <FiCheckCircle className="highlight-icon" />
                  <div>
                    <h4>Strict Quality Controls</h4>
                    <p>Multi-stage batch testing certified against international purity standards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Image Grid Overlay */}
            <div className="about-story__visuals">
              <div className="about-story__img-wrap about-story__img-wrap--main">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Container Port Logistics" 
                />
                <div className="about-story__badge">
                  <FiGlobe size={20} />
                  <div>
                    <strong>India–Middle East</strong>
                    <span>Strategic Trade Hubs</span>
                  </div>
                </div>
              </div>

              <div className="about-story__img-wrap about-story__img-wrap--secondary">
                <img 
                  src={img1} 
                  alt="Industrial Quality Testing & Chemical Precision" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. STATS & MILESTONES COUNTER BAR
         ======================================================== */}
      <section className="about-stats">
        <div className="about-stats__container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card__number">100%</div>
              <div className="stat-card__label">ISO 22241 Compliance Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">Direct</div>
              <div className="stat-card__label">Factory Sourcing & Port Access</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">24/7</div>
              <div className="stat-card__label">Dedicated Trade Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">Global</div>
              <div className="stat-card__label">Maritime Freight Networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. VISION & MISSION (Background Image & Frosted Glass)
         ======================================================== */}
      <section className="about-vm">
        <div className="about-vm__overlay" />

        <div className="about-vm__container">
          <div className="about-vm__header">
            <span className="about-vm__tag">Strategic Purpose</span>
            <h2 className="about-vm__title">
              Driven by Purpose, Guided by <span className="text-gradient">Excellence</span>
            </h2>
          </div>

          <div className="about-vm__grid">
            
            {/* Mission Card */}
            <div className="vm-card">
              <div className="vm-card__header">
                
                <span className="vm-card__label">OUR MISSION</span>
              </div>
              <h3 className="vm-card__heading">Accelerating Global Trade Integrity</h3>
              <p className="vm-card__text">
                To empower international businesses by providing unexcelled access to ISO 22241-certified commodities, transparent direct-factory pricing, and dependable freight execution that sets new benchmarks for cross-border reliability.
              </p>
            </div>

            {/* Vision Card */}
            <div className="vm-card">
              <div className="vm-card__header">
        
                <span className="vm-card__label">OUR VISION</span>
              </div>
              <h3 className="vm-card__heading">Connecting Markets Seamlessly</h3>
              <p className="vm-card__text">
                To be universally recognized as the premier trading bridge between South Asia, the Middle East, and worldwide markets—renowned for unyielding chemical purity, ethical partnerships, and supply chain resilience.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;