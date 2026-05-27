'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ITR7Page = () => {
  const benefits = [
    "Trust and charitable organization filing",
    "Tax exemption compliance",
    "Expert handling of trust income",
    "Regulatory compliance assurance",
    "Professional guidance on exemptions",
    "Comprehensive trust tax planning"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 5999,
      originalPrice: 8999,
      description: 'Essential ITR-7 filing',
      features: [
        'ITR-7 Return Filing',
        'Trust Income Calculation',
        'Expert Review',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ITR 7 Return Filing"
      description="Professional ITR-7 filing for trusts, charitable organizations, and political parties. Expert handling of exempt income and compliance requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ITR7Page;