'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const TradeLicensePage = () => {
  const benefits = [
    "Legal authorization to conduct business",
    "Compliance with local municipal laws",
    "Enhanced business credibility",
    "Required for bank account opening",
    "Protection from legal penalties",
    "Essential for business operations"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 3999,
      originalPrice: 5999,
      description: 'Essential trade license registration',
      features: [
        'Trade License Application',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'License Certificate'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Trade License Registration"
      description="Obtain your trade license to legally operate your business. Essential for compliance with local municipal regulations and business operations."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default TradeLicensePage;