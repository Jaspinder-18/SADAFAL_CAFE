import React, { useState, useMemo } from 'react';
import {
  Search,
  AlertCircle,
  Phone,
  Utensils,
  Sparkles,
  Boxes,
  Sun,
  Soup,
  Flame,
  CookingPot,
  CircleDot,
  Pizza,
  Sandwich,
  Cookie,
  Disc,
  Salad,
  Coffee,
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MENU_NOTE } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantData';

// Map category icons to Lucide components
const iconMap = {
  Utensils: Utensils,
  Boxes: Boxes,
  Sun: Sun,
  Soup: Soup,
  Flame: Flame,
  CookingPot: CookingPot,
  Bowl: Sparkles,
  Wheat: Sparkles,
  CircleDot: CircleDot,
  Pizza: Pizza,
  Sandwich: Sandwich,
  Sparkles: Sparkles,
  Cookie: Cookie,
  Disc: Disc,
  Salad: Salad,
  Coffee: Coffee,
};

export default function Menu({ selectedCategory, onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle external category changes (e.g. from Food Showcase clicks)
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  // Filter items based on active category & search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Compute item count per category for tabs
  const getCategoryCount = (catId) => {
    if (catId === 'all') return MENU_ITEMS.length;
    return MENU_ITEMS.filter((i) => i.category === catId).length;
  };

  return (
    <section id="menu" className="section-padding" style={{ backgroundColor: 'var(--cream-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Authentic Selections</div>
          <h2 className="section-title">Our Digital Menu</h2>
          <p className="section-subtitle">
            Explore our wide range of dishes across North Indian, South Indian, Chinese, Italian, Street Food & Beverages.
          </p>
        </div>

        {/* Menu Controls: Search Bar */}
        <div className="menu-controls">
          <div className="menu-search-wrapper">
            <Search className="menu-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search dishes (e.g. Paneer, Dosa, Hakka Noodles, Pizza, Shake)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search dishes"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-tabs-container">
            <div className="category-tabs">
              {MENU_CATEGORIES.map((cat) => {
                const IconComponent = iconMap[cat.icon] || Utensils;
                const isActive = activeCategory === cat.id;
                const count = getCategoryCount(cat.id);

                return (
                  <button
                    key={cat.id}
                    className={`category-tab ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    <IconComponent size={16} />
                    <span>{cat.name}</span>
                    <span className="tab-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Prominent Menu Accuracy & Availability Note */}
        <div className="menu-notice-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertCircle size={22} color="var(--gold-dark)" style={{ flexShrink: 0 }} />
            <div>
              <strong>Note on Menu & Pricing:</strong> {MENU_NOTE}
            </div>
          </div>
          <a
            href={RESTAURANT_INFO.contact.phoneTel}
            className="btn btn-outline-green btn-sm"
            style={{ flexShrink: 0 }}
          >
            <Phone size={14} /> Call for Current Details
          </a>
        </div>

        {/* Results Info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
          }}
        >
          <span>
            Showing <strong>{filteredItems.length}</strong> items
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span className="veg-indicator">
              <span className="veg-indicator-dot" />
            </span>
            <span>Pure Vegetarian</span>
          </span>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((dish) => (
              <div key={dish.id} className="menu-card">
                <div className="menu-card-left">
                  <div className="veg-indicator" title="Pure Vegetarian">
                    <div className="veg-indicator-dot" />
                  </div>
                  <div>
                    <h4 className="dish-name">{dish.name}</h4>
                    <span className="dish-category-label">
                      {dish.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <div style={{ flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--gold-dark)',
                      fontWeight: '600',
                      backgroundColor: 'rgba(212, 175, 55, 0.12)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    Freshly Prepared
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
            }}
          >
            <Search size={40} color="var(--gold-dark)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '8px', color: 'var(--green-dark)' }}>
              No dishes found matching "{searchQuery}"
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
              Try searching with another keyword or explore all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn btn-primary btn-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
