'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Users, AlertTriangle } from 'lucide-react';
import Container from '../components/ui/Container';

const TermsPage = () => {
  useEffect(() => {
    document.title = 'Terms and Conditions - WalTax India';
  }, []);

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: `By accessing and using the WalTax India website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'services',
      title: 'Services Provided',
      icon: Shield,
      content: `WalTax India provides business registration, tax filing, compliance, and legal services. We act as intermediaries between clients and government authorities. All services are subject to government approval and processing times.`
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Users,
      content: `Users are responsible for providing accurate and complete information. Any false or misleading information may result in service delays or cancellation. Users must comply with all applicable laws and regulations.`
    },
    {
      id: 'limitations',
      title: 'Limitations of Liability',
      icon: AlertTriangle,
      content: `WalTax India shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our liability is limited to the amount paid for the specific service in question.`
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gray-50">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our services. These terms govern your use of WalTax India services and website.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 1, 2024
          </div>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <Icon className="h-5 w-5 text-primary-600" />
                  <span className="font-medium text-gray-900">{section.title}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Terms Content */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-100 rounded-lg p-3">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              </motion.section>
            );
          })}

          {/* Detailed Terms */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Terms</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Service Delivery</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Service timelines are estimates and may vary based on government processing</li>
                  <li>• Additional documents may be requested during the process</li>
                  <li>• Government fees are separate from our service charges</li>
                  <li>• Refunds are subject to our refund policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Payment Terms</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Payment is required before service commencement</li>
                  <li>• All prices are in Indian Rupees (INR)</li>
                  <li>• Government fees are additional and non-refundable</li>
                  <li>• Service charges are non-refundable once work has commenced</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• All content on this website is owned by WalTax India</li>
                  <li>• Users may not reproduce or distribute our content without permission</li>
                  <li>• Client documents and information remain confidential</li>
                  <li>• We respect and protect client intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Privacy and Data Protection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• We collect and process personal data as per our Privacy Policy</li>
                  <li>• Client information is kept confidential and secure</li>
                  <li>• Data may be shared with government authorities as required</li>
                  <li>• We implement appropriate security measures to protect data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Termination</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Either party may terminate services with written notice</li>
                  <li>• Termination does not affect completed work or payments due</li>
                  <li>• We reserve the right to terminate services for breach of terms</li>
                  <li>• Client data will be returned upon termination as per agreement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Governing Law</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• These terms are governed by Indian law</li>
                  <li>• Disputes will be resolved through arbitration in Chennai</li>
                  <li>• Courts in Chennai have exclusive jurisdiction</li>
                  <li>• Terms are subject to change with notice</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary-50 rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About These Terms?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-700">support@waltaxindia.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-700">+91 7358 7358 00</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-700">
                  No. 17, First Floor, First Street,<br />
                  Padmanabha Nagar, Adyar,<br />
                  Chennai - 600020
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;