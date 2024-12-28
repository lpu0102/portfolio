import { supabase } from '../supabase';
import { type VisitorTracking, visitorTrackingSchema } from '../types/analytics';
import { parseUserAgent, getSessionId } from '../utils/analytics';

export async function trackPageView() {
  try {
    const sessionId = getSessionId();
    const userAgent = navigator.userAgent;
    const { browser, device_type } = parseUserAgent(userAgent);

    const trackingData: VisitorTracking = {
      ip_address: '0.0.0.0', // Will be replaced by Supabase Edge Functions
      user_agent: userAgent,
      page_url: window.location.href,
      referrer_url: document.referrer || undefined,
      session_id: sessionId,
      browser,
      device_type
    };

    // Validate tracking data
    const validatedData = visitorTrackingSchema.parse(trackingData);

    // Store tracking data
    const { error } = await supabase
      .from('visitor_tracking')
      .insert(validatedData);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Error tracking page view:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}