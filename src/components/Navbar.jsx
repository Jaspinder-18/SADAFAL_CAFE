import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Clock, MapPin, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="navbar-wrapper">
      {/* Top Notification & Quick Info Bar */}
      <div className="top-notice-bar">
        <span>
          <MapPin size={13} /> Near OBC Bank, Nansa Gate, Nawalgarh
        </span>
        <span>
          <Clock size={13} /> {RESTAURANT_INFO.timing.display} (Provisional)
        </span>
        <span>
          <Phone size={13} /> {RESTAURANT_INFO.contact.phone}
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" onClick={closeMobileMenu}>
            <div className="brand-symbol">S</div>
            <div className="brand-text">
              <span className="brand-title">
                SADA<span>FAL</span>
              </span>
              <span className="brand-tagline">Cafe & Dining</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="nav-cta">
            <a href="#reservation" className="btn btn-primary btn-sm">
              <Calendar size={15} /> Book a Table
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer Menu */}
      <aside className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="nav-brand">
            <div className="brand-symbol">S</div>
            <div className="brand-text">
              <span className="brand-title">
                SADA<span>FAL</span>
              </span>
              <span className="brand-tagline">Cafe & Dining</span>
            </div>
          </div>
          <button
            className="drawer-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                <span>{link.label}</span>
                <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem' }}>→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href="#reservation"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={closeMobileMenu}
          >
            <Calendar size={16} /> Book a Table
          </a>
          <a
            href={RESTAURANT_INFO.contact.phoneTel}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <Phone size={16} /> Call Restaurant
          </a>
        </div>
      </aside>
    </div>
  );
}
