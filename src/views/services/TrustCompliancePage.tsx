'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const TrustCompliancePage = () => {
  const benefits = [
    "Complete trust compliance management",
    "Regular monitoring and updates",
    "Legal compliance assurance",
    "Expert guidance on trust regulations",
    "Penalty avoidance strategies",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 5999,
      originalPrice: 8999,
      description: 'Essential compliance management',
      features: [
        'Annual Trust Returns',
        'Trust Deed Updates',
        'Expert Consultation',
        'Compliance Calendar',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 9999,
      originalPrice: 14999,
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
      title="Trust Registration Compliance"
      description="Comprehensive compliance management for Trusts to ensure adherence to all regulatory requirements and trust regulations."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default TrustCompliancePage;