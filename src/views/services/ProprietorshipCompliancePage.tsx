'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ProprietorshipCompliancePage = () => {
  const benefits = [
    "Complete proprietorship compliance management",
    "Regular monitoring and updates",
    "Legal compliance assurance",
    "Expert guidance on regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4499,
      description: 'Essential compliance management',
      features: [
        'Annual Compliance Review',
        'Regulatory Updates',
        'Expert Consultation',
        'Compliance Calendar',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 4999,
      originalPrice: 7499,
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
      title="Proprietorship Compliance"
      description="Comprehensive compliance management for proprietorship businesses to ensure adherence to all regulatory requirements and avoid penalties."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ProprietorshipCompliancePage;