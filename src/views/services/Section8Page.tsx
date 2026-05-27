'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const Section8Page = () => {
  const benefits = [
    "Non-profit organization with tax exemptions",
    "Limited liability for members and directors",
    "Credibility for charitable and social activities",
    "Easier to receive donations and grants",
    "Perpetual succession and separate legal entity",
    "Professional management structure"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 12999,
      originalPrice: 17999,
      description: 'Essential Section 8 registration',
      features: [
        'Section 8 Company Registration',
        'Digital Signature Certificate',
        'Director Identification Number',
        'Memorandum & Articles (Non-profit)',
        'Certificate of Incorporation'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 19999,
      originalPrice: 26999,
      popular: true,
      description: 'Complete Section 8 package',
      features: [
        'Everything in Basic Plan',
        'UDYAM Registration',
        'GST Registration (if applicable)',
        '12A & 80G Registration Support',
        'Bank Account Opening Kit'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 27999,
      originalPrice: 35999,
      description: 'Premium Section 8 setup',
      features: [
        'Everything in Value Plan',
        'FCRA Registration Support',
        'ISO Registration',
        'Legal Compliance Framework',
        'Annual Compliance Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Section 8 Company Registration"
      description="Register a non-profit organization under Section 8 of the Companies Act. Perfect for charitable, educational, and social welfare activities with tax benefits."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      isStartupService={true}
    />
  );
};

export default Section8Page;