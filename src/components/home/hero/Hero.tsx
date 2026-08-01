// src/components/home/Hero/Hero.tsx
import React from 'react';
import { Link } from 'react-router';
import {
  FiArrowRight,
  FiShield,
  FiGlobe,
  FiDroplet,
  FiCheckCircle,
} from 'react-icons/fi';
import './Hero.css';

// Import brand logo from assets
import brandLogo from '../../../assets/icons/ChatGPT Image May 30, 2026, 01_29_56 PM (1).png';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Top Visual Separator Line */}
      <div className="hero__top-separator" />

      {/* Dark Gradient Overlay */}
      <div className="hero__overlay" />

      <div className="hero__container">
        {/* Main Split Grid */}
        <div className="hero__grid">
          
          {/* ========================================================
              LEFT COLUMN: Enlarged Featured Brand Logo
             ======================================================== */}
          <div className="hero__logo-col">
            <div className="hero__logo-card">
              <img
                src={brandLogo}
                alt="MR Fortune Trade Pvt. Ltd."
                className="hero__logo-large"
              />
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Content Block (Company Header to CTAs)
             ======================================================== */}
          <div className="hero__content-col">
            {/* Company Name Header */}
            

            {/* Headline */}
            <h1 className="hero__title">
              International Supply of <br />
              <span className="hero__title-highlight">High-Purity AdBlue®</span> & Global Trade
            </h1>

            {/* Description */}
            <p className="hero__description">
              Connecting global markets with premium grade automotive urea solutions (AUS 32 / DEF), optimized freight logistics, and direct export pricing.
            </p>

            {/* Action CTAs */}
            <div className="hero__actions">
              <Link to="/quote" className="btn-hero-primary">
                <span>Request Export Quote</span>
                <FiArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn-hero-secondary">
                <FiDroplet size={18} />
                <span>Explore AdBlue Specs</span>
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================================
            BOTTOM STRIP: Trust Indicators
           ======================================================== */}
        <div className="hero__trust-bar">
          <div className="hero__trust-item">
            <FiCheckCircle className="hero__trust-icon" />
            <div>
              <strong>ISO 22241 Quality</strong>
              <span>Lab-tested purity guarantees</span>
            </div>
          </div>

          <div className="hero__trust-divider" />

          <div className="hero__trust-item">
            <FiGlobe className="hero__trust-icon" />
            <div>
              <strong>Middle East & Global</strong>
              <span>Dependable port logistics</span>
            </div>
          </div>

          <div className="hero__trust-divider" />

          <div className="hero__trust-item">
            <FiShield className="hero__trust-icon" />
            <div>
              <strong>Export-Ready Packaging</strong>
              <span>IBC Totes, Drums & Flexitanks</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;