import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import StoneItem from './components/StoneItem';
import FilterOptions from './components/FilterOptions';
import InquiryForm from './components/InquiryForm';
import ResponsiveImageGallery from './components/ResponsiveImageGallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  const galleryImages = [
    '/path-to-image1.jpg',
    '/path-to-image2.jpg',
    '/path-to-image3.jpg',
    '/path-to-image4.jpg',
    // Add more image paths as needed
  ];

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto p-4">
        <OverviewSection />
        <ResponsiveImageGallery images={galleryImages} />
        <ContactInfo />
        {/* Other components for the Home Page */}
      </div>
    </div>
  );
};

const CatalogPage = () => {
  const [stones, setStones] = useState([
    { id: 1, image: '/path-to-image.jpg', title: 'Stone 1', dimensions: '30x30x5 cm', usage: 'walls', type: 'type1', size: 'small' },
    { id: 2, image: '/path-to-image.jpg', title: 'Stone 2', dimensions: '40x40x5 cm', usage: 'flooring', type: 'type2', size: 'medium' },
    { id: 3, image: '/path-to-image.jpg', title: 'Stone 3', dimensions: '50x50x5 cm', usage: 'decorative', type: 'type3', size: 'large' },
    // Add more stone objects as needed
  ]);

  const [filteredStones, setFilteredStones] = useState(stones);

  const filterByType = (e) => {
    const type = e.target.value;
    setFilteredStones(
      stones.filter(stone => type === '' || stone.type === type)
    );
  };

  const filterBySize = (e) => {
    const size = e.target.value;
    setFilteredStones(
      stones.filter(stone => size === '' || stone.size === size)
    );
  };

  const filterByUsage = (e) => {
    const usage = e.target.value;
    setFilteredStones(
      stones.filter(stone => usage === '' || stone.usage === usage)
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Catalog</h1>
      <FilterOptions
        filterByType={filterByType}
        filterBySize={filterBySize}
        filterByUsage={filterByUsage}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStones.map(stone => (
          <StoneItem
            key={stone.id}
            image={stone.image}
            title={stone.title}
            dimensions={stone.dimensions}
            usage={stone.usage}
          />
        ))}
      </div>
      <InquiryForm />
    </div>
  );
};

const ContactPage = () => (
  <div className="container mx-auto p-4">
    <ContactInfo />
    {/* Other components for the Contact Page */}
  </div>
);

export default App;