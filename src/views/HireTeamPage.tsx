'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Scale, Calculator, FileText, Check } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';
import { initializeRazorpay } from '../utils/razorpay';

const HireTeamPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    document.title = 'Hire a Team - WALTAX INDIA';
    
    // Preload Razorpay for faster checkout
    initializeRazorpay().catch(console.error);
  }, []);

  const teamMembers = [
    {
      id: 'lawyer',
      name: 'Lawyer',
      icon: Scale,
      description: 'Expert legal counsel for all your business needs',
      expertise: [
        'Contract Drafting',
        'Legal Compliance',
        'Dispute Resolution',
        'Corporate Law',
      ],
    },
    {
      id: 'cs',
      name: 'Company Secretary',
      icon: FileText,
      description: 'Ensure corporate compliance and governance',
      expertise: [
        'Board Meetings',
        'Annual Filings',
        'Regulatory Compliance',
        'Corporate Governance',
      ],
    },
    {
      id: 'ca',
      name: 'Chartered Accountant',
      icon: Calculator,
      description: 'Professional accounting and tax services',
      expertise: [
        'Tax Planning',
        'Financial Audits',
        'GST Compliance',
        'Investment Advisory',
      ],
    },
  ];

  const teamPlans = [
    {
      id: 'one-person',
      name: 'One Person Team',
      price: 15000,
      maxMembers: 1,
      description: 'Choose any one expert for your business needs',
      popular: false,
    },
    {
      id: 'two-person',
      name: 'Two Person Team',
      price: 25000,
      maxMembers: 2,
      description: 'Select any two experts for comprehensive support',
      popular: true,
    },
    {
      id: 'three-person',
      name: 'Three Person Team',
      price: 35000,
      maxMembers: 3,
      description: 'Complete team with all three experts',
      popular: false,
    },
  ];

  const handleTeamSelect = (teamId: string) => {
    setSelectedTeam(teamId);
    setSelectedMembers([]);
  };

  const handleMemberToggle = (memberId: string) => {
    const plan = teamPlans.find((p) => p.id === selectedTeam);
    if (!plan) return;

    if (selectedMembers.includes(memberId)) {
      setSelectedMembers(selectedMembers.filter((id) => id !== memberId));
    } else if (selectedMembers.length < plan.maxMembers) {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  };

  const handleAddToCart = () => {
    const plan = teamPlans.find((p) => p.id === selectedTeam);
    if (!plan || selectedMembers.length === 0) return;

    const memberNames = selectedMembers
      .map((id) => teamMembers.find((m) => m.id === id)?.name)
      .join(', ');

    addItem({
      id: `team-${selectedTeam}-${Date.now()}`,
      name: `${plan.name} - ${memberNames}`,
      price: plan.price,
      quantity: 1,
    });

    // Reset selection
    setSelectedTeam(null);
    setSelectedMembers([]);
  };

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <Container>
        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h1
            className="mb-6 text-6xl font-bold md:text-8xl font-display"
            animate={{
              scale: [1, 1.05, 1],
              color: ['#4F46E5', '#14B8A6', '#F97316', '#4F46E5'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Hire a Team
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-2xl leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build your dream team with our expert professionals. Get dedicated
            lawyers, company secretaries, and chartered accountants for your
            business success.
          </motion.p>
        </motion.div>

        {/* Team Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 font-display">
            Choose Your Team Size
          </h2>
          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {teamPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedTeam === plan.id
                    ? 'border-primary-500 ring-4 ring-primary-100 scale-105'
                    : plan.popular
                    ? 'border-primary-300 hover:border-primary-500'
                    : 'border-gray-200 hover:border-primary-300'
                } hover:shadow-xl`}
                onClick={() => handleTeamSelect(plan.id)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {plan.popular && (
                  <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                    <div className="px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-primary-500 to-primary-600">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-primary-600" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-gray-600">{plan.description}</p>
                  <div className="mb-2 text-4xl font-bold text-primary-600">
                    ₹{plan.price.toLocaleString()}
                  </div>
                  <p className="text-gray-500">per month</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Member Selection */}
        {selectedTeam && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold text-center text-gray-900 font-display">
              Select Your Team Members
            </h2>
            <p className="mb-12 text-center text-gray-600">
              Choose {teamPlans.find((p) => p.id === selectedTeam)?.maxMembers}{' '}
              member(s) for your team
            </p>

            <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
              {teamMembers.map((member, index) => {
                const Icon = member.icon;
                const isSelected = selectedMembers.includes(member.id);
                const plan = teamPlans.find((p) => p.id === selectedTeam);
                const canSelect =
                  selectedMembers.length < (plan?.maxMembers || 0);

                return (
                  <motion.div
                    key={member.id}
                    className={`bg-white rounded-2xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'border-green-500 ring-4 ring-green-100'
                        : canSelect || isSelected
                        ? 'border-gray-200 hover:border-primary-300'
                        : 'border-gray-200 opacity-50 cursor-not-allowed'
                    } hover:shadow-xl`}
                    onClick={() =>
                      (canSelect || isSelected) && handleMemberToggle(member.id)
                    }
                    whileHover={canSelect || isSelected ? { y: -5 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="p-8">
                      <div className="mb-6 text-center">
                        <div
                          className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                            isSelected ? 'bg-green-100' : 'bg-primary-100'
                          }`}
                        >
                          <Icon
                            className={`h-10 w-10 ${
                              isSelected ? 'text-green-600' : 'text-primary-600'
                            }`}
                          />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-gray-600">{member.description}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="mb-3 font-semibold text-gray-900">
                          Expertise:
                        </h4>
                        {member.expertise.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>

                      {isSelected && (
                        <div className="mt-6 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 text-green-800 bg-green-100 rounded-full">
                            <Check className="w-4 h-4" />
                            <span className="font-semibold">Selected</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {selectedMembers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 text-center"
              >
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Add Team to Cart
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-12 bg-white shadow-xl rounded-3xl"
        >
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 font-display">
            Why Choose Our Professional Team?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Experienced Professionals',
              'Dedicated Support',
              'Timely Deliverables',
              'Cost-Effective Solutions',
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
                  <Check className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default HireTeamPage;
