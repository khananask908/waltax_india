'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const BusinessTaxFilingPage = () => {
  const benefits = [
    "Professional business tax preparation",
    "Maximum deductions and savings",
    "Expert review and optimization",
    "Timely filing and compliance",
    "Comprehensive tax planning",
    "Dedicated tax consultant support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 4999,
      originalPrice: 7999,
      description: 'Essential business tax filing',
      features: [
        'Business Tax Return Filing',
        'Expert Review',
        'Tax Calculation',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 7999,
      originalPrice: 11999,
      popular: true,
      description: 'Complete package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Tax Consultations',
        'Tax Planning Advice',
        'Deduction Optimization',
        'Year-round Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Business Tax Filing"
      description="Professional business tax filing service with expert guidance to maximize deductions and ensure compliance with tax regulations."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default BusinessTaxFilingPage;