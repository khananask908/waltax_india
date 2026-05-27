'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Shield, Award, Users, Sparkles, Zap, Star, Rocket, Building, FileText } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import Container from '../ui/Container';

const DynamicHeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1, opacity }}
      >
        {/* Static gradient orbs for better performance */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Geometric patterns with animation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-32">
          <div className="lg:w-1/2 lg:pr-12">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Shield className="h-4 w-4 mr-2 text-secondary-400" />
                <span className="text-sm font-medium">Trusted by 50,000+ Businesses</span>
              </div>
            </motion.div>
            
            {/* Simplified title */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Business Partner for{' '}
              <motion.span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Legal & Financial Success
              </motion.span>
            </motion.h1>
            
            {/* Animated description */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              India's leading platform for business registration, tax filing, compliance, and legal services with expert support.
            </motion.p>
            
            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/startups">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/registration">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex items-center gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary-400" />
                <span className="text-sm text-gray-300">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary-400" />
                <span className="text-sm text-gray-300">50K+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary-400" />
                <span className="text-sm text-gray-300">100% Secure</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Interactive elements */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-secondary-400 mb-2">5000+</div>
                    <div className="text-sm text-gray-300">Businesses Registered</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-accent-400 mb-2">15K+</div>
                    <div className="text-sm text-gray-300">Tax Returns Filed</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-primary-400 mb-2">98%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-secondary-300 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Expert Support</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
          <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default DynamicHeroSection;