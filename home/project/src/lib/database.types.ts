export interface Database {
  public: {
    Tables: {
      visitors: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email?: string;
          phone?: string;
          company?: string;
          status: 'active' | 'inactive' | 'blocked';
          notes?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['visitors']['Row'], 'id' | 'created_at' | 'updated_at'>;
      };
      visit_purposes: {
        Row: {
          id: string;
          name: string;
          description?: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['visit_purposes']['Row'], 'id' | 'created_at'>;
      };
      visit_logs: {
        Row: {
          id: string;
          visitor_id: string;
          purpose_id: string;
          check_in: string;
          check_out?: string;
          notes?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['visit_logs']['Row'], 'id' | 'created_at' | 'updated_at'>;
      };
    };
  };
}