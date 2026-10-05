// ============================================================
// HORIZON PROPERTIES — Icons (SVG strings)
// ============================================================

import { company, navLinks } from './data.js';

export const icons = {
  logo: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 27V14L16 5l12 9v13h-8v-8h-8v8H4z" stroke="#B89E67" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M12 27v-5h8v5" stroke="#B89E67" stroke-width="1.8" stroke-linejoin="round"/>
  </svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  arrowRight: `<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8V4h12"/></svg>`,
  bath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5H4"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></svg>`,
  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  expand: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>`,
  mapPinSmall: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
};

// ============================================================
// FAVORITES (localStorage)
// ============================================================
export const favorites = {
  get() {
    try { return JSON.parse(localStorage.getItem('horizon_favorites') || '[]'); }
    catch { return []; }
  },
  toggle(id) {
    const favs = this.get();
    const idx = favs.indexOf(id);
    if (idx >= 0) favs.splice(idx, 1);
    else favs.push(id);
    localStorage.setItem('horizon_favorites', JSON.stringify(favs));
    return favs.includes(id);
  },
  has(id) { return this.get().includes(id); },
};

// ============================================================
// HEADER
// ============================================================
export function renderHeader(currentRoute) {
  const isActive = (href) => {
    const route = href.replace('#', '');
    if (route === '/' && currentRoute === '/') return true;
    if (route !== '/' && currentRoute.startsWith(route)) return true;
    return false;
  };

  return `
    <header class="site-header" id="siteHeader">
      <div class="header-inner">
        <a href="#/" class="header-logo">
          ${icons.logo}
          <span class="header-logo-text">HORIZON PROPERTIES</span>
        </a>
        <nav class="header-nav" aria-label="Main navigation">
          ${navLinks.map(link =>
            `<a href="${link.href}" class="nav-link ${isActive(link.href) ? 'active' : ''}">${link.label}</a>`
          ).join('')}
        </nav>
        <a href="tel:${company.phone.replace(/[^\d]/g, '')}" class="btn-phone" aria-label="Call us">
          ${icons.phone}
          <span>${company.phone}</span>
        </a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="mobile-overlay" id="mobileOverlay"></div>
    <nav class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation">
      ${navLinks.map(link =>
        `<a href="${link.href}" class="nav-link ${isActive(link.href) ? 'active' : ''}">${link.label}</a>`
      ).join('')}
      <a href="tel:${company.phone.replace(/[^\d]/g, '')}" class="btn-phone">
        ${icons.phone}
        <span>${company.phone}</span>
      </a>
    </nav>
  `;
}

export function initHeader() {
  const header = document.getElementById('siteHeader');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');

  // Scroll state
  const onScroll = () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggleMenu = (open) => {
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  hamburger.addEventListener('click', () => toggleMenu(!hamburger.classList.contains('open')));
  overlay.addEventListener('click', () => toggleMenu(false));

  // Close on nav click
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });
}

// ============================================================
// FOOTER
// ============================================================
export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container-wide">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#/" class="header-logo">
              ${icons.logo}
              <span class="header-logo-text">HORIZON PROPERTIES</span>
            </a>
            <p>${company.description}</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook">${icons.facebook}</a>
              <a href="#" aria-label="Twitter">${icons.twitter}</a>
              <a href="#" aria-label="LinkedIn">${icons.linkedin}</a>
              <a href="#" aria-label="Instagram">${icons.instagram}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Navigation</h4>
            <ul class="footer-links">
              ${navLinks.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul class="footer-contact">
              <li>${icons.phone}<span>${company.phone}</span></li>
              <li>${icons.mail}<span>${company.email}</span></li>
              <li>${icons.mapPinSmall}<span>${company.address}</span></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Newsletter</h4>
            <p style="font-size:var(--fs-small);color:rgba(255,255,255,0.6);">Subscribe to receive the latest property listings and market insights.</p>
            <div class="footer-newsletter">
              <form onsubmit="event.preventDefault(); this.querySelector('button').textContent='Subscribed';">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Horizon Properties. All rights reserved.</span>
          <span>Luxury Real Estate & Investment Advisory</span>
        </div>
      </div>
    </footer>
  `;
}

// ============================================================
// PROPERTY CARD
// ============================================================
export function renderPropertyCard(property, isFeatured = false) {
  const isFav = favorites.has(property.id);
  return `
    <a href="#/property/${property.id}" class="property-card ${isFeatured ? 'featured-card' : ''}" data-id="${property.id}">
      <div class="property-card-img">
        <img src="${property.image}" alt="${property.name}" loading="lazy" />
        ${isFeatured ? `<span class="property-card-badge">Featured</span>` : ''}
        <button class="property-card-fav ${isFav ? 'saved' : ''}" data-fav="${property.id}" aria-label="Save property" onclick="event.preventDefault(); event.stopPropagation();">
          ${icons.heart}
        </button>
      </div>
      <div class="property-card-body">
        <div class="property-card-type">${property.type}</div>
        <h3 class="property-card-name">${property.name}</h3>
        <div class="property-card-location">${icons.mapPin}<span>${property.location}</span></div>
        <div class="property-card-specs">
          <span class="property-card-spec">${icons.bed}<span>${property.beds} Beds</span></span>
          <span class="property-card-spec">${icons.bath}<span>${property.baths} Baths</span></span>
          <span class="property-card-spec">${icons.ruler}<span>${property.sqft.toLocaleString()} sqft</span></span>
        </div>
        <div class="property-card-footer">
          <span class="property-card-price">${property.priceLabel}</span>
          <span class="property-card-link">View Details ${icons.arrowRight}</span>
        </div>
      </div>
    </a>
  `;
}

export function initFavoriteButtons(scope = document) {
  scope.querySelectorAll('[data-fav]')?.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.fav;
      const isFav = favorites.toggle(id);
      btn.classList.toggle('saved', isFav);
    });
  });
}

// ============================================================
// CAROUSEL
// ============================================================
export function initCarousel(container) {
  const track = container.querySelector('.carousel-track');
  if (!track) return;
  const prevBtn = container.querySelector('.carousel-btn.prev');
  const nextBtn = container.querySelector('.carousel-btn.next');
  const cards = track.querySelectorAll('.property-card');

  const scrollAmount = () => {
    if (cards.length < 2) return track.clientWidth * 0.8;
    return cards[0].offsetLeft + cards[1].offsetLeft - cards[0].offsetLeft + 24;
  };

  const updateButtons = () => {
    if (!prevBtn || !nextBtn) return;
    const maxScroll = track.scrollWidth - track.clientWidth - 4;
    prevBtn.disabled = track.scrollLeft <= 4;
    nextBtn.disabled = track.scrollLeft >= maxScroll;
  };

  prevBtn?.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
  nextBtn?.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateButtons, { passive: true });
  updateButtons();

  // Drag to scroll
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDragging = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mouseup', () => {
    isDragging = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch is handled natively by scroll-snap
}

// ============================================================
// GALLERY (property detail)
// ============================================================
export function initGallery(container, images) {
  const main = container.querySelector('.detail-gallery-main img');
  const counter = container.querySelector('.gallery-counter');
  const thumbs = container.querySelectorAll('.gallery-thumb');
  const prevBtn = container.querySelector('.gallery-nav.prev');
  const nextBtn = container.querySelector('.gallery-nav.next');
  const expandBtn = container.querySelector('.gallery-expand');
  const fullscreen = container.querySelector('.gallery-fullscreen');
  const fsImg = container.querySelector('.gallery-fullscreen img');
  const fsClose = container.querySelector('.gallery-fullscreen-close');
  const fsPrev = container.querySelector('.gallery-fullscreen-nav.prev');
  const fsNext = container.querySelector('.gallery-fullscreen-nav.next');

  let current = 0;

  const show = (idx) => {
    current = (idx + images.length) % images.length;
    main.style.opacity = '0';
    setTimeout(() => {
      main.src = images[current];
      main.style.opacity = '1';
    }, 200);
    counter.textContent = `${current + 1} / ${images.length}`;
    thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
  };

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => show(i));
  });

  prevBtn?.addEventListener('click', () => show(current - 1));
  nextBtn?.addEventListener('click', () => show(current + 1));

  // Fullscreen
  const openFullscreen = (idx) => {
    current = idx;
    fsImg.src = images[current];
    fullscreen.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeFullscreen = () => {
    fullscreen.classList.remove('open');
    document.body.style.overflow = '';
  };

  expandBtn?.addEventListener('click', () => openFullscreen(current));
  main?.addEventListener('click', () => openFullscreen(current));
  fsClose?.addEventListener('click', closeFullscreen);
  fsPrev?.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    fsImg.src = images[current];
  });
  fsNext?.addEventListener('click', () => {
    current = (current + 1) % images.length;
    fsImg.src = images[current];
  });
  fullscreen?.addEventListener('click', (e) => {
    if (e.target === fullscreen) closeFullscreen();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!fullscreen.classList.contains('open')) return;
    if (e.key === 'Escape') closeFullscreen();
    if (e.key === 'ArrowLeft') fsPrev?.click();
    if (e.key === 'ArrowRight') fsNext?.click();
  });

  show(0);
}
