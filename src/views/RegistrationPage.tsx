'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Building, FileText, Globe, Shield, Truck, Users, Zap, Factory, Landmark, Star, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ComplianceOfferWidget from '../components/offers/ComplianceOfferWidget';

const RegistrationPage = () => {
  useEffect(() => {
    document.title = 'Business Registration Services - India Filings';
  }, []);

  const registrationServices = [
    {
      id: 'startup-india',
      title: 'Startup India Registration',
      description: 'Get government recognition and unlock tax benefits for your startup',
      icon: Star,
      basePrice: 4999,
      link: '/services/startup-india',
      features: ['Government Recognition', 'Tax Exemptions', 'Fast-track Patents']
    },
    {
      id: 'trade-license',
      title: 'Trade License',
      description: 'Legal authorization to conduct business operations',
      icon: Building,
      basePrice: 3999,
      link: '/services/trade-license',
      features: ['Legal Authorization', 'Municipal Compliance', 'Business Credibility']
    },
    {
      id: 'fssai',
      title: 'FSSAI Registration/License',
      description: 'Mandatory for food business operations and safety compliance',
      icon: CheckCircle,
      basePrice: 2999,
      link: '/services/fssai',
      features: ['Food Safety Compliance', 'Consumer Trust', 'Legal Requirement']
    },
    {
      id: 'import-export-code',
      title: 'Import Export Code',
      description: 'Essential for international trade and customs clearance',
      icon: Globe,
      basePrice: 2999,
      link: '/services/import-export-code',
      features: ['International Trade', 'Customs Clearance', 'Export Benefits']
    },
    {
      id: 'iso-registration',
      title: 'ISO Registration',
      description: 'International quality certification for enhanced credibility',
      icon: Award,
      basePrice: 15999,
      link: '/services/iso-registration',
      features: ['Quality Certification', 'Global Recognition', 'Competitive Advantage']
    },
    {
      id: 'pf-esi',
      title: 'PF/ESI Registration',
      description: 'Mandatory social security registration for employees',
      icon: Shield,
      basePrice: 3999,
      link: '/services/pf-esi',
      features: ['Employee Benefits', 'Legal Compliance', 'Social Security']
    },
    {
      id: '12a-80g',
      title: '12A and 80G Registration',
      description: 'Tax exemption status for charitable organizations',
      icon: FileText,
      basePrice: 7999,
      link: '/services/12a-80g',
      features: ['Tax Exemption', 'Donor Benefits', 'NGO Credibility']
    },
    {
      id: 'darpan',
      title: 'DARPAN Registration',
      description: 'Unique identification for NGOs and access to government schemes',
      icon: Users,
      basePrice: 2999,
      link: '/services/darpan',
      features: ['NGO Identification', 'Government Schemes', 'CSR Funding']
    },
    {
      id: 'shop-act',
      title: 'Shop Act Registration',
      description: 'Registration under Shop and Establishment Act',
      icon: Building,
      basePrice: 2999,
      link: '/services/shop-act',
      features: ['Legal Authorization', 'Employee Welfare', 'Business License']
    },
    {
      id: 'udyam',
      title: 'UDYAM Registration',
      description: 'MSME registration for government benefits and subsidies',
      icon: Factory,
      basePrice: 1999,
      link: '/services/udyam',
      features: ['MSME Benefits', 'Government Subsidies', 'Priority Lending']
    },
    {
      id: 'fcra',
      title: 'FCRA Registration',
      description: 'Authorization for receiving foreign contributions',
      icon: Globe,
      basePrice: 25999,
      link: '/services/fcra',
      features: ['Foreign Funding', 'International Donations', 'Legal Authorization']
    },
    {
      id: 'trademark',
      title: 'Trademark Registration',
      description: 'Protect your brand identity and intellectual property',
      icon: Landmark,
      basePrice: 6999,
      link: '/services/trademark',
      features: ['Brand Protection', 'Exclusive Rights', 'Asset Creation']
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Business Registration Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete your business registration requirements with our comprehensive services. From licenses to certifications, we ensure your business is fully compliant and ready to operate.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registrationServices.map((service, index) => {
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
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-blue-600 font-semibold">Starting at ₹{service.basePrice.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
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
            Need Help Choosing the Right Registration?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our compliance experts can guide you through the registration process and help you understand which licenses and certifications your business needs.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            Get Expert Consultation
          </Button>
        </motion.div>
      </Container>
      <ComplianceOfferWidget />
    </div>
  );
};

export default RegistrationPage;