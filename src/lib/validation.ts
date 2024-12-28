import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  preferred_time: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;