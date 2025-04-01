import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  
  // Get overlay opacity based on theme
  const getDarkOpacity = () => theme === 'dark' ? 0.3 : 0.1;
  const getLightOpacity = () => theme === 'light' ? 0.15 : 0.05;
  
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Neon background elements - fixed position */}
      <div 
        className="fixed inset-0 z-0 transition-opacity duration-700" 
        style={{ 
          backgroundImage: 'url("/images/neon-glow-bg.svg")', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          opacity: getDarkOpacity()
        }}
      ></div>
      
      <div 
        className="fixed inset-0 z-0 transition-opacity duration-700" 
        style={{ 
          backgroundImage: 'url("/images/neon-pulse.svg")', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          opacity: getLightOpacity()
        }}
      ></div>
      
      <div 
        className="fixed bottom-0 left-0 right-0 h-screen/2 z-0 transition-opacity duration-700" 
        style={{ 
          backgroundImage: 'url("/images/neon-grid.svg")', 
          backgroundSize: 'auto', 
          backgroundRepeat: 'repeat-x', 
          backgroundPosition: 'bottom',
          opacity: theme === 'dark' ? 0.2 : 0.1
        }}
      ></div>
      
      {/* Content layers */}
      <Navbar />
      
      {/* Add padding top for fixed navbar */}
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      
      <Footer />
      
      {/* Noise overlay for texture */}
      <div className="noise-bg"></div>
    </div>
  );
};

export default Layout;
