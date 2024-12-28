/*
  # Enable visitor tracking
  
  1. Changes
    - Disable RLS on visitor-related tables to allow anonymous tracking
    - Ensure default visit purpose exists
  
  2. Security
    - This is intentionally open to allow anonymous visitor tracking
    - No sensitive data is exposed
*/

-- Disable RLS on visitor-related tables
ALTER TABLE visitors DISABLE ROW LEVEL SECURITY;
ALTER TABLE visit_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE visit_purposes DISABLE ROW LEVEL SECURITY;

-- Ensure default visit purpose exists
INSERT INTO visit_purposes (id, name, description)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  'Website Visit',
  'Anonymous website visitor'
)
ON CONFLICT (id) DO UPDATE 
SET 
  name = EXCLUDED.name,
  description = EXCLUDED.description;