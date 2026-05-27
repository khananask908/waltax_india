'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const SubsidiaryCompliancePage = () => {
  const benefits = [
    "Complete subsidiary compliance management",
    "Regular monitoring and updates",
    "MCA and FEMA compliance assurance",
    "Expert guidance on subsidiary regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 15999,
      originalPrice: 21999,
      description: 'Essential compliance management',
      features: [
        'Annual Filing (AOC-4, MGT-7)',
        'FEMA Compliance',
        'Expert Consultation',
        'Compliance Calendar',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 24999,
      originalPrice: 32999,
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
      title="Indian Subsidiary Compliance"
      description="Comprehensive compliance management for Indian Subsidiaries to ensure adherence to MCA, FEMA regulations and subsidiary requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default SubsidiaryCompliancePage;