'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ShopActPage = () => {
  const benefits = [
    "Legal authorization for shop operations",
    "Compliance with state regulations",
    "Required for business licensing",
    "Employee welfare compliance",
    "Protection from legal penalties",
    "Enhanced business credibility"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4999,
      description: 'Essential Shop Act registration',
      features: [
        'Shop Act Registration',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'Shop Act License'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Shop Act Registration"
      description="Register under the Shop and Establishment Act to legally operate your shop or commercial establishment with full compliance."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ShopActPage;