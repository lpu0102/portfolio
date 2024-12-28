/*
  # Remove RLS and Rate Limiting

  1. Changes
    - Disable RLS completely
    - Drop all existing policies
    - Remove email rate limiting
  
  2. Security
    - RLS disabled as requested
    - No more submission limits
*/

-- Disable RLS
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Admin users can manage contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Admin users can read submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable anonymous submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable admin read access" ON contact_submissions;
DROP POLICY IF EXISTS "Rate limit submissions" ON contact_submissions;