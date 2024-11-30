"use client"; // This marks the component as a client component

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-100 shadow-md py-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-semibold text-gray-800">
          {/* Add logo or site name here */}
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Navigation Links (Mobile vs Desktop) */}
        <div className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            href="/Services"
            className={`text-gray-600 hover:text-gray-800 ${pathname === '/Services' ? 'font-bold text-gray-800' : ''}`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-gray-600 hover:text-gray-800 ${pathname === '/about' ? 'font-bold text-gray-800' : ''}`}
          >
            About
          </Link>
          <Link
            href="/Contact"
            className={`text-gray-600 hover:text-gray-800 ${pathname === '/Contact' ? 'font-bold text-gray-800' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} px-4 py-2 space-y-4`}>
        <Link
          href="/Services"
          className={`text-gray-600 hover:text-gray-800 ${pathname === '/Services' ? 'font-bold text-gray-800' : ''}`}
        >
          Services
        </Link>
        <Link
          href="/about"
          className={`text-gray-600 hover:text-gray-800 ${pathname === '/about' ? 'font-bold text-gray-800' : ''}`}
        >
          About
        </Link>
        <Link
          href="/Contact"
          className={`text-gray-600 hover:text-gray-800 ${pathname === '/Contact' ? 'font-bold text-gray-800' : ''}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
