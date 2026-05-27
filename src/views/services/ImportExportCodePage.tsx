'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const ImportExportCodePage = () => {
  const benefits = [
    "Essential for international trade",
    "Government tracking of exports/imports",
    "Access to export promotion schemes",
    "Required for customs clearance",
    "Enhanced business opportunities",
    "Professional international presence"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4999,
      description: 'Essential IEC registration',
      features: [
        'Import Export Code Registration',
        'Document Preparation',
        'Expert Consultation',
        'Government Fee Included',
        'IEC Certificate'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Import Export Code (IEC)"
      description="Obtain your Import Export Code to engage in international trade. Essential for importing or exporting goods and services from India."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default ImportExportCodePage;