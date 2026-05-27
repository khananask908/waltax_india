'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const IncomeTaxFilingPage = () => {
  const benefits = [
    "Expert preparation of income tax returns",
    "Maximum deductions and tax savings",
    "Error-free filing with professional review",
    "Timely submission to avoid penalties",
    "Comprehensive tax planning advice",
    "Support for tax notices and queries"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 1999,
      originalPrice: 2999,
      description: 'Essential income tax filing',
      features: [
        'Income Tax Return Filing',
        'Expert Review',
        'Tax Calculation',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 3499,
      originalPrice: 4999,
      popular: true,
      description: 'Complete tax filing with consultations',
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
      title="Income Tax E-filing"
      description="Professional income tax return filing service with expert guidance to maximize your tax savings and ensure compliance with IT regulations."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default IncomeTaxFilingPage;