import React from 'react';
import { Utensils, Users, Award, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function About() {
  const { about } = RESTAURANT_INFO;

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--cream-base)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Visual Image with Frame */}
          <div className="about-image-wrapper">
            <img
              src={RESTAURANT_INFO.images.aboutDining}
              alt="Dining Experience at Sadafal Cafe & Dining"
              className="about-image"
              loading="lazy"
            />
            <div className="about-badge">
              <span>SADAFAL DINING</span>
            </div>
          </div>

          {/* Right: Authentic Story & Highlights */}
          <div className="about-content">
            <div className="section-eyebrow">About Sadafal</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              {about.heading}
            </h2>

            <p className="about-description">
              {about.description}
            </p>

            {/* Three Structured Highlights */}
            <div className="about-highlights">
              {about.highlights.map((h) => (
                <div key={h.id} className="highlight-card">
                  <div className="highlight-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="highlight-title">{h.title}</h3>
                  <p className="highlight-desc">{h.description}</p>
                </div>
              ))}
            </div>

            <div>
              <a href="#menu" className="btn btn-outline-green">
                View Our Complete Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
