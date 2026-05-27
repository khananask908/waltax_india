'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const OnePersonCompanyPage = () => {
  const benefits = [
    "Limited liability protection for single entrepreneur",
    "Separate legal entity status",
    "Easier compliance compared to private limited companies",
    "Perpetual succession and professional credibility",
    "Can be converted to private limited company later",
    "Single person can hold 100% shares"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 6999,
      originalPrice: 9999,
      description: 'Essential OPC registration',
      features: [
        'OPC Registration',
        'Digital Signature Certificate',
        'Director Identification Number',
        'Memorandum & Articles of Association',
        'Certificate of Incorporation'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 11999,
      originalPrice: 16999,
      popular: true,
      description: 'Complete OPC package',
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
      price: 17999,
      originalPrice: 24999,
      description: 'Premium OPC setup',
      features: [
        'Everything in Value Plan',
        'Import Export Code (IEC)',
        'ISO Registration',
        'Trademark Search Report',
        'Annual Compliance Calendar'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="One Person Company Registration"
      description="Perfect for solo entrepreneurs who want the benefits of a company structure with limited liability protection while maintaining complete control over their business."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      isStartupService={true}
    />
  );
};

export default OnePersonCompanyPage;