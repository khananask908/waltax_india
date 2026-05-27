'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const FSSAIPage = () => {
  const benefits = [
    "Legal compliance for food business",
    "Consumer trust and safety assurance",
    "Required for food manufacturing/trading",
    "Access to government schemes",
    "Protection from legal penalties",
    "Enhanced market credibility"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4999,
      description: 'Essential FSSAI registration',
      features: [
        'FSSAI Registration/License',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'FSSAI Certificate'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 4999,
      originalPrice: 7999,
      popular: true,
      description: 'Complete package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'Renewal Reminders',
        'Compliance Support',
        'Priority Processing'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="FSSAI Registration/License"
      description="Get your Food Safety and Standards Authority of India license to legally operate your food business with complete compliance and safety standards."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default FSSAIPage;