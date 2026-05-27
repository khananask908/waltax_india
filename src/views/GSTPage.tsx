'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Calculator, Shield } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ComplianceOfferWidget from '../components/offers/ComplianceOfferWidget';

const GSTPage = () => {
  useEffect(() => {
    document.title = 'GST Services - India Filings';
  }, []);

  const gstServices = [
    {
      id: 'gst-registration',
      title: 'GST Registration',
      description: 'Register for GST and ensure compliance with India\'s tax system',
      icon: FileText,
      basePrice: 2999,
      link: '/services/gst-registration',
      features: ['Legal Compliance', 'Input Tax Credit', 'Interstate Business']
    },
    {
      id: 'gst-filing',
      title: 'GST Return Filing by Accountant',
      description: 'Professional GST return filing by qualified accountants',
      icon: Calculator,
      basePrice: 2999,
      link: '/services/gst-filing',
      features: ['Expert Filing', 'Timely Compliance', 'ITC Optimization']
    },
    {
      id: 'gst-compliance',
      title: 'GST Compliance',
      description: 'Comprehensive GST compliance management and monitoring',
      icon: Shield,
      basePrice: 5999,
      link: '/services/gst-compliance',
      features: ['Compliance Management', 'Risk Mitigation', 'Expert Guidance']
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            GST Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete GST registration and filing services for your business. Stay compliant with India's Goods and Services Tax system with our expert assistance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gstServices.map((service, index) => {
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
                    <div className="bg-green-100 rounded-lg p-3 mr-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-green-600 font-semibold">Starting at ₹{service.basePrice.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                      View Details & Plans
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GST Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-12"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-8">
            Why Choose Our GST Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Filing</h3>
              <p className="text-gray-600">Professional accountants handle your GST returns with accuracy and timeliness.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ITC Optimization</h3>
              <p className="text-gray-600">Maximize your input tax credit benefits and reduce overall tax liability.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Assurance</h3>
              <p className="text-gray-600">Stay compliant with all GST regulations and avoid penalties.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Ready to Simplify Your GST Compliance?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our GST experts handle your registration, filing, and compliance needs while you focus on growing your business.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
            Get Started Today
          </Button>
        </motion.div>
      </Container>
      <ComplianceOfferWidget />
    </div>
  );
};

export default GSTPage;