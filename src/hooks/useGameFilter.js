import { useState, useEffect, useCallback } from 'react';
import { games } from '../data/games';

/**
 * Custom hook for filtering and sorting games
 * @param {object} initialFilters - Initial filter state
 * @returns {object} Filtered games and filter control methods
 */
const useGameFilter = (initialFilters = {}) => {
  // Default filter values
  const defaultFilters = {
    search: '',
    genre: '',
    platform: '',
    price: '',
    sortBy: 'newest',
    featured: false
  };

  // Merge provided initial filters with defaults
  const [filters, setFilters] = useState({ ...defaultFilters, ...initialFilters });
  const [filteredGames, setFilteredGames] = useState(games);

  // Apply filters to games data
  const applyFilters = useCallback(() => {
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
          return game.platform.includes(filters.platform);
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
        result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
    }
    
    setFilteredGames(result);
  }, [filters]);

  // Apply filters whenever filters change
  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  // Update a single filter value
  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Update multiple filter values at once
  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  // Reset filters to default values
  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  return {
    filters,
    filteredGames,
    updateFilter,
    updateFilters,
    resetFilters,
    applyFilters,
    gamesCount: filteredGames.length,
    setFilters
  };
};

export default useGameFilter;
