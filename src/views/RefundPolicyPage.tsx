'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Clock, CheckCircle, XCircle } from 'lucide-react';
import Container from '../components/ui/Container';

const RefundPolicyPage = () => {
  useEffect(() => {
    document.title = 'Refund Policy - WalTax India';
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
            Refund Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We strive to provide excellent service and customer satisfaction. Please review our refund policy to understand your rights and our commitments.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 1, 2024
          </div>
        </motion.div>

        {/* Refund Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: CheckCircle, title: 'Eligible', desc: 'Service not started', color: 'green' },
            { icon: Clock, title: 'Partial', desc: 'Work in progress', color: 'yellow' },
            { icon: XCircle, title: 'Non-eligible', desc: 'Service completed', color: 'red' },
            { icon: RefreshCw, title: 'Processing', desc: '5-7 business days', color: 'blue' }
          ].map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className={`bg-${category.color}-100 rounded-lg p-3 w-fit mx-auto mb-4`}>
                  <Icon className={`h-6 w-6 text-${category.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Refund Policy Content */}
        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Eligibility</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">✓ Full Refund Eligible</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Service not yet started or initiated</li>
                  <li>Cancellation within 24 hours of payment</li>
                  <li>Service failure due to our error or negligence</li>
                  <li>Duplicate payment made by mistake</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-yellow-600 mb-3">⚠ Partial Refund Eligible</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Service partially completed but cancelled by client</li>
                  <li>Government rejection due to client-provided incorrect information</li>
                  <li>Client decides to change service type mid-process</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">✗ Non-Refundable</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Service completed and delivered successfully</li>
                  <li>Government fees (always non-refundable)</li>
                  <li>Third-party charges and processing fees</li>
                  <li>Consultation fees for completed sessions</li>
                  <li>Digital signature certificates issued</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <span className="text-primary-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Submit Refund Request</h3>
                  <p className="text-gray-700">Contact our support team with your order details and reason for refund request.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <span className="text-primary-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Review and Verification</h3>
                  <p className="text-gray-700">Our team will review your request and verify eligibility within 2-3 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <span className="text-primary-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Approval and Processing</h3>
                  <p className="text-gray-700">Once approved, refunds are processed within 5-7 business days to your original payment method.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <span className="text-primary-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Confirmation</h3>
                  <p className="text-gray-700">You will receive an email confirmation once the refund has been processed.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Government Fees</h4>
                <p className="text-yellow-700">Government fees paid to authorities are non-refundable under any circumstances as they are processed directly by government departments.</p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Processing Time</h4>
                <p className="text-blue-700">Refund processing time may vary depending on your bank or payment provider. We initiate refunds promptly, but final credit timing depends on your financial institution.</p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h4 className="font-semibold text-red-800 mb-2">Service Completion</h4>
                <p className="text-red-700">Once a service is completed and documents are delivered, no refunds will be processed. Please review all deliverables carefully.</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-primary-50 rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help with Refunds?</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about our refund policy or need to request a refund, please contact our support team:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-700">refunds@waltaxindia.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-700">+91 7358 7358 00</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Support Hours</h4>
                <p className="text-gray-700">Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </motion.section>
        </div>
      </Container>
    </div>
  );
};

export default RefundPolicyPage;