// Every page carries its own enquiry form, so quote and contact calls to action
// jump to that form instead of sending visitors to /contact/.
export function pointQuoteLinks(html: string, anchor: string): string {
  return html.replace(/href="\/contact\/[^"]*"/g, `href="#${anchor}"`);
}

// Pre-select the gate type on service and commercial pages.
export function serviceForRoute(route: string): string | undefined {
  if (route.startsWith('/services/access-control/')) return 'access-control';
  if (route.startsWith('/commercial/')) return 'commercial-gates';
  return route.match(/^\/services\/([a-z-]+)\/$/)?.[1];
}
