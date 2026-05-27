'use client';

import ServiceTemplate from '../../components/ui/ServiceTemplate';

const GSTRegistrationPage = () => {
  const benefits = [
    "Legal compliance with GST regulations",
    "Input tax credit benefits on purchases",
    "Enhanced business credibility and trust",
    "Seamless interstate business transactions",
    "Access to government tenders and contracts",
    "Professional tax management support"
  ];

  const serviceDescription = `GST (Goods and Services Tax) registration is mandatory for businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for northeastern states). Our comprehensive GST registration service ensures smooth compliance with India's unified tax system while maximizing your business benefits.

Our expert team handles the entire GST registration process, from initial application to obtaining your GST certificate. We ensure accurate classification of your business activities, proper selection of tax rates, and compliance with all GST regulations from day one.

The registration process involves verification of business details, submission of required documents, and coordination with GST authorities. We provide guidance on GST compliance requirements, return filing procedures, and input tax credit optimization strategies.

We also offer ongoing support for GST-related matters including return filing, compliance management, and handling GST notices. Our digital platform provides easy access to GST certificates, compliance calendars, and expert consultation services.

Choose our GST registration service for hassle-free compliance with India's GST system. With our expertise in tax matters and commitment to client success, we ensure your business stays compliant while maximizing tax benefits.`;

  const faqs = [
    {
      question: "When is GST registration mandatory?",
      answer: "GST registration is mandatory when annual turnover exceeds ₹40 lakhs for goods (₹20 lakhs for northeastern states) or ₹20 lakhs for services. It's also required for interstate supply, e-commerce, and certain specified businesses."
    },
    {
      question: "What documents are required for GST registration?",
      answer: "Required documents include PAN card, Aadhaar card, business registration certificate, bank account details, address proof of business premises, and photographs of authorized signatory."
    },
    {
      question: "How long does GST registration take?",
      answer: "GST registration typically takes 3-7 working days from the date of application submission, provided all documents are complete and accurate."
    },
    {
      question: "What are the benefits of voluntary GST registration?",
      answer: "Benefits include input tax credit on purchases, enhanced business credibility, ability to supply to GST-registered businesses, and access to government tenders and contracts."
    },
    {
      question: "What are the ongoing compliance requirements after GST registration?",
      answer: "Ongoing compliances include monthly/quarterly GST return filing, maintaining proper books of accounts, issuing GST-compliant invoices, and annual return filing."
    },
    {
      question: "Can I cancel my GST registration?",
      answer: "Yes, GST registration can be cancelled if turnover falls below threshold limits, business is discontinued, or registration was obtained voluntarily. Proper cancellation procedure must be followed."
    }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 2999,
      originalPrice: 4999,
      description: 'Essential GST registration',
      features: [
        'GST Registration',
        'Expert Consultation',
        'Document Verification',
        'Government Fee Included',
        'Registration Certificate'
      ]
    },
    {
      id: 'value',
      name: 'Value Plan',
      price: 4999,
      originalPrice: 7999,
      popular: true,
      description: 'Complete GST package with consultations',
      features: [
        'Everything in Basic Plan',
        '2 Expert Consultations',
        'GST Return Filing Guide',
        'Compliance Calendar',
        'Priority Support'
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="GST Registration"
      description="Register for GST and ensure compliance with India's Goods and Services Tax system. Get expert guidance for seamless registration and ongoing support."
      benefits={benefits}
      videoId="dQw4w9WgXcQ"
      pricingPlans={pricingPlans}
      serviceDescription={serviceDescription}
      faqs={faqs}
    />
  );
};

export default GSTRegistrationPage;