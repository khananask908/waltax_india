'use client';

import { motion, useInView } from 'framer-motion';
import { ClipboardCheck, FileSearch, UserCheck, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import Container from '../ui/Container';

const steps = [
  {
    id: 1,
    title: 'Choose a Service',
    description: 'Select from our comprehensive range of business services that fit your needs.',
    icon: ClipboardCheck,
    color: 'from-blue-500 to-blue-600',
    details: ['Browse 50+ services', 'Expert recommendations', 'Transparent pricing']
  },
  {
    id: 2,
    title: 'Upload Documents',
    description: 'Securely upload your documents through our easy-to-use platform.',
    icon: FileSearch,
    color: 'from-green-500 to-green-600',
    details: ['Secure file upload', 'Document verification', 'Real-time tracking']
  },
  {
    id: 3,
    title: 'Expert Review',
    description: 'Our experts review your case and guide you through the entire process.',
    icon: UserCheck,
    color: 'from-purple-500 to-purple-600',
    details: ['Professional review', 'Personal guidance', '24/7 support']
  },
  {
    id: 4,
    title: 'Get Results',
    description: 'Receive your completed filings, registrations, or compliance documents.',
    icon: Award,
    color: 'from-orange-500 to-orange-600',
    details: ['Fast delivery', 'Quality assurance', 'Post-service support']
  },
];

const AnimatedProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <Container>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent bg-[length:200%_100%]">
              How It Works
            </span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            A simple, transparent process designed to make business compliance easy
          </p>
        </motion.div>
        
        <div ref={ref} className="relative max-w-6xl mx-auto">
          {/* Animated progress line */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-1 -translate-x-1/2 z-0">
            <motion.div
              className="w-full bg-gradient-to-b from-primary-200 to-purple-200 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 3, delay: 1 }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              const isActive = activeStep === step.id;
              
              return (
                <motion.div 
                  key={step.id}
                  className={`relative ${isEven ? 'lg:text-right lg:pr-12' : 'lg:pl-12'} ${index >= 2 ? 'lg:mt-8' : ''}`}
                  initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Step number and icon */}
                  <div className={`lg:absolute ${isEven ? 'lg:right-0 lg:translate-x-1/2' : 'lg:left-0 lg:-translate-x-1/2'} lg:top-0 z-10 flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'} mb-6 lg:mb-0`}>
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-xl relative overflow-hidden`}
                        animate={isActive ? { 
                          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                          scale: 1.05
                        } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ scale: 0 }}
                          animate={isActive ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <Icon className="h-10 w-10 relative z-10" />
                        
                        {/* Step number */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg"
                          animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {step.id}
                        </motion.div>
                      </motion.div>
                      
                      {/* Floating particles around icon */}
                      {isActive && (
                        <div className="absolute inset-0">
                          {Array.from({ length: 6 }, (_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <motion.div 
                    className={`lg:pt-6 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}
                    animate={isActive ? { x: isEven ? -10 : 10 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
                      animate={isActive ? { 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background gradient on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0`}
                        animate={isActive ? { opacity: 0.05 } : { opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                        
                        {/* Step details */}
                        <motion.div
                          className="space-y-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={isActive ? { opacity: 1, height: "auto" } : { opacity: 0.7, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.8, x: 0 }}
                              transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        {/* Arrow indicator */}
                        {index < steps.length - 1 && (
                          <motion.div
                            className="flex justify-center mt-6"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ArrowRight className="h-6 w-6 text-gray-400" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-8 py-4 rounded-2xl shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-lg font-semibold">Ready to start your journey?</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AnimatedProcessSection;