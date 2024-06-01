import React from 'react';
import Button from './Button';

const OverviewSection = () => {
  const handleLearnMoreClick = (section) => {
    console.log(`Learn More about ${section} clicked`);
    // Add your logic here
  };

  return (
    <section id="overview" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
        <p className="text-lg md:text-xl mb-4">
          At Laterite Stone Manufacturing, we pride ourselves on producing the highest quality laterite stones for various applications. Our stones are ideal for building houses, walls, and creating stunning decorative pieces.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Types of Stones</h3>
            <p>
              We offer a variety of laterite stones, each with unique characteristics suited for different construction and decorative purposes.
            </p>
            <Button text="Learn More" onClick={() => handleLearnMoreClick('Types of Stones')} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">High-Quality Manufacturing</h3>
            <p>
              Our manufacturing process ensures that each stone meets the highest standards of quality and durability.
            </p>
            <Button text="Learn More" onClick={() => handleLearnMoreClick('High-Quality Manufacturing')} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p>
              We are committed to providing exceptional customer service and ensuring that our clients are completely satisfied with our products.
            </p>
            <Button text="Learn More" onClick={() => handleLearnMoreClick('Customer Satisfaction')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
