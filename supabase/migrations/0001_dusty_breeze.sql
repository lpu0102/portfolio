/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `preferred_date` (date)
      - `preferred_time` (time)
      - `created_at` (timestamptz)
      - `status` (enum: pending, contacted, completed)

  2. Security
    - Enable RLS
    - Add policies for admin access only
*/

-- Create enum type for submission status
CREATE TYPE submission_status AS ENUM ('pending', 'contacted', 'completed');

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time time NOT NULL,
  created_at timestamptz DEFAULT now(),
  status submission_status DEFAULT 'pending',
  
  -- Add constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_name CHECK (length(name) >= 2)
);

-- Create index for email searches
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for admin users only
CREATE POLICY "Admin users can manage contact submissions"
  ON contact_submissions
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE auth.email() IN ('ReddyRajesh2212@gmail.com')
  ));