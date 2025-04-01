import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedGames from '../components/home/FeaturedGames';
import NewsSection from '../components/home/NewsSection';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Neon Gaming | Your Ultimate Gaming Destination</title>
        <meta name="description" content="Discover the latest and greatest games in our neon-lit digital arcade. Your gaming journey begins here." />
      </Helmet>
      
      <div>
        <Hero />
        <FeaturedGames />
        <NewsSection />
        
        {/* Join community section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-pink)]/20 opacity-30"
            ></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                <span className="neon-text-blue">JOIN OUR</span> <span className="neon-text-pink">GAMING COMMUNITY</span>
              </h2>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Connect with fellow gamers, participate in tournaments, and stay updated on the latest gaming news and events.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[var(--bg-card)]/80 p-6 rounded-lg">
                  <div className="text-[var(--neon-blue)] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-[var(--text-primary)]">Join Discussions</h3>
                  <p className="text-[var(--text-muted)]">
                    Connect with other gamers in our forums and discuss your favorite games.
                  </p>
                </div>
                
                <div className="bg-[var(--bg-card)]/80 p-6 rounded-lg">
                  <div className="text-[var(--neon-pink)] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-[var(--text-primary)]">Live Streams</h3>
                  <p className="text-[var(--text-muted)]">
                    Watch live gameplay sessions from top gamers and learn new strategies.
                  </p>
                </div>
                
                <div className="bg-[var(--bg-card)]/80 p-6 rounded-lg">
                  <div className="text-[var(--neon-green)] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-[var(--text-primary)]">Win Rewards</h3>
                  <p className="text-[var(--text-muted)]">
                    Participate in tournaments and win exclusive in-game items and prizes.
                  </p>
                </div>
              </div>
              
              <button className="bg-[var(--neon-blue)] text-black font-orbitron font-medium py-3 px-8 rounded-md hover:bg-[var(--neon-blue)]/90 transition-colors duration-300 neon-border">
                Join Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
