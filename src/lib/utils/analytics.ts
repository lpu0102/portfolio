import UAParser from 'ua-parser-js';

export function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function parseUserAgent(userAgent: string) {
  const parser = new UAParser(userAgent);
  const browser = parser.getBrowser();
  const device = parser.getDevice();
  
  return {
    browser: `${browser.name || 'Unknown'} ${browser.version || ''}`.trim(),
    device_type: device.type || 'desktop'
  };
}

export function getSessionId(): string {
  let sessionId = sessionStorage.getItem('visitor_session_id');
  
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('visitor_session_id', sessionId);
  }
  
  return sessionId;
}