import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import NeonText from '../components/ui/NeonText';
import NeonBorder from '../components/ui/NeonBorder';
import { fadeIn, staggerContainer } from '../utils/animations';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Cyber Drift 2078 Announced',
      date: 'March 29, 2025',
      excerpt: 'The highly anticipated sequel to the award-winning racing game is coming this fall. Get ready for neon-soaked streets and futuristic vehicles.',
      image: '/images/neon-controller.svg',
      category: 'Game Announcement',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Neon Tournament Finals This Weekend',
      date: 'March 25, 2025',
      excerpt: 'The world\'s top players will compete for the championship title and a prize pool of $500,000 in this year\'s ultimate gaming showdown.',
      image: '/images/neon-circles.svg',
      category: 'E-Sports',
      color: 'pink'
    },
    {
      id: 3,
      title: 'Virtual Reality Expansion for Neon Dimensions',
      date: 'March 20, 2025',
      excerpt: 'Experience the neon world like never before with full VR support coming to our platform next month.',
      image: '/images/neon-pulse.svg',
      category: 'Platform Updates',
      color: 'green'
    },
    {
      id: 4,
      title: 'Indie Developer Spotlight: Synthwave Studios',
      date: 'March 15, 2025',
      excerpt: 'Learn about the team behind the hit game "Neon Nights" and their upcoming projects in our exclusive interview.',
      image: '/images/neon-grid.svg',
      category: 'Developer Feature',
      color: 'yellow'
    },
    {
      id: 5,
      title: 'Game Pass Expansion: 20 New Titles Coming',
      date: 'March 10, 2025',
      excerpt: 'Our subscription service is growing with twenty exciting new games being added to the library next week.',
      image: '/images/neon-logo.svg',
      category: 'Service Update',
      color: 'blue'
    }
  ];

  const getColorClass = (color) => {
    switch (color) {
      case 'pink': return 'border-[var(--neon-pink)] shadow-[0_0_10px_var(--neon-pink)]';
      case 'green': return 'border-[var(--neon-green)] shadow-[0_0_10px_var(--neon-green)]';
      case 'yellow': return 'border-[var(--neon-yellow)] shadow-[0_0_10px_var(--neon-yellow)]';
      default: return 'border-[var(--neon-blue)] shadow-[0_0_10px_var(--neon-blue)]';
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Latest Gaming News | Neon Gaming</title>
        <meta name="description" content="Stay up to date with the latest gaming news, announcements, and events in the neon-lit digital world." />
      </Helmet>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <NeonText color="blue" size="xl" className="text-4xl md:text-5xl lg:text-6xl mb-4" animate>
              Latest News
            </NeonText>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Stay up to date with the latest gaming news, announcements, and events in the neon-lit digital world.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {newsItems.map((item) => (
              <motion.article 
                key={item.id}
                className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col h-full"
                variants={fadeIn}
              >
                <NeonBorder color={item.color} className="h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.color === 'blue' ? 'bg-blue-900/30 text-blue-300' : item.color === 'pink' ? 'bg-pink-900/30 text-pink-300' : item.color === 'green' ? 'bg-green-900/30 text-green-300' : 'bg-yellow-900/30 text-yellow-300'}`}>
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="relative h-48 mb-4 overflow-hidden rounded">
                      <div className={`absolute inset-0 border border-[rgba(255,255,255,0.1)] ${getColorClass(item.color)} rounded transition-all duration-300`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="object-cover w-full h-full object-center opacity-70 transition-all duration-300 hover:opacity-90"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">
                      <NeonText color={item.color} size="md">
                        {item.title}
                      </NeonText>
                    </h3>
                    
                    <p className="text-gray-400 mb-4 flex-grow">{item.excerpt}</p>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <button className={`text-sm ${item.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : item.color === 'pink' ? 'text-pink-400 hover:text-pink-300' : item.color === 'green' ? 'text-green-400 hover:text-green-300' : 'text-yellow-400 hover:text-yellow-300'} font-medium transition-colors`}>
                        Read More →
                      </button>
                    </div>
                  </div>
                </NeonBorder>
              </motion.article>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[var(--bg-dark)] border border-[var(--neon-blue)] text-[var(--neon-blue)] rounded-lg shadow-[0_0_10px_var(--neon-blue)] hover:shadow-[0_0_15px_var(--neon-blue)] transition-all duration-300">
              Load More News
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;