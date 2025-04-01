import React from 'react';
import Select from '../ui/Select';
import Input from '../ui/Input';
import Button from '../ui/Button';

const GameFilter = ({ 
  filters, 
  setFilters, 
  onApplyFilters,
  onResetFilters
}) => {
  // All genre options
  const genreOptions = [
    { value: '', label: 'All Genres' },
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'rpg', label: 'RPG' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'simulation', label: 'Simulation' },
    { value: 'sports', label: 'Sports' },
    { value: 'racing', label: 'Racing' },
    { value: 'shooter', label: 'Shooter' },
    { value: 'puzzle', label: 'Puzzle' },
    { value: 'horror', label: 'Horror' },
  ];

  // Platform options
  const platformOptions = [
    { value: '', label: 'All Platforms' },
    { value: 'PC', label: 'PC' },
    { value: 'PlayStation 5', label: 'PlayStation 5' },
    { value: 'Xbox Series X', label: 'Xbox Series X' },
    { value: 'Nintendo Switch', label: 'Nintendo Switch' },
    { value: 'Mobile', label: 'Mobile' },
  ];

  // Sorting options
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'name_asc', label: 'Name (A-Z)' },
    { value: 'name_desc', label: 'Name (Z-A)' },
    { value: 'rating_high', label: 'Highest Rated' },
    { value: 'rating_low', label: 'Lowest Rated' },
  ];

  // Price range options
  const priceOptions = [
    { value: '', label: 'Any Price' },
    { value: 'free', label: 'Free' },
    { value: 'under20', label: 'Under $20' },
    { value: '20to40', label: '$20 - $40' },
    { value: '40to60', label: '$40 - $60' },
    { value: 'above60', label: 'Above $60' },
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-[var(--bg-card)] border border-white/5 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-orbitron font-bold mb-4 text-white">Filter Games</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Search input */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-400 mb-1">
            Search
          </label>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="Search games..."
            value={filters.search}
            onChange={handleInputChange}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>
        
        {/* Genre select */}
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-400 mb-1">
            Genre
          </label>
          <Select
            id="genre"
            name="genre"
            options={genreOptions}
            value={filters.genre}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Platform select */}
        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-gray-400 mb-1">
            Platform
          </label>
          <Select
            id="platform"
            name="platform"
            options={platformOptions}
            value={filters.platform}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Price range select */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-1">
            Price Range
          </label>
          <Select
            id="price"
            name="price"
            options={priceOptions}
            value={filters.price}
            onChange={handleInputChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sort by select */}
        <div>
          <label htmlFor="sortBy" className="block text-sm font-medium text-gray-400 mb-1">
            Sort By
          </label>
          <Select
            id="sortBy"
            name="sortBy"
            options={sortOptions}
            value={filters.sortBy}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Featured games checkbox */}
        <div className="flex items-end">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="featured"
              checked={filters.featured}
              onChange={(e) => setFilters(prev => ({
                ...prev,
                featured: e.target.checked
              }))}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--neon-blue)]"></div>
            <span className="ms-3 text-sm font-medium text-gray-400">Featured Only</span>
          </label>
        </div>
        
        {/* Action buttons */}
        <div className="lg:col-span-2 flex items-end justify-end gap-4">
          <Button 
            variant="ghost" 
            onClick={onResetFilters}
            className="w-full md:w-auto"
          >
            Reset
          </Button>
          <Button 
            onClick={onApplyFilters}
            className="w-full md:w-auto"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameFilter;
