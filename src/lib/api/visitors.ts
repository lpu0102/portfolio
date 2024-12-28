import { supabase } from '../supabase';
import { type Visitor, type VisitLog, visitorSchema, visitLogSchema } from '../types/visitor';

export async function createOrUpdateVisitor(visitorData: Visitor) {
  try {
    // Validate visitor data
    const validatedData = visitorSchema.parse(visitorData);

    // Check for existing visitor by email or phone
    const { data: existingVisitor } = await supabase
      .from('visitors')
      .select('id')
      .or(`email.eq.${validatedData.email},phone.eq.${validatedData.phone}`)
      .maybeSingle();

    if (existingVisitor) {
      // Update existing visitor
      const { data, error } = await supabase
        .from('visitors')
        .update(validatedData)
        .eq('id', existingVisitor.id)
        .select()
        .single();

      if (error) throw error;
      return { success: true, data, isNew: false };
    }

    // Create new visitor
    const { data, error } = await supabase
      .from('visitors')
      .insert(validatedData)
      .select()
      .single();

    if (error) throw error;
    return { success: true, data, isNew: true };

  } catch (error) {
    console.error('Error in createOrUpdateVisitor:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

export async function createVisitLog(logData: VisitLog) {
  try {
    const validatedData = visitLogSchema.parse(logData);

    const { data, error } = await supabase
      .from('visit_logs')
      .insert(validatedData)
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };

  } catch (error) {
    console.error('Error in createVisitLog:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

export async function updateVisitLogCheckout(logId: string, checkOutTime: Date = new Date()) {
  try {
    const { data, error } = await supabase
      .from('visit_logs')
      .update({ check_out: checkOutTime })
      .eq('id', logId)
      .is('check_out', null)
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };

  } catch (error) {
    console.error('Error in updateVisitLogCheckout:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}