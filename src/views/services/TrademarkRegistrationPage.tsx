'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const TrademarkRegistrationPage = () => {
  const benefits = [
    "Legal protection for your brand identity",
    "Exclusive rights to use your trademark",
    "Enhanced brand value and recognition",
    "Protection against infringement",
    "Asset creation for business valuation",
    "Professional trademark search and filing"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 6999,
      originalPrice: 9999,
      description: 'Essential trademark registration',
      features: [
        'Trademark Search Report',
        'Trademark Application Filing',
        'Expert Consultation',
        'Government Fee Included',
        'Application Tracking'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Trademark Registration"
      description="Protect your brand with professional trademark registration services. Secure exclusive rights to your brand name, logo, and identity."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default TrademarkRegistrationPage;