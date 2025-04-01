import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Add padding top for fixed navbar */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <Footer />
      
      {/* Noise overlay for texture */}
      <div className="noise-bg"></div>
    </div>
  );
};

export default Layout;
