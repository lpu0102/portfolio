/*
  # Update contact form policies

  1. Changes
    - Fix rate limiting check in anonymous submission policy
    - Maintain admin-only read access
  
  2. Security
    - Enable RLS
    - Allow public inserts with proper rate limiting
    - Restrict read access to admins
*/

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Admin users can manage contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Admin users can read submissions" ON contact_submissions;

-- Create policy for anonymous submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Basic validation
    length(name) >= 2 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    -- Rate limiting check (no more than 3 submissions per email in 5 minutes)
    (
      SELECT COUNT(*)
      FROM contact_submissions cs
      WHERE cs.email = contact_submissions.email
      AND cs.created_at > NOW() - INTERVAL '5 minutes'
    ) < 3
  );

-- Create policy for admin read access
CREATE POLICY "Admin users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (
    auth.email() = 'ReddyRajesh2212@gmail.com'
  );