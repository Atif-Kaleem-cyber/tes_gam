import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NeonText from '../components/ui/NeonText';
import NeonBorder from '../components/ui/NeonBorder';
import BlinkingCursor from '../components/ui/BlinkingCursor';
import { fadeIn } from '../utils/animations';

const JoinNow = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [step, setStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Basic password strength check
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', formData);
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return 'var(--neon-red)';
      case 1: return 'var(--neon-red)';
      case 2: return 'var(--neon-yellow)';
      case 3: return 'var(--neon-green)';
      case 4: return 'var(--neon-blue)';
      default: return 'var(--neon-red)';
    }
  };

  const getStrengthText = () => {
    switch (passwordStrength) {
      case 0: return 'Too Weak';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return 'Too Weak';
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Join Now | Neon Gaming</title>
        <meta name="description" content="Create your Neon Gaming account and join our community of gamers in the neon-lit digital universe." />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center py-12 relative z-10 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-pink)]/10 via-transparent to-[var(--neon-blue)]/10 opacity-50"></div>
        <div className="absolute inset-0" style={{ 
          backgroundSize: '50px 50px',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          opacity: 0.2
        }}></div>

        <motion.div 
          className="container mx-auto px-4 max-w-lg relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NeonBorder color="pink" className="p-8 bg-black/50 backdrop-blur-md rounded-lg">
            <div className="text-center mb-8">
              <NeonText color="pink" size="lg" className="text-3xl font-bold mb-2">
                Join Neon Gaming
              </NeonText>
              <p className="text-gray-300 flex items-center justify-center">
                <span>Create your account in the neon universe</span>
                <BlinkingCursor color="pink" className="ml-1" />
              </p>
            </div>

            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      step >= i 
                        ? 'border-[var(--neon-pink)] text-[var(--neon-pink)]' 
                        : 'border-gray-600 text-gray-500'
                    }`}
                    style={{
                      boxShadow: step >= i ? '0 0 10px var(--neon-pink)' : 'none'
                    }}
                  >
                    {i}
                  </div>
                  <span className={`text-xs mt-2 ${step >= i ? 'text-[var(--neon-pink)]' : 'text-gray-500'}`}>
                    {i === 1 ? 'Account' : i === 2 ? 'Profile' : 'Preferences'}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                      Username
                    </label>
                    <div className="relative">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="bg-black/70 text-gray-200 block w-full px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-pink)] focus:border-transparent transition-all duration-300"
                        placeholder="NeonRider"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
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
                        className="bg-black/70 text-gray-200 block w-full px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-pink)] focus:border-transparent transition-all duration-300"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-[var(--bg-dark)] border border-[var(--neon-pink)] text-[var(--neon-pink)] rounded-lg shadow-[0_0_10px_var(--neon-pink)] hover:shadow-[0_0_15px_var(--neon-pink)] transition-all duration-300 font-medium"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
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
                        className="bg-black/70 text-gray-200 block w-full px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-pink)] focus:border-transparent transition-all duration-300"
                        placeholder="••••••••"
                      />
                    </div>

                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs" style={{ color: getStrengthColor() }}>
                            {getStrengthText()}
                          </span>
                        </div>
                        <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-300"
                            style={{ 
                              width: `${(passwordStrength / 4) * 100}%`,
                              backgroundColor: getStrengthColor(),
                              boxShadow: `0 0 5px ${getStrengthColor()}` 
                            }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Use 8+ characters with a mix of letters, numbers & symbols
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="bg-black/70 text-gray-200 block w-full px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-pink)] focus:border-transparent transition-all duration-300"
                        placeholder="••••••••"
                      />
                    </div>
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <p className="mt-1 text-xs text-[var(--neon-red)]">Passwords do not match</p>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-[var(--bg-dark)] border border-[var(--neon-pink)] text-[var(--neon-pink)] rounded-lg shadow-[0_0_10px_var(--neon-pink)] hover:shadow-[0_0_15px_var(--neon-pink)] transition-all duration-300 font-medium"
                      disabled={formData.password !== formData.confirmPassword}
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 bg-black border-gray-600 rounded focus:ring-[var(--neon-pink)] focus:border-[var(--neon-pink)] text-[var(--neon-pink)]"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="text-gray-300">
                        I agree to the{' '}
                        <a href="#" className="text-[var(--neon-pink)] hover:underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-[var(--neon-pink)] hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className="bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      By creating an account, you'll receive:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
                      <li>Access to exclusive neon-themed games</li>
                      <li>Member-only events and competitions</li>
                      <li>Free monthly game credits</li>
                      <li>Customizable neon profile</li>
                    </ul>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.agreeTerms}
                      className="px-8 py-3 bg-[var(--bg-dark)] border border-[var(--neon-pink)] text-[var(--neon-pink)] rounded-lg shadow-[0_0_10px_var(--neon-pink)] hover:shadow-[0_0_15px_var(--neon-pink)] transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Create Account
                    </button>
                  </div>
                </motion.div>
              )}

              <div className="text-center text-gray-400 text-sm mt-8">
                Already have an account?{' '}
                <Link to="/signin" className="text-[var(--neon-blue)] hover:text-[var(--neon-blue)]/80 transition-colors">
                  Sign In
                </Link>
              </div>
            </form>
          </NeonBorder>
        </motion.div>
      </div>
    </Layout>
  );
};

export default JoinNow;