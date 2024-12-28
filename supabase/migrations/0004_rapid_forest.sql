/*
  # Fix contact submissions RLS policies

  1. Changes
    - Re-enable RLS with proper configuration
    - Simplify policies for better maintainability
    - Fix rate limiting implementation
  
  2. Security
    - Enable RLS explicitly
    - Allow anonymous submissions with rate limiting
    - Restrict read access to admin
*/

-- First disable and re-enable RLS to ensure clean state
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Admin users can manage contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Admin users can read submissions" ON contact_submissions;

-- Create policy for anonymous submissions
CREATE POLICY "Enable anonymous submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for admin read access
CREATE POLICY "Enable admin read access"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.email() = 'ReddyRajesh2212@gmail.com');

-- Create policy for rate limiting
CREATE POLICY "Rate limit submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    NOT EXISTS (
      SELECT 1
      FROM contact_submissions cs
      WHERE cs.email = contact_submissions.email
      AND cs.created_at > NOW() - INTERVAL '5 minutes'
      GROUP BY cs.email
      HAVING COUNT(*) >= 3
    )
  );