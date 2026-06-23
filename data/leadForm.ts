// Single source of truth for the lead pipeline. Shared by LeadFormModal and
// HeroLeadForm so the webhook URL and gate-type list never diverge.
// Webhook is a hardcoded Google Apps Script /exec endpoint (never an env var).

export const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwIkSKA8qGfLjJ3e_lUUJp5U0oNZLo51wpZtXvdvNSaPXNyynWrdtN-ZcoYql3hcAjy/exec';

export const GATE_TYPES = [
  'Electric Sliding Gates',
  'Electric Swing Gates',
  'Wooden Driveway Gates',
  'Metal / Wrought Iron Gates',
  'Aluminium Gates',
  'Composite Gates',
  'Hardwood Gates',
  'Automated Gate Systems',
  'Gate Automation (Retrofit)',
  'Pedestrian / Side Gates',
  'Commercial Gates',
  'Access Control System',
  'Gate Repair and Maintenance',
  'Not sure yet',
];
