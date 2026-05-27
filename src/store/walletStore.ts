import { create } from 'zustand';

interface Wallet {
  id: string;
  balance: number;
  total_earned: number;
  total_spent: number;
}

interface WalletTransaction {
  id: string;
  type: 'earned' | 'spent' | 'added';
  amount: number;
  description: string;
  order_id?: string;
  created_at: string;
}

interface WalletStore {
  wallet: Wallet;
  transactions: WalletTransaction[];
  loading: boolean;
  balance: number;
  fetchWallet: () => Promise<void>;
  fetchTransactions: () => Promise<void>;
  addCoins: (amount: number, description?: string) => Promise<{ success: boolean; error?: string }>;
  applyDiscount: (amount: number, description: string, orderId?: string) => Promise<{ success: boolean; error?: string }>;
  addCashback: (amount: number, description: string, orderId?: string) => Promise<{ success: boolean; error?: string }>;
}

const initialWallet: Wallet = {
  id: 'local-wallet',
  balance: 0,
  total_earned: 0,
  total_spent: 0
};

export const useWalletStore = create<WalletStore>((set, get) => ({
  wallet: initialWallet,
  transactions: [],
  loading: false,

  get balance() {
    return get().wallet.balance;
  },

  fetchWallet: async () => {
    set({ loading: false });
  },

  fetchTransactions: async () => {},

  addCoins: async (amount, description = 'Coins added to wallet') => {
    const transaction: WalletTransaction = {
      id: `txn-${Date.now()}`,
      type: 'added',
      amount,
      description,
      created_at: new Date().toISOString()
    };

    set((state) => ({
      wallet: {
        ...state.wallet,
        balance: state.wallet.balance + amount,
        total_earned: state.wallet.total_earned + amount
      },
      transactions: [transaction, ...state.transactions]
    }));

    return { success: true };
  },

  applyDiscount: async (amount, description, orderId) => {
    const { wallet } = get();

    if (wallet.balance < amount) {
      return { success: false, error: 'Insufficient wallet balance' };
    }

    const transaction: WalletTransaction = {
      id: `txn-${Date.now()}`,
      type: 'spent',
      amount,
      description,
      order_id: orderId,
      created_at: new Date().toISOString()
    };

    set((state) => ({
      wallet: {
        ...state.wallet,
        balance: state.wallet.balance - amount,
        total_spent: state.wallet.total_spent + amount
      },
      transactions: [transaction, ...state.transactions]
    }));

    return { success: true };
  },

  addCashback: async (amount, description, orderId) => {
    const transaction: WalletTransaction = {
      id: `txn-${Date.now()}`,
      type: 'earned',
      amount,
      description,
      order_id: orderId,
      created_at: new Date().toISOString()
    };

    set((state) => ({
      wallet: {
        ...state.wallet,
        balance: state.wallet.balance + amount,
        total_earned: state.wallet.total_earned + amount
      },
      transactions: [transaction, ...state.transactions]
    }));

    return { success: true };
  }
}));