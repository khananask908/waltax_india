'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ITR2Page = () => {
  const benefits = [
    "Professional ITR-2 filing service",
    "Capital gains tax optimization",
    "Multiple income source handling",
    "Expert review and verification",
    "Maximum deductions and savings",
    "Comprehensive tax planning"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 1999,
      originalPrice: 2999,
      description: 'Essential ITR-2 filing',
      features: [
        'ITR-2 Return Filing',
        'Expert Review',
        'Capital Gains Calculation',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ITR 2 Return Filing"
      description="Professional ITR-2 filing for individuals with capital gains, multiple house properties, and foreign income. Expert handling of complex returns."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ITR2Page;