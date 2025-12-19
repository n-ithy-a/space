import { motion } from 'motion/react';
import { Video, Menu, X, RocketIcon } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <RocketIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Space
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              Pricing
            </button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <button className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2">
              Features
            </button>
            <button className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2">
              Pricing
            </button>
            <button className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2">
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
