import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Input from '../ui/Input';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-[var(--bg-darker)]/90 backdrop-blur-lg shadow-lg shadow-[var(--neon-blue)]/5' 
            : 'bg-white/90 backdrop-blur-lg shadow-lg shadow-[var(--neon-purple)]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-greatVibes neon-text-blue">
                Neon<span className="neon-text-pink">Gaming</span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative font-orbitron font-medium text-lg
                  transition-colors duration-300
                  hover:text-[var(--neon-blue)]
                  ${location.pathname === link.path 
                    ? 'text-[var(--neon-blue)]' 
                    : 'text-[var(--text-primary)]'
                  }
                `}
              >
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--neon-blue)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search and auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 py-1.5"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
            </form>
            <ThemeToggle />
            <Link to="/signin">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link to="/join">
              <Button size="sm">Join Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden backdrop-blur-lg ${
              theme === 'dark'
                ? 'bg-[var(--bg-darker)]/95 border-t border-white/10 shadow-lg shadow-[var(--neon-blue)]/5'
                : 'bg-white/95 border-t border-gray-200 shadow-lg shadow-[var(--neon-purple)]/5'
            }`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-1.5"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />
              </form>
              
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`
                      py-2 px-4 rounded-md font-orbitron font-medium text-lg
                      transition-colors duration-300
                      ${location.pathname === link.path 
                        ? 'bg-[var(--neon-blue)]/10 text-[var(--neon-blue)]' 
                        : 'text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-[var(--text-secondary)]">Toggle Theme</div>
                <ThemeToggle />
              </div>
              
              <div className="flex space-x-4">
                <Link to="/signin" className="flex-1">
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/join" className="flex-1">
                  <Button className="w-full">Join Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
