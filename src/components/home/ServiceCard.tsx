'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    link: string;
  };
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceCard = ({ service }: ServiceProps) => {
  const { title, description, icon: Icon, link } = service;
  
  return (
    <motion.div 
      variants={item}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <Link href={link}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;