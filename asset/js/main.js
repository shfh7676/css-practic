/* ============================================
   HORIZON PROPERTIES — Interactions
   ============================================ */
(function () {
  'use strict';

  /* ---- Header scroll state ---- */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mega menu (desktop hover) ---- */
  document.querySelectorAll('.nav-item.has-mega').forEach((item) => {
    let timer;
    item.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      document.querySelectorAll('.mega-panel').forEach((p) => p.classList.remove('is-open'));
      document.querySelectorAll('.nav-item.has-mega').forEach((n) => n.classList.remove('is-active'));
      const panel = item.querySelector('.mega-panel');
      if (panel) {
        panel.classList.add('is-open');
        item.classList.add('is-active');
      }
    });
    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        const panel = item.querySelector('.mega-panel');
        if (panel) panel.classList.remove('is-open');
        item.classList.remove('is-active');
      }, 150);
    });
  });

  /* ---- Mobile menu ---- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
      document.body.classList.toggle('menu-open');
    });
    mobileMenu.querySelectorAll('.mobile-accordion').forEach((acc) => {
      acc.addEventListener('click', (e) => {
        if (e.target.closest('.mobile-sub')) return;
        acc.classList.toggle('is-expanded');
      });
    });
  }

  /* ---- Generic carousel ---- */
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-track]');
    const prev = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    if (!track) return;
    const getStep = () => {
      const card = track.querySelector('.carousel-card');
      return card ? card.offsetWidth + 24 : 320;
    };
    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -getStep(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => track.scrollBy({ left: getStep(), behavior: 'smooth' }));
  });

  /* ---- About image slider ---- */
  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const slides = slider.querySelectorAll('[data-slide]');
    const prev = slider.querySelector('[data-prev]');
    const next = slider.querySelector('[data-next]');
    if (slides.length < 2) return;
    let idx = 0;
    const go = (n) => {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    };
    if (prev) prev.addEventListener('click', () => go(idx - 1));
    if (next) next.addEventListener('click', () => go(idx + 1));
  });

  /* ---- Testimonial slider ---- */
  document.querySelectorAll('[data-testimonials]').forEach((wrap) => {
    const slides = wrap.querySelectorAll('[data-tslide]');
    const dots = wrap.querySelectorAll('[data-tdot]');
    const prev = wrap.querySelector('[data-prev]');
    const next = wrap.querySelector('[data-next]');
    if (slides.length < 2) return;
    let idx = 0;
    const go = (n) => {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    };
    if (prev) prev.addEventListener('click', () => go(idx - 1));
    if (next) next.addEventListener('click', () => go(idx + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
    // auto-advance
    setInterval(() => go(idx + 1), 7000);
  });

  /* ---- Filter tabs ---- */
  document.querySelectorAll('[data-filter-tabs]').forEach((tabGroup) => {
    const tabs = tabGroup.querySelectorAll('[data-tab]');
    const target = tabGroup.getAttribute('data-target');
    const grid = target ? document.querySelector(target) : null;
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        if (!grid) return;
        const filter = tab.getAttribute('data-filter');
        grid.querySelectorAll('[data-tag]').forEach((card) => {
          const show = filter === 'all' || card.getAttribute('data-tag') === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  });

  /* ---- Favorite toggle ---- */
  document.querySelectorAll('[data-fav]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('is-active');
    });
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---- Animated counters ---- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const cIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const dur = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = (target >= 100 ? Math.round(val) : val.toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => cIO.observe(el));
  }

  /* ---- Gallery (property single) ---- */
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const thumbs = gallery.querySelectorAll('[data-thumb]');
    const main = gallery.querySelector('[data-main]');
    if (!main) return;
    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const src = thumb.getAttribute('data-src');
        main.style.backgroundImage = `url('${src}')`;
        thumbs.forEach((t) => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
      });
    });
  });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Year in footer ---- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
