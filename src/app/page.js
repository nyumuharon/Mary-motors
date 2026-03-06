import HeroSlider from '@/components/HeroSlider';
import VehicleGrid from '@/components/VehicleGrid';
import Link from 'next/link';
import Image from 'next/image';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Mary Motors – Drive Your Dream',
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SLIDER ===== */}
      <HeroSlider />

      {/* ===== FEATURE CARDS ===== */}
      <section className="features" id="features">
        <div className="container features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="18" width="52" height="12" rx="6" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="14" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="46" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M8 18 L16 6 L44 6 L52 18" stroke="#c0392b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                <circle cx="48" cy="12" r="4" fill="none" stroke="#c0392b" strokeWidth="2" />
                <line x1="51" y1="15" x2="55" y2="19" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Find a Car</h3>
            <p>We provide a platform to help you find the perfect vehicle matching your preferences and budget.</p>
            <Link href="/all-cars" className="feature-link">Browse Cars →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="22" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M20 30 L28 38 L42 22" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 8 C30 8 38 8 44 14" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 52 C30 52 22 52 16 46" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Pre Order</h3>
            <p>Get ready to experience innovation, style, and performance like never before. Reserve your future ride today.</p>
            <Link href="/all-cars" className="feature-link">Pre-Order Now →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="18" width="52" height="12" rx="6" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="14" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="46" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M8 18 L16 6 L44 6 L52 18" stroke="#c0392b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                <path d="M30 2 L30 10" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 4 L30 2 L34 4" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Latest Car</h3>
            <p>Stay updated on the automotive world&apos;s newest sensations. Be the first to drive tomorrow&apos;s technology.</p>
            <Link href="/all-cars" className="feature-link">View Latest →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="18" width="52" height="12" rx="6" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="14" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="46" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M8 18 L16 6 L44 6 L52 18" stroke="#c0392b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                <path d="M22 12 L38 12" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 8 L34 8" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Used Car</h3>
            <p>Mary Motors is here to help you find a pre-loved gem that meets your requirements at the best value.</p>
            <Link href="/all-cars" className="feature-link">Browse Used →</Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-img-wrap">
            <Image src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80" alt="Mary Motors Showroom" className="about-img" width={800} height={500} />
            <div className="about-badge">
              <span className="badge-number">15+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>
          <div className="about-text">
            <p className="section-tag">WHO WE ARE</p>
            <h2 className="section-title">Your Trusted Partner in Premium Automotive</h2>
            <p className="about-desc">At Mary Motors, we believe that finding the right car should be an exciting, seamless experience. For over 15 years, we&apos;ve been connecting drivers with vehicles that match their lifestyle, budget, and aspirations.</p>
            <div className="about-stats">
              <div className="stat"><span className="stat-num">2,500+</span><span className="stat-label">Cars Sold</span></div>
              <div className="stat"><span className="stat-num">98%</span><span className="stat-label">Happy Clients</span></div>
              <div className="stat"><span className="stat-num">50+</span><span className="stat-label">Car Brands</span></div>
            </div>
            <Link href="/about" className="btn-primary">Learn More <span>→</span></Link>
          </div>
        </div>
      </section>
      <WhyChooseUs />

      {/* ===== VEHICLES SECTION ===== */}
      <section className="vehicles" id="vehicles">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">OUR INVENTORY</p>
            <h2 className="section-title">Featured Vehicles</h2>
            <p className="section-sub">Hand-picked premium vehicles ready for you to drive off the lot today.</p>
          </div>
          <VehicleGrid showFilterTabs={true} limit={9} />
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/all-cars" className="btn-outline">View All Vehicles</Link>
          </div>
        </div>
      </section>

      <section className="search-banner">
        <div className="container search-inner">
          <h2>Find Your Perfect Vehicle</h2>
          <p>Search from our extensive inventory of over 500 vehicles</p>
          <div className="search-bar">
            <select id="search-make">
              <option value="">Select Make</option>
              <option>Toyota</option><option>Honda</option><option>BMW</option>
              <option>Mercedes</option><option>Audi</option><option>Ford</option>
              <option>Nissan</option><option>Mazda</option>
            </select>
            <select id="search-type">
              <option value="">Vehicle Type</option>
              <option>SUV</option><option>Sedan</option><option>Truck</option>
              <option>Convertible</option><option>Hatchback</option>
            </select>
            <select id="search-price">
              <option value="">Price Range</option>
              <option>Under KES 2,000,000</option><option>KES 2,000,000–KES 5,000,000</option>
              <option>KES 5,000,000–KES 10,000,000</option><option>Above KES 10,000,000</option>
            </select>
            <Link href="/all-cars" className="btn-primary search-go">Search →</Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">GALLERY</p>
            <h2 className="section-title">See Our Showroom</h2>
          </div>
          <div className="gallery-grid">
            {[
              { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', cls: 'g-large' },
              { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80' },
              { src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80' },
              { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80' },
              { src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80' },
            ].map((img, i) => (
              <div key={i} className={`gallery-item ${img.cls || ''}`}>
                <Image src={img.src} alt={`Showroom car ${i + 1}`} loading="lazy" width={600} height={400} />
                <div className="gallery-overlay"><span>View</span></div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">TESTIMONIALS</p>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testi-grid">
            {[
              { quote: 'Mary Motors made buying my first car an absolute joy. The staff is knowledgeable and never pushy. I drove away with my dream SUV at a great price!', name: 'James K.', role: 'Toyota Land Cruiser Owner', img: 'https://i.pravatar.cc/50?img=32' },
              { quote: 'The pre-order experience was seamless. I reserved my car 3 months before launch and got it exactly on time. Exceptional service from start to finish.', name: 'Sarah M.', role: 'BMW 5 Series Owner', img: 'https://i.pravatar.cc/50?img=47' },
              { quote: "I was skeptical about buying a used car, but Mary Motors' certified vehicles are flawless. Two years later and my car still runs like it's brand new!", name: 'David O.', role: 'Mercedes C-Class Owner', img: 'https://i.pravatar.cc/50?img=15' },
            ].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="stars">★★★★★</div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-author">
                  <Image src={t.img} alt={t.name} width={50} height={50} />
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQ />


    </>
  );
}
