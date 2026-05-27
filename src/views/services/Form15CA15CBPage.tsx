'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const Form15CA15CBPage = () => {
  const benefits = [
    "Compliance for foreign remittances",
    "Expert handling of TDS provisions",
    "Professional CA certification",
    "Regulatory compliance assurance",
    "Timely filing and processing",
    "Comprehensive documentation support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4499,
      description: 'Essential 15CA-15CB filing',
      features: [
        '15CA Form Filing',
        '15CB Certificate',
        'Expert Review',
        'CA Certification',
        'Documentation Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="15CA-15CB Filing"
      description="Professional 15CA-15CB filing service for foreign remittances. Expert handling of TDS compliance and CA certification requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default Form15CA15CBPage;