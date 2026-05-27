'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const OPCCompliancePage = () => {
  const benefits = [
    "Complete OPC compliance management",
    "Regular monitoring and updates",
    "MCA compliance assurance",
    "Expert guidance on OPC regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 7999,
      originalPrice: 11999,
      description: 'Essential compliance management',
      features: [
        'Annual Filing (AOC-4, MGT-7)',
        'Board Resolution Drafting',
        'Expert Consultation',
        'Compliance Calendar',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 12999,
      originalPrice: 17999,
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
      title="One Person Company Compliance"
      description="Comprehensive compliance management for One Person Companies to ensure adherence to MCA regulations and avoid penalties."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default OPCCompliancePage;