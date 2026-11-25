import React, { useState } from 'react';
import { Phone, Calendar, Clock, Users, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    // Basic Form Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Please select a dining date.');
      return;
    }
    if (!formData.time) {
      setErrorMsg('Please select a preferred time.');
      return;
    }

    // Prepare direct email enquiry link
    const subject = encodeURIComponent(`Table Enquiry - ${formData.name} (${formData.date})`);
    const body = encodeURIComponent(
      `Hello Sadafal Cafe & Dining,\n\nI would like to enquire about a table reservation:\n` +
      `- Name: ${formData.name}\n` +
      `- Phone: ${formData.phone}\n` +
      `- Date: ${formData.date}\n` +
      `- Time: ${formData.time}\n` +
      `- Guests: ${formData.guests}\n` +
      `- Special Requests: ${formData.message || 'None'}\n\n` +
      `Thank you!`
    );

    // Mark as submitted to show clear instruction
    setFormSubmitted(true);

    // Open user's mail client with the formatted enquiry
    window.location.href = `mailto:${RESTAURANT_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="reservation" className="section-padding" style={{ backgroundColor: 'var(--cream-base)' }}>
      <div className="container">
        <div className="reservation-card">
          {/* Header */}
          <div className="reservation-header">
            <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
              Plan Your Visit
            </div>
            <h2 className="section-title" style={{ color: 'var(--cream-light)', marginBottom: '8px' }}>
              Table & Dining Enquiry
            </h2>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.98rem', maxWidth: '600px', margin: '0 auto' }}>
              We recommend contacting us in advance for weekend dining or large family gatherings.
            </p>
          </div>

          {/* Body */}
          <div className="reservation-body">
            {formSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  backgroundColor: 'rgba(21, 128, 61, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--veg-green)',
                }}
              >
                <CheckCircle2 size={48} color="var(--veg-green)" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ color: 'var(--green-dark)', marginBottom: '10px' }}>
                  Enquiry Prepared Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
                  Your enquiry draft has been prepared. For immediate table reservation and instant confirmation, please call the restaurant directly.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <a href={RESTAURANT_INFO.contact.phoneTel} className="btn btn-primary">
                    <Phone size={16} /> Call {RESTAURANT_INFO.contact.phone}
                  </a>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-outline-green"
                  >
                    Edit Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit}>
                {errorMsg && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      backgroundColor: '#fef2f2',
                      border: '1px solid #f87171',
                      borderRadius: 'var(--radius-sm)',
                      color: '#b91c1c',
                      fontSize: '0.9rem',
                      marginBottom: '20px',
                    }}
                  >
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="reservation-form-grid">
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="res-name">
                      Full Name *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Sharma"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="res-phone">
                      Phone Number *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="res-date">
                      Preferred Date *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Time */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="res-time">
                      Preferred Time *
                    </label>
                    <input
                      id="res-time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Guests */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="res-guests">
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3-4">3 to 4 Persons</option>
                      <option value="5-8">5 to 8 Persons</option>
                      <option value="8+">Large Group (8+ Persons)</option>
                    </select>
                  </div>

                  {/* Provisional note */}
                  <div className="form-group">
                    <label className="form-label">Dining Hours</label>
                    <div
                      style={{
                        padding: '12px 16px',
                        backgroundColor: 'var(--cream-base)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        border: '1.5px solid #dcd7cb',
                      }}
                    >
                      {RESTAURANT_INFO.timing.display} (Provisional)
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="res-message">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      id="res-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any seating preference, celebration details, or dietary requirements..."
                      className="form-textarea"
                    />
                  </div>
                </div>

                <div className="reservation-actions">
                  <button type="submit" className="btn btn-primary">
                    <Send size={16} /> Send Email Enquiry
                  </button>

                  <a href={RESTAURANT_INFO.contact.phoneTel} className="btn btn-outline-green">
                    <Phone size={16} /> Call to Reserve Directly
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
