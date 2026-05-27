'use client';

import { motion, useInView } from 'framer-motion';
import { Building2, FileText, Scale, LineChart, ShieldCheck, Landmark, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';
import Container from '../ui/Container';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Business Registration',
    description: 'Register your business as Pvt Ltd, LLP, OPC or Proprietorship with all necessary compliances.',
    icon: Building2,
    link: '/startups',
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'from-blue-600 to-blue-700',
  },
  {
    id: 2,
    title: 'Tax Filing',
    description: 'Simplify your Income Tax, GST returns, and TDS filings with expert assistance.',
    icon: FileText,
    link: '/income-tax',
    color: 'from-green-500 to-green-600',
    hoverColor: 'from-green-600 to-green-700',
  },
  {
    id: 3,
    title: 'Legal Services',
    description: 'Get legal documentation, agreements, and consultation from experienced lawyers.',
    icon: Scale,
    link: '/hire-team',
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'from-purple-600 to-purple-700',
  },
  {
    id: 4,
    title: 'Accounting Services',
    description: 'Professional bookkeeping, financial statements, and accounting support.',
    icon: LineChart,
    link: '/services/book-keeping',
    color: 'from-orange-500 to-orange-600',
    hoverColor: 'from-orange-600 to-orange-700',
  },
  {
    id: 5,
    title: 'Compliance Management',
    description: 'Stay compliant with all statutory requirements and regulations for your business.',
    icon: ShieldCheck,
    link: '/compliance',
    color: 'from-red-500 to-red-600',
    hoverColor: 'from-red-600 to-red-700',
  },
  {
    id: 6,
    title: 'Trademark Registration',
    description: 'Protect your brand identity with trademark registration and intellectual property services.',
    icon: Landmark,
    link: '/services/trademark',
    color: 'from-indigo-500 to-indigo-600',
    hoverColor: 'from-indigo-600 to-indigo-700',
  },
];

const InteractiveServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      } 
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-200/30 to-yellow-200/30 rounded-full blur-3xl" />
      </div>

      <Container>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Comprehensive Solutions</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            <motion.span
              className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Comprehensive Business Services
            </motion.span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to start, manage, and grow your business with confidence
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.id;
            
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="relative group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={service.link}>
                  <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5`}
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating particles for hovered card */}
                    {isHovered && (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {Array.from({ length: 8 }, (_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"
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
                              delay: i * 0.2,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Icon with enhanced animation */}
                      <motion.div 
                        className={`bg-gradient-to-br ${service.color} rounded-xl w-16 h-16 flex items-center justify-center mb-6 relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <Icon className="h-8 w-8 text-white relative z-10" />
                      </motion.div>
                      
                      <div className="flex-grow">
                        <motion.h3 
                          className="text-xl font-semibold text-gray-900 mb-3"
                          animate={isHovered ? { x: 5 } : { x: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-600 mb-6 leading-relaxed"
                          animate={isHovered ? { x: 5 } : { x: 0 }}
                          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                      
                      {/* Enhanced CTA */}
                      <motion.div 
                        className="flex items-center text-primary-600 font-medium group-hover:text-primary-700"
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                      >
                        <span>Learn more</span>
                        <motion.div
                          className="ml-2"
                          animate={isHovered ? { x: 5 } : { x: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Hover border effect */}
                    <motion.div
                      className={`absolute inset-0 border-2 border-transparent rounded-2xl`}
                      animate={isHovered ? { 
                        borderColor: service.color.includes('blue') ? '#3B82F6' :
                                   service.color.includes('green') ? '#10B981' :
                                   service.color.includes('purple') ? '#8B5CF6' :
                                   service.color.includes('orange') ? '#F97316' :
                                   service.color.includes('red') ? '#EF4444' : '#6366F1'
                      } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/startups">
            <motion.div
              className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-200 shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                backgroundColor: "rgba(255,255,255,0.9)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-6 w-6 text-primary-600" />
              </motion.div>
              <span className="text-lg font-semibold text-gray-900">
                Ready to get started? Let's build your business together!
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-6 w-6 text-primary-600" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default InteractiveServicesSection;