'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

const FAQSection = ({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary-100 rounded-lg p-2">
          <HelpCircle className="h-6 w-6 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.button
              className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleFAQ(index)}
              whileHover={{ backgroundColor: "#f9fafb" }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      {/* Contact support */}
      <motion.div
        className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
        <p className="text-gray-600 text-sm mb-3">
          Our expert team is here to help you with any additional questions or concerns.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            href="tel:+917358735800"
            className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call: +91 7358 7358 00
          </motion.a>
          <motion.a
            href="mailto:support@waltaxindia.com"
            className="inline-flex items-center justify-center px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Support
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;