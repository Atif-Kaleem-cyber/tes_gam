import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import GameDetail from '../components/games/GameDetail';
import { games } from '../data/games';
import { fadeIn } from '../utils/animations';

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Find the game by ID
    const foundGame = games.find(g => g.id === parseInt(id));
    
    // Simulate a small loading delay for better UX
    const timer = setTimeout(() => {
      if (foundGame) {
        setGame(foundGame);
        setLoading(false);
      } else {
        setError('Game not found');
        setLoading(false);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Handle loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--neon-blue)] mb-4"></div>
          <h2 className="text-xl font-orbitron text-[var(--neon-blue)]">Loading game details...</h2>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[var(--neon-pink)] mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h1 className="text-3xl font-orbitron font-bold mb-4 neon-text-pink">
            Game Not Found
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            We couldn't find the game you're looking for.
          </p>
          <button 
            onClick={() => navigate('/games')}
            className="bg-[var(--neon-blue)] text-black font-orbitron font-medium py-2 px-6 rounded-md hover:bg-[var(--neon-blue)]/90 transition-colors duration-300"
          >
            Return to Games
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${game.title} | Neon Gaming`}</title>
        <meta name="description" content={game.description} />
      </Helmet>
      
      <GameDetail game={game} />
      
      {/* Similar games section could be added here */}
    </>
  );
};

export default GameDetails;
