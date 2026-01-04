import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationProps {
  items?: NavigationItem[];
  logoText?: string;
  showThemeToggle?: boolean;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items = [],
  logoText = 'Faro',
  showThemeToggle = true,
  className = ''
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">{logoText}</span>
          </div>

          {/* Desktop Navigation */}
          {items.length > 0 && (
            <div className="hidden md:flex items-center space-x-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                  {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {showThemeToggle && (
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            )}
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && items.length > 0 && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
