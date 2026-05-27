'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo variant="white" />
              <span className="ml-2 text-xl font-display font-semibold text-white">
                WalTax India
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              India's leading platform for business registration, tax filing, compliance, and legal services with expert support.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/startups" className="text-gray-300 hover:text-white transition-colors">Startups</Link></li>
              <li><Link href="/registration" className="text-gray-300 hover:text-white transition-colors">Registration</Link></li>
              <li><Link href="/gst" className="text-gray-300 hover:text-white transition-colors">GST</Link></li>
              <li><Link href="/income-tax" className="text-gray-300 hover:text-white transition-colors">Income Tax</Link></li>
              <li><Link href="/compliance" className="text-gray-300 hover:text-white transition-colors">Compliance</Link></li>
              <li><Link href="/hire-team" className="text-gray-300 hover:text-white transition-colors">Hire Team</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/private-limited" className="text-gray-300 hover:text-white transition-colors">Private Limited Company</Link></li>
              <li><Link href="/services/gst-registration" className="text-gray-300 hover:text-white transition-colors">GST Registration</Link></li>
              <li><Link href="/services/income-tax-filing" className="text-gray-300 hover:text-white transition-colors">Income Tax Filing</Link></li>
              <li><Link href="/services/trademark" className="text-gray-300 hover:text-white transition-colors">Trademark Registration</Link></li>
              <li><Link href="/services/llp" className="text-gray-300 hover:text-white transition-colors">LLP Registration</Link></li>
              <li><Link href="/services/udyam" className="text-gray-300 hover:text-white transition-colors">UDYAM Registration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 7358 7358 00</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span className="text-gray-300">support@waltaxindia.com</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  No. 17, First Floor, First Street, Padmanabha Nagar, Adyar, Chennai - 600020
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} WalTax India. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="text-gray-400 text-sm hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/refund-policy" className="text-gray-400 text-sm hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;