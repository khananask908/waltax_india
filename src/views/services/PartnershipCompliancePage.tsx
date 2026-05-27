'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const PartnershipCompliancePage = () => {
  const benefits = [
    "Complete partnership compliance management",
    "Regular monitoring and updates",
    "Legal compliance assurance",
    "Expert guidance on partnership regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 4999,
      originalPrice: 7499,
      description: 'Essential compliance management',
      features: [
        'Annual Compliance Review',
        'Partnership Agreement Updates',
        'Expert Consultation',
        'Compliance Calendar',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 7999,
      originalPrice: 11999,
      popular: true,
      description: 'Complete compliance package',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'Monthly Monitoring',
        'Priority Support',
        'Year-round Assistance'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Partnership Compliance"
      description="Comprehensive compliance management for partnership firms to ensure adherence to all regulatory requirements and partnership regulations."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default PartnershipCompliancePage;