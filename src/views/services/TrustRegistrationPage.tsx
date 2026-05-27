'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const TrustRegistrationPage = () => {
  const benefits = [
    "Tax exemptions for charitable activities",
    "Credibility for social and religious work",
    "Easier to receive donations and grants",
    "Perpetual existence and legal recognition",
    "Protection of trust property and assets",
    "Professional management of charitable activities"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 5999,
      originalPrice: 8999,
      description: 'Essential trust registration',
      features: [
        'Trust Deed Drafting',
        'Trust Registration',
        'Legal Documentation',
        'Expert Consultation',
        'Registration Certificate'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 10999,
      originalPrice: 15999,
      popular: true,
      description: 'Complete trust package',
      features: [
        'Everything in Basic Plan',
        'UDYAM Registration',
        'GST Registration (if applicable)',
        '12A & 80G Registration',
        'Bank Account Opening Support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 16999,
      originalPrice: 22999,
      description: 'Premium trust setup',
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
      title="Trust Registration"
      description="Register a trust for charitable, religious, or educational purposes. Ideal for individuals or groups wanting to formalize their social welfare activities with legal recognition."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      isStartupService={true}
    />
  );
};

export default TrustRegistrationPage;