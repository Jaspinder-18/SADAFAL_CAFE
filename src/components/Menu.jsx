import React, { useState, useMemo, useEffect } from 'react';
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
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
  Layers,
  Check,
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MENU_NOTE } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantData';

const iconMap = {
  Utensils,
  Boxes,
  Sun,
  Soup,
  Flame,
  CookingPot,
  Bowl: Sparkles,
  Wheat: Sparkles,
  CircleDot,
  Pizza,
  Sandwich,
  Sparkles,
  Cookie,
  Disc,
  Salad,
  Coffee,
};

export default function Menu({ selectedCategory, onSelectCategory }) {
  // Default to 'combos' or external selection to avoid overwhelming 159-item initial scroll
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'combos');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  
  // Track open accordions when in 'all' view
  const [openAccordions, setOpenAccordions] = useState({
    combos: true,
    breakfast: true,
    starters: true,
  });

  useEffect(() => {
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

  const toggleAccordion = (catId) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const expandAllAccordions = () => {
    const allOpen = {};
    MENU_CATEGORIES.forEach((c) => {
      if (c.id !== 'all') allOpen[c.id] = true;
    });
    setOpenAccordions(allOpen);
  };

  const collapseAllAccordions = () => {
    setOpenAccordions({});
  };

  // Group items by category
  const categoriesWithItems = useMemo(() => {
    return MENU_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
      const items = MENU_ITEMS.filter((item) => {
        const matchesCategory = item.category === cat.id;
        const matchesSearch =
          !searchQuery ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      return {
        ...cat,
        items,
      };
    });
  }, [searchQuery]);

  // Filtered items when a specific category is active
  const activeCategoryItems = useMemo(() => {
    if (activeCategory === 'all') {
      return MENU_ITEMS.filter((item) =>
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
            Explore 15 distinct categories of authentic vegetarian cuisine prepared fresh to order.
          </p>
        </div>

        {/* Menu Controls Container */}
        <div className="menu-controls">
          {/* Live Search Input */}
          <div className="menu-search-wrapper">
            <Search className="menu-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search dishes (e.g. Paneer, Dosa, Hakka, Pizza, Shake)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search dishes"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
              >
                Clear
              </button>
            )}
          </div>

          {/* Mobile Category Quick Selector Dropdown */}
          <div className="mobile-category-select-wrapper">
            <label htmlFor="mobile-cat-select" className="mobile-cat-label">
              <Layers size={16} /> Jump to Category:
            </label>
            <select
              id="mobile-cat-select"
              value={activeCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="mobile-category-dropdown"
            >
              <option value="all">⭐ All Categories (Grouped View) ({MENU_ITEMS.length})</option>
              {MENU_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({getCategoryCount(cat.id)} dishes)
                </option>
              ))}
            </select>
          </div>

          {/* Desktop & Tablet Category Tabs */}
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
                    <IconComponent size={15} />
                    <span>{cat.name}</span>
                    <span className="tab-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toolbar: View Switcher (Grid vs List) & Counter */}
          <div className="menu-toolbar">
            <div className="menu-toolbar-left">
              <span className="menu-counter-badge">
                {activeCategory === 'all'
                  ? `Browsing All Categories (${activeCategoryItems.length} dishes)`
                  : `${MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name || ''} (${activeCategoryItems.length} dishes)`}
              </span>
              <span className="pure-veg-tag">
                <span className="veg-indicator">
                  <span className="veg-indicator-dot" />
                </span>
                <span>100% Pure Veg</span>
              </span>
            </div>

            <div className="menu-toolbar-right">
              {activeCategory === 'all' && !searchQuery && (
                <div className="accordion-controls">
                  <button onClick={expandAllAccordions} className="btn-text-sm">
                    Expand All
                  </button>
                  <span style={{ opacity: 0.4 }}>|</span>
                  <button onClick={collapseAllAccordions} className="btn-text-sm">
                    Collapse All
                  </button>
                </div>
              )}

              {/* Grid / List View Toggle */}
              <div className="view-mode-toggle">
                <button
                  className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid View"
                  title="Grid View (Compact Cards)"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List View"
                  title="List View (Cafe Menu Rows)"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Note on Pricing & Direct Details */}
        <div className="menu-notice-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertCircle size={20} color="var(--gold-dark)" style={{ flexShrink: 0 }} />
            <div>
              <strong>Note:</strong> {MENU_NOTE}
            </div>
          </div>
          <a
            href={RESTAURANT_INFO.contact.phoneTel}
            className="btn btn-outline-green btn-sm"
            style={{ flexShrink: 0 }}
          >
            <Phone size={13} /> Call for Current Pricing
          </a>
        </div>

        {/* =========================================================
            MENU CONTENT RENDERING:
            Case A: Specific Category Active or Search Query Active
            Case B: 'All' Categories (Render as Elegant Accordions)
           ========================================================= */}
        {activeCategory !== 'all' || searchQuery ? (
          /* Render single category or active search results */
          activeCategoryItems.length > 0 ? (
            <div className={viewMode === 'grid' ? 'menu-grid-compact' : 'menu-list-view'}>
              {activeCategoryItems.map((dish) => (
                <div
                  key={dish.id}
                  className={viewMode === 'grid' ? 'menu-card-compact' : 'menu-list-row'}
                >
                  <div className="dish-info-left">
                    <div className="veg-indicator" title="Pure Vegetarian">
                      <div className="veg-indicator-dot" />
                    </div>
                    <div>
                      <h4 className="dish-title-compact">{dish.name}</h4>
                      {searchQuery && (
                        <span className="dish-cat-badge">
                          {dish.category.replace('-', ' ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="dish-badge-subtle">Freshly Made</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="menu-empty-state">
              <Search size={36} color="var(--gold-dark)" />
              <h3>No dishes found matching "{searchQuery}"</h3>
              <p>Try searching for a different item or switch category tabs above.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('combos');
                }}
                className="btn btn-primary btn-sm"
              >
                Reset Search
              </button>
            </div>
          )
        ) : (
          /* Grouped Accordions when 'All' is selected */
          <div className="menu-accordions-container">
            {categoriesWithItems.map((catGroup) => {
              const isOpen = !!openAccordions[catGroup.id];
              const IconComp = iconMap[catGroup.icon] || Utensils;

              return (
                <div key={catGroup.id} className="menu-accordion-card">
                  {/* Accordion Header */}
                  <div
                    className={`accordion-header ${isOpen ? 'open' : ''}`}
                    onClick={() => toggleAccordion(catGroup.id)}
                  >
                    <div className="accordion-header-left">
                      <div className="accordion-icon-box">
                        <IconComp size={18} />
                      </div>
                      <div>
                        <h3 className="accordion-title">{catGroup.name}</h3>
                        <span className="accordion-subcount">
                          {catGroup.items.length} dishes available
                        </span>
                      </div>
                    </div>

                    <div className="accordion-header-right">
                      <button
                        className="accordion-jump-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryChange(catGroup.id);
                        }}
                        title={`Filter only ${catGroup.name}`}
                      >
                        View Only
                      </button>
                      <div className="accordion-chevron">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                  </div>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="accordion-body">
                      <div className={viewMode === 'grid' ? 'menu-grid-compact' : 'menu-list-view'}>
                        {catGroup.items.map((dish) => (
                          <div
                            key={dish.id}
                            className={viewMode === 'grid' ? 'menu-card-compact' : 'menu-list-row'}
                          >
                            <div className="dish-info-left">
                              <div className="veg-indicator" title="Pure Vegetarian">
                                <div className="veg-indicator-dot" />
                              </div>
                              <h4 className="dish-title-compact">{dish.name}</h4>
                            </div>
                            <span className="dish-badge-subtle">Freshly Made</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
