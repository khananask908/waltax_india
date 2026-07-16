'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Button from './Button';
import { useCartStore } from '../../store/cartStore';
import { getCurrentUser } from '../../lib/auth';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  description: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  serviceName: string;
  onSelect?: () => void;
}

const PricingCard = ({ plan, serviceName, onSelect }: PricingCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!getCurrentUser()) {
      window.location.href = '/login?redirect=%2Fdashboard';
      return;
    }

    console.log('Adding to cart:', {
      id: `${serviceName}-${plan.id}`,
      name: `${serviceName} - ${plan.name}`,
      price: plan.price,
      quantity: 1,
    });
    
    addItem({
      id: `${serviceName}-${plan.id}`,
      name: `${serviceName} - ${plan.name}`,
      price: plan.price,
      quantity: 1,
    });
    
    // Show success feedback
    const button = document.querySelector(`[data-plan-id="${plan.id}"]`) as HTMLButtonElement;
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Added to Cart ✓';
      button.style.backgroundColor = '#10B981';
      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
      }, 2000);
    }
    
    if (onSelect) onSelect();
  };

  return (
    <motion.div
      className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        plan.popular 
          ? 'border-primary-500 ring-4 ring-primary-100' 
          : 'border-gray-200 hover:border-primary-300'
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="h-4 w-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-gray-600 text-sm">{plan.description}</p>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2">
            {plan.originalPrice && (
              <span className="text-2xl text-gray-400 line-through">₹{plan.originalPrice.toLocaleString()}</span>
            )}
            <span className="text-4xl font-bold text-gray-900">₹{plan.price.toLocaleString()}</span>
          </div>
          <p className="text-gray-500 mt-1">One-time payment</p>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={handleAddToCart}
          data-plan-id={plan.id}
          className={`w-full py-3 text-lg font-semibold ${
            plan.popular
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700'
              : 'bg-gray-900 hover:bg-gray-800'
          }`}
          size="lg"
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;