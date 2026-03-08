/* =============================================
   OPES Marche - Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ========================
  // HAMBURGER MENU
  // ========================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', function () {
      navMenu.classList.remove('active');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  // ========================
  // STICKY HEADER & BANNER HIDE
  // ========================
  const mainHeader = document.getElementById('mainHeader');
  const topBanner = document.getElementById('topBanner');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      if (mainHeader) mainHeader.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
      if (topBanner) {
        topBanner.style.maxHeight = '0';
        topBanner.style.overflow = 'hidden';
        topBanner.style.transition = 'max-height 0.4s ease';
      }
    } else {
      if (mainHeader) mainHeader.style.boxShadow = '0 2px 15px rgba(0,0,0,0.08)';
      if (topBanner) {
        topBanner.style.maxHeight = '200px';
      }
    }
  });

  // ========================
  // SCROLL TO TOP
  // ========================
  const scrollTopBtn = document.getElementById('scrollTop');

  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========================
  // COUNTER ANIMATION
  // ========================
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('it-IT');
    }, 16);
  }

  // ========================
  // INTERSECTION OBSERVER (fade-in + counters)
  // ========================
  const fadeEls = document.querySelectorAll('.fade-in');
  const counterEls = document.querySelectorAll('.counter');
  const startedCounters = new Set();

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !startedCounters.has(entry.target)) {
          startedCounters.add(entry.target);
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  fadeEls.forEach(el => observer.observe(el));
  counterEls.forEach(el => counterObserver.observe(el));

  // ========================
  // ACTIVE NAV LINK
  // ========================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.split('#')[0] === currentPage) {
      link.classList.add('active');
    } else if (currentPage === '' && href === 'index.html') {
      link.classList.add('active');
    } else if (currentPage !== 'index.html') {
      link.classList.remove('active');
    }
  });

  // ========================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        if (navMenu) {
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // ========================
  // GALLERY LIGHTBOX (simple)
  // ========================
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const img = this.querySelector('img');
      if (!img) return;
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:9999;
        display:flex; align-items:center; justify-content:center; cursor:pointer;
        animation: fadeInOverlay 0.3s ease;
      `;
      const style = document.createElement('style');
      style.textContent = '@keyframes fadeInOverlay { from { opacity:0 } to { opacity:1 } }';
      document.head.appendChild(style);
      const image = document.createElement('img');
      image.src = img.src;
      image.style.cssText = 'max-width:90vw; max-height:90vh; border-radius:12px; box-shadow:0 0 60px rgba(0,0,0,0.5);';
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '<i class="fas fa-times"></i>';
      closeBtn.style.cssText = `
        position:absolute; top:20px; right:20px; background:rgba(255,255,255,0.15);
        border:none; color:white; width:44px; height:44px; border-radius:50%;
        font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center;
      `;
      overlay.appendChild(image);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      function closeLightbox() {
        document.body.removeChild(overlay);
        document.body.style.overflow = '';
      }
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay || e.target === closeBtn || closeBtn.contains(e.target)) {
          closeLightbox();
        }
      });
      document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') {
          closeLightbox();
          document.removeEventListener('keydown', esc);
        }
      });
    });
  });

  // ========================
  // NEWS dynamic loading from API (if available)
  // ========================
  async function loadNews() {
    try {
      const response = await fetch('tables/news?limit=6&sort=created_at');
      if (!response.ok) return;
      const data = await response.json();
      if (!data.data || data.data.length === 0) return;
      const newsGrid = document.getElementById('newsGrid');
      if (!newsGrid) return;

      newsGrid.innerHTML = '';
      data.data.forEach((item, index) => {
        const card = createNewsCard(item, index === 0);
        newsGrid.appendChild(card);
      });

      // Re-observe fade-in elements
      newsGrid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    } catch (e) {
      // Static content already rendered
    }
  }

  function createNewsCard(item, featured = false) {
    const card = document.createElement('div');
    card.className = `news-card ${featured ? 'featured' : ''} fade-in`;
    const catColor = item.categoria === 'Comunicati' ? '' : item.categoria === 'Affiliazioni' ? 'red' : 'green';
    card.innerHTML = `
      <div class="news-img">
        <img src="${item.immagine || 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&q=80'}" alt="${item.titolo}" loading="lazy">
        <span class="news-category ${catColor}">${item.categoria || 'News'}</span>
      </div>
      <div class="news-body">
        <div class="news-meta">
          <span><i class="fas fa-calendar"></i> ${formatDate(item.data)}</span>
          <span><i class="fas fa-tag"></i> ${item.categoria || ''}</span>
        </div>
        <h3>${item.titolo}</h3>
        <p>${item.sommario || ''}</p>
        <a href="news.html" class="news-link">Leggi tutto <i class="fas fa-arrow-right"></i></a>
      </div>
    `;
    return card;
  }

  async function loadEventi() {
    try {
      const response = await fetch('tables/eventi?limit=4&sort=data');
      if (!response.ok) return;
      const data = await response.json();
      if (!data.data || data.data.length === 0) return;
      const eventiGrid = document.getElementById('eventiGrid');
      if (!eventiGrid) return;

      eventiGrid.innerHTML = '';
      data.data.forEach(item => {
        const card = createEventoCard(item);
        eventiGrid.appendChild(card);
      });
      eventiGrid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    } catch (e) {
      // Static content already rendered
    }
  }

  function createEventoCard(item) {
    const d = item.data ? new Date(item.data) : new Date();
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('it-IT', { month: 'short' }).toUpperCase();
    const colors = ['var(--primary-blue)', 'var(--opes-red)', 'var(--opes-green)', '#8e44ad'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    const card = document.createElement('div');
    card.className = 'evento-card fade-in';
    card.innerHTML = `
      <div class="evento-date" style="background:${colors[colorIndex]}">
        <div class="day">${day}</div>
        <div class="month">${month}</div>
      </div>
      <div class="evento-info">
        <h4>${item.titolo}</h4>
        <p>${item.descrizione || ''}</p>
        <div class="evento-meta">
          <span><i class="fas fa-map-marker-alt"></i> ${item.luogo || ''}</span>
          <span><i class="fas fa-clock"></i> ${item.ora || ''}</span>
        </div>
      </div>
    `;
    return card;
  }

  function formatDate(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  // Try to load from API
  loadNews();
  loadEventi();

  // ========================
  // TICKER CLONE (ensure infinite scroll)
  // ========================
  const tickerInner = document.getElementById('tickerInner');
  if (tickerInner) {
    // Already duplicated in HTML
  }

});
