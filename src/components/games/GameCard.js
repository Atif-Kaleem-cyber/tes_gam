import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import NeonBorder from '../ui/NeonBorder';

const GameCard = ({ game, index }) => {
  // Determine color based on index for visual variety
  const getColor = (index) => {
    const colors = ['blue', 'pink', 'green', 'purple'];
    return colors[index % colors.length];
  };

  // Get color for this card
  const color = getColor(index);
  
  // Map color to CSS variables
  const neonColors = {
    blue: 'var(--neon-blue)',
    pink: 'var(--neon-pink)',
    green: 'var(--neon-green)',
    purple: 'var(--neon-purple)',
  };

  return (
    <NeonBorder color={color} animate={false} className="overflow-hidden">
      <motion.div
        className="group relative rounded-lg overflow-hidden bg-[var(--bg-card)]"
        whileHover={{ 
          y: -5,
          boxShadow: `0 0 20px ${neonColors[color]}35` 
        }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
      {/* Game Cover Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
        
        {/* Featured badge */}
        {game.featured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="secondary">Featured</Badge>
          </div>
        )}
        
        {/* Price tag */}
        <div className="absolute top-3 right-3 z-10">
          <Badge variant={game.price === 'Free' ? 'success' : 'primary'}>
            {game.price === 'Free' ? 'Free to Play' : `$${game.price}`}
          </Badge>
        </div>
        
        {/* Game info overlay that appears on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-white text-sm">{game.rating}/10</span>
            
            <span className="ml-auto text-xs text-gray-400">
              {new Date(game.releaseDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short' 
              })}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-2">
            {game.genres.slice(0, 2).map((genre, index) => (
              <Badge key={index} variant={index % 2 === 0 ? "primary" : "secondary"} className="text-xs">
                {genre}
              </Badge>
            ))}
            {game.genres.length > 2 && (
              <Badge variant="purple" className="text-xs">
                +{game.genres.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold font-orbitron text-white truncate mb-1">
          {game.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {game.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{game.platform}</span>
          </div>
          
          <Link to={`/games/${game.id}`}>
            <Button variant="outline" size="sm">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
    </NeonBorder>
  );
};

export default GameCard;
