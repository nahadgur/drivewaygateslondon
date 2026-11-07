import images from '@/data/service-images.json';

export type ServiceImage = { src: string; alt: string; width: number; height: number; provenance: string; caption: string; position?: string };
export function serviceImage(route: string): ServiceImage {
  const image = (images as Record<string, ServiceImage>)[route];
  if (!image) throw new Error(`Reviewed service image missing: ${route}`);
  return image;
}
const escape = (value: string) => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
function imageTag(tag: string, image: ServiceImage) {
  return tag.replace(/\s(?:src|alt|width|height|aria-hidden|style)="[^"]*"/g, '').replace(/\s*\/?\s*>$/, ` src="${escape(image.src)}" alt="${escape(image.alt)}" width="${image.width}" height="${image.height}"${image.position ? ` style="object-position:${escape(image.position)}"` : ''}>`);
}

// Cards, page heroes and metadata share the same reviewed subject and provenance.
// Snapshot files remain readable, while this prevents a new card from silently
// falling back to decorative ironwork or an unrelated legacy stock image.
export function applyServiceImages(html: string, route: string) {
  html = html.replace(/<a\b[^>]*class="[^"]*\bpage-card\b[^"]*"[^>]*>[\s\S]*?<\/a>/g, card => {
    const destination = card.match(/href="([^"]+)"/)?.[1];
    const image = destination && (images as Record<string, ServiceImage>)[destination];
    if (!image) return card;
    return card.replace(/<img\b[^>]*>/, tag => imageTag(tag, image));
  });
  const image = (images as Record<string, ServiceImage>)[route];
  if (image) {
    html = html.replace(/<img\b[^>]*class="hero-backdrop"[^>]*>/, tag => imageTag(tag, image));
  }
  return html;
}
