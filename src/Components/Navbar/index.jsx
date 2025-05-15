import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar({ scrollToMenu }) {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="z-50 fixed top-0 left-0 right-0 backdrop-blur bg-[rgba(255,255,255,0.6)] h-[80px] w-full border-b-2 border-[rgb(243,255,207)]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isHidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.34, 1.09, 0.64, 1] }}
      >
        <nav className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-5 h-full">
          <Link to="/">
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-black">Patty</h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex gap-8 font-medium text-base">
  <Link to='/menu'  onClick={() => setIsMobileMenuOpen(false)}> <li>
                Menu
              </li></Link>
                            <Link to="/blog"><li className="hover:underline cursor-pointer">News</li></Link>
            </ul>

            <Link to="/reservation">
              <motion.button
                whileHover={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="text-white text-sm font-semibold bg-black px-5 py-2.5 rounded-full"
              >
                Book Table
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </motion.div>

      {/* Fullscreen Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center px-8"
          >
            <ul className="space-y-8 text-center text-2xl font-semibold">
             <Link to='/menu'  onClick={() => setIsMobileMenuOpen(false)}> <li>
                Menu
              </li></Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <li>News</li>
              </Link>
              <Link to="/reservation" onClick={() => setIsMobileMenuOpen(false)}>
                <li className="bg-black text-white px-6 py-3 rounded-full mt-4">Book Table</li>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
