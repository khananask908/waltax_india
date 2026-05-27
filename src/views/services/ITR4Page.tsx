'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ITR4Page = () => {
  const benefits = [
    "Presumptive taxation scheme filing",
    "Simplified business income calculation",
    "Lower compliance requirements",
    "Expert guidance on presumptive rates",
    "Time-saving and cost-effective",
    "Professional tax optimization"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 1999,
      originalPrice: 2999,
      description: 'Essential ITR-4 filing',
      features: [
        'ITR-4 Return Filing',
        'Presumptive Income Calculation',
        'Expert Review',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ITR 4 Return Filing"
      description="Professional ITR-4 filing for presumptive taxation scheme. Simplified filing for small businesses and professionals with turnover up to specified limits."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ITR4Page;