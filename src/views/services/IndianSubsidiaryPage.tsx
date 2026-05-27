'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const IndianSubsidiaryPage = () => {
  const benefits = [
    "Establish local presence for foreign companies",
    "Limited liability protection in India",
    "Access to Indian markets and opportunities",
    "Compliance with Indian regulatory requirements",
    "Professional credibility and local partnerships",
    "Tax benefits and investment opportunities"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 35999,
      originalPrice: 47999,
      description: 'Essential subsidiary registration',
      features: [
        'Indian Subsidiary Registration',
        'Digital Signature Certificate',
        'Director Identification Number',
        'Memorandum & Articles of Association',
        'Certificate of Incorporation'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 52999,
      originalPrice: 69999,
      popular: true,
      description: 'Complete subsidiary package',
      features: [
        'Everything in Basic Plan',
        'UDYAM Registration',
        'GST Registration',
        'FEMA Compliance Support',
        'Bank Account Opening Kit'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 72999,
      originalPrice: 94999,
      description: 'Premium subsidiary setup',
      features: [
        'Everything in Value Plan',
        'Import Export Code (IEC)',
        'ISO Registration',
        'Legal Compliance Framework',
        'Annual Compliance Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Indian Subsidiary Registration"
      description="Establish an Indian subsidiary for your foreign company to access the Indian market with full legal compliance and local presence."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      isStartupService={true}
    />
  );
};

export default IndianSubsidiaryPage;