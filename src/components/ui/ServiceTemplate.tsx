'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Shield, Clock, Award } from 'lucide-react';
import Container from './Container';
import PricingCard from './PricingCard';
import VideoSection from './VideoSection';
import FAQSection from './FAQSection';
import { initializeRazorpay } from '../../utils/razorpay';

interface ServiceTemplateProps {
  title: string;
  description: string;
  benefits: string[];
  videoId?: string;
  pricingPlans: any[];
  isStartupService?: boolean;
  serviceDescription?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

const ServiceTemplate = ({ 
  title, 
  description, 
  benefits, 
  videoId = "dQw4w9WgXcQ", 
  pricingPlans,
  isStartupService = false,
  serviceDescription,
  faqs = []
}: ServiceTemplateProps) => {
  useEffect(() => {
    document.title = `${title} - WalTax India`;
    
    // Preload Razorpay for faster checkout
    initializeRazorpay().catch(console.error);
  }, [title]);

  // Default service description if not provided
  const defaultDescription = `Our ${title.toLowerCase()} service provides comprehensive support for your business needs. We handle all the paperwork, government filings, and compliance requirements so you can focus on growing your business. Our expert team ensures a smooth and hassle-free experience from start to finish.

With years of experience in the industry, we understand the complexities involved in ${title.toLowerCase()} and provide personalized guidance throughout the process. Our transparent pricing, dedicated support, and commitment to excellence make us the preferred choice for thousands of businesses across India.

We offer end-to-end solutions including document preparation, government liaison, compliance management, and post-service support. Our digital-first approach ensures faster processing times while maintaining the highest standards of accuracy and security.

Whether you're a first-time entrepreneur or an established business owner, our ${title.toLowerCase()} service is designed to meet your specific requirements. We provide regular updates on your application status and are always available to answer your questions and address any concerns.

Choose our ${title.toLowerCase()} service for a reliable, efficient, and cost-effective solution that delivers results. Join thousands of satisfied customers who have successfully completed their ${title.toLowerCase()} with our expert assistance.`;

  // Default FAQs if not provided
  const defaultFAQs = [
    {
      question: `What documents are required for ${title}?`,
      answer: `The required documents vary based on your specific case, but typically include identity proof, address proof, and business-related documents. Our team will provide you with a comprehensive list of required documents after reviewing your requirements.`
    },
    {
      question: `How long does the ${title} process take?`,
      answer: `The processing time depends on various factors including government processing times and document completeness. Typically, it takes 7-15 working days. We provide regular updates on your application status throughout the process.`
    },
    {
      question: `What is included in your service fee?`,
      answer: `Our service fee includes expert consultation, document preparation, government filing, and post-service support. Government fees are additional and will be clearly mentioned in your quote.`
    },
    {
      question: `Do you provide post-service support?`,
      answer: `Yes, we provide comprehensive post-service support including compliance guidance, renewal reminders, and assistance with any queries related to your ${title}.`
    },
    {
      question: `Is my information secure with you?`,
      answer: `Absolutely. We follow strict data security protocols and maintain complete confidentiality of your personal and business information. Your data is encrypted and stored securely.`
    },
    {
      question: `Can I track the progress of my application?`,
      answer: `Yes, you can track your application progress through our customer portal. We also provide regular updates via email and SMS throughout the process.`
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Video and Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Video Section - 1/4 of screen width */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-fit sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Play className="h-5 w-5 text-primary-600" />
                Service Video
              </h3>
              
              {/* Enhanced Video Player */}
              <div className="relative mb-6 rounded-xl overflow-hidden bg-gray-900 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm text-gray-600 leading-relaxed">
                  Watch our expert explain the {title.toLowerCase()} process step by step
                </div>
                
                {/* Quick highlights */}
                <div className="bg-primary-50 rounded-lg p-3 border border-primary-100">
                  <h5 className="font-semibold text-primary-900 text-sm mb-2">Quick Highlights:</h5>
                  <ul className="text-xs text-primary-800 space-y-1">
                    <li>• Expert guidance</li>
                    <li>• 100% online process</li>
                    <li>• Dedicated support</li>
                    <li>• Fast processing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description Section - 3/4 of screen width */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                About {title}
              </h2>
              
              <div className="prose prose-gray max-w-none mb-8">
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {(serviceDescription || defaultDescription).split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Benefits Grid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our {title} Service?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary-100 rounded-lg p-3 flex-shrink-0">
                          {index % 4 === 0 && <Shield className="h-6 w-6 text-primary-600" />}
                          {index % 4 === 1 && <Clock className="h-6 w-6 text-primary-600" />}
                          {index % 4 === 2 && <Award className="h-6 w-6 text-primary-600" />}
                          {index % 4 === 3 && <Play className="h-6 w-6 text-primary-600" />}
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">{benefit}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Choose Your Plan
          </h2>
          <div className={`grid gap-8 ${
            pricingPlans.length === 3 ? 'lg:grid-cols-3' : 
            pricingPlans.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 
            'lg:grid-cols-1 max-w-md mx-auto'
          }`}>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                serviceName={title}
              />
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FAQSection 
            faqs={faqs.length > 0 ? faqs : defaultFAQs}
            title={`${title} - Frequently Asked Questions`}
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default ServiceTemplate;