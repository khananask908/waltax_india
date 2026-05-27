'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const PFESIPage = () => {
  const benefits = [
    "Mandatory compliance for employees",
    "Social security for workforce",
    "Legal protection from penalties",
    "Employee welfare and benefits",
    "Enhanced employer credibility",
    "Statutory compliance requirement"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 3999,
      originalPrice: 5999,
      description: 'Essential PF/ESI registration',
      features: [
        'PF Registration',
        'ESI Registration',
        'Document Preparation',
        'Expert Consultation',
        'Registration Certificates'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="PF/ESI Registration"
      description="Register for Provident Fund and Employee State Insurance to provide social security benefits to your employees and ensure statutory compliance."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default PFESIPage;