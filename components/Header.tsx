import shared from '@/data/showcase/shared.json';

// The optional callback remains compatible with existing service-area pages.
export function Header(_props: { onOpenModal?: () => void } = {}) {
  return <div className="header-host" dangerouslySetInnerHTML={{ __html: shared.header }} />;
}
