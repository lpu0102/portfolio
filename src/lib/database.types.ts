export interface Database {
  public: {
    Tables: {
      visitor_tracking: {
        Row: {
          visitor_id: string;
          ip_address: string;
          user_agent: string;
          page_url: string;
          referrer_url?: string;
          visit_timestamp: string;
          session_id: string;
          country?: string;
          browser?: string;
          device_type?: string;
        };
        Insert: Omit<Database['public']['Tables']['visitor_tracking']['Row'], 'visitor_id' | 'visit_timestamp'>;
      };
      // ... existing table definitions ...
    };
  };
}