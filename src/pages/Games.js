import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import GameFilter from '../components/games/GameFilter';
import GameGrid from '../components/games/GameGrid';
import { games } from '../data/games';

const Games = () => {
  // Set up filter state
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    platform: '',
    price: '',
    sortBy: 'newest',
    featured: false
  });
  
  // State for filtered games
  const [filteredGames, setFilteredGames] = useState(games);
  
  // Apply filters function
  const applyFilters = () => {
    let result = [...games];
    
    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply genre filter
    if (filters.genre) {
      result = result.filter(game => 
        game.genres.some(genre => genre.toLowerCase() === filters.genre.toLowerCase())
      );
    }
    
    // Apply platform filter
    if (filters.platform) {
      result = result.filter(game => {
        if (Array.isArray(game.platforms)) {
          return game.platforms.some(platform => platform === filters.platform);
        } else {
          return game.platform === filters.platform;
        }
      });
    }
    
    // Apply price filter
    if (filters.price) {
      result = result.filter(game => {
        if (filters.price === 'free') {
          return game.price === 'Free';
        } else if (filters.price === 'under20') {
          return game.price !== 'Free' && parseFloat(game.price) < 20;
        } else if (filters.price === '20to40') {
          const price = parseFloat(game.price);
          return price >= 20 && price <= 40;
        } else if (filters.price === '40to60') {
          const price = parseFloat(game.price);
          return price > 40 && price <= 60;
        } else if (filters.price === 'above60') {
          return parseFloat(game.price) > 60;
        }
        return true;
      });
    }
    
    // Apply featured filter
    if (filters.featured) {
      result = result.filter(game => game.featured);
    }
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        break;
      case 'name_asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'rating_high':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating_low':
        result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    
    setFilteredGames(result);
  };
  
  // Reset filters
  const resetFilters = () => {
    setFilters({
      search: '',
      genre: '',
      platform: '',
      price: '',
      sortBy: 'newest',
      featured: false
    });
  };
  
  // Apply filters when component mounts
  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <>
      <Helmet>
        <title>Games Catalog | Neon Gaming</title>
        <meta name="description" content="Browse our extensive collection of games with advanced filtering options." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-orbitron font-bold mb-4">
            <span className="neon-text-blue">Games</span> <span className="text-white">Catalog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Browse our extensive collection of games. Filter by genre, platform, or search for your favorite titles.
          </p>
        </motion.div>
        
        {/* Filters */}
        <GameFilter
          filters={filters}
          setFilters={setFilters}
          onApplyFilters={applyFilters}
          onResetFilters={resetFilters}
        />
        
        {/* Results Stats */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">
            Showing <span className="text-white font-medium">{filteredGames.length}</span> games
          </p>
        </div>
        
        {/* Game Grid */}
        <GameGrid filteredGames={filteredGames} />
      </div>
    </>
  );
};

export default Games;
