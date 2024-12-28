/*
  # Add default visit purpose

  1. Changes
    - Add a default visit purpose for anonymous visitors
    - Ensure it has a known UUID for reference
  
  2. Security
    - No sensitive data involved
    - Used for tracking anonymous visitors
*/

-- Insert default visit purpose with a known UUID
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