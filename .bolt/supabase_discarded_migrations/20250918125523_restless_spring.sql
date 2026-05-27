/*
  # Create wallet transactions table

  1. New Tables
    - `wallet_transactions`
      - `id` (uuid, primary key)
      - `wallet_id` (uuid, foreign key to wallets)
      - `type` (text, check constraint: earned, spent, added)
      - `amount` (numeric, must be positive)
      - `description` (text, not null)
      - `order_id` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `wallet_transactions` table
    - Add policies for authenticated users to manage their own transactions
    - Add trigger to update wallet balance on transaction insert

  3. Indexes
    - Add index on wallet_id for faster queries
    - Add index on created_at for transaction history

  4. Constraints
    - Check constraint for transaction type
    - Check constraint for positive amounts
*/

-- Create wallet transactions table
CREATE TABLE IF NOT EXISTS wallet_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_id uuid NOT NULL REFERENCES wallets(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('earned', 'spent', 'added')),
  amount numeric(10,2) NOT NULL CHECK (amount > 0),
  description text NOT NULL,
  order_id text,
  created_at timestamptz DEFAULT now()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_wallet_id ON wallet_transactions(wallet_id);
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_created_at ON wallet_transactions(created_at DESC);

-- Enable RLS
ALTER TABLE wallet_transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own wallet transactions"
  ON wallet_transactions
  FOR SELECT
  TO authenticated
  USING (wallet_id IN (
    SELECT id FROM wallets WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own wallet transactions"
  ON wallet_transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (wallet_id IN (
    SELECT id FROM wallets WHERE user_id = auth.uid()
  ));

-- Function to update wallet balance
CREATE OR REPLACE FUNCTION update_wallet_balance()
RETURNS trigger AS $$
BEGIN
  IF NEW.type = 'earned' OR NEW.type = 'added' THEN
    UPDATE wallets 
    SET 
      balance = balance + NEW.amount,
      total_earned = CASE 
        WHEN NEW.type = 'earned' THEN total_earned + NEW.amount 
        ELSE total_earned 
      END,
      updated_at = now()
    WHERE id = NEW.wallet_id;
  ELSIF NEW.type = 'spent' THEN
    UPDATE wallets 
    SET 
      balance = balance - NEW.amount,
      total_spent = total_spent + NEW.amount,
      updated_at = now()
    WHERE id = NEW.wallet_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to update wallet balance on transaction insert
DROP TRIGGER IF EXISTS update_wallet_balance_trigger ON wallet_transactions;
CREATE TRIGGER update_wallet_balance_trigger
  AFTER INSERT ON wallet_transactions
  FOR EACH ROW
  EXECUTE FUNCTION update_wallet_balance();