type EventName =
  | 'tour_view'
  | 'whatsapp_click'
  | 'contact_form_submit'
  | 'destination_view'
  | 'travel_guide_view'
  | 'language_switch';

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: EventName, params?: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
