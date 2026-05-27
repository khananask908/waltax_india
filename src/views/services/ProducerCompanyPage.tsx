'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ProducerCompanyPage = () => {
  const benefits = [
    "Designed specifically for agricultural producers",
    "Limited liability protection for farmer members",
    "Tax benefits and government support schemes",
    "Collective bargaining power for better prices",
    "Access to institutional credit and funding",
    "Professional management of agricultural activities"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 15999,
      originalPrice: 21999,
      description: 'Essential producer company registration',
      features: [
        'Producer Company Registration',
        'Digital Signature Certificate',
        'Director Identification Number',
        'Memorandum & Articles (Producer)',
        'Certificate of Incorporation'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 24999,
      originalPrice: 32999,
      popular: true,
      description: 'Complete producer company package',
      features: [
        'Everything in Basic Plan',
        'UDYAM Registration',
        'GST Registration',
        'Agricultural License Support',
        'Bank Account Opening Kit'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 34999,
      originalPrice: 44999,
      description: 'Premium producer company setup',
      features: [
        'Everything in Value Plan',
        'Import Export Code (IEC)',
        'ISO Registration',
        'Government Scheme Registration',
        'Annual Compliance Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Producer Company Registration"
      description="Register a producer company specifically designed for agricultural producers and farmers. Combines the benefits of cooperative societies with company structure."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      isStartupService={true}
    />
  );
};

export default ProducerCompanyPage;