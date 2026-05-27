'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const UdyamRegistrationPage = () => {
  const benefits = [
    "MSME benefits and subsidies",
    "Priority sector lending from banks",
    "Government scheme access",
    "Tax benefits and exemptions",
    "Easier loan approvals",
    "Enhanced business credibility"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 1999,
      originalPrice: 2999,
      description: 'Essential UDYAM registration',
      features: [
        'UDYAM Registration',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'UDYAM Certificate'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="UDYAM Registration"
      description="Register your MSME under UDYAM to access government benefits, subsidies, and priority sector lending from financial institutions."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default UdyamRegistrationPage;