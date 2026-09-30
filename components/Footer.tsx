import shared from '@/data/showcase/shared.json';
export function Footer({ home = false }: { home?: boolean } = {}) {
  return <div className="footer-host" dangerouslySetInnerHTML={{ __html: home ? shared.footerHome : shared.footer }} />;
}
