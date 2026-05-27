'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ITR6Page = () => {
  const benefits = [
    "Corporate tax return filing",
    "Company income tax compliance",
    "Expert handling of corporate finances",
    "Professional tax optimization",
    "Regulatory compliance assurance",
    "Comprehensive corporate tax planning"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 7999,
      originalPrice: 11999,
      description: 'Essential ITR-6 filing',
      features: [
        'ITR-6 Return Filing',
        'Corporate Income Calculation',
        'Expert Review',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 12999,
      originalPrice: 17999,
      popular: true,
      description: 'Complete package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Tax Consultations',
        'Tax Planning Advice',
        'Compliance Support',
        'Year-round Assistance'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ITR 6 Return Filing"
      description="Professional ITR-6 filing for companies. Expert handling of corporate tax returns, compliance requirements, and tax optimization strategies."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ITR6Page;