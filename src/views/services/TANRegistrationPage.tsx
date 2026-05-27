'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const TANRegistrationPage = () => {
  const benefits = [
    "Mandatory for TDS deduction",
    "Legal compliance requirement",
    "Professional tax management",
    "Enhanced business credibility",
    "Streamlined TDS processes",
    "Government recognition"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 1999,
      originalPrice: 2999,
      description: 'Essential TAN registration',
      features: [
        'TAN Registration',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'TAN Certificate'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="TAN Registration"
      description="Register for Tax Deduction and Collection Account Number (TAN) to legally deduct TDS and comply with income tax regulations."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default TANRegistrationPage;