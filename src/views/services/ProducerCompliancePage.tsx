'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ProducerCompliancePage = () => {
  const benefits = [
    "Complete producer company compliance management",
    "Regular monitoring and updates",
    "MCA compliance assurance",
    "Expert guidance on producer company regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 12999,
      originalPrice: 17999,
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
      price: 18999,
      originalPrice: 25999,
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
      title="Producer Company Compliance"
      description="Comprehensive compliance management for Producer Companies to ensure adherence to MCA regulations and producer company requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ProducerCompliancePage;