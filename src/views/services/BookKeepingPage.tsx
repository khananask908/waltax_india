'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const BookKeepingPage = () => {
  const benefits = [
    "Professional bookkeeping services",
    "Accurate financial record maintenance",
    "Regular financial reporting",
    "Expert guidance on accounting",
    "Compliance with accounting standards",
    "Dedicated accounting support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 4999,
      originalPrice: 7499,
      description: 'Essential bookkeeping services',
      features: [
        'Monthly Bookkeeping',
        'Financial Statements',
        'Expert Review',
        'Basic Reporting',
        'Email Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 7999,
      originalPrice: 11999,
      popular: true,
      description: 'Complete bookkeeping package',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'Advanced Reporting',
        'Tax Preparation Support',
        'Priority Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Book-keeping"
      description="Professional bookkeeping services to maintain accurate financial records and ensure compliance with accounting standards for your business."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default BookKeepingPage;