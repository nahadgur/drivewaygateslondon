// Search results truncate titles at roughly 60 characters. Templates join a
// core phrase with optional suffixes; fitTitle keeps the first suffix that
// fits and falls back to the core phrase alone, so long place or product
// names never push a title past the limit.
export const TITLE_MAX = 60;
export const BRAND = 'Driveway Gates London';

export function fitTitle(core: string, suffixes: string[] = [], max = TITLE_MAX): string {
  for (const suffix of suffixes) {
    const candidate = `${core} | ${suffix}`;
    if (candidate.length <= max) return candidate;
  }
  return core;
}

// Meta descriptions over ~160 characters are cut off in results. Joins
// sentences in order while they fit; the first sentence is always kept.
export const DESCRIPTION_MAX = 160;

export function fitDescription(sentences: string[], max = DESCRIPTION_MAX): string {
  let out = sentences[0] ?? '';
  for (const sentence of sentences.slice(1)) {
    const candidate = `${out} ${sentence}`;
    if (candidate.length > max) break;
    out = candidate;
  }
  return out;
}

// Hand-written meta titles often end in "| Driveway Gates London". Drop that
// suffix when it pushes the title past the limit; keep it when it fits.
export function fitBrandedTitle(metaTitle: string): string {
  const core = metaTitle.replace(/\s*\|\s*Driveway Gates London\s*$/, '');
  return fitTitle(core, [BRAND]);
}
