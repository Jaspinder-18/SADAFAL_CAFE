import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import Lightbox from './Lightbox';
import { Eye } from 'lucide-react';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--cream-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Visual Moments</div>
          <h2 className="section-title">Our Visual Gallery</h2>
          <p className="section-subtitle">
            A glimpse into the freshly crafted dishes and inviting dining atmosphere at Sadafal Cafe & Dining.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View photo of ${item.title}`}
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  if (item.fallbackUrl) {
                    e.target.onerror = null;
                    e.target.src = item.fallbackUrl;
                  }
                }}
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-cat">{item.category}</span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span className="gallery-item-title">{item.title}</span>
                  <Eye size={18} color="var(--gold-primary)" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <Lightbox
            items={GALLERY_ITEMS}
            currentIndex={currentIndex}
            onClose={closeLightbox}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </section>
  );
}
