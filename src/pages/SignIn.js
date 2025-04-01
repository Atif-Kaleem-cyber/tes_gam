import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NeonText from '../components/ui/NeonText';
import NeonBorder from '../components/ui/NeonBorder';
import BlinkingCursor from '../components/ui/BlinkingCursor';
import { fadeIn } from '../utils/animations';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in submitted:', formData);
  };

  return (
    <Layout>
      <Helmet>
        <title>Sign In | Neon Gaming</title>
        <meta name="description" content="Sign in to your Neon Gaming account to access your game library, profile, and more." />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center py-12 relative z-10 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-pink)]/10 opacity-50"></div>
        <div className="absolute inset-0" style={{ 
          backgroundSize: '50px 50px',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          opacity: 0.2
        }}></div>

        <motion.div 
          className="container mx-auto px-4 max-w-md relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NeonBorder color="blue" className="p-8 bg-black/50 backdrop-blur-md rounded-lg">
            <div className="text-center mb-8">
              <NeonText color="blue" size="lg" className="text-3xl font-bold mb-2">
                Sign In
              </NeonText>
              <p className="text-gray-300 flex items-center justify-center">
                <span>Access your neon gaming universe</span>
                <BlinkingCursor color="blue" className="ml-1" />
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[var(--bg-darker)]/70 text-[var(--text-primary)] block w-full px-4 py-3 border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                  />
                  <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 opacity-0 group-focus-within:opacity-100" 
                    style={{ 
                      boxShadow: '0 0 10px var(--neon-blue)',
                      opacity: formData.email ? 0.5 : 0 
                    }}>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-[var(--bg-darker)]/70 text-[var(--text-primary)] block w-full px-4 py-3 border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 opacity-0 group-focus-within:opacity-100" 
                    style={{ 
                      boxShadow: '0 0 10px var(--neon-blue)',
                      opacity: formData.password ? 0.5 : 0 
                    }}>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 bg-[var(--bg-darker)] border-[var(--border-color)] rounded focus:ring-[var(--neon-blue)] focus:border-[var(--neon-blue)] text-[var(--neon-blue)]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--text-secondary)]">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="text-[var(--neon-blue)] hover:text-[var(--neon-blue)]/80 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[var(--bg-dark)] border border-[var(--neon-blue)] text-[var(--neon-blue)] rounded-lg shadow-[0_0_10px_var(--neon-blue)] hover:shadow-[0_0_15px_var(--neon-blue)] transition-all duration-300 font-medium"
                >
                  Sign In
                </button>
              </div>

              <div className="mt-6 text-center text-[var(--text-secondary)] text-sm">
                <p>Or continue with</p>
                <div className="flex justify-center space-x-4 mt-3">
                  {['google', 'twitter', 'discord', 'twitch'].map((provider) => (
                    <button
                      key={provider}
                      type="button"
                      className="w-10 h-10 rounded-full bg-[var(--bg-darker)]/70 border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center hover:border-[var(--neon-blue)] hover:shadow-[0_0_10px_var(--neon-blue)] transition-all duration-300"
                    >
                      <span className="capitalize">{provider.charAt(0)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center text-[var(--text-muted)] text-sm mt-6">
                Don't have an account?{' '}
                <Link to="/join" className="text-[var(--neon-pink)] hover:text-[var(--neon-pink)]/80 transition-colors">
                  Join Now
                </Link>
              </div>
            </form>
          </NeonBorder>
        </motion.div>
      </div>
    </Layout>
  );
};

export default SignIn;