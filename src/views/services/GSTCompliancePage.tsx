'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const GSTCompliancePage = () => {
  const benefits = [
    "Complete GST compliance management",
    "Regular monitoring and updates",
    "Penalty avoidance and risk mitigation",
    "Expert guidance on GST matters",
    "Streamlined business operations",
    "Professional compliance support"
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 5999,
      originalPrice: 8999,
      description: 'Essential GST compliance',
      features: [
        'GST Compliance Review',
        'Monthly Monitoring',
        'Expert Consultation',
        'Compliance Reports',
        'Basic Support'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 9999,
      originalPrice: 14999,
      popular: true,
      description: 'Complete compliance package',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'Audit Support',
        'Notice Handling',
        'Priority Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="GST Compliance"
      description="Comprehensive GST compliance management to ensure your business stays compliant with all GST regulations and requirements."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
    />
  );
};

export default GSTCompliancePage;