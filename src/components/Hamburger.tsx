'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi'; // Stylish hamburger icon
import { AiOutlineClose } from 'react-icons/ai';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="fixed top-2 right-4 z-50">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <AiOutlineClose className="text-[#7c4ee4] text-3xl" />
          ) : (
            <FiMenu className="text-[#7c4ee4] text-3xl" />
          )}
        </button>
      </div>

      {/* Sidebar Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
          <a href="#blog" className="text-lg font-semibold text-gray-800 hover:text-[#7c4ee4]">
            Blog
          </a>
          <a href="#about" className="text-lg font-semibold text-gray-800 hover:text-[#7c4ee4]">
            About
          </a>
          <button className="px-4 py-2 bg-[#7c4ee4] text-white rounded-md hover:bg-purple-700">
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
