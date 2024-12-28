import { supabase } from './supabase';
import { ContactFormData } from './validation';

const RATE_LIMIT_MINUTES = 5;

export async function submitContactForm(data: ContactFormData) {
  try {
    // Check for duplicate submissions within rate limit window
    const { data: existingSubmissions, error: checkError } = await supabase
      .from('contact_submissions')
      .select('created_at')
      .eq('email', data.email)
      .gte('created_at', new Date(Date.now() - RATE_LIMIT_MINUTES * 60 * 1000).toISOString())
      .limit(1);

    if (checkError) throw new Error('Error checking recent submissions');
    if (existingSubmissions?.length) {
      throw new Error(`Please wait ${RATE_LIMIT_MINUTES} minutes between submissions`);
    }

    // Insert new submission
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          ...data,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      data: result
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}