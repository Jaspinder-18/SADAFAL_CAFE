import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Contact() {
  const { address, contact, timing, maps } = RESTAURANT_INFO;

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--cream-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Location & Inquiries</div>
          <h2 className="section-title">Visit Sadafal Cafe & Dining</h2>
          <p className="section-subtitle">
            Conveniently located near OBC Bank at Nansa Gate in historic Nawalgarh, Rajasthan.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards & Quick Action Buttons */}
          <div className="contact-info-cards">
            {/* Address Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="contact-card-title">Our Address</h3>
                <p className="contact-card-text">
                  <strong>{RESTAURANT_INFO.name}</strong>
                  <br />
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.pincode}, India
                </p>
                <div style={{ marginTop: '12px' }}>
                  <a
                    href={maps.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-green btn-sm"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="contact-card-title">Direct Contact</h3>
                <p className="contact-card-text">
                  Reach our staff directly for inquiries, takeaway details, and table reservations:
                  <br />
                  <strong style={{ fontSize: '1.05rem', color: 'var(--green-dark)' }}>
                    {contact.phone}
                  </strong>
                </p>
                <div style={{ marginTop: '12px' }}>
                  <a href={contact.phoneTel} className="btn btn-primary btn-sm">
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="contact-card-title">Email Correspondence</h3>
                <p className="contact-card-text">
                  For formal inquiries, feedback, or event gatherings:
                  <br />
                  <strong style={{ color: 'var(--green-dark)' }}>{contact.email}</strong>
                </p>
                <div style={{ marginTop: '12px' }}>
                  <a href={contact.emailMailto} className="btn btn-outline-green btn-sm">
                    <Mail size={14} /> Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="contact-card-title">Operating Hours</h3>
                <p className="contact-card-text">
                  <strong>{timing.days}:</strong> {timing.display}
                  <br />
                  <span style={{ fontSize: '0.82rem', color: 'var(--gold-dark)' }}>
                    * {timing.note}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Quick Directions */}
          <div className="map-wrapper">
            <iframe
              title="Sadafal Cafe & Dining Location Map"
              src={maps.embedUrl}
              className="map-frame"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              style={{
                padding: '16px 20px',
                backgroundColor: 'var(--green-dark)',
                color: 'var(--cream-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                  Locate us near OBC Bank, Nansa Gate
                </span>
                <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                  Nawalgarh, Rajasthan 333042
                </div>
              </div>
              <a
                href={maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={14} /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
