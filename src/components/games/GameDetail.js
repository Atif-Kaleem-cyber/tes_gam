import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const GameDetail = ({ game }) => {
  const navigate = useNavigate();
  
  if (!game) return null;
  
  // Format release date
  const releaseDate = new Date(game.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-[var(--neon-blue)] hover:text-[var(--neon-blue)]/80 mb-6 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Games
        </button>
        
        {/* Hero section with game cover */}
        <div className="relative rounded-xl overflow-hidden h-80 mb-8">
          <img 
            src={game.coverImage} 
            alt={game.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  {game.featured && <Badge variant="secondary">Featured</Badge>}
                  <Badge variant={game.price === 'Free' ? 'success' : 'primary'}>
                    {game.price === 'Free' ? 'Free to Play' : `$${game.price}`}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">{game.title}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white">{game.rating}/10</span>
                  </div>
                  <span className="text-gray-400">Released: {releaseDate}</span>
                  <span className="text-gray-400">Developer: {game.developer}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button size="lg">
                  {game.price === 'Free' ? 'Play Now' : 'Buy Now'}
                </Button>
                <Button variant="outline" size="lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Game info and details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - Description and Requirements */}
          <div className="lg:col-span-2 space-y-8">
            {/* About section */}
            <div className="bg-[var(--bg-card)] rounded-lg p-6 border border-white/5">
              <h2 className="text-xl font-orbitron font-bold mb-4 text-white">About</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {game.description}
              </p>
              
              {/* Genres */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {game.genres.map((genre, index) => (
                    <Badge 
                      key={index} 
                      variant={
                        index % 4 === 0 ? "primary" : 
                        index % 4 === 1 ? "secondary" : 
                        index % 4 === 2 ? "success" : 
                        "purple"
                      }
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Platforms */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(game.platforms) ? (
                    game.platforms.map((platform, index) => (
                      <Badge key={index} variant="primary">
                        {platform}
                      </Badge>
                    ))
                  ) : (
                    <Badge variant="primary">{game.platform}</Badge>
                  )}
                </div>
              </div>
            </div>
            
            {/* Screenshots section */}
            <div className="bg-[var(--bg-card)] rounded-lg p-6 border border-white/5">
              <h2 className="text-xl font-orbitron font-bold mb-4 text-white">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.screenshots?.map((screenshot, index) => (
                  <div key={index} className="rounded-md overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`${game.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar - Requirements and Additional Info */}
          <div className="space-y-6">
            {/* System Requirements */}
            <div className="bg-[var(--bg-card)] rounded-lg p-6 border border-white/5">
              <h2 className="text-xl font-orbitron font-bold mb-4 text-white">System Requirements</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-[var(--neon-blue)] mb-2">Minimum:</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">OS:</span>
                      <span>Windows 10 64-bit</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Processor:</span>
                      <span>Intel Core i5-6600K / AMD Ryzen 5 1600</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Memory:</span>
                      <span>8 GB RAM</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Graphics:</span>
                      <span>NVIDIA GTX 1060 6GB / AMD RX 580 8GB</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Storage:</span>
                      <span>50 GB available space</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-[var(--neon-pink)] mb-2">Recommended:</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">OS:</span>
                      <span>Windows 10/11 64-bit</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Processor:</span>
                      <span>Intel Core i7-9700K / AMD Ryzen 7 3700X</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Memory:</span>
                      <span>16 GB RAM</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Graphics:</span>
                      <span>NVIDIA RTX 2070 / AMD RX 5700 XT</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium text-gray-300 w-24">Storage:</span>
                      <span>50 GB SSD</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="bg-[var(--bg-card)] rounded-lg p-6 border border-white/5">
              <h2 className="text-xl font-orbitron font-bold mb-4 text-white">Additional Info</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Publisher:</span>
                  <span className="text-white">{game.publisher || game.developer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Developer:</span>
                  <span className="text-white">{game.developer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Release Date:</span>
                  <span className="text-white">{releaseDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Age Rating:</span>
                  <span className="text-white">{game.ageRating || 'PEGI 18'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Languages:</span>
                  <span className="text-white">English, French, German, Spanish, Italian</span>
                </div>
              </div>
              
              {/* Social share */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Share</h3>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'reddit', 'discord'].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors duration-300"
                      aria-label={`Share on ${social}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social === 'twitter' && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {social === 'facebook' && (
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        )}
                        {social === 'reddit' && (
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-3.5-8c.828 0 1.5-.672 1.5-1.5S9.328 11 8.5 11 7 11.672 7 12.5 7.672 14 8.5 14zm7 0c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm-7.179 3c-.769 0-.763-1 0-1h8.356c.769 0 .769 1 0 1H8.321z" />
                        )}
                        {social === 'discord' && (
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameDetail;
