// ============================================================
// HORIZON PROPERTIES — Page Renderers
// ============================================================

import {
  company, properties, services, team, whyChoose,
  getFeatured, getProperty, getAgent, getSimilar,
  propertyTypes, locations,
} from './data.js';
import {
  icons, renderPropertyCard, initFavoriteButtons,
  initCarousel, initGallery,
} from './components.js';

// ============================================================
// HOME PAGE
// ============================================================
export function renderHome() {
  const featured = getFeatured();
  const heroImg = 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80';

  return `
    <section class="hero">
      <div class="hero-bg">
        <img src="${heroImg}" alt="Luxury modern villa at sunset" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">Discover Exceptional<br/>Homes & Investments</h1>
        <p class="hero-subtitle">Premium properties in prime locations. Find your dream home or the perfect investment with confidence.</p>
      </div>
      <div class="hero-scroll">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text reveal">
            <span class="section-label">About Us</span>
            <h2>Who We Are</h2>
            <p>At Horizon Properties, we connect people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction are at the heart of everything we do.</p>
            <a href="#/about" class="btn btn-navy">Learn More ${icons.arrowRight}</a>
          </div>
          <div class="about-images reveal reveal-delay-1">
            <div class="about-img-main">
              <img src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=900&q=80" alt="Modern luxury home with pool" loading="lazy" />
            </div>
            <div class="about-img-secondary">
              <img src="https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=600&q=80" alt="Modern architecture detail" loading="lazy" />
            </div>
            <a href="#/properties" class="about-arrow" aria-label="View properties">${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED PROPERTIES -->
    <section class="featured" id="properties">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Featured</span>
          <h2 class="section-title">Featured Properties</h2>
        </div>
      </div>
      <div class="featured-carousel container reveal reveal-delay-1">
        <div class="carousel-track" role="list" aria-roledescription="carousel" aria-label="Featured properties">
          ${featured.map((p, i) => renderPropertyCard(p, i === 0)).join('')}
          ${properties.filter(p => !p.featured).slice(0, 3).map(p => renderPropertyCard(p)).join('')}
        </div>
        <button class="carousel-btn prev" aria-label="Previous properties">${icons.chevronLeft}</button>
        <button class="carousel-btn next" aria-label="Next properties">${icons.chevronRight}</button>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="services" id="services">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Services</span>
          <h2 class="section-title">What We Offer</h2>
        </div>
        <div class="services-grid">
          ${services.map((s, i) => `
            <a href="#/services" class="service-card reveal reveal-delay-${(i % 3) + 1}">
              <div class="service-card-img">
                <img src="${s.image}" alt="${s.title}" loading="lazy" />
              </div>
              <div class="service-card-overlay"></div>
              <div class="service-card-body">
                <div class="service-card-number">0${i + 1}</div>
                <h3 class="service-card-title">${s.title}</h3>
                <p class="service-card-desc">${s.description}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE -->
    <section class="why-choose">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Why Horizon</span>
          <h2 class="section-title">Why Choose Horizon</h2>
        </div>
        <div class="why-grid">
          ${whyChoose.map((item, i) => `
            <div class="why-item reveal reveal-delay-${(i % 4) + 1}">
              <div class="why-number">0${i + 1}</div>
              <h3 class="why-title">${item.title}</h3>
              <p class="why-desc">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="team-section" id="team">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our Team</span>
          <h2 class="section-title">Meet the Experts</h2>
        </div>
        <div class="team-grid">
          ${team.map((member, i) => `
            <div class="team-card reveal reveal-delay-${(i % 4) + 1}">
              <div class="team-card-img">
                <img src="${member.image}" alt="${member.name}" loading="lazy" />
                <div class="team-card-social">
                  <a href="tel:${member.phone.replace(/[^\d]/g, '')}" class="team-social-link" aria-label="Call ${member.name}">${icons.phone}</a>
                  <a href="mailto:${member.email}" class="team-social-link" aria-label="Email ${member.name}">${icons.mail}</a>
                  <a href="#" class="team-social-link" aria-label="${member.name} on LinkedIn">${icons.linkedin}</a>
                </div>
              </div>
              <div class="team-card-body">
                <h3 class="team-card-name">${member.name}</h3>
                <p class="team-card-role">${member.role}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box reveal">
          <div class="cta-icon">${icons.key}</div>
          <div class="cta-content">
            <h3>Ready to Find Your Perfect Property?</h3>
            <p>Let our experts guide you to the right home or investment.</p>
          </div>
          <div class="cta-action">
            <a href="#/contact" class="btn btn-navy">Get in Touch ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHome() {
  initFavoriteButtons();
  initCarousel(document.querySelector('.featured-carousel'));
}

// ============================================================
// PROPERTIES PAGE
// ============================================================
export function renderProperties() {
  return `
    <section class="page-header">
      <div class="container">
        <h1>Properties</h1>
        <p>Browse our curated collection of premium properties</p>
        <div class="page-breadcrumb">
          <a href="#/">Home</a><span>/</span><span>Properties</span>
        </div>
      </div>
    </section>
    <section class="properties-page">
      <div class="container">
        <div class="filters-bar">
          <div class="filter-group filter-search">
            <label for="f-search">Search</label>
            <div class="filter-search-wrap">
              ${icons.search}
              <input type="text" id="f-search" placeholder="Search by name or location" />
            </div>
          </div>
          <div class="filter-group">
            <label for="f-type">Type</label>
            <select id="f-type">
              <option value="">All Types</option>
              ${propertyTypes.map(t => `<option value="${t}">${t}</option>`).join('')}
            </select>
          </div>
          <div class="filter-group">
            <label for="f-location">Location</label>
            <select id="f-location">
              <option value="">All Locations</option>
              ${locations.map(l => `<option value="${l}">${l}</option>`).join('')}
            </select>
          </div>
          <div class="filter-group">
            <label for="f-beds">Bedrooms</label>
            <select id="f-beds">
              <option value="">Any</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="f-price">Max Price</label>
            <select id="f-price">
              <option value="">Any Price</option>
              <option value="2000000">Under $2M</option>
              <option value="3500000">Under $3.5M</option>
              <option value="5000000">Under $5M</option>
              <option value="7000000">Under $7M</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="f-sort">Sort By</label>
            <select id="f-sort">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>
        <div class="results-bar">
          <span class="results-count" id="resultsCount"></span>
          <button class="filter-reset" id="filterReset">Reset Filters</button>
        </div>
        <div class="properties-grid" id="propertiesGrid">
          ${properties.map(p => renderPropertyCard(p)).join('')}
        </div>
        <div class="no-results" id="noResults" style="display:none;">
          <h3>No Properties Found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      </div>
    </section>
  `;
}

export function initProperties() {
  initFavoriteButtons();
  const grid = document.getElementById('propertiesGrid');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('resultsCount');
  const inputs = {
    search: document.getElementById('f-search'),
    type: document.getElementById('f-type'),
    location: document.getElementById('f-location'),
    beds: document.getElementById('f-beds'),
    price: document.getElementById('f-price'),
    sort: document.getElementById('f-sort'),
  };

  const applyFilters = () => {
    let filtered = [...properties];
    const q = inputs.search.value.toLowerCase().trim();
    if (q) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
      );
    }
    if (inputs.type.value) filtered = filtered.filter(p => p.type === inputs.type.value);
    if (inputs.location.value) filtered = filtered.filter(p => p.location === inputs.location.value);
    if (inputs.beds.value) filtered = filtered.filter(p => p.beds >= parseInt(inputs.beds.value));
    if (inputs.price.value) filtered = filtered.filter(p => p.price <= parseInt(inputs.price.value));

    switch (inputs.sort.value) {
      case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
      case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    grid.innerHTML = filtered.map(p => renderPropertyCard(p)).join('');
    noResults.style.display = filtered.length === 0 ? 'block' : 'none';
    grid.style.display = filtered.length === 0 ? 'none' : 'grid';
    countEl.innerHTML = `<strong>${filtered.length}</strong> ${filtered.length === 1 ? 'property' : 'properties'} found`;
    initFavoriteButtons(grid);
  };

  Object.values(inputs).forEach(input => {
    input.addEventListener('input', applyFilters);
    input.addEventListener('change', applyFilters);
  });

  document.getElementById('filterReset').addEventListener('click', () => {
    Object.values(inputs).forEach(input => { input.value = ''; });
    applyFilters();
  });

  applyFilters();
}

// ============================================================
// PROPERTY DETAIL PAGE
// ============================================================
export function renderPropertyDetail(id) {
  const property = getProperty(id);
  if (!property) return notFound();

  const agent = getAgent(property.agent);
  const similar = getSimilar(property);

  return `
    <section class="detail-page" id="detailPage">
      <div class="detail-gallery">
        <div class="detail-gallery-main">
          <img src="${property.gallery[0]}" alt="${property.name}" />
          <button class="gallery-nav prev" aria-label="Previous image">${icons.chevronLeft}</button>
          <button class="gallery-nav next" aria-label="Next image">${icons.chevronRight}</button>
          <span class="gallery-counter">1 / ${property.gallery.length}</span>
          <button class="gallery-expand" aria-label="View fullscreen">${icons.expand}</button>
        </div>
        <div class="detail-gallery-thumbs">
          ${property.gallery.map((img, i) =>
            `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}"><img src="${img}" alt="View ${i + 1}" loading="lazy" /></div>`
          ).join('')}
        </div>
      </div>

      <div class="detail-content">
        <div class="detail-main">
          <div class="page-breadcrumb" style="justify-content:flex-start;margin-bottom:var(--sp-6);">
            <a href="#/">Home</a><span>/</span>
            <a href="#/properties">Properties</a><span>/</span>
            <span>${property.name}</span>
          </div>
          <h1>${property.name}</h1>
          <div class="detail-location">${icons.mapPin}<span>${property.location}</span></div>

          <div class="detail-specs">
            <div class="detail-spec">
              <div class="detail-spec-value">${icons.bed}<span>${property.beds}</span></div>
              <div class="detail-spec-label">Bedrooms</div>
            </div>
            <div class="detail-spec">
              <div class="detail-spec-value">${icons.bath}<span>${property.baths}</span></div>
              <div class="detail-spec-label">Bathrooms</div>
            </div>
            <div class="detail-spec">
              <div class="detail-spec-value">${icons.ruler}<span>${(property.sqft / 1000).toFixed(1)}K</span></div>
              <div class="detail-spec-label">Square Feet</div>
            </div>
            <div class="detail-spec">
              <div class="detail-spec-value" style="font-size:1.25rem;">${property.type}</div>
              <div class="detail-spec-label">Property Type</div>
            </div>
          </div>

          <div class="detail-section">
            <h2>Description</h2>
            <p>${property.description}</p>
          </div>

          <div class="detail-section">
            <h2>Key Features</h2>
            <div class="detail-features">
              ${property.features.map(f => `<div class="detail-feature">${icons.check}<span>${f}</span></div>`).join('')}
            </div>
          </div>

          <div class="detail-section">
            <h2>Amenities</h2>
            <div class="detail-amenities">
              ${property.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
            </div>
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="detail-price-card">
            <div class="detail-price">${property.priceLabel}</div>
            <div class="detail-price-label">Listed Price</div>
            ${agent ? `
              <div class="detail-agent">
                <div class="detail-agent-img"><img src="${agent.image}" alt="${agent.name}" /></div>
                <div>
                  <div class="detail-agent-name">${agent.name}</div>
                  <div class="detail-agent-role">${agent.role}</div>
                </div>
              </div>
            ` : ''}
            <div class="detail-cta-buttons">
              <a href="#/contact" class="btn btn-navy">Contact Agent ${icons.arrowRight}</a>
              <a href="#/contact" class="btn btn-outline-navy">${icons.calendar} Schedule a Viewing</a>
              <button class="btn btn-outline-navy" id="detailFavBtn">
                ${icons.heart} Save to Favorites
              </button>
            </div>
          </div>
        </aside>
      </div>

      <!-- Similar Properties -->
      ${similar.length > 0 ? `
        <section class="similar-properties">
          <div class="container">
            <div class="section-header reveal">
              <span class="section-label">Similar</span>
              <h2 class="section-title">Similar Properties</h2>
            </div>
            <div class="properties-grid">
              ${similar.map(p => renderPropertyCard(p)).join('')}
            </div>
          </div>
        </section>
      ` : ''}

      <!-- Mobile CTA -->
      <div class="detail-mobile-cta">
        <a href="#/contact" class="btn btn-navy">Contact Agent</a>
        <a href="#/contact" class="btn btn-outline-navy">Schedule</a>
      </div>

      <!-- Fullscreen Gallery -->
      <div class="gallery-fullscreen">
        <button class="gallery-fullscreen-close" aria-label="Close gallery">${icons.close}</button>
        <button class="gallery-fullscreen-nav prev" aria-label="Previous">${icons.chevronLeft}</button>
        <img src="${property.gallery[0]}" alt="Property image" />
        <button class="gallery-fullscreen-nav next" aria-label="Next">${icons.chevronRight}</button>
      </div>
    </section>
  `;
}

export function initPropertyDetail(id) {
  const property = getProperty(id);
  if (!property) return;

  initFavoriteButtons();
  initGallery(document.getElementById('detailPage'), property.gallery);

  // Favorite button in sidebar
  const favBtn = document.getElementById('detailFavBtn');
  if (favBtn) {
    const isFav = favorites.has(property.id);
    if (isFav) {
      favBtn.innerHTML = `${icons.heart} Saved`;
      favBtn.style.background = 'var(--gold-soft)';
      favBtn.style.borderColor = 'var(--gold)';
    }
    favBtn.addEventListener('click', () => {
      const nowFav = favorites.toggle(property.id);
      favBtn.innerHTML = nowFav ? `${icons.heart} Saved` : `${icons.heart} Save to Favorites`;
      favBtn.style.background = nowFav ? 'var(--gold-soft)' : '';
      favBtn.style.borderColor = nowFav ? 'var(--gold)' : '';
    });
  }
}

// ============================================================
// ABOUT PAGE
// ============================================================
export function renderAbout() {
  return `
    <section class="page-header">
      <div class="container">
        <h1>About Horizon Properties</h1>
        <p>Connecting people with extraordinary homes and smart investments</p>
        <div class="page-breadcrumb">
          <a href="#/">Home</a><span>/</span><span>About Us</span>
        </div>
      </div>
    </section>
    <section class="about" style="padding-top:var(--sp-16);">
      <div class="container">
        <div class="about-grid">
          <div class="about-text reveal">
            <span class="section-label">About Us</span>
            <h2>Who We Are</h2>
            <p>${company.description}</p>
            <p style="margin-top:var(--sp-4);">With over two decades of experience in luxury real estate, our team brings deep market knowledge, architectural sensibility, and an unwavering commitment to client success. We don't just sell properties — we curate lifestyles and build investment portfolios that endure.</p>
            <a href="#/contact" class="btn btn-navy">Get in Touch ${icons.arrowRight}</a>
          </div>
          <div class="about-images reveal reveal-delay-1">
            <div class="about-img-main">
              <img src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=900&q=80" alt="Modern luxury home" loading="lazy" />
            </div>
            <div class="about-img-secondary">
              <img src="https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=600&q=80" alt="Modern architecture" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="why-choose">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Why Horizon</span>
          <h2 class="section-title">Why Choose Horizon</h2>
        </div>
        <div class="why-grid">
          ${whyChoose.map((item, i) => `
            <div class="why-item reveal reveal-delay-${(i % 4) + 1}">
              <div class="why-number">0${i + 1}</div>
              <h3 class="why-title">${item.title}</h3>
              <p class="why-desc">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="team-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our Team</span>
          <h2 class="section-title">Meet the Experts</h2>
        </div>
        <div class="team-grid">
          ${team.map((member, i) => `
            <div class="team-card reveal reveal-delay-${(i % 4) + 1}">
              <div class="team-card-img">
                <img src="${member.image}" alt="${member.name}" loading="lazy" />
                <div class="team-card-social">
                  <a href="tel:${member.phone.replace(/[^\d]/g, '')}" class="team-social-link" aria-label="Call">${icons.phone}</a>
                  <a href="mailto:${member.email}" class="team-social-link" aria-label="Email">${icons.mail}</a>
                  <a href="#" class="team-social-link" aria-label="LinkedIn">${icons.linkedin}</a>
                </div>
              </div>
              <div class="team-card-body">
                <h3 class="team-card-name">${member.name}</h3>
                <p class="team-card-role">${member.role}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="container">
        <div class="cta-box reveal">
          <div class="cta-icon">${icons.key}</div>
          <div class="cta-content">
            <h3>Ready to Find Your Perfect Property?</h3>
            <p>Let our experts guide you to the right home or investment.</p>
          </div>
          <div class="cta-action">
            <a href="#/contact" class="btn btn-navy">Get in Touch ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// SERVICES PAGE
// ============================================================
export function renderServices() {
  return `
    <section class="page-header">
      <div class="container">
        <h1>Our Services</h1>
        <p>Comprehensive real estate solutions for luxury homes and investments</p>
        <div class="page-breadcrumb">
          <a href="#/">Home</a><span>/</span><span>Services</span>
        </div>
      </div>
    </section>
    <section class="services" style="padding-top:var(--sp-16);">
      <div class="container">
        <div class="services-grid">
          ${services.map((s, i) => `
            <a href="#/contact" class="service-card reveal reveal-delay-${(i % 3) + 1}">
              <div class="service-card-img">
                <img src="${s.image}" alt="${s.title}" loading="lazy" />
              </div>
              <div class="service-card-overlay"></div>
              <div class="service-card-body">
                <div class="service-card-number">0${i + 1}</div>
                <h3 class="service-card-title">${s.title}</h3>
                <p class="service-card-desc">${s.description}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="why-choose">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Why Horizon</span>
          <h2 class="section-title">Why Choose Horizon</h2>
        </div>
        <div class="why-grid">
          ${whyChoose.map((item, i) => `
            <div class="why-item reveal reveal-delay-${(i % 4) + 1}">
              <div class="why-number">0${i + 1}</div>
              <h3 class="why-title">${item.title}</h3>
              <p class="why-desc">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="container">
        <div class="cta-box reveal">
          <div class="cta-icon">${icons.key}</div>
          <div class="cta-content">
            <h3>Ready to Find Your Perfect Property?</h3>
            <p>Let our experts guide you to the right home or investment.</p>
          </div>
          <div class="cta-action">
            <a href="#/contact" class="btn btn-navy">Get in Touch ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// TEAM PAGE
// ============================================================
export function renderTeam() {
  return `
    <section class="page-header">
      <div class="container">
        <h1>Our Team</h1>
        <p>Experienced professionals dedicated to your real estate journey</p>
        <div class="page-breadcrumb">
          <a href="#/">Home</a><span>/</span><span>Team</span>
        </div>
      </div>
    </section>
    <section class="team-section" style="padding-top:var(--sp-16);">
      <div class="container">
        <div class="team-grid">
          ${team.map((member, i) => `
            <div class="team-card reveal reveal-delay-${(i % 4) + 1}">
              <div class="team-card-img">
                <img src="${member.image}" alt="${member.name}" loading="lazy" />
                <div class="team-card-social">
                  <a href="tel:${member.phone.replace(/[^\d]/g, '')}" class="team-social-link" aria-label="Call">${icons.phone}</a>
                  <a href="mailto:${member.email}" class="team-social-link" aria-label="Email">${icons.mail}</a>
                  <a href="#" class="team-social-link" aria-label="LinkedIn">${icons.linkedin}</a>
                </div>
              </div>
              <div class="team-card-body">
                <h3 class="team-card-name">${member.name}</h3>
                <p class="team-card-role">${member.role}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="container">
        <div class="cta-box reveal">
          <div class="cta-icon">${icons.key}</div>
          <div class="cta-content">
            <h3>Ready to Find Your Perfect Property?</h3>
            <p>Let our experts guide you to the right home or investment.</p>
          </div>
          <div class="cta-action">
            <a href="#/contact" class="btn btn-navy">Get in Touch ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// CONTACT PAGE
// ============================================================
export function renderContact() {
  return `
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team of luxury real estate experts</p>
        <div class="page-breadcrumb">
          <a href="#/">Home</a><span>/</span><span>Contact</span>
        </div>
      </div>
    </section>
    <section style="padding:var(--sp-16) 0;background:var(--ivory);">
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1.5fr;gap:var(--sp-12);align-items:start;">
          <div class="reveal">
            <span class="section-label">Get in Touch</span>
            <h2 class="section-title" style="margin-top:var(--sp-4);">Let's Talk</h2>
            <p style="color:var(--text-muted);margin-top:var(--sp-4);max-width:400px;">Whether you're looking for your dream home or a strategic investment, our team is here to guide you every step of the way.</p>
            <div style="margin-top:var(--sp-8);display:flex;flex-direction:column;gap:var(--sp-6);">
              <div style="display:flex;align-items:center;gap:var(--sp-4);">
                <div style="width:48px;height:48px;border-radius:50%;background:var(--navy);display:flex;align-items:center;justify-content:center;color:var(--gold);flex-shrink:0;">${icons.phone}</div>
                <div>
                  <div style="font-size:var(--fs-label);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;">Phone</div>
                  <div style="font-weight:600;color:var(--navy);">${company.phone}</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:var(--sp-4);">
                <div style="width:48px;height:48px;border-radius:50%;background:var(--navy);display:flex;align-items:center;justify-content:center;color:var(--gold);flex-shrink:0;">${icons.mail}</div>
                <div>
                  <div style="font-size:var(--fs-label);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;">Email</div>
                  <div style="font-weight:600;color:var(--navy);">${company.email}</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:var(--sp-4);">
                <div style="width:48px;height:48px;border-radius:50%;background:var(--navy);display:flex;align-items:center;justify-content:center;color:var(--gold);flex-shrink:0;">${icons.mapPin}</div>
                <div>
                  <div style="font-size:var(--fs-label);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;">Office</div>
                  <div style="font-weight:600;color:var(--navy);">${company.address}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="reveal reveal-delay-1" style="background:var(--white);border-radius:var(--radius-lg);padding:var(--sp-12);box-shadow:var(--shadow-sm);">
            <form id="contactForm" onsubmit="event.preventDefault(); document.getElementById('formSuccess').style.display='block'; this.reset();">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4);">
                <div class="filter-group">
                  <label for="c-name">Full Name</label>
                  <input type="text" id="c-name" required placeholder="John Doe" style="padding:0.75rem 1rem;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:var(--fs-small);" />
                </div>
                <div class="filter-group">
                  <label for="c-email">Email</label>
                  <input type="email" id="c-email" required placeholder="john@example.com" style="padding:0.75rem 1rem;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:var(--fs-small);" />
                </div>
              </div>
              <div style="margin-top:var(--sp-4);">
                <div class="filter-group">
                  <label for="c-phone">Phone</label>
                  <input type="tel" id="c-phone" placeholder="(555) 000-0000" style="width:100%;padding:0.75rem 1rem;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:var(--fs-small);" />
                </div>
              </div>
              <div style="margin-top:var(--sp-4);">
                <div class="filter-group">
                  <label for="c-interest">I'm interested in</label>
                  <select id="c-interest" style="width:100%;padding:0.75rem 1rem;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:var(--fs-small);appearance:none;-webkit-appearance:none;cursor:pointer;">
                    <option>Buying a property</option>
                    <option>Selling a property</option>
                    <option>Investment advisory</option>
                    <option>Property valuation</option>
                    <option>Relocation services</option>
                  </select>
                </div>
              </div>
              <div style="margin-top:var(--sp-4);">
                <div class="filter-group">
                  <label for="c-message">Message</label>
                  <textarea id="c-message" rows="4" placeholder="Tell us about your requirements..." style="width:100%;padding:0.75rem 1rem;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:var(--fs-small);resize:vertical;"></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-navy" style="width:100%;margin-top:var(--sp-6);">Send Message ${icons.arrowRight}</button>
              <div id="formSuccess" style="display:none;margin-top:var(--sp-4);padding:var(--sp-4);background:var(--gold-soft);border-radius:var(--radius-sm);color:var(--navy);font-size:var(--fs-small);font-weight:600;text-align:center;">
                Thank you! We'll be in touch shortly.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// NOT FOUND
// ============================================================
function notFound() {
  return `
    <section style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding-top:100px;">
      <div>
        <h1 style="font-size:4rem;font-weight:800;color:var(--navy);">404</h1>
        <p style="color:var(--text-muted);margin:var(--sp-4) 0 var(--sp-8);">The page you're looking for doesn't exist.</p>
        <a href="#/" class="btn btn-navy">Back to Home ${icons.arrowRight}</a>
      </div>
    </section>
  `;
}

// ============================================================
// PAGE INIT DISPATCHER
// ============================================================
export function initPage(route, params) {
  if (route === '/' || route === '') {
    initHome();
  } else if (route === '/properties') {
    initProperties();
  } else if (route.startsWith('/property/')) {
    initPropertyDetail(params.id);
  }
}
