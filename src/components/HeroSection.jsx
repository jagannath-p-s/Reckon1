import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import heroImage1 from '../assets/hero_courosel1.webp';
import heroImage2 from '../assets/hero_courosel2.webp';
import heroImage3 from '../assets/hero_courosel3.jpeg';
import heroImage4 from '../assets/hero_courosel4.jpeg';
import heroImage5 from '../assets/hero_courosel5.jpeg';


const images = [heroImage1, heroImage2, heroImage3 ,heroImage4,heroImage5];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="bg-black bg-opacity-50 h-full flex items-center">
        <div className="container mx-auto text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Laterite Stone Manufacturing</h1>
          <p className="text-lg md:text-2xl mb-8">
            We specialize in the production of high-quality laterite stones for houses, walls, and decorative purposes.
          </p>
          <Link
            to="overview"
            smooth={true}
            duration={500}
            className="bg-dark-orange text-white py-2 px-4 rounded hover:bg-orange-200 transition cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
