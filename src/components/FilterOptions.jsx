import React from 'react';

const FilterOptions = ({ filterByType, filterBySize, filterByUsage }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
          <select
            id="type"
            onChange={filterByType}
            className="block w-full border border-gray-300 rounded-md p-2">
            <option value="">All Types</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="size" className="block text-gray-700 font-bold mb-2">Size</label>
          <select
            id="size"
            onChange={filterBySize}
            className="block w-full border border-gray-300 rounded-md p-2">
            <option value="">All Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="usage" className="block text-gray-700 font-bold mb-2">Usage</label>
          <select
            id="usage"
            onChange={filterByUsage}
            className="block w-full border border-gray-300 rounded-md p-2">
            <option value="">All Usages</option>
            <option value="walls">Walls</option>
            <option value="flooring">Flooring</option>
            <option value="decorative">Decorative</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
