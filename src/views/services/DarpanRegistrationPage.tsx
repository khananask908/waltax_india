'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const DarpanRegistrationPage = () => {
  const benefits = [
    "Unique identification for NGOs",
    "Access to government schemes",
    "Enhanced credibility and transparency",
    "Required for CSR funding",
    "Government recognition",
    "Simplified compliance process"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4999,
      description: 'Essential DARPAN registration',
      features: [
        'DARPAN Registration',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'DARPAN ID Certificate'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="DARPAN Registration"
      description="Register your NGO on the DARPAN portal for unique identification and access to government schemes and CSR funding opportunities."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default DarpanRegistrationPage;