'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ITR3Page = () => {
  const benefits = [
    "Professional business income filing",
    "Profit and loss optimization",
    "Business expense deductions",
    "Expert review and planning",
    "Compliance with business regulations",
    "Comprehensive tax strategy"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4499,
      description: 'Essential ITR-3 filing',
      features: [
        'ITR-3 Return Filing',
        'Business Income Calculation',
        'Expert Review',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ITR 3 Return Filing"
      description="Professional ITR-3 filing for individuals with business or professional income. Expert handling of profit and loss statements and business deductions."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ITR3Page;