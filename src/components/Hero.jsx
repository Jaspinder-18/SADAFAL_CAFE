import React from 'react';
import { MapPin, ArrowRight, Utensils, HeartHandshake, Sparkles, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero() {
  return (
    <header
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url("${RESTAURANT_INFO.images.heroBg}")`,
      }}
    >
      <div className="hero-overlay" />

      <div className="container hero-content">
        {/* Location Label Badge */}
        <div className="hero-badge">
          <MapPin size={15} color="var(--gold-primary)" />
          <span>{RESTAURANT_INFO.locationBadge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Good Food. <span className="gold-text">Great Moments.</span>
        </h1>

        {/* Subheading */}
        <p className="hero-subheading">
          {RESTAURANT_INFO.subheading}
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">
            <Utensils size={18} />
            <span>Explore Our Menu</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Contact Us</span>
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Core Attributes */}
        <div className="hero-features">
          <div className="hero-feature-item">
            <Sparkles size={16} />
            <span>Multi-Cuisine Delights</span>
          </div>
          <div className="hero-feature-item">
            <div className="veg-indicator">
              <div className="veg-indicator-dot" />
            </div>
            <span>100% Pure Vegetarian</span>
          </div>
          <div className="hero-feature-item">
            <HeartHandshake size={16} />
            <span>Family Friendly Dining</span>
          </div>
        </div>
      </div>
    </header>
  );
}
