'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const PublicLtdCompliancePage = () => {
  const benefits = [
    "Complete public limited compliance management",
    "Regular monitoring and updates",
    "MCA and SEBI compliance assurance",
    "Expert guidance on public company regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 19999,
      originalPrice: 29999,
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
      price: 29999,
      originalPrice: 39999,
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
      title="Public Limited Compliance"
      description="Comprehensive compliance management for Public Limited Companies to ensure adherence to MCA, SEBI regulations and Companies Act requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default PublicLtdCompliancePage;