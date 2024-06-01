import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark-orange p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Laterite Stone Manufacturing
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-orange-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog" className="text-white hover:text-orange-200">
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-orange-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
