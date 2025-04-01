import React from 'react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';
import { games } from '../../data/games';

const GameGrid = ({ filteredGames }) => {
  const displayGames = filteredGames || games;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="game-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {displayGames.length > 0 ? (
        displayGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-orbitron font-bold text-gray-300 mb-2">No Games Found</h3>
          <p className="text-gray-500 max-w-md">
            We couldn't find any games matching your search criteria. Try adjusting your filters or search query.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default GameGrid;
