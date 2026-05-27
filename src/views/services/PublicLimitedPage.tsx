'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const PublicLimitedPage = () => {
  const benefits = [
    "Ability to raise capital from public investors",
    "Enhanced credibility and brand recognition",
    "Transferable shares and liquidity options",
    "Professional management structure",
    "Access to capital markets and IPO opportunities",
    "Limited liability protection for shareholders"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 25999,
      originalPrice: 35999,
      description: 'Essential public limited registration',
      features: [
        'Public Limited Company Registration',
        'Digital Signature Certificate (3 Directors)',
        'Director Identification Number',
        'Memorandum & Articles of Association',
        'Certificate of Incorporation'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 39999,
      originalPrice: 52999,
      popular: true,
      description: 'Complete public limited package',
      features: [
        'Everything in Basic Plan',
        'UDYAM Registration',
        'GST Registration',
        'PAN & TAN Application',
        'Bank Account Opening Kit'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 55999,
      originalPrice: 72999,
      description: 'Premium public limited setup',
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
      title="Public Limited Company Registration"
      description="Register a public limited company for large-scale business operations with the ability to raise capital from the public and list on stock exchanges."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      isStartupService={true}
    />
  );
};

export default PublicLimitedPage;