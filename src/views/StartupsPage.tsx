'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Users, Shield, FileText, Briefcase, Heart, Globe, Factory, TreePine, Building } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const StartupsPage = () => {
  useEffect(() => {
    document.title = 'Startup Services - India Filings';
  }, []);

  const startupServices = [
    {
      id: 'proprietorship',
      title: 'Proprietorship',
      description: 'Simplest form of business registration for individual entrepreneurs',
      icon: Users,
      basePrice: 2999,
      link: '/services/proprietorship',
      features: ['Quick Registration', 'Minimal Compliance', 'Full Control']
    },
    {
      id: 'partnership',
      title: 'Partnership',
      description: 'Shared responsibility and resources between partners',
      icon: Briefcase,
      basePrice: 4999,
      link: '/services/partnership',
      features: ['Shared Resources', 'Flexible Profit Sharing', 'Easy Formation']
    },
    {
      id: 'one-person-company',
      title: 'One Person Company',
      description: 'Limited liability protection for single entrepreneur',
      icon: Building2,
      basePrice: 6999,
      link: '/services/one-person-company',
      features: ['Limited Liability', 'Single Owner', 'Professional Status']
    },
    {
      id: 'llp',
      title: 'Limited Liability Partnership',
      description: 'Combine partnership flexibility with limited liability',
      icon: Shield,
      basePrice: 7999,
      link: '/services/llp',
      features: ['Limited Liability', 'Flexible Management', 'Tax Benefits']
    },
    {
      id: 'private-limited',
      title: 'Private Limited Company',
      description: 'Most popular structure for startups and growing businesses',
      icon: Building,
      basePrice: 8999,
      link: '/services/private-limited',
      features: ['Limited Liability', 'Easy Fundraising', 'Professional Credibility']
    },
    {
      id: 'section-8',
      title: 'Section 8 Company',
      description: 'Non-profit organization with tax exemptions',
      icon: Heart,
      basePrice: 12999,
      link: '/services/section-8',
      features: ['Tax Exemptions', 'Non-profit Status', 'Social Impact']
    },
    {
      id: 'trust-registration',
      title: 'Trust Registration',
      description: 'For charitable, religious, or educational purposes',
      icon: TreePine,
      basePrice: 5999,
      link: '/services/trust-registration',
      features: ['Tax Benefits', 'Charitable Work', 'Legal Recognition']
    },
    {
      id: 'public-limited',
      title: 'Public Limited Company',
      description: 'Raise capital from public investors and list on exchanges',
      icon: Globe,
      basePrice: 25999,
      link: '/services/public-limited',
      features: ['Public Funding', 'Stock Exchange Listing', 'Enhanced Credibility']
    },
    {
      id: 'producer-company',
      title: 'Producer Company',
      description: 'Designed specifically for agricultural producers',
      icon: Factory,
      basePrice: 15999,
      link: '/services/producer-company',
      features: ['Agricultural Focus', 'Collective Bargaining', 'Government Support']
    },
    {
      id: 'indian-subsidiary',
      title: 'Indian Subsidiary',
      description: 'Establish local presence for foreign companies',
      icon: Building2,
      basePrice: 35999,
      link: '/services/indian-subsidiary',
      features: ['Local Presence', 'Market Access', 'Regulatory Compliance']
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Startup Registration Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect business structure for your startup. From simple proprietorship to complex corporate structures, we help you register your business with complete legal compliance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startupServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-primary-600 font-semibold">Starting at ₹{service.basePrice.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                      View Details & Plans
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center bg-white rounded-3xl shadow-xl p-12"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Not Sure Which Structure is Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts can help you choose the perfect business structure based on your specific needs, goals, and industry requirements.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700">
            Get Free Consultation
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default StartupsPage;