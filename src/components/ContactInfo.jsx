import React from 'react';
import Button from './Button';

const ContactInfo = () => {
  const handleContactClick = () => {
    console.log('Contact Us button clicked');
    // Add your logic here
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg md:text-xl mb-4">
          We would love to hear from you! Reach out to us for any inquiries or to place an order.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+1 (123) 456-7890</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700">info@lateritestone.com</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-700">123 Laterite St., Stone City, SC 12345</p>
          </div>
        </div>
        <Button text="Contact Us" onClick={handleContactClick} className="mt-6" />
      </div>
    </section>
  );
};

export default ContactInfo;
