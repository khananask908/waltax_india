'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const LLPCompliancePage = () => {
  const benefits = [
    "Complete LLP compliance management",
    "Regular monitoring and updates",
    "MCA compliance assurance",
    "Expert guidance on LLP regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 6999,
      originalPrice: 9999,
      description: 'Essential compliance management',
      features: [
        'Annual Filing (Form 8, Form 11)',
        'Statement of Account & Solvency',
        'Expert Consultation',
        'Compliance Calendar',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 10999,
      originalPrice: 15999,
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
      title="LLP Compliance"
      description="Comprehensive compliance management for Limited Liability Partnerships to ensure adherence to MCA regulations and LLP Act requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default LLPCompliancePage;