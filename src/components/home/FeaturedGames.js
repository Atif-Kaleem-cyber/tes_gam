import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { games } from '../../data/games';

const FeaturedGames = () => {
  // Get featured games (first 3 from our data)
  const featuredGames = games.filter(game => game.featured).slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="featured" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 neon-text-blue">
            Featured Games
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out our hottest and most popular games right now. Immerse yourself in stunning graphics and thrilling gameplay.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredGames.map((game) => (
            <motion.div key={game.id} variants={itemVariants}>
              <Card hoverEffect glowColor={game.id % 3 === 0 ? "blue" : game.id % 3 === 1 ? "pink" : "green"} className="h-full">
                <div className="relative">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-t-lg"
                    style={{
                      backgroundImage: `url('${game.coverImage}')`
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                  </div>
                  
                  {/* Price tag */}
                  <div className="absolute top-4 right-4">
                    <Badge variant={game.price === 'Free' ? 'success' : 'primary'}>
                      {game.price === 'Free' ? 'Free to Play' : `$${game.price}`}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-orbitron font-bold text-white line-clamp-1">{game.title}</h3>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-white">{game.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.genres.slice(0, 3).map((genre, index) => (
                      <Badge key={index} variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "purple"}>
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">{game.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link to={`/games/${game.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    
                    <span className="text-gray-400 text-sm">
                      Release: {new Date(game.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button as={Link} to="/games" variant="secondary">
            View All Games
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
