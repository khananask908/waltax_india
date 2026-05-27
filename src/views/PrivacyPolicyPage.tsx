'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database } from 'lucide-react';
import Container from '../components/ui/Container';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - WalTax India';
  }, []);

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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and protect your data.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 1, 2024
          </div>
        </motion.div>

        {/* Privacy Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Shield, title: 'Data Protection', desc: 'Your data is encrypted and secure' },
            { icon: Eye, title: 'Transparency', desc: 'Clear information about data usage' },
            { icon: Lock, title: 'Access Control', desc: 'Strict access controls and permissions' },
            { icon: Database, title: 'Data Minimization', desc: 'We collect only necessary information' }
          ].map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-primary-100 rounded-lg p-3 w-fit mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-600">{principle.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create an account or use our services</li>
                <li>Fill out forms or provide documents</li>
                <li>Contact us for support or inquiries</li>
                <li>Subscribe to our newsletter or updates</li>
              </ul>
              <p>This may include personal information such as name, email address, phone number, business details, and financial information necessary for our services.</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Comply with legal obligations and government requirements</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Government Authorities:</strong> As required for business registration and compliance services</li>
                <li><strong>Service Providers:</strong> With trusted third parties who assist in our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
              <p>We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection practices</li>
                <li>Secure data centers and infrastructure</li>
              </ul>
              <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-primary-50 rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-700">privacy@waltaxindia.com</p>
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

export default PrivacyPolicyPage;