import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

// News data (would normally come from API)
const newsData = [
  {
    id: 1,
    title: "Cyberpunk 2077 Expansion 'Phantom Liberty' Announced",
    excerpt: "CD Projekt Red has announced a major expansion for Cyberpunk 2077, bringing new story content and gameplay features.",
    category: "Announcements",
    date: "2023-10-15",
    image: "https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_960_720.jpg"
  },
  {
    id: 2,
    title: "E3 2023: All The Major Reveals And Announcements",
    excerpt: "Recap of all the biggest game reveals, trailers, and release dates from this year's Electronic Entertainment Expo.",
    category: "Events",
    date: "2023-09-22",
    image: "https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_960_720.jpg"
  },
  {
    id: 3,
    title: "PlayStation 6 Specs Leaked: What We Know So Far",
    excerpt: "Rumors and leaks about Sony's next-generation console have started to surface online. Here's what we know.",
    category: "Hardware",
    date: "2023-10-05",
    image: "https://cdn.pixabay.com/photo/2017/05/15/21/58/joystick-2316578_960_720.jpg"
  },
  {
    id: 4,
    title: "God of War Ragnarök Wins Game of the Year",
    excerpt: "Santa Monica Studio's epic action-adventure sequel takes home the top prize at The Game Awards 2023.",
    category: "Awards",
    date: "2023-09-30",
    image: "https://cdn.pixabay.com/photo/2016/03/27/07/38/chess-1282170_960_720.jpg"
  }
];

const NewsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="news" className="py-20 bg-[var(--bg-dark)]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 neon-text-pink">
            Latest Gaming News
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest announcements, releases, and events from the gaming world.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {newsData.map((news) => (
            <motion.div key={news.id} variants={itemVariants}>
              <Card hoverEffect glowColor="pink" className="h-full flex flex-col">
                <div className="relative">
                  <div 
                    className="w-full h-40 bg-cover bg-center rounded-t-lg"
                    style={{
                      backgroundImage: `url('${news.image}')`
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant={
                      news.category === "Announcements" ? "primary" : 
                      news.category === "Events" ? "secondary" : 
                      news.category === "Hardware" ? "purple" : 
                      "success"
                    }>
                      {news.category}
                    </Badge>
                  </div>
                  
                  {/* Date badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded">
                      {new Date(news.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-orbitron font-bold text-white mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
                    {news.excerpt}
                  </p>
                  
                  <Link to={`/news/${news.id}`} className="text-[var(--neon-pink)] hover:text-[var(--neon-pink)]/80 font-medium text-sm flex items-center transition-colors duration-300">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button as={Link} to="/news" variant="outline">
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
