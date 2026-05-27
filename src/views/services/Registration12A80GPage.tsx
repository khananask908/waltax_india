'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const Registration12A80GPage = () => {
  const benefits = [
    "Tax exemption for charitable organizations",
    "Donors get tax deduction benefits",
    "Enhanced credibility for NGOs",
    "Access to government grants",
    "Legal recognition for charitable work",
    "Professional non-profit status"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 7999,
      originalPrice: 11999,
      description: 'Essential 12A & 80G registration',
      features: [
        '12A Registration',
        '80G Registration',
        'Document Preparation',
        'Expert Consultation',
        'Tax Exemption Certificates'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 12999,
      originalPrice: 17999,
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
      title="12A and 80G Registration"
      description="Get tax exemption status for your charitable organization and enable donors to claim tax deductions on their contributions."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default Registration12A80GPage;