/*
  # Create user files table

  1. New Tables
    - `user_files`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to profiles)
      - `name` (text, not null)
      - `file_path` (text, not null)
      - `file_size` (bigint, not null)
      - `file_type` (text, not null)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `user_files` table
    - Add policies for authenticated users to manage their own files

  3. Indexes
    - Add index on user_id for faster queries
*/

-- Create user files table
CREATE TABLE IF NOT EXISTS user_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  file_path text NOT NULL,
  file_size bigint NOT NULL,
  file_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_user_files_user_id ON user_files(user_id);

-- Enable RLS
ALTER TABLE user_files ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage own files"
  ON user_files
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());