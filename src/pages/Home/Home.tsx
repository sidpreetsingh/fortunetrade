// src/pages/Home/Home.tsx
import React from 'react';
import { Hero } from '../../components/home/hero/Hero';
import { Link } from 'react-router';
import {
  FiArrowRight,
  FiDroplet,
  FiTruck,
  FiDollarSign,
  FiShield,
  FiUsers,
  FiCheckCircle,
  FiAward,
  FiPackage,
  
} from 'react-icons/fi';
import './Home.css';
import adBlueImage from '../../assets/images/Group-Shot.png';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Featured Product Section: High-Purity AdBlue® / AUS 32 */}
      <section className="home-adblue">
        <div className="home-adblue__container">
          {/* AdBlue Image Column */}
          <div className="home-adblue__image-col">
            <div className="home-adblue__image-wrapper">
              {/* ========================================================
                  IMAGE PLACEHOLDER: Replace src below with your image URL
                  e.g., src="/images/adblue-drums-ibc.jpg"
                 ======================================================== */}
              <img
                src={adBlueImage}
                alt="MR Fortune Trade AdBlue ISO 22241 Supply"
                className="home-adblue__image"
              />
              <div className="home-adblue__image-badge">
                <FiAward size={18} />
                <span>ISO 22241 Certified</span>
              </div>
            </div>
          </div>

          {/* AdBlue Information Column */}
          <div className="home-adblue__content-col">
            <div className="home-adblue__header">
              <span className="home-adblue__subtitle">
                <FiDroplet /> Flagship Product
              </span>
              <h2 className="home-adblue__title">
                Premium Grade AdBlue® / AUS 32 (DEF)
              </h2>
              <p className="home-adblue__description">
                MR Fortune Trade Pvt. Ltd. supplies ultra-pure, high-purity 32.5% automotive urea solution engineered specifically for modern Selective Catalytic Reduction (SCR) diesel engines.
              </p>
            </div>

            {/* Key Specifications & Features */}
            <div className="home-adblue__specs">
              <div className="home-adblue__spec-item">
                <FiCheckCircle className="home-adblue__spec-icon" />
                <div>
                  <strong>High Purity Standard</strong>
                  <p>Guaranteed 32.5% technical urea concentration conforming strictly to ISO 22241 & DIN 70070.</p>
                </div>
              </div>

              <div className="home-adblue__spec-item">
                <FiCheckCircle className="home-adblue__spec-icon" />
                <div>
                  <strong>SCR System Protection</strong>
                  <p>Ultra-low metal content prevents catalyst poisoning and costly downtime for fleet operations.</p>
                </div>
              </div>

              <div className="home-adblue__spec-item">
                <FiPackage className="home-adblue__spec-icon" />
                <div>
                  <strong>Flexible Export Packaging</strong>
                  <p>Export-ready in 20L Jerry Cans, 210L Drums, 1000L IBC Totes, and Bulk Flexitanks.</p>
                </div>
              </div>
            </div>

            <div className="home-adblue__actions">
              <Link to="/quote" className="btn-adblue-primary">
                <span>Request AdBlue Quote</span>
                <FiArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn-adblue-secondary">
                View Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - The 4 Pillars */}
      <section className="home-pillars">
        <div className="home-pillars__container">
          <div className="home-pillars__header">
            <span className="home-pillars__subtitle">Why Choose MR Fortune Trade</span>
            <h2 className="home-pillars__title">Built on Trust, Precision, and Partnership</h2>
            <p className="home-pillars__description">
              We eliminate friction in international commerce through competitive pricing, dependable supply chains, and an unyielding commitment to product quality.
            </p>
          </div>

          <div className="home-pillars__grid">
            <div className="home-pillar-card">
              <div className="home-pillar-card__icon">
                <FiDollarSign size={24} />
              </div>
              <h3>Competitive Pricing</h3>
              <p>
                Direct sourcing and optimized trade networks allow us to offer tier-one market prices for Middle East and international buyers.
              </p>
            </div>

            <div className="home-pillar-card">
              <div className="home-pillar-card__icon">
                <FiTruck size={24} />
              </div>
              <h3>Dependable Logistics</h3>
              <p>
                Comprehensive freight management ensuring timely ocean and land transport across Middle East ports and global destinations.
              </p>
            </div>

            <div className="home-pillar-card">
              <div className="home-pillar-card__icon">
                <FiShield size={24} />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Every export batch undergoes rigid lab testing and pre-shipment inspections to guarantee total compliance with global standards.
              </p>
            </div>

            <div className="home-pillar-card">
              <div className="home-pillar-card__icon">
                <FiUsers size={24} />
              </div>
              <h3>Customer-Focused Service</h3>
              <p>
                Tailored trade solutions, custom packaging options, and responsive account managers dedicated to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="home-cta">
        <div className="home-cta__container">
          <div className="home-cta__content">
            <h2 className="home-cta__title">Partner with MR Fortune Trade Pvt. Ltd.</h2>
            <p className="home-cta__text">
              Looking for reliable AdBlue® shipments or international trade solutions? Contact our export specialists today for quotes and technical details.
            </p>
          </div>
          <div className="home-cta__action">
            <Link to="/quote" className="home-cta__btn">
              <span>Get a Trade Quote</span>
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;