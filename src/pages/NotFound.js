import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>404 - Page Not Found | Neon Gaming</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-[120px] md:text-[180px] font-orbitron font-bold leading-none">
              <span className="neon-text-blue">4</span>
              <span className="neon-text-pink">0</span>
              <span className="neon-text-blue">4</span>
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
            Page Not Found
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button 
                className="w-full md:w-auto bg-[var(--neon-blue)] text-black font-orbitron font-medium py-3 px-8 rounded-md hover:bg-[var(--neon-blue)]/90 transition-colors duration-300 neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Return Home
              </motion.button>
            </Link>
            
            <Link to="/games">
              <motion.button 
                className="w-full md:w-auto bg-transparent border border-[var(--neon-pink)] text-[var(--neon-pink)] font-orbitron font-medium py-3 px-8 rounded-md hover:bg-[var(--neon-pink)]/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Browse Games
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        {/* Animated glitch elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute w-[2px] h-[30vh] bg-[var(--neon-blue)]"
            style={{ left: '30%', top: '20%' }}
            animate={{ 
              height: ['30vh', '32vh', '30vh'],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute w-[1px] h-[20vh] bg-[var(--neon-pink)]"
            style={{ left: '70%', top: '40%' }}
            animate={{ 
              height: ['20vh', '22vh', '20vh'],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute h-[3px] w-[30vw] bg-[var(--neon-green)]"
            style={{ left: '50%', top: '70%', translateX: '-50%' }}
            animate={{ 
              width: ['30vw', '33vw', '30vw'],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
