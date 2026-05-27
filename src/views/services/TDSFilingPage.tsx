'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const TDSFilingPage = () => {
  const benefits = [
    "Professional TDS return preparation",
    "Timely filing to avoid penalties",
    "Expert review and verification",
    "Compliance with TDS regulations",
    "Accurate calculation and reporting",
    "Dedicated tax consultant support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4499,
      description: 'Essential TDS return filing',
      features: [
        'TDS Return Filing',
        'Expert Review',
        'TDS Calculation',
        'E-filing Support',
        'Filing Acknowledgment'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="TDS Return Filing"
      description="Professional TDS return filing service to ensure accurate and timely compliance with TDS regulations and avoid penalties."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default TDSFilingPage;