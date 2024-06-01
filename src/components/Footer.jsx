import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-orange text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Laterite Stone Manufacturing</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
