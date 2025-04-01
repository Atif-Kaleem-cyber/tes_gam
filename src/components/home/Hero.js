import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import NeonBorder from '../ui/NeonBorder';
import NeonText from '../ui/NeonText';
import BlinkingCursor from '../ui/BlinkingCursor';
import SocialIcons from '../ui/SocialIcons';
import GameCategories from '../ui/GameCategories';
import GamePublishers from '../ui/GamePublishers';
import { fadeIn, pulse, staggerContainer } from '../../utils/animations';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background layer with gradient */}
      <div className="absolute inset-0 bg-[var(--bg-darker)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/20 via-transparent to-[var(--neon-pink)]/20 opacity-30"></div>
      </div>
      
      {/* Grid lines for cyberpunk effect */}
      <div className="absolute inset-0" style={{ 
        backgroundSize: '40px 40px',
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        opacity: 0.2
      }}></div>
      
      {/* Floating Neon Icons */}
      <motion.img 
        src="/images/neon-controller.svg" 
        alt="Neon Controller" 
        className="absolute h-32 md:h-48 top-24 right-10 md:right-20 z-0 opacity-80"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      />
      
      <motion.img 
        src="/images/neon-circles.svg" 
        alt="Neon Circles" 
        className="absolute h-24 md:h-36 bottom-24 left-10 md:left-20 z-0 opacity-70"
        variants={pulse}
        initial="initial"
        animate="animate"
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <NeonBorder color="blue" className="p-4 md:p-6 bg-black/30 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
          <motion.img 
            src="/images/neon-logo.svg" 
            alt="Neon Gaming" 
            className="h-10 mx-auto mb-2"
            variants={pulse}
            initial="initial"
            animate="animate"
            style={{
              filter: "drop-shadow(0 0 8px var(--neon-blue)) drop-shadow(0 0 12px var(--neon-pink))",
              opacity: 0.9
            }}
          />
          
          <h1 className="font-orbitron mb-3">
            <NeonText color="blue" size="sm" className="text-lg md:text-xl lg:text-2xl" animate flicker>ENTER THE</NeonText> <br />
            <NeonText color="pink" size="sm" className="text-lg md:text-xl lg:text-2xl" animate>NEON DIMENSION</NeonText>
          </h1>
          
          <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-4 max-w-2xl mx-auto flex items-center justify-center">
            <span>Discover the latest and greatest games in our neon-lit digital arcade. Your gaming journey begins here</span>
            <BlinkingCursor color="pink" className="ml-1" />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
            <Button as={Link} to="/games" size="lg" className="px-8">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                whileHover={{ scale: 1.2 }}
                style={{ 
                  filter: "drop-shadow(0 0 4px var(--neon-blue))",
                  textShadow: "0 0 10px var(--neon-blue)"
                }}
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </motion.svg>
              Browse Games
            </Button>
            
            <Button as={Link} to="#featured" variant="secondary" size="lg" className="px-8">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                whileHover={{ scale: 1.2 }}
                style={{ 
                  filter: "drop-shadow(0 0 4px var(--neon-pink))",
                  textShadow: "0 0 10px var(--neon-pink)"
                }}
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </motion.svg>
              Featured Games
            </Button>
          </div>
          
          {/* Game Categories */}
          <div className="mb-3">
            <div className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2 opacity-80">Browse by Category</div>
            <GameCategories layout="horizontal" className="justify-center" />
          </div>
          
          {/* Game Publishers */}
          <div className="mb-3">
            <div className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2 opacity-80">Top Publishers</div>
            <GamePublishers />
          </div>
          
          {/* Social Media Icons */}
          <div>
            <div className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2 opacity-80">Follow Us</div>
            <SocialIcons iconSize="md" className="justify-center" />
          </div>
        </motion.div>
        </NeonBorder>
        
        {/* Neon Grid Pattern */}
        <motion.img 
          src="/images/neon-grid.svg" 
          alt="Neon Grid" 
          className="absolute h-full w-full object-cover opacity-10 top-0 left-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
        />
        
        {/* Neon Pulse Effect */}
        <motion.img 
          src="/images/neon-pulse.svg" 
          alt="Neon Pulse" 
          className="absolute w-64 md:w-96 bottom-32 left-1/2 transform -translate-x-1/2 opacity-40 z-0"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.5, 0.4]
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 3
          }}
        />
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="var(--neon-blue)"
            style={{
              filter: "drop-shadow(0 0 5px var(--neon-blue)) drop-shadow(0 0 10px var(--neon-blue))"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
