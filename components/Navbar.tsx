import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={scrollToTop} className="flex flex-col leading-none group cursor-pointer">
          <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter text-chocolate">
            Zegel<span className="text-butterscotch">.</span>
          </span>
          <span className="text-[0.5rem] md:text-[0.6rem] font-sans tracking-[0.2em] text-gray-500 uppercase group-hover:text-chocolate transition-colors">
            by Uddis
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-chocolate transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chocolate transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
           <a
            href="#contact"
            className="px-5 py-2.5 bg-chocolate text-white text-sm font-semibold rounded-full hover:bg-opacity-90 transition-transform active:scale-95 shadow-lg"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-chocolate p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-cream border-t border-gray-100 absolute w-full shadow-xl"
        >
          <div className="flex flex-col p-6 space-y-6 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif font-medium text-chocolate"
              >
                {link.name}
              </a>
            ))}
             <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs px-5 py-4 bg-chocolate text-white text-center font-semibold rounded-xl shadow-md"
            >
              Enquire Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;