// FAQ answers are always shown. Snapshot FAQs are <details> elements inside
// <div class="faq-list">; render them open with a non-focusable summary so the
// question reads as a static heading. Other <details> (contents menus,
// navigation) are left untouched.
const FAQ_LIST = '<div class="faq-list">';

export function openFaqs(html: string): string {
  let out = '';
  let cursor = 0;
  for (let start = html.indexOf(FAQ_LIST); start !== -1; start = html.indexOf(FAQ_LIST, cursor)) {
    // Find the </div> that closes this faq-list, allowing for nested divs.
    const tag = /<div\b|<\/div>/g;
    tag.lastIndex = start;
    let depth = 0;
    let end = -1;
    for (let m = tag.exec(html); m; m = tag.exec(html)) {
      depth += m[0] === '</div>' ? -1 : 1;
      if (depth === 0) { end = m.index + m[0].length; break; }
    }
    if (end === -1) break;
    const block = html.slice(start, end)
      .replace(/<details>/g, '<details open>')
      .replace(/<summary>/g, '<summary tabindex="-1">');
    out += html.slice(cursor, start) + block;
    cursor = end;
  }
  return out + html.slice(cursor);
}
