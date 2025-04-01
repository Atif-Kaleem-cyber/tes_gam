import React from 'react';
import { motion } from 'framer-motion';

/**
 * GamePublishers - A component that displays game publisher logos with neon effects
 * 
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 */
const GamePublishers = ({ className = '' }) => {
  const publishers = [
    {
      name: 'Neon Studios',
      color: '#00e1ff'
    },
    {
      name: 'Cyber Games',
      color: '#f618f6'
    },
    {
      name: 'Pixel Dreams',
      color: '#0cff0c'
    },
    {
      name: 'Retro Future',
      color: '#ffff33'
    },
    {
      name: 'Synth Wave',
      color: '#ff5a5a'
    }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { 
      y: 20,
      opacity: 0 
    },
    animate: { 
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className={`flex justify-center gap-6 md:gap-10 flex-wrap ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {publishers.map((publisher) => (
        <motion.div
          key={publisher.name}
          variants={itemVariants}
          className="text-lg md:text-xl font-bold tracking-wider"
          style={{
            color: publisher.color,
            textShadow: `0 0 5px ${publisher.color}, 0 0 10px ${publisher.color}`,
            filter: `drop-shadow(0 0 2px ${publisher.color})`
          }}
        >
          {publisher.name}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GamePublishers;