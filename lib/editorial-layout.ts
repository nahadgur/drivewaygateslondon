// Transform reviewed, repository-owned HTML on the server. Native details keeps
// the contents usable without JavaScript and leaves every section crawlable.
export function editorialLayout(html: string, route: string): string {
  const guide = route.startsWith('/guides/');
  const individual = /^\/(guides|blog)\/[^/]+\/$/.test(route);
  if (individual && !html.includes('class="hub-contents"')) {
    let links: string[] = [];
    html = html.replace(/<aside class="reading-sidebar">[\s\S]*?<\/aside>/, sidebar => {
      links = sidebar.match(/<a href="#[^"]+">[\s\S]*?<\/a>/g) ?? [];
      return '';
    });
    html = html.replace(/<article class="article-content">([\s\S]*?)<\/article>/, (article, body: string) => {
      if (!links.length) {
        const ids = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1]));
        let section = 0;
        body = body.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (heading, attributes: string, label: string) => {
          let id = attributes.match(/\bid="([^"]+)"/)?.[1];
          if (!id) {
            do { id = `article-section-${++section}`; } while (ids.has(id));
            ids.add(id);
            heading = `<h2${attributes} id="${id}">${label}</h2>`;
          }
          links.push(`<a href="#${id}">${label.replace(/<[^>]*>/g, '')}</a>`);
          return heading;
        });
      } else if (body.includes('id="questions"') && !links.some(link => link.includes('href="#questions"'))) {
        links.push('<a href="#questions">Frequently asked questions</a>');
      }
      if (!links.length) return article;
      const contents = `<details class="hub-contents"><summary><span>In this ${guide ? 'guide' : 'article'}</span><span class="hub-contents-count">${links.length} sections</span></summary><nav aria-label="${guide ? 'Guide' : 'Article'} contents"><ul>${links.map(link => `<li>${link}</li>`).join('')}</ul></nav></details>`;
      // Keep introductory paragraphs before the contents on prepared articles.
      const firstSection = body.search(/<(?:section\b|h2\b)/);
      const position = firstSection < 0 ? 0 : firstSection;
      return `<article class="article-content">${body.slice(0, position)}${contents}${body.slice(position)}</article>`;
    });
  }

  return html;
}
