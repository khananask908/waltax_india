// Razorpay integration utilities

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: any) => void;
  modal: {
    ondismiss: () => void;
  };
}

export const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const createRazorpayOrder = async (amount: number, orderId: string) => {
  // Create Razorpay order - in production, this should call your backend
  return {
    id: orderId,
    amount: amount * 100, // Convert to paise
    currency: 'INR'
  };
};

export const verifyPayment = async (paymentData: any) => {
  // Verify payment signature - in production, this should be done on your backend
  console.log('Payment verification:', paymentData);
  return { success: true };
};

export const initializeRazorpay = async (): Promise<boolean> => {
  try {
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      console.error('Failed to load Razorpay SDK');
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error initializing Razorpay:', error);
    return false;
  }
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateTax = (amount: number, taxRate: number = 0.18): number => {
  return Math.round(amount * taxRate);
};

export const calculateTotal = (subtotal: number, tax: number = 0): number => {
  return subtotal + tax;
};