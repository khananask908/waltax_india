'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const GSTFilingPage = () => {
  const benefits = [
    "Professional GST return preparation",
    "Timely filing to avoid penalties",
    "Expert review and verification",
    "Input tax credit optimization",
    "Compliance with GST regulations",
    "Dedicated accountant support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4999,
      description: 'Essential GST return filing',
      features: [
        'Monthly GST Return Filing',
        'Expert Review',
        'Tax Calculation',
        'E-filing Support',
        'Filing Acknowledgment'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 4999,
      originalPrice: 7999,
      popular: true,
      description: 'Complete package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'ITC Optimization',
        'Compliance Calendar',
        'Year-round Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="GST Return Filing by Accountant"
      description="Professional GST return filing service by qualified accountants to ensure accurate and timely compliance with GST regulations."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default GSTFilingPage;