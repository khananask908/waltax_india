'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ISORegistrationPage = () => {
  const benefits = [
    "International quality certification",
    "Enhanced business credibility",
    "Improved operational efficiency",
    "Access to global markets",
    "Customer trust and satisfaction",
    "Competitive advantage in tenders"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 15999,
      originalPrice: 21999,
      description: 'Essential ISO certification',
      features: [
        'ISO Certification Process',
        'Documentation Support',
        'Expert Consultation',
        'Audit Preparation',
        'ISO Certificate'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 24999,
      originalPrice: 32999,
      popular: true,
      description: 'Complete package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'Implementation Support',
        'Training Sessions',
        'Annual Maintenance'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ISO Registration"
      description="Get ISO certification to demonstrate your commitment to quality, safety, and efficiency. Enhance your business credibility and access global markets."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ISORegistrationPage;