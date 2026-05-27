'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const Section8CompliancePage = () => {
  const benefits = [
    "Complete Section 8 compliance management",
    "Regular monitoring and updates",
    "MCA compliance assurance",
    "Expert guidance on non-profit regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 8999,
      originalPrice: 12999,
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
      price: 13999,
      originalPrice: 18999,
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
      title="Section 8 Company Compliance"
      description="Comprehensive compliance management for Section 8 Companies to ensure adherence to MCA regulations and non-profit requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default Section8CompliancePage;