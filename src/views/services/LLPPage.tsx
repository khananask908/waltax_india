'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const LLPPage = () => {
  const benefits = [
    "Limited liability protection for all partners",
    "Flexible management structure and profit sharing",
    "Lower compliance requirements than companies",
    "Perpetual succession and separate legal entity",
    "Tax benefits and operational flexibility",
    "Easy to add or remove partners"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 7999,
      originalPrice: 11999,
      description: 'Essential LLP registration',
      features: [
        'LLP Registration',
        'Digital Signature Certificate',
        'Designated Partner Identification',
        'LLP Agreement Drafting',
        'Certificate of Incorporation'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 13999,
      originalPrice: 18999,
      popular: true,
      description: 'Complete LLP package',
      features: [
        'Everything in Basic Plan',
        'UDYAM Registration',
        'GST Registration',
        'PAN & TAN Application',
        'Bank Account Opening Support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 19999,
      originalPrice: 26999,
      description: 'Premium LLP setup',
      features: [
        'Everything in Value Plan',
        'Import Export Code (IEC)',
        'ISO Registration',
        'Legal Compliance Kit',
        'Annual Filing Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Limited Liability Partnership Registration"
      description="Combine the benefits of partnership flexibility with limited liability protection. Ideal for professional services and businesses requiring operational flexibility."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      isStartupService={true}
    />
  );
};

export default LLPPage;