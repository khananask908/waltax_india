'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, FileSearch, UserCheck, Award } from 'lucide-react';
import Container from '../ui/Container';

const steps = [
  {
    id: 1,
    title: 'Choose a Service',
    description: 'Select from our comprehensive range of business services that fit your needs.',
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: 'Upload Documents',
    description: 'Securely upload your documents through our easy-to-use platform.',
    icon: FileSearch,
  },
  {
    id: 3,
    title: 'Expert Review',
    description: 'Our experts review your case and guide you through the entire process.',
    icon: UserCheck,
  },
  {
    id: 4,
    title: 'Get Results',
    description: 'Receive your completed filings, registrations, or compliance documents.',
    icon: Award,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            A simple, transparent process designed to make business compliance easy
          </p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-0.5 bg-primary-100 -translate-x-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={step.id}
                  className={`relative ${isEven ? 'md:text-right md:mr-8' : 'md:ml-8'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`md:absolute ${isEven ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} md:top-0 z-10 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white shadow-lg">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="md:hidden ml-4 font-display font-bold text-xl text-primary-600">
                      Step {step.id}
                    </div>
                  </div>
                  
                  <div className={`mt-6 md:mt-0 md:pt-4 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;