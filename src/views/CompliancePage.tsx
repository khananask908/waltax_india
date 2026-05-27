'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Briefcase, Building2, Shield, Building, Heart, TreePine, Globe, Factory, Calculator } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ComplianceOfferWidget from '../components/offers/ComplianceOfferWidget';

const CompliancePage = () => {
  useEffect(() => {
    document.title = 'Compliance Services - India Filings';
  }, []);

  const complianceServices = [
    {
      id: 'proprietorship-compliance',
      title: 'Proprietorship Compliance',
      description: 'Complete compliance management for proprietorship businesses',
      icon: Users,
      basePrice: 2999,
      link: '/services/proprietorship-compliance',
      features: ['Annual Review', 'Regulatory Updates', 'Expert Guidance']
    },
    {
      id: 'partnership-compliance',
      title: 'Partnership Compliance',
      description: 'Comprehensive compliance for partnership firms',
      icon: Briefcase,
      basePrice: 4999,
      link: '/services/partnership-compliance',
      features: ['Partnership Compliance', 'Agreement Updates', 'Legal Support']
    },
    {
      id: 'opc-compliance',
      title: 'One Person Company Compliance',
      description: 'MCA compliance management for OPC',
      icon: Building2,
      basePrice: 7999,
      link: '/services/opc-compliance',
      features: ['MCA Filings', 'Board Resolutions', 'Annual Compliance']
    },
    {
      id: 'llp-compliance',
      title: 'LLP Compliance',
      description: 'Complete LLP compliance and MCA filings',
      icon: Shield,
      basePrice: 6999,
      link: '/services/llp-compliance',
      features: ['Annual Filings', 'Statement of Accounts', 'LLP Compliance']
    },
    {
      id: 'pvt-ltd-compliance',
      title: 'Private Limited Compliance',
      description: 'Comprehensive compliance for private limited companies',
      icon: Building,
      basePrice: 9999,
      link: '/services/pvt-ltd-compliance',
      features: ['MCA Compliance', 'Board Meetings', 'Annual Filings']
    },
    {
      id: 'section-8-compliance',
      title: 'Section 8 Company Compliance',
      description: 'Non-profit compliance and regulatory management',
      icon: Heart,
      basePrice: 8999,
      link: '/services/section-8-compliance',
      features: ['Non-profit Compliance', 'MCA Filings', 'Regulatory Support']
    },
    {
      id: 'trust-compliance',
      title: 'Trust Registration Compliance',
      description: 'Complete compliance management for trusts',
      icon: TreePine,
      basePrice: 5999,
      link: '/services/trust-compliance',
      features: ['Trust Returns', 'Legal Compliance', 'Regulatory Updates']
    },
    {
      id: 'public-ltd-compliance',
      title: 'Public Limited Compliance',
      description: 'Comprehensive compliance for public companies',
      icon: Globe,
      basePrice: 19999,
      link: '/services/public-ltd-compliance',
      features: ['MCA & SEBI Compliance', 'Board Meetings', 'Public Disclosures']
    },
    {
      id: 'producer-compliance',
      title: 'Producer Company Compliance',
      description: 'Specialized compliance for producer companies',
      icon: Factory,
      basePrice: 12999,
      link: '/services/producer-compliance',
      features: ['Producer Compliance', 'MCA Filings', 'Agricultural Support']
    },
    {
      id: 'subsidiary-compliance',
      title: 'Indian Subsidiary Compliance',
      description: 'FEMA and MCA compliance for subsidiaries',
      icon: Building,
      basePrice: 15999,
      link: '/services/subsidiary-compliance',
      features: ['FEMA Compliance', 'MCA Filings', 'Subsidiary Support']
    },
    {
      id: 'book-keeping',
      title: 'Book-keeping',
      description: 'Professional bookkeeping and financial record maintenance',
      icon: Calculator,
      basePrice: 4999,
      link: '/services/book-keeping',
      features: ['Financial Records', 'Monthly Bookkeeping', 'Expert Support']
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Compliance Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay compliant with all regulatory requirements. Our comprehensive compliance services ensure your business meets all statutory obligations and avoids penalties.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complianceServices.map((service, index) => {
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
                    <div className="bg-purple-100 rounded-lg p-3 mr-4">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-purple-600 font-semibold">Starting at ₹{service.basePrice.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                      View Details & Plans
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-12"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-8">
            Why Compliance Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Avoid Penalties</h3>
              <p className="text-gray-600">Stay compliant and avoid costly penalties and legal issues.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Credibility</h3>
              <p className="text-gray-600">Maintain professional credibility with stakeholders and authorities.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Management</h3>
              <p className="text-gray-600">Professional handling of all compliance requirements and filings.</p>
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
            Let Us Handle Your Compliance
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Focus on growing your business while we ensure you stay compliant with all regulatory requirements and deadlines.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
            Get Compliance Support
          </Button>
        </motion.div>
      </Container>
      <ComplianceOfferWidget />
    </div>
  );
};

export default CompliancePage;