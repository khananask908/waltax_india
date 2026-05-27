'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const StartupIndiaPage = () => {
  const benefits = [
    "Government recognition and certification",
    "Tax exemptions for 3 consecutive years",
    "Fast-track patent examination",
    "Self-certification under labor and environment laws",
    "Access to government funding and schemes",
    "Networking opportunities with other startups"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 4999,
      originalPrice: 7999,
      description: 'Essential Startup India registration',
      features: [
        'Startup India Registration',
        'Expert Consultation',
        'Document Preparation',
        'Government Fee Included',
        'Certificate of Recognition'
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
        'Funding Guidance',
        'Compliance Support',
        'Priority Processing'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Startup India Registration"
      description="Get recognized under the Startup India initiative and unlock government benefits, tax exemptions, and funding opportunities for your innovative business."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default StartupIndiaPage;