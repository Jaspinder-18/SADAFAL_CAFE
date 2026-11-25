import React from 'react';
import { UtensilsCrossed, Clock, Users, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

const iconComponents = {
  UtensilsCrossed: UtensilsCrossed,
  Clock: Clock,
  Users: Users,
  MapPin: MapPin,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = RESTAURANT_INFO;

  return (
    <section id="why-us" className="section-padding section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Our Distinctive Hallmarks</div>
          <h2 className="section-title">Why Choose Sadafal Cafe & Dining</h2>
          <p className="section-subtitle">
            Thoughtfully prepared cuisine, welcoming spaces, and wholesome flavours for every dining occasion.
          </p>
        </div>

        <div className="features-grid">
          {whyChooseUs.map((feature) => {
            const Icon = iconComponents[feature.icon] || UtensilsCrossed;
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
