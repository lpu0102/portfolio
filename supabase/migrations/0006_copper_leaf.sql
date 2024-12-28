/*
  # Create Visitor Tracking System

  1. New Tables
    - visitors
      - Basic information about visitors
      - Tracks creation and updates
    - visit_purposes
      - Lookup table for visit purposes
    - visit_logs
      - Records each visit
      - Links to visitors and purposes

  2. Indexes
    - Email and phone for quick visitor lookup
    - Timestamps for chronological queries
    - Foreign key indexes for relationships
*/

-- Create enum for visitor status
CREATE TYPE visitor_status AS ENUM ('active', 'inactive', 'blocked');

-- Create visit purposes lookup table
CREATE TABLE IF NOT EXISTS visit_purposes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create visitors table
CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE,
  phone text UNIQUE,
  company text,
  status visitor_status DEFAULT 'active',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  -- Constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_phone CHECK (phone ~* '^\+?[1-9]\d{1,14}$'),
  CONSTRAINT valid_names CHECK (
    length(first_name) >= 2 AND 
    length(last_name) >= 2
  )
);

-- Create visit logs table
CREATE TABLE IF NOT EXISTS visit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id uuid NOT NULL REFERENCES visitors(id),
  purpose_id uuid NOT NULL REFERENCES visit_purposes(id),
  check_in timestamptz DEFAULT now(),
  check_out timestamptz,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  CONSTRAINT valid_checkout CHECK (
    check_out IS NULL OR check_out > check_in
  )
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_visitors_email ON visitors(email);
CREATE INDEX IF NOT EXISTS idx_visitors_phone ON visitors(phone);
CREATE INDEX IF NOT EXISTS idx_visitors_names ON visitors(last_name, first_name);
CREATE INDEX IF NOT EXISTS idx_visitors_company ON visitors(company);
CREATE INDEX IF NOT EXISTS idx_visitors_status ON visitors(status);
CREATE INDEX IF NOT EXISTS idx_visit_logs_dates ON visit_logs(check_in, check_out);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_visitors_timestamp
  BEFORE UPDATE ON visitors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_visit_logs_timestamp
  BEFORE UPDATE ON visit_logs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Insert default visit purposes
INSERT INTO visit_purposes (name, description) VALUES
  ('Meeting', 'Business meeting with staff'),
  ('Interview', 'Job interview'),
  ('Delivery', 'Package or document delivery'),
  ('Site Visit', 'Facility tour or inspection'),
  ('Service', 'Maintenance or repair service'),
  ('Other', 'Other purposes')
ON CONFLICT (name) DO NOTHING;