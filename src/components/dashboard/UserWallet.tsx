'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Coins, TrendingUp, Gift, History, Plus } from 'lucide-react';
import Button from '../ui/Button';
import { useWalletStore } from '../../store/walletStore';

const UserWallet = () => {
  const { 
    wallet, 
    transactions, 
    loading, 
    fetchWallet, 
    fetchTransactions, 
    addCoins 
  } = useWalletStore();
  
  const [showAddCoins, setShowAddCoins] = useState(false);

  useEffect(() => {
    fetchWallet();
  }, [fetchWallet]);

  useEffect(() => {
    if (wallet) {
      fetchTransactions();
    }
  }, [wallet, fetchTransactions]);

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'earned': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'spent': return <Coins className="h-4 w-4 text-blue-500" />;
      case 'added': return <Plus className="h-4 w-4 text-purple-500" />;
      default: return <Coins className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'earned': return 'text-green-600 bg-green-50 border-green-200';
      case 'spent': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'added': return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const handleAddCoins = async (amount: number) => {
    const result = await addCoins(amount, 'Coins added to wallet');
    if (result.success) {
      setShowAddCoins(false);
    } else {
      alert(result.error || 'Failed to add coins');
    }
  };

  if (loading && !wallet) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">My Wallet</h2>
        <Button onClick={() => setShowAddCoins(true)} variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Coins
        </Button>
      </div>

      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Wallet className="h-8 w-8" />
            <span className="text-primary-100 text-sm">Current Balance</span>
          </div>
          <div className="text-3xl font-bold mb-2">₹{wallet?.balance?.toLocaleString() || '0'}</div>
          <div className="text-primary-100 text-sm">
            Available for discounts
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8" />
            <span className="text-green-100 text-sm">Total Earned</span>
          </div>
          <div className="text-3xl font-bold mb-2">₹{wallet?.total_earned?.toLocaleString() || '0'}</div>
          <div className="text-green-100 text-sm">
            Lifetime cashback
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Coins className="h-8 w-8" />
            <span className="text-blue-100 text-sm">Total Spent</span>
          </div>
          <div className="text-3xl font-bold mb-2">₹{wallet?.total_spent?.toLocaleString() || '0'}</div>
          <div className="text-blue-100 text-sm">
            Used for discounts
          </div>
        </motion.div>
      </div>

      {/* Wallet Benefits */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Gift className="h-6 w-6 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Wallet Benefits</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Get 30% discount using wallet coins at checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Earn 50% cashback on every successful payment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>No expiry on wallet coins</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Instant discount application</span>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <History className="h-6 w-6 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
        </div>

        {transactions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Coins className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No transactions yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 border rounded-lg ${getTransactionColor(transaction.type)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <h4 className="font-medium text-gray-900">{transaction.description}</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(transaction.created_at).toLocaleDateString()} 
                        {transaction.order_id && ` • Order: ${transaction.order_id}`}
                      </p>
                    </div>
                  </div>
                  <div className={`text-lg font-semibold ${
                    transaction.type === 'earned' ? 'text-green-600' : 
                    transaction.type === 'spent' ? 'text-red-600' : 
                    'text-purple-600'
                  }`}>
                    {transaction.type === 'spent' ? '-' : '+'}₹{transaction.amount.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Add Coins Modal */}
      {showAddCoins && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Add Coins to Wallet</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[500, 1000, 2000, 5000].map(amount => (
                <button
                  key={amount}
                  onClick={() => handleAddCoins(amount)}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center"
                >
                  <div className="text-lg font-semibold text-gray-900">₹{amount}</div>
                  <div className="text-sm text-gray-500">Add coins</div>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <Button
                onClick={() => setShowAddCoins(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserWallet;