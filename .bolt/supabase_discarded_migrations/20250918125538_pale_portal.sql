/*
  # Create compliance reminders table

  1. New Tables
    - `compliance_reminders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to profiles)
      - `title` (text, not null)
      - `description` (text, optional)
      - `reminder_date` (date, not null)
      - `priority` (text, check constraint: low, medium, high)
      - `category` (text, default 'General')
      - `completed` (boolean, default false)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `compliance_reminders` table
    - Add policies for authenticated users to manage their own reminders

  3. Indexes
    - Add index on user_id for faster queries
    - Add index on reminder_date for calendar queries
*/

-- Create compliance reminders table
CREATE TABLE IF NOT EXISTS compliance_reminders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  reminder_date date NOT NULL,
  priority text NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  category text NOT NULL DEFAULT 'General',
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_compliance_reminders_user_id ON compliance_reminders(user_id);
CREATE INDEX IF NOT EXISTS idx_compliance_reminders_date ON compliance_reminders(reminder_date);

-- Enable RLS
ALTER TABLE compliance_reminders ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage own reminders"
  ON compliance_reminders
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());