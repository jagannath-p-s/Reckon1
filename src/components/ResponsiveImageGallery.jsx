import React from 'react';

const ResponsiveImageGallery = ({ images }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white p-2 rounded-lg shadow-md">
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveImageGallery;
