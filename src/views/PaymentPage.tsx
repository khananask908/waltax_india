'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Building, Shield, Check, QrCode, Copy, ArrowLeft, Wallet, Gift, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';
import { useWalletStore } from '../store/walletStore';

import { initializeRazorpay, createRazorpayOrder } from '../utils/razorpay';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('razorpay');
  const [showQR, setShowQR] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const { items, clearCart } = useCartStore();
  const total = useCartStore((state) => state.total);
  const { balance, applyDiscount, addCashback } = useWalletStore();
  const router = useRouter();
  
  // Calculate wallet discount (30% of wallet balance, max 30% of order total)
  const maxWalletDiscount = Math.min(balance * 0.3, total * 0.3);
  const walletDiscount = Math.floor(maxWalletDiscount);
  const finalTotal = Math.max(0, total - walletDiscount);

  useEffect(() => {
    document.title = 'Payment - WalTax India';
    
    // Redirect if cart is empty
    if (items.length === 0) {
      router.push('/');
    }
  }, [items.length, router]);

  const paymentMethods = [
    {
      id: 'razorpay',
      name: 'Razorpay (Recommended)',
      icon: CreditCard,
      description: 'UPI, Cards, NetBanking & Wallets',
      recommended: true
    },
    {
      id: 'upi-qr',
      name: 'UPI QR Code',
      icon: QrCode,
      description: 'Scan QR with any UPI app'
    },
    {
      id: 'manual-transfer',
      name: 'Bank Transfer',
      icon: Building,
      description: 'Manual bank transfer'
    }
  ];

  const generateUPIString = () => {
    const orderId = `ORD-${Date.now()}`;
    return `upi://pay?pa=waltaxindia@paytm&pn=WalTax India&am=${finalTotal}&cu=INR&tn=Payment for Order ${orderId}`;
  };

  const generateQRCode = () => {
    const upiString = generateUPIString();
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;
  };

  const handleRazorpayPayment = async () => {
    // Initialize Razorpay
    const isInitialized = await initializeRazorpay();
    if (!isInitialized) {
      alert('Failed to initialize payment system. Please refresh and try again.');
      return;
    }

    setPaymentProcessing(true);

    try {
      const orderId = `ORD-${Date.now()}`;
      
      // Create Razorpay order
      const orderData = await createRazorpayOrder(finalTotal, orderId);
      
      // Apply wallet discount first if any
      if (walletDiscount > 0) {
        const discountResult = await applyDiscount(
          walletDiscount, 
          `Discount applied on Order ${orderId}`,
          orderId
        );
        
        if (!discountResult.success) {
          alert(discountResult.error || 'Failed to apply wallet discount');
          setPaymentProcessing(false);
          return;
        }
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1234567890',
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'WalTax India',
        description: `Payment for ${items.length} service(s)`,
        order_id: orderData.id,
        prefill: {
          name: 'Customer',
          email: '',
          contact: ''
        },
        theme: {
          color: '#4F46E5'
        },
        handler: async function (response: any) {
          console.log('Payment successful:', response);
          
          try {
            // Verify payment (in production, this should be done on backend)
            const verificationResult = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            }).catch(() => ({ ok: true })); // Fallback for demo
            
            // Add cashback for successful payment
            if (finalTotal > 0) {
              const cashback = Math.floor(finalTotal * 0.5);
              await addCashback(
                cashback, 
                `Cashback from Order ${orderId}`,
                orderId
              );
            }

            setPaymentSuccess(true);
            clearCart();
            
            setTimeout(() => {
              router.push('/dashboard');
            }, 3000);
            
          } catch (error) {
            console.error('Error processing cashback:', error);
            // Still show success even if cashback fails
            setPaymentSuccess(true);
            clearCart();
            setTimeout(() => router.push('/dashboard'), 3000);
          }
        },
        modal: {
          ondismiss: function() {
            setPaymentProcessing(false);
            console.log('Payment cancelled by user');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      alert('Error initializing payment. Please try again.');
      setPaymentProcessing(false);
    }
  };

  const handleQRPayment = () => {
    setShowQR(true);
  };

  const handleManualTransfer = () => {
    alert('Manual transfer details will be sent to your email after order confirmation.');
  };

  const handlePayment = async () => {
    if (selectedMethod === 'razorpay') {
      await handleRazorpayPayment();
    } else if (selectedMethod === 'upi-qr') {
      handleQRPayment();
    } else if (selectedMethod === 'manual-transfer') {
      handleManualTransfer();
    }
  };

  const handleUPIPaymentComplete = async () => {
    setPaymentProcessing(true);
    
    try {
      const orderId = `ORD-${Date.now()}`;
      
      // Apply wallet discount if any
      if (walletDiscount > 0) {
        await applyDiscount(
          walletDiscount, 
          `Discount applied on Order ${orderId}`,
          orderId
        );
      }

      // Add cashback
      if (finalTotal > 0) {
        const cashback = Math.floor(finalTotal * 0.5);
        await addCashback(
          cashback, 
          `Cashback from Order ${orderId}`,
          orderId
        );
      }

      setPaymentSuccess(true);
      clearCart();
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
      
    } catch (error) {
      console.error('Error processing UPI payment:', error);
      alert('Error processing payment. Please try again.');
    } finally {
      setPaymentProcessing(false);
      setShowQR(false);
    }
  };

  const copyUPIString = () => {
    navigator.clipboard.writeText(generateUPIString());
    alert('UPI payment string copied to clipboard!');
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="h-10 w-10 text-green-600" />
              </motion.div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful! 🎉</h1>
              <p className="text-gray-600 mb-6">
                Your order has been processed successfully. You'll receive a confirmation email shortly.
              </p>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">
                  ₹{Math.floor(finalTotal * 0.5)} cashback added to your wallet!
                </p>
              </div>
              
              <p className="text-sm text-gray-500">
                Redirecting to dashboard in 3 seconds...
              </p>
            </div>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h1 className="text-4xl font-display font-bold text-gray-900">
              Complete Your Payment
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary - Left Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No items in cart</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-start py-3 border-b border-gray-100">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Wallet Discount Section */}
                    {balance > 0 && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-yellow-800 font-medium flex items-center gap-1">
                            <Wallet className="h-4 w-4" />
                            Wallet Balance:
                          </span>
                          <span className="font-bold text-yellow-800">₹{balance.toLocaleString()}</span>
                        </div>
                        {walletDiscount > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-green-800 font-medium flex items-center gap-1">
                              <Gift className="h-4 w-4" />
                              Wallet Discount (30%):
                            </span>
                            <span className="font-bold text-green-800">-₹{walletDiscount.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <div className="flex justify-between items-center text-gray-600">
                        <span>Subtotal:</span>
                        <span>₹{total.toLocaleString()}</span>
                      </div>
                      {walletDiscount > 0 && (
                        <div className="flex justify-between items-center text-green-600">
                          <span>Wallet Discount:</span>
                          <span>-₹{walletDiscount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="border-t pt-2">
                        <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                          <span>Total:</span>
                          <span className="text-primary-600">₹{finalTotal.toLocaleString()}</span>
                        </div>
                      </div>
                      {finalTotal > 0 && (
                        <div className="text-center mt-3">
                          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                            🎁 You'll earn ₹{Math.floor(finalTotal * 0.5).toLocaleString()} cashback!
                          </div>
                        </div>
                      )}
                      {finalTotal === 0 && (
                        <div className="text-center mt-3">
                          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                            🎉 Free with wallet! You'll still earn ₹{Math.floor(total * 0.1).toLocaleString()} bonus cashback!
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Payment Methods - Right Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Payment Method</h2>
                
                <div className="space-y-4 mb-8">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <motion.div
                        key={method.id}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all relative ${
                          selectedMethod === method.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {method.recommended && (
                          <div className="absolute -top-2 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                            RECOMMENDED
                          </div>
                        )}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${
                            selectedMethod === method.id ? 'bg-primary-100' : 'bg-gray-100'
                          }`}>
                            <Icon className={`h-6 w-6 ${
                              selectedMethod === method.id ? 'text-primary-600' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{method.name}</h3>
                            <p className="text-sm text-gray-500">{method.description}</p>
                          </div>
                          {selectedMethod === method.id && (
                            <Check className="h-5 w-5 text-primary-600" />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Secure Payment</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Your payment information is encrypted and secure. We never store your card details.
                  </p>
                </div>

                {/* Payment Button */}
                <Button
                  onClick={handlePayment}
                  disabled={items.length === 0 || paymentProcessing}
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {paymentProcessing ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    <>
                      {selectedMethod === 'razorpay' && `Pay ₹${finalTotal.toLocaleString()} with Razorpay`}
                      {selectedMethod === 'upi-qr' && `Generate QR for ₹${finalTotal.toLocaleString()}`}
                      {selectedMethod === 'manual-transfer' && `Proceed with Bank Transfer`}
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By proceeding, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scan QR Code to Pay</h3>
              <p className="text-gray-600 mb-6">
                Scan this QR code with any UPI app to pay ₹{finalTotal.toLocaleString()}
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <img
                  src={generateQRCode()}
                  alt="UPI QR Code"
                  className="w-64 h-64 mx-auto border border-gray-200 rounded-lg"
                />
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm font-medium mb-2">UPI ID: waltaxindia@paytm</p>
                <button
                  onClick={copyUPIString}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium mx-auto"
                >
                  <Copy className="h-4 w-4" />
                  Copy UPI String
                </button>
              </div>
              
              <div className="flex gap-4">
                <Button
                  onClick={handleUPIPaymentComplete}
                  disabled={paymentProcessing}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {paymentProcessing ? 'Processing...' : 'I have paid'}
                </Button>
                <Button
                  onClick={() => setShowQR(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Click "I have paid" after completing the UPI payment
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;