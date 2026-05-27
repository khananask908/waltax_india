'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ITR5Page = () => {
  const benefits = [
    "Partnership firm tax filing",
    "Professional LLP return preparation",
    "Expert handling of partnership income",
    "Compliance with partnership regulations",
    "Accurate profit distribution calculation",
    "Comprehensive tax planning"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 4999,
      originalPrice: 7499,
      description: 'Essential ITR-5 filing',
      features: [
        'ITR-5 Return Filing',
        'Partnership Income Calculation',
        'Expert Review',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ITR 5 Return Filing"
      description="Professional ITR-5 filing for partnership firms and LLPs. Expert handling of partnership income, profit distribution, and compliance requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ITR5Page;