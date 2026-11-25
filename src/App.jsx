import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FoodShowcase from './components/FoodShowcase';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FoodShowcase onSelectCategory={handleSelectCategory} />
        <Menu
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <WhyChooseUs />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
