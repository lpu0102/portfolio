/*
  # Fix RLS policies for contact submissions

  1. Changes
    - Fix rate limiting check using proper table references
    - Simplify policy structure
    - Add explicit enable RLS statement
  
  2. Security
    - Maintain proper rate limiting (max 3 submissions per email in 5 minutes)
    - Keep admin-only read access
    - Ensure proper email validation
*/

-- First ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Admin users can manage contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Admin users can read submissions" ON contact_submissions;

-- Create policy for anonymous submissions with fixed rate limiting
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Basic validation
    length(name) >= 2 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    -- Rate limiting check using subquery
    NOT EXISTS (
      SELECT 1 FROM (
        SELECT COUNT(*) as submission_count
        FROM contact_submissions cs
        WHERE cs.email = contact_submissions.email
        AND cs.created_at > NOW() - INTERVAL '5 minutes'
      ) counts
      WHERE counts.submission_count >= 3
    )
  );

-- Create policy for admin read access
CREATE POLICY "Admin users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.email() = 'ReddyRajesh2212@gmail.com');