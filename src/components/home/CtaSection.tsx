'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-700 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Start or Grow Your Business?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs and business owners who trust WalTax India for their business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/startups">
              <Button 
                size="lg"
                className="bg-white text-primary-700 hover:bg-gray-100 min-w-[160px]"
              >
                Get Started
              </Button>
            </Link>
            
            <Link href="/registration">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 min-w-[160px]"
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <p className="mt-8 text-primary-200">
            Not sure which service you need? <Link href="/hire-team" className="text-white underline hover:no-underline">Talk to an expert</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;