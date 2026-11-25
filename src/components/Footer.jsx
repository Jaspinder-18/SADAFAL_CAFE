import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUp, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Restaurant Info */}
          <div>
            <div className="nav-brand" style={{ marginBottom: '18px' }}>
              <div className="brand-symbol">S</div>
              <div className="brand-text">
                <span className="brand-title">
                  SADA<span>FAL</span>
                </span>
                <span className="brand-tagline">Cafe & Dining</span>
              </div>
            </div>
            <p
              style={{
                color: 'var(--text-light-muted)',
                fontSize: '0.92rem',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}
            >
              Discover delicious flavours and enjoy memorable dining experiences at Sadafal Cafe & Dining. Serving multi-cuisine vegetarian specialities in Nawalgarh, Rajasthan.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="veg-indicator">
                <span className="veg-indicator-dot" />
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                100% Pure Vegetarian Kitchen
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Sadafal</a>
              </li>
              <li>
                <a href="#menu">Digital Menu (15 Categories)</a>
              </li>
              <li>
                <a href="#showcase">Culinary Showcase</a>
              </li>
              <li>
                <a href="#why-us">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery">Photo Gallery</a>
              </li>
              <li>
                <a href="#reservation">Table Enquiry</a>
              </li>
              <li>
                <a href="#contact">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  Near OBC Bank, Nansa Gate, Nawalgarh, Rajasthan 333042
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <a href={RESTAURANT_INFO.contact.phoneTel}>
                  {RESTAURANT_INFO.contact.phone}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <a href={RESTAURANT_INFO.contact.emailMailto}>
                  {RESTAURANT_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Notes */}
          <div>
            <h4 className="footer-col-title">Dining Hours</h4>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
              <Clock size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <div style={{ color: 'var(--cream-light)', fontWeight: '600' }}>
                  {RESTAURANT_INFO.timing.display}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
                  Monday through Sunday
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', lineHeight: '1.6' }}>
              * {RESTAURANT_INFO.timing.note}
            </p>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              &copy; {currentYear} <strong>Sadafal Cafe & Dining</strong>. All rights reserved. Nawalgarh, Rajasthan.
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
              Good Food &bull; Great Moments
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
