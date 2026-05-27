'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CheckCircle, Clock, Star, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { useCartStore } from '../../store/cartStore';

const ComplianceOfferWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showOnPage, setShowOnPage] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    // Check if current page should show the compliance offer
    const currentPath = window.location.pathname;
    const compliancePages = [
      '/compliance',
      '/services/proprietorship-compliance',
      '/services/partnership-compliance',
      '/services/opc-compliance',
      '/services/llp-compliance',
      '/services/pvt-ltd-compliance',
      '/services/section-8-compliance',
      '/services/trust-compliance',
      '/services/public-ltd-compliance',
      '/services/producer-compliance',
      '/services/subsidiary-compliance',
      '/gst',
      '/income-tax',
      '/registration'
    ];
    
    const shouldShow = compliancePages.some(page => currentPath.includes(page));
    setShowOnPage(shouldShow);
    
    if (shouldShow) {
      // Show the offer after 3 seconds of page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Don't show if not on a compliance-related page
  if (!showOnPage) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleAddToCart = () => {
    addItem({
      id: 'compliance-health-checkup-199',
      name: 'Compliance Health Checkup - Special Offer',
      price: 199,
      quantity: 1,
    });
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ 
            scale: isClosing ? 0.8 : 1, 
            opacity: isClosing ? 0 : 1, 
            y: isClosing ? 50 : 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: isClosing ? 0.3 : 0.6
          }}
          className="relative bg-white rounded-xl shadow-2xl w-64 max-w-[85vw] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>

          {/* Floating Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-3 right-8 text-yellow-400"
            >
              <Sparkles className="h-2 w-2" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-12 left-4 text-green-400"
            >
              <Star className="h-1.5 w-1.5" />
            </motion.div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
          >
            <X className="h-2.5 w-2.5 text-gray-600" />
          </button>

          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-3 text-white relative">
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full mb-1"
              >
                <Shield className="h-4 w-4 text-white" />
              </motion.div>
              
              <h2 className="text-sm font-bold mb-1">🚨 LIMITED OFFER!</h2>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 inline-block">
                <span className="text-xs font-semibold">⏰ Today only</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 relative">
            <div className="text-center mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">
                Compliance Health Checkup
              </h3>
              <p className="text-gray-600 text-xs mb-2">
                Complete business compliance review
              </p>
              
              {/* Price Display */}
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <span className="text-lg text-gray-400 line-through">₹999</span>
                <span className="text-2xl font-bold text-red-600">₹199</span>
                <div className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full text-xs font-bold">
                  80% OFF
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-1.5 mb-3">
              {[
                'Complete compliance audit',
                'Risk assessment report',
                'Expert recommendations'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <div className="bg-green-100 rounded-full p-0.5 flex-shrink-0">
                    <CheckCircle className="h-2.5 w-2.5 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-xs leading-tight">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Urgency Indicator */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-red-100 rounded-full p-0.5 flex-shrink-0">
                  <Clock className="h-2.5 w-2.5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 text-xs leading-tight">Only 50 spots left!</h4>
                  <p className="text-red-700 text-xs leading-tight">500+ businesses improved</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-1.5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleAddToCart}
                  className="w-full py-2 text-xs font-bold bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform transition-all duration-300"
                  size="sm"
                >
                  🎯 Claim ₹199 Offer!
                </Button>
              </motion.div>
              
              <button
                onClick={handleClose}
                className="w-full py-0.5 text-gray-500 hover:text-gray-700 text-xs transition-colors"
              >
                Maybe later
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-2 text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Shield className="h-1.5 w-1.5" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-1.5 w-1.5" />
                  <span>Expert</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-1.5 w-1.5" />
                  <span>5K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ComplianceOfferWidget;