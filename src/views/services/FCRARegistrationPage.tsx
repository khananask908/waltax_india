'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const FCRARegistrationPage = () => {
  const benefits = [
    "Legal authorization for foreign funding",
    "Access to international donations",
    "Enhanced NGO credibility",
    "Compliance with FCRA regulations",
    "Government recognition",
    "Transparent fund management"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 25999,
      originalPrice: 35999,
      description: 'Essential FCRA registration',
      features: [
        'FCRA Registration',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'FCRA Certificate'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 39999,
      originalPrice: 52999,
      popular: true,
      description: 'Complete package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'Compliance Support',
        'Annual Filing Guidance',
        'Priority Processing'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="FCRA Registration"
      description="Register under the Foreign Contribution Regulation Act to legally receive foreign funding for your NGO or charitable organization."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default FCRARegistrationPage;