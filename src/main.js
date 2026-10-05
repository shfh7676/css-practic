// ============================================================
// HORIZON PROPERTIES — App Entry & Router
// ============================================================

import './styles.css';
import { company, navLinks } from './data.js';
import { renderHeader, initHeader, renderFooter, favorites } from './components.js';
import {
  renderHome, renderProperties, renderPropertyDetail,
  renderAbout, renderServices, renderTeam, renderContact,
} from './pages.js';

// ---------- Router ----------
const routes = [
  { path: '/', render: renderHome },
  { path: '/properties', render: renderProperties },
  { path: '/about', render: renderAbout },
  { path: '/services', render: renderServices },
  { path: '/team', render: renderTeam },
  { path: '/contact', render: renderContact },
];

function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  // Property detail: /property/:id
  const detailMatch = hash.match(/^\/property\/(.+)$/);
  if (detailMatch) {
    return { route: '/property', params: { id: detailMatch[1] } };
  }
  const match = routes.find(r => r.path === hash);
  return { route: hash, params: {} };
}

function render() {
  const { route, params } = getRoute();
  const app = document.getElementById('app');

  let content;
  let isDetail = false;

  if (route === '/property') {
    content = renderPropertyDetail(params.id);
    isDetail = true;
  } else {
    const match = routes.find(r => r.path === route);
    content = match ? match.render() : `<section style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding-top:100px;"><div><h1 style="font-size:4rem;font-weight:800;color:var(--navy);">404</h1><p style="color:var(--text-muted);margin:1rem 0 2rem;">The page you're looking for doesn't exist.</p><a href="#/" class="btn btn-navy">Back to Home</a></div></section>`;
  }

  // Determine current route for header active state
  const currentRoute = route === '/property' ? '/properties' : route;

  app.innerHTML = renderHeader(currentRoute) + `<main class="page-enter">${content}</main>` + renderFooter();

  // Init header
  initHeader();

  // Init page-specific functionality
  if (route === '/') {
    import('./pages.js').then(m => m.initHome());
  } else if (route === '/properties') {
    import('./pages.js').then(m => m.initProperties());
  } else if (route === '/property') {
    import('./pages.js').then(m => m.initPropertyDetail(params.id));
  }

  // Scroll to top on navigation
  window.scrollTo(0, 0);

  // Init scroll reveal
  initScrollReveal();

  // Update document title
  updateTitle(route, params);
}

function updateTitle(route, params) {
  const titles = {
    '/': 'Horizon Properties | Premium Real Estate & Investments',
    '/properties': 'Properties | Horizon Properties',
    '/about': 'About Us | Horizon Properties',
    '/services': 'Services | Horizon Properties',
    '/team': 'Our Team | Horizon Properties',
    '/contact': 'Contact | Horizon Properties',
  };
  if (route === '/property' && params.id) {
    const name = params.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    document.title = `${name} | Horizon Properties`;
  } else {
    document.title = titles[route] || 'Horizon Properties';
  }
}

// ---------- Scroll Reveal ----------
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ---------- Init ----------
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

// If DOMContentLoaded already fired
if (document.readyState !== 'loading') {
  render();
}
