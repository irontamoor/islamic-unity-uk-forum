
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/coming-soon' },
    { name: 'Our Work', href: '/coming-soon' },
    { name: 'Get Involved', href: '/coming-soon' },
    { name: 'Resources', href: '/coming-soon' },
    { name: 'Contact', href: '/coming-soon' },
  ];

  const handleNavClick = (href: string) => {
    if (href === '/') {
      // Stay on homepage
      return;
    }
    navigate('/coming-soon');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 shadow-2xl fixed w-full top-0 z-50 border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif text-amber-400">UK Islamic Forum</h1>
              <p className="text-sm text-slate-300 font-light">Unity • Compassion • Service</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-amber-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-700">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-300 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
