'use client';

import { useEffect, useRef, useState } from 'react';

type Photo = { src: string; alt: string; title: string };

export function ProjectPhotoViewer() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [failed, setFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const viewerOpen = useRef(false);
  const ownsHistoryEntry = useRef(false);
  const closing = useRef(false);

  useEffect(() => {
    const closeViewer = () => {
      viewerOpen.current = false;
      ownsHistoryEntry.current = false;
      closing.current = false;
      dialog.current?.close();
      setPhoto(null);
      opener.current?.focus({ preventScroll: true });
    };
    const openPhoto = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('.work-showcase-page .work-project .project-photo > a');
      const image = anchor?.querySelector('img');
      if (!anchor || !image || !dialog.current?.showModal || viewerOpen.current) return;
      const url = new URL(anchor.href);
      if (url.origin !== location.origin || !url.pathname.startsWith('/images/projects/') || !url.pathname.endsWith('.webp')) return;
      event.preventDefault();
      opener.current = anchor;
      viewerOpen.current = true;
      ownsHistoryEntry.current = true;
      const slug = url.pathname.split('/').pop()!.replace(/\.webp$/, '');
      history.pushState({ ...history.state, gatePhotoViewer: true }, '', `#view-${encodeURIComponent(slug)}`);
      setFailed(false);
      setPhoto({ src: url.pathname, alt: image.alt, title: anchor.closest('figure')?.querySelector('h3')?.textContent || 'Gate photograph' });
    };
    const onBack = () => { if (viewerOpen.current) closeViewer(); };
    document.addEventListener('click', openPhoto);
    window.addEventListener('popstate', onBack);
    return () => {
      document.removeEventListener('click', openPhoto);
      window.removeEventListener('popstate', onBack);
      dialog.current?.close();
    };
  }, []);

  useEffect(() => {
    if (photo && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [photo]);

  const goBack = () => {
    if (closing.current) return;
    if (ownsHistoryEntry.current) {
      closing.current = true;
      history.back();
    } else {
      dialog.current?.close();
    }
  };

  return <dialog ref={dialog} className="project-image-viewer" aria-labelledby="project-image-title"
    onCancel={event => { event.preventDefault(); goBack(); }}
    onClose={() => {
      viewerOpen.current = false;
      ownsHistoryEntry.current = false;
      closing.current = false;
      setPhoto(null);
      opener.current?.focus({ preventScroll: true });
    }}>
    <header className="project-image-toolbar">
      <button type="button" onClick={goBack} autoFocus>Back to our work</button>
      <h2 id="project-image-title">{photo?.title || 'Gate photograph'}</h2>
    </header>
    <div className="project-image-canvas">
      {photo && (failed
        ? <p role="alert">This photograph could not be loaded. Use “Back to our work” to return to the gallery.</p>
        : <img src={photo.src} alt={photo.alt} decoding="async" onError={() => setFailed(true)} />)}
    </div>
  </dialog>;
}
