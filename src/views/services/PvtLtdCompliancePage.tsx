'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const PvtLtdCompliancePage = () => {
  const benefits = [
    "Complete Pvt Ltd compliance management",
    "Regular monitoring and updates",
    "MCA compliance assurance",
    "Expert guidance on company regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 9999,
      originalPrice: 14999,
      description: 'Essential compliance management',
      features: [
        'Annual Filing (AOC-4, MGT-7)',
        'Board Meetings & Resolutions',
        'Expert Consultation',
        'Compliance Calendar',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 15999,
      originalPrice: 21999,
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
      title="Private Limited Compliance"
      description="Comprehensive compliance management for Private Limited Companies to ensure adherence to MCA regulations and Companies Act requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default PvtLtdCompliancePage;