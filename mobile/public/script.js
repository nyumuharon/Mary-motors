/* ===== MARY MOTORS – script.js ===== */

/* ── VEHICLE DATA ──────────────────────────────────────── */
const vehicles = [
  { id: 1, make: 'Toyota', name: 'Land Cruiser 300', type: 'new', badge: 'New', price: '$85,000', mileage: '0 km', fuel: 'Diesel', seats: '7', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80' },
  { id: 2, make: 'BMW', name: 'X5 M Competition', type: 'new', badge: 'New', price: '$96,500', mileage: '0 km', fuel: 'Petrol', seats: '5', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80' },
  { id: 3, make: 'Audi', name: 'Q8 Sportback', type: 'new', badge: 'New', price: '$78,000', mileage: '0 km', fuel: 'Hybrid', seats: '5', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80' },
  { id: 4, make: 'Mercedes', 'name': 'AMG GT 63', type: 'preorder', badge: 'Pre-Order', price: '$112,000', 'mileage': 'TBA', fuel: 'Petrol', seats: '4', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80' },
  { id: 5, make: 'Porsche', 'name': 'Cayenne Turbo', type: 'preorder', badge: 'Pre-Order', price: '$135,000', 'mileage': 'TBA', fuel: 'Hybrid', seats: '5', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80' },
  { id: 6, make: 'Toyota', name: 'Camry 2.5', type: 'used', badge: 'Used', price: '$18,500', mileage: '42,000 km', fuel: 'Petrol', seats: '5', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80' },
  { id: 7, make: 'Honda', name: 'CR-V Hybrid', type: 'used', badge: 'Used', price: '$22,000', mileage: '35,000 km', fuel: 'Hybrid', seats: '5', img: 'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=600&q=80' },
  { id: 8, make: 'Ford', name: 'Mustang GT500', type: 'new', badge: 'New', price: '$74,000', mileage: '0 km', fuel: 'Petrol', seats: '4', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80' },
  { id: 9, make: 'Subaru', name: 'Outback XT', type: 'used', badge: 'Used', price: '$16,200', mileage: '58,000 km', fuel: 'Petrol', seats: '5', img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&q=80' },
];


/* ── RENDER VEHICLE CARDS ───────────────────────────────── */
function renderVehicles(filter = 'all') {
  const grid = document.getElementById('vehicles-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? vehicles : vehicles.filter(v => v.type === filter);
  grid.innerHTML = filtered.map(v => `
    <div class="car-card" data-type="${v.type}">
      <div class="car-img-wrap">
        <img src="${v.img}" alt="${v.make} ${v.name}" loading="lazy"/>
        <span class="car-badge">${v.badge}</span>
      </div>
      <div class="car-body">
        <p class="car-make">${v.make}</p>
        <h3 class="car-name">${v.name}</h3>
        <div class="car-specs">
          <span class="car-spec"> ${v.fuel}</span>
          <span class="car-spec"> ${v.mileage}</span>
          <span class="car-spec"> ${v.seats} seats</span>
        </div>
        <div class="car-footer">
        </div>
      </div>
    </div>
  `).join('');

}

/* ── FILTER TABS ────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderVehicles(btn.dataset.filter);
  });
});



/* ── TOAST NOTIFICATION ─────────────────────────────────── */
function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = `
    position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
    background:#111;color:#fff;padding:12px 24px;border-radius:8px;
    font-size:0.875rem;font-weight:600;z-index:9999;
    box-shadow:0 4px 20px rgba(0,0,0,0.3);white-space:nowrap;
    animation:fadeUp 0.3s ease;
  `;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

/* ── HERO SLIDER ────────────────────────────────────────── */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;
let autoplay;

function goToSlide(idx) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (idx + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startAutoplay() {
  autoplay = setInterval(() => goToSlide(current + 1), 5000);
}
function resetAutoplay() {
  clearInterval(autoplay);
  startAutoplay();
}

const hero = document.querySelector('.hero');
if (hero) {
  document.getElementById('prev-btn').addEventListener('click', () => { goToSlide(current - 1); resetAutoplay(); });
  document.getElementById('next-btn').addEventListener('click', () => { goToSlide(current + 1); resetAutoplay(); });
  dots.forEach(d => d.addEventListener('click', () => { goToSlide(parseInt(d.dataset.index)); resetAutoplay(); }));

  /* Touch/swipe support */
  let touchStartX = 0;
  hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { goToSlide(diff > 0 ? current + 1 : current - 1); resetAutoplay(); }
  });

  startAutoplay();
}

/* ── NAVBAR ─────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
/* Close mobile menu on link click */
navLinks.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── CONTACT FORM ───────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const succ = document.getElementById('form-success');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      succ.classList.add('show');
      this.reset();
      btn.innerHTML = 'Send Message <span>&rarr;</span>';
      btn.disabled = false;
      setTimeout(() => succ.classList.remove('show'), 5000);
    }, 1200);
  });
}

/* ── NEWSLETTER ─────────────────────────────────────────── */
document.getElementById('nl-btn').addEventListener('click', () => {
  const input = document.getElementById('nl-email');
  if (input.value && input.value.includes('@')) {
    showToast('✓ Subscribed! Thanks for joining us.');
    input.value = '';
  } else {
    showToast('Please enter a valid email address.');
  }
});

/* ── SEARCH BUTTON ──────────────────────────────────────── */
const searchBtn = document.querySelector('.search-go');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const make = document.getElementById('search-make').value;
    const type = document.getElementById('search-type').value;
    const price = document.getElementById('search-price').value;
    const vehiclesDiv = document.getElementById('vehicles');
    if (vehiclesDiv) vehiclesDiv.scrollIntoView({ behavior: 'smooth' });
    if (make || type || price) showToast(`Searching for ${make || 'any'} ${type || 'vehicles'}…`);
  });
}

/* ── INTERSECTION OBSERVER – fade in sections ───────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .car-card, .testi-card, .blog-card, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ── INIT ───────────────────────────────────────────────── */
renderVehicles('all');
