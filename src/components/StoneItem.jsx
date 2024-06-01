import React from 'react';

const StoneItem = ({ image, title, dimensions, usage }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2"><strong>Dimensions:</strong> {dimensions}</p>
        <p className="text-gray-700"><strong>Usage:</strong> {usage}</p>
      </div>
    </div>
  );
};

export default StoneItem;
