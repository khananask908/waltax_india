'use client';

import { FileText } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-primary-600';
  const bgColor = variant === 'white' ? 'bg-white' : 'bg-primary-600';
  
  return (
    <div className="flex items-center">
      <div className={`${bgColor} rounded-md p-1`}>
        <FileText className={`h-6 w-6 ${variant === 'white' ? 'text-primary-600' : 'text-white'}`} />
      </div>
    </div>
  );
};

export default Logo;