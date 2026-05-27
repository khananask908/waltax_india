'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Calculator, Building, Users, AlertTriangle, CreditCard, Receipt, Bell } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ComplianceOfferWidget from '../components/offers/ComplianceOfferWidget';

const IncomeTaxPage = () => {
  useEffect(() => {
    document.title = 'Income Tax Services - India Filings';
  }, []);

  const incomeTaxServices = [
    {
      id: 'income-tax-filing',
      title: 'Income Tax E-filing',
      description: 'Professional income tax return filing with expert guidance',
      icon: FileText,
      basePrice: 1999,
      link: '/services/income-tax-filing',
      features: ['Expert Filing', 'Tax Optimization', 'Timely Submission']
    },
    {
      id: 'business-tax-filing',
      title: 'Business Tax Filing',
      description: 'Comprehensive business tax preparation and filing services',
      icon: Building,
      basePrice: 4999,
      link: '/services/business-tax-filing',
      features: ['Business Returns', 'Deduction Optimization', 'Expert Review']
    },
    {
      id: 'itr-1',
      title: 'ITR 1 Return Filing',
      description: 'Simple filing for salary income and pension',
      icon: Users,
      basePrice: 999,
      link: '/services/itr-1',
      features: ['Salary Income', 'Simple Filing', 'Quick Processing']
    },
    {
      id: 'itr-2',
      title: 'ITR 2 Return Filing',
      description: 'For individuals with capital gains and multiple income sources',
      icon: Calculator,
      basePrice: 1999,
      link: '/services/itr-2',
      features: ['Capital Gains', 'Multiple Income', 'Expert Handling']
    },
    {
      id: 'itr-3',
      title: 'ITR 3 Return Filing',
      description: 'Business and professional income filing',
      icon: Building,
      basePrice: 2999,
      link: '/services/itr-3',
      features: ['Business Income', 'P&L Statements', 'Professional Filing']
    },
    {
      id: 'itr-4',
      title: 'ITR 4 Return Filing',
      description: 'Presumptive taxation scheme for small businesses',
      icon: Receipt,
      basePrice: 1999,
      link: '/services/itr-4',
      features: ['Presumptive Scheme', 'Simplified Filing', 'Small Business']
    },
    {
      id: 'itr-5',
      title: 'ITR 5 Return Filing',
      description: 'Partnership firms and LLP tax returns',
      icon: Users,
      basePrice: 4999,
      link: '/services/itr-5',
      features: ['Partnership Returns', 'LLP Filing', 'Profit Distribution']
    },
    {
      id: 'itr-6',
      title: 'ITR 6 Return Filing',
      description: 'Corporate tax returns for companies',
      icon: Building,
      basePrice: 7999,
      link: '/services/itr-6',
      features: ['Corporate Returns', 'Company Filing', 'Tax Planning']
    },
    {
      id: 'itr-7',
      title: 'ITR 7 Return Filing',
      description: 'Trust and charitable organization returns',
      icon: FileText,
      basePrice: 5999,
      link: '/services/itr-7',
      features: ['Trust Returns', 'Charitable Orgs', 'Exempt Income']
    },
    {
      id: '15ca-15cb',
      title: '15CA-15CB Filing',
      description: 'Foreign remittance compliance and certification',
      icon: CreditCard,
      basePrice: 2999,
      link: '/services/15ca-15cb',
      features: ['Foreign Remittance', 'CA Certification', 'TDS Compliance']
    },
    {
      id: 'tan-registration',
      title: 'TAN Registration',
      description: 'Tax Deduction Account Number registration',
      icon: Receipt,
      basePrice: 1999,
      link: '/services/tan-registration',
      features: ['TDS Compliance', 'Legal Requirement', 'Quick Registration']
    },
    {
      id: 'tds-filing',
      title: 'TDS Return Filing',
      description: 'Professional TDS return preparation and filing',
      icon: Calculator,
      basePrice: 2999,
      link: '/services/tds-filing',
      features: ['TDS Returns', 'Accurate Filing', 'Penalty Avoidance']
    },
    {
      id: 'income-tax-notice',
      title: 'Income Tax Notice',
      description: 'Expert assistance for handling tax notices',
      icon: AlertTriangle,
      basePrice: 4999,
      link: '/services/income-tax-notice',
      features: ['Notice Handling', 'Expert Response', 'Legal Support']
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Income Tax Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional income tax filing and advisory services. From individual returns to corporate filings, we ensure accurate and timely tax compliance with maximum savings.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {incomeTaxServices.map((service, index) => {
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
                    <div className="bg-orange-100 rounded-lg p-3 mr-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-orange-600 font-semibold">Starting at ₹{service.basePrice.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
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
            Maximize Your Tax Savings
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our tax experts ensure you claim all eligible deductions and file your returns accurately and on time. Don't let tax compliance stress you out.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            Start Your Tax Filing
          </Button>
        </motion.div>
      </Container>
      <ComplianceOfferWidget />
    </div>
  );
};

export default IncomeTaxPage;