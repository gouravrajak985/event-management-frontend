import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary-900/80 backdrop-blur-sm border-b border-primary-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">
                EventHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/home" className="text-gray-300 hover:text-neon-cyan transition-colors">
              Events
            </Link>
            <Link to="/communities" className="text-gray-300 hover:text-neon-cyan transition-colors">
              Communities
            </Link>
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
            <Link to="/signup" className="btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-800 border-b border-primary-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/home"
              className="block px-3 py-2 text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Events
            </Link>
            <Link
              to="/communities"
              className="block px-3 py-2 text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Communities
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;