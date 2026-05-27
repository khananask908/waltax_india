'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ITR1Page = () => {
  const benefits = [
    "Simple and accurate ITR-1 filing",
    "Expert review for salary income",
    "Maximum deductions and savings",
    "Error-free return preparation",
    "Timely submission and compliance",
    "Professional tax guidance"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 999,
      originalPrice: 1499,
      description: 'Essential ITR-1 filing',
      features: [
        'ITR-1 Return Filing',
        'Expert Review',
        'Tax Calculation',
        'E-filing Support',
        'Acknowledgment Receipt'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="ITR 1 Return Filing"
      description="Professional ITR-1 filing service for individuals with salary income, pension, and interest income. Simple and hassle-free tax filing."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ITR1Page;