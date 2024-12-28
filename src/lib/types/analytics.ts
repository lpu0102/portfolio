import { z } from 'zod';

export const visitorTrackingSchema = z.object({
  ip_address: z.string().min(1),
  user_agent: z.string().min(1),
  page_url: z.string().url(),
  referrer_url: z.string().url().optional(),
  session_id: z.string().min(1),
  country: z.string().optional(),
  browser: z.string().optional(),
  device_type: z.string().optional()
});

export type VisitorTracking = z.infer<typeof visitorTrackingSchema>;