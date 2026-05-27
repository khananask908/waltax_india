'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const IncomeTaxNoticePage = () => {
  const benefits = [
    "Expert handling of tax notices",
    "Professional response preparation",
    "Legal compliance and representation",
    "Penalty avoidance strategies",
    "Comprehensive documentation support",
    "Experienced tax consultant guidance"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 4999,
      originalPrice: 7499,
      description: 'Essential notice handling',
      features: [
        'Notice Analysis',
        'Response Preparation',
        'Expert Consultation',
        'Documentation Support',
        'Filing Assistance'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 7999,
      originalPrice: 11999,
      popular: true,
      description: 'Complete package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'Legal Representation',
        'Follow-up Support',
        'Priority Assistance'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Income Tax Notice"
      description="Expert assistance for handling income tax notices. Professional response preparation and representation to resolve tax matters efficiently."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default IncomeTaxNoticePage;