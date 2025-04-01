import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import NeonText from '../components/ui/NeonText';
import NeonBorder from '../components/ui/NeonBorder';
import BlinkingCursor from '../components/ui/BlinkingCursor';
import { fadeIn, staggerContainer } from '../utils/animations';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Neonlight",
      role: "Founder & CEO",
      image: "/images/neon-controller.svg",
      description: "Gaming industry veteran with over 15 years of experience and a passion for cyberpunk aesthetics.",
      color: "blue"
    },
    {
      name: "Sam Vaporwave",
      role: "Creative Director",
      image: "/images/neon-circles.svg",
      description: "Award-winning designer focused on creating immersive digital experiences with neon flair.",
      color: "pink"
    },
    {
      name: "Jamie Synthwave",
      role: "Lead Developer",
      image: "/images/neon-grid.svg",
      description: "Full-stack developer with expertise in creating responsive and visually stunning gaming interfaces.",
      color: "green"
    },
    {
      name: "Morgan Cyberdrift",
      role: "Community Manager",
      image: "/images/neon-pulse.svg",
      description: "Building bridges between gamers and developers while fostering an inclusive neon gaming community.",
      color: "yellow"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us | Neon Gaming</title>
        <meta name="description" content="Learn about our mission to bring the most immersive neon-themed gaming experiences to players worldwide." />
      </Helmet>

      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/5 via-transparent to-[var(--neon-pink)]/5 opacity-50"></div>
        <div className="absolute inset-0" style={{ 
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          opacity: 0.2
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <NeonText color="blue" size="xl" className="text-4xl md:text-5xl lg:text-6xl mb-4" animate>
              About Neon Gaming
            </NeonText>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg flex items-center justify-center flex-wrap">
              <span>We're on a mission to bring the most immersive neon-themed gaming experiences to players worldwide</span>
              <BlinkingCursor color="pink" className="ml-1" />
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <NeonBorder color="blue" className="h-full p-6 bg-black/30 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl mb-4 font-bold">
                  <NeonText color="blue" size="lg">Our Story</NeonText>
                </h2>
                <p className="text-gray-300 mb-4">
                  Founded in 2021, Neon Gaming emerged from a shared vision to create a digital space where gaming and cyberpunk aesthetics converge. Our platform began as a small community of enthusiasts and has since grown into a vibrant ecosystem for gamers who appreciate the neon-soaked digital landscapes and futuristic vibes.
                </p>
                <p className="text-gray-300 mb-4">
                  We believe gaming is more than just entertainment—it's an art form and a medium for connection. Our team works tirelessly to curate and create experiences that push the boundaries of visual design while maintaining the core elements that make games engaging and fun.
                </p>
                <p className="text-gray-300">
                  From indie gems to AAA titles, we celebrate all games that embrace the neon aesthetic, creating a platform where these experiences can shine brightest.
                </p>
              </NeonBorder>
            </motion.div>

            <motion.div variants={fadeIn}>
              <NeonBorder color="pink" className="h-full p-6 bg-black/30 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl mb-4 font-bold">
                  <NeonText color="pink" size="lg">Our Mission</NeonText>
                </h2>
                <p className="text-gray-300 mb-4">
                  At Neon Gaming, we're driven by a passion to create and showcase extraordinary gaming experiences that transport players to vibrant, neon-lit worlds. We strive to:
                </p>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-[var(--neon-blue)] mr-2">›</span>
                    <span>Curate the most visually stunning and engaging neon-themed games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--neon-pink)] mr-2">›</span>
                    <span>Foster a community of gamers who share our passion for cyberpunk aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--neon-green)] mr-2">›</span>
                    <span>Support developers who push the boundaries of visual design in gaming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--neon-yellow)] mr-2">›</span>
                    <span>Provide a platform where neon gaming culture can thrive and evolve</span>
                  </li>
                </ul>
                <p className="text-gray-300">
                  Through our platform, events, and community initiatives, we're building a digital haven for those who find beauty in the glow of neon against the night.
                </p>
              </NeonBorder>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <NeonText color="green" size="lg">Meet Our Team</NeonText>
            </h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  variants={fadeIn}
                  className="text-center"
                >
                  <NeonBorder color={member.color} className="p-6 bg-black/30 backdrop-blur-sm">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.1)]" 
                      style={{ 
                        boxShadow: `0 0 15px var(--neon-${member.color})` 
                      }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">
                      <NeonText color={member.color} size="md">{member.name}</NeonText>
                    </h3>
                    <p className="text-sm text-[var(--neon-${member.color})] opacity-80 mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </NeonBorder>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <NeonBorder color="blue" className="inline-block p-8 bg-black/30 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <NeonText color="blue" size="lg">Join Our Journey</NeonText>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                We're always looking for passionate gamers, creators, and innovators to join our community. Whether you're a player, developer, or content creator, there's a place for you in the neon dimension.
              </p>
              <button className="px-8 py-3 bg-[var(--bg-dark)] border border-[var(--neon-blue)] text-[var(--neon-blue)] rounded-lg shadow-[0_0_10px_var(--neon-blue)] hover:shadow-[0_0_15px_var(--neon-blue)] transition-all duration-300">
                Get Involved
              </button>
            </NeonBorder>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;