/*
  # Create visitor tracking table

  1. New Tables
    - visitor_tracking
      - visitor_id (UUID, primary key)
      - ip_address (text)
      - user_agent (text)
      - page_url (text)
      - referrer_url (text)
      - visit_timestamp (timestamptz)
      - session_id (text)
      - country (text)
      - browser (text)
      - device_type (text)
  
  2. Indexes
    - session_id for quick session lookups
    - visit_timestamp for time-based queries
    - ip_address for geographic analysis
*/

-- Create visitor tracking table
CREATE TABLE IF NOT EXISTS visitor_tracking (
  visitor_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  user_agent text NOT NULL,
  page_url text NOT NULL,
  referrer_url text,
  visit_timestamp timestamptz DEFAULT now(),
  session_id text NOT NULL,
  country text,
  browser text,
  device_type text,
  
  -- Add constraints
  CONSTRAINT valid_url CHECK (
    page_url ~ '^https?://.+'
  ),
  CONSTRAINT valid_referrer CHECK (
    referrer_url IS NULL OR referrer_url ~ '^https?://.+'
  )
);

-- Create indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_visitor_tracking_session ON visitor_tracking(session_id);
CREATE INDEX IF NOT EXISTS idx_visitor_tracking_timestamp ON visitor_tracking(visit_timestamp);
CREATE INDEX IF NOT EXISTS idx_visitor_tracking_ip ON visitor_tracking(ip_address);
CREATE INDEX IF NOT EXISTS idx_visitor_tracking_country ON visitor_tracking(country);
CREATE INDEX IF NOT EXISTS idx_visitor_tracking_browser ON visitor_tracking(browser);
CREATE INDEX IF NOT EXISTS idx_visitor_tracking_device ON visitor_tracking(device_type);

-- Create composite index for session analysis
CREATE INDEX IF NOT EXISTS idx_visitor_tracking_session_time 
ON visitor_tracking(session_id, visit_timestamp);