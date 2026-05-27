'use client';

import { motion } from 'framer-motion';
import { Building2, FileText, Scale, LineChart, ShieldCheck, Landmark } from 'lucide-react';
import Container from '../ui/Container';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Business Registration',
    description: 'Register your business as Pvt Ltd, LLP, OPC or Proprietorship with all necessary compliances.',
    icon: Building2,
    link: '/services#business-registration',
  },
  {
    id: 2,
    title: 'Tax Filing',
    description: 'Simplify your Income Tax, GST returns, and TDS filings with expert assistance.',
    icon: FileText,
    link: '/services#tax-filing',
  },
  {
    id: 3,
    title: 'Legal Services',
    description: 'Get legal documentation, agreements, and consultation from experienced lawyers.',
    icon: Scale,
    link: '/services#legal',
  },
  {
    id: 4,
    title: 'Accounting Services',
    description: 'Professional bookkeeping, financial statements, and accounting support.',
    icon: LineChart,
    link: '/services#accounting',
  },
  {
    id: 5,
    title: 'Compliance Management',
    description: 'Stay compliant with all statutory requirements and regulations for your business.',
    icon: ShieldCheck,
    link: '/services#compliance',
  },
  {
    id: 6,
    title: 'Trademark Registration',
    description: 'Protect your brand identity with trademark registration and intellectual property services.',
    icon: Landmark,
    link: '/services#trademark',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Comprehensive Business Services
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to start, manage, and grow your business with confidence
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesSection;