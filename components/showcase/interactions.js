// Progressive enhancements for the reviewed, server-rendered templates.
// All listeners and scheduled work are disposed on Next.js route changes.
export function initShowcase() {
 const cleanups=[];
 const listen=(target,type,callback,options)=>{if(!target)return;target.addEventListener(type,callback,options);cleanups.push(()=>target.removeEventListener(type,callback,options));};
 const later=(callback,ms)=>{const id=setTimeout(callback,ms);cleanups.push(()=>clearTimeout(id));return id;};
 const frame=callback=>{const id=requestAnimationFrame(callback);cleanups.push(()=>cancelAnimationFrame(id));return id;};

(()=>{
const toggle = document.getElementById('menu-toggle'), dialog = document.getElementById('mobile-menu');
if (!toggle || !dialog)
    return;
const close = () => dialog.close();
listen(toggle, 'click', () => { dialog.showModal(); document.body.classList.add('menu-is-open'); toggle.setAttribute('aria-expanded', 'true'); });
listen(dialog.querySelector('.mobile-menu-close'), 'click', close);
listen(dialog, 'close', () => { document.body.classList.remove('menu-is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus({ preventScroll: true }); });
listen(dialog, 'keydown', e => {
    if (e.key !== 'Tab')
        return;
    const targets = [...dialog.querySelectorAll('a[href],button,[tabindex="0"]')].filter(el => el.getClientRects().length > 0);
    const index = targets.indexOf(document.activeElement);
    e.preventDefault();
    targets[(index + (e.shiftKey ? -1 : 1) + targets.length) % targets.length]?.focus();
});
listen(dialog, 'click', e => { if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        close();
} if (e.target.closest('a'))
    close(); });
const desktop = document.querySelector('.desktop-navigation');
const header = document.querySelector('.site-header');
function setGroup(group, open) {
    group.classList.toggle('is-open', open);
    group.querySelector('.nav-dropdown').hidden = !open;
    group.querySelectorAll('[aria-expanded]').forEach(el => el.setAttribute('aria-expanded', String(open)));
    if (open)
        header.classList.remove('is-scroll-hidden');
}
function closeGroups(nav) { nav.querySelectorAll('.nav-category').forEach(group => setGroup(group, false)); }
desktop.querySelectorAll('.nav-category').forEach(group => {
    let leaveTimer;
    const open = () => { clearTimeout(leaveTimer); desktop.querySelectorAll('.nav-category').forEach(other => setGroup(other, other === group)); };
    listen(group, 'pointerenter', e => { if (e.pointerType === 'mouse')
        open(); });
    listen(group, 'pointerleave', () => { leaveTimer = later(() => setGroup(group, false), 130); });
    listen(group, 'focusin', open);
    listen(group, 'focusout', () => { later(() => { if (!group.contains(document.activeElement))
        setGroup(group, false); }, 0); });
    listen(group.querySelector('.nav-category-link'), 'keydown', e => { if (e.key === 'ArrowDown') {
        e.preventDefault();
        open();
        group.querySelector('.nav-dropdown a').focus();
    } });
});
const mobileNav = dialog.querySelector('.mobile-navigation');
mobileNav.querySelectorAll('.nav-expand').forEach(button => listen(button, 'click', () => {
    const group = button.closest('.nav-category'), opening = !group.classList.contains('is-open');
    closeGroups(mobileNav);
    setGroup(group, opening);
}));
listen(document, 'click', e => { if (!desktop.contains(e.target))
    closeGroups(desktop); });
listen(document, 'keydown', e => { if (e.key === 'Escape' && !dialog.open) {
    const open = desktop.querySelector('.nav-category.is-open');
    if (open) {
        open.querySelector('.nav-category-link').focus();
        setGroup(open, false);
    }
} });
listen(matchMedia('(min-width:1001px) and (hover:hover)'), 'change', e => { if (e.matches && dialog.open)
    close(); });
if (document.querySelector('.mobile-enquiry-bar'))
    document.body.classList.add('has-mobile-enquiry');
// Retain the header's layout space while moving it out of view on downward scroll.
let previousY = scrollY, direction = 0, distance = 0, ticking = false;
const measure = () => document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
const observer = new ResizeObserver(measure);
observer.observe(header);
cleanups.push(() => observer.disconnect());
measure();
function onScroll() {
    ticking = false;
    const y = Math.max(0, Math.min(scrollY, document.documentElement.scrollHeight - innerHeight));
    const delta = y - previousY;
    previousY = y;
    if (dialog.open || document.body.classList.contains('entering'))
        return;
    if (y < 32) {
        header.classList.remove('is-scroll-hidden');
        distance = 0;
        return;
    }
    if (Math.abs(delta) < 1)
        return;
    const nextDirection = Math.sign(delta);
    distance = nextDirection === direction ? distance + Math.abs(delta) : Math.abs(delta);
    direction = nextDirection;
    if (nextDirection < 0 && distance >= 8) {
        header.classList.remove('is-scroll-hidden');
        distance = 0;
    }
    if (nextDirection > 0 && distance >= 12 && y > header.offsetHeight) {
        if (!header.contains(document.activeElement)) {
            closeGroups(desktop);
            header.classList.add('is-scroll-hidden');
        }
        distance = 0;
    }
}
listen(window, 'scroll', () => { if (!ticking) {
    ticking = true;
    frame(onScroll);
} }, { passive: true });
listen(header, 'focusin', () => header.classList.remove('is-scroll-hidden'));
listen(window, 'pageshow', () => { previousY = scrollY; header.classList.remove('is-scroll-hidden'); });

})();

(()=>{
const mobile = matchMedia('(max-width:700px)');
const groups = [...document.querySelectorAll('.footer-group')];
const adapt = () => groups.forEach(group => group.open = !mobile.matches);
adapt();
listen(mobile, 'change', adapt);

})();

(()=>{
const mobile = matchMedia('(max-width:700px)');
const disclosures = [...document.querySelectorAll('.content-disclosure,.toc-disclosure')];
const adapt = () => disclosures.forEach(d => d.open = !mobile.matches);
adapt();
listen(mobile, 'change', adapt);
document.querySelectorAll('.page-jumps a').forEach(a => listen(a, 'click', () => { const section = document.getElementById(a.hash.slice(1)); const detail = section?.querySelector('.content-disclosure'); if (detail)
    detail.open = true; }));
document.querySelectorAll('.toc a').forEach(a => listen(a, 'click', () => { if (mobile.matches) {
    a.closest('details').open = false;
    const target = document.getElementById(a.hash.slice(1));
    frame(() => { target?.scrollIntoView(); });
} }));
if (location.hash) {
    document.getElementById(location.hash.slice(1))?.closest('details')?.setAttribute('open', '');
}
const search = document.getElementById('page-search'), filter = document.getElementById('page-filter');
if (search) {
    const cards = [...document.querySelectorAll('[data-search]')], count = document.getElementById('result-count'), empty = document.getElementById('empty-results');
    function update() { let shown = 0; const term = search.value.trim().toLowerCase(), category = filter?.value || ''; cards.forEach(card => { card.hidden = !(card.dataset.search.includes(term) && (!category || card.dataset.category === category)); if (!card.hidden)
        shown++; }); count.textContent = shown + ' ' + (shown === 1 ? 'result' : 'results'); empty.hidden = shown > 0; }
    listen(search, 'input', update);
    listen(filter, 'change', update);
    update();
}

})();

(()=>{
if (!document.getElementById('entrance'))
    return;
'use strict';
const entrance = document.getElementById('entrance');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const sessionKey = 'dgl-entrance-seen-v6';
const entranceStatus = document.getElementById('entrance-status');
let entranceRun = 0;
let entranceTimer;
let startFrame;
const stopEntrance = () => {
    entranceRun += 1;
    clearTimeout(entranceTimer);
    cancelAnimationFrame(startFrame);
    entrance.hidden = true;
    entrance.classList.remove('is-playing', 'is-loading');
    document.body.classList.remove('entering');
    if (document.activeElement === document.getElementById('skip-intro')) {
        document.querySelector('.nav-brand')?.focus({ preventScroll: true });
    }
};
const playEntrance = async () => {
    stopEntrance();
    if (reduceMotion.matches)
        return;
    const run = entranceRun;
    entrance.hidden = false;
    entrance.classList.add('is-loading');
    entranceStatus.textContent = 'Loading your entrance…';
    let readyTimeout;
    // Wait only for the entrance artwork. Slow or failed assets never trap visitors.
    const artworkReady = Promise.all([...entrance.querySelectorAll('img')].map(img => img.decode().then(() => img.naturalWidth > 0).catch(() => false))).then(results => results.every(Boolean));
    const ready = await Promise.race([
        artworkReady,
        new Promise(resolve => { readyTimeout = later(() => resolve(false), 2500); })
    ]);
    clearTimeout(readyTimeout);
    if (run !== entranceRun)
        return;
    if (!ready) {
        stopEntrance();
        return;
    }
    entrance.classList.remove('is-loading');
    entranceStatus.textContent = 'Opening gates…';
    document.body.classList.add('entering');
    startFrame = frame(() => {
        startFrame = frame(() => {
            entrance.classList.add('is-playing');
            // The fade ends playback; this timeout only guards against a missing event.
            entranceTimer = later(stopEntrance, 4500);
        });
    });
};
listen(entrance, 'animationend', e => {
    if (e.target === entrance && e.animationName === 'entrance-fade')
        stopEntrance();
});
let alreadySeen = true;
try {
    alreadySeen = sessionStorage.getItem(sessionKey) === 'yes';
    sessionStorage.setItem(sessionKey, 'yes');
}
catch { /* If storage is unavailable, skip automatic playback. */ }
if (!alreadySeen && !location.hash)
    playEntrance();
listen(document.getElementById('skip-intro'), 'click', stopEntrance);
listen(document, 'keydown', e => { if (e.key === 'Escape' || e.key === 'Tab')
    stopEntrance(); });
listen(document, 'pointerdown', e => { if (!entrance.hidden && !entrance.contains(e.target))
    stopEntrance(); });
listen(window, 'scroll', stopEntrance, { passive: true });
listen(reduceMotion, 'change', stopEntrance);
const options = {
    "contemporary": {
        "title": "Aluminium Driveway Gates",
        "text": "Aluminium driveway gates designed, supplied and installed across London. Choose a finish and opening layout with the specification, installation scope and aftercare confirmed in writing.",
        "image": "/showcase/assets/aluminium.webp",
        "alt": "Aluminium Driveway Gates",
        "link": "services/aluminium-driveway-gates/",
        "cta": "Learn more"
    },
    "character": {
        "title": "Wooden Driveway Gates",
        "text": "Handcrafted timber gates that bring warmth and character to your property. Available in hardwoods like iroko and oak, or treated softwoods for a more affordable option.",
        "image": "/showcase/assets/timber.webp",
        "alt": "Wooden Driveway Gates",
        "link": "services/wooden-driveway-gates/",
        "cta": "Learn more"
    },
    "space": {
        "title": "Electric Sliding Gates",
        "text": "Space-saving automated gates that slide horizontally along your boundary wall. Perfect for driveways where a swinging gate would eat into parking space.",
        "image": "/showcase/assets/sliding.webp",
        "alt": "Electric Sliding Gates",
        "link": "services/electric-sliding-gates/",
        "cta": "Learn more"
    }
};
document.querySelectorAll('.preference').forEach(button => {
  const select = () => {
    const option = options[button.dataset.style];
    document.querySelectorAll('.preference').forEach(b => { const selected = b === button; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); });
    const image = document.getElementById('inspiration-image');
    image.src = option.image;
    image.alt = option.alt;
    const detail = document.getElementById('preference-detail');
    detail.querySelector('h3').textContent = option.title;
    detail.querySelector('p').textContent = option.text;
    const link = document.getElementById('preference-link');
    link.href = '/' + option.link;
    link.textContent = option.cta + ' ↗';
  };
  listen(button, 'click', select);
  listen(button, 'focus', select);
  listen(button, 'pointerenter', event => { if (event.pointerType !== 'touch') select(); });
});
cleanups.push(stopEntrance);

})();

 const pathname=window.location.pathname;
 document.querySelectorAll('.desktop-navigation .nav-category,.mobile-navigation .nav-category').forEach(group=>{const link=group.querySelector('.nav-category-link');if(link){const target=new URL(link.href).pathname;group.classList.toggle('is-current',pathname.startsWith(target)&&!(target==='/services/'&&pathname.startsWith('/services/access-control/')));}});
 document.querySelectorAll('.nav-direct').forEach(link=>link.classList.toggle('is-current',pathname.startsWith(new URL(link.href).pathname)));
 document.querySelectorAll('.site-header a[href],.mobile-navigation a[href]').forEach(link=>{if(new URL(link.href).pathname===pathname)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
 return ()=>{cleanups.reverse().forEach(dispose=>dispose());document.body.classList.remove('entering','menu-is-open','has-mobile-enquiry');};
}
