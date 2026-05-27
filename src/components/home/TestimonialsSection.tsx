'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../ui/Container';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'CEO, TechVentures',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content: 'India Filings made the process of incorporating my tech startup incredibly smooth. Their team guided me through each step and helped me understand the compliance requirements.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Founder, Organic Foods',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content: 'As a first-time entrepreneur, I had many questions about business registration. The team at India Filings was patient, knowledgeable, and made the process stress-free.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Director, Singh & Associates',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content: 'We\'ve been using India Filings for all our compliance and tax filing needs for over 3 years. Their expertise and prompt service has saved us time and resources.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied business owners who trust India Filings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">5000+</p>
                <p className="text-gray-600">Businesses Registered</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">15000+</p>
                <p className="text-gray-600">Tax Returns Filed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">98%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">24/7</p>
                <p className="text-gray-600">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;