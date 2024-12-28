import { z } from 'zod';

// Visitor status enum
export const VisitorStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  BLOCKED: 'blocked'
} as const;

export type VisitorStatus = typeof VisitorStatus[keyof typeof VisitorStatus];

// Validation schemas
export const visitorSchema = z.object({
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number').optional(),
  company: z.string().optional(),
  status: z.enum(['active', 'inactive', 'blocked']).default('active'),
  notes: z.string().optional()
});

export const visitLogSchema = z.object({
  visitor_id: z.string().uuid(),
  purpose_id: z.string().uuid(),
  check_in: z.date().default(() => new Date()),
  check_out: z.date().optional(),
  notes: z.string().optional()
});

// Types
export type Visitor = z.infer<typeof visitorSchema>;
export type VisitLog = z.infer<typeof visitLogSchema>;

export interface VisitPurpose {
  id: string;
  name: string;
  description?: string;
}