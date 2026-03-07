'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
    {
        bg: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80',
        tag: 'NEW ARRIVAL 2025',
        title: 'Meet the New Stars<br />of Our Showroom',
        sub: 'Your ultimate destination for premium vehicles. We bring you the finest selection crafted for driving excellence.',
        cta: 'Buy This Car',
        link: '/all-cars?filter=new',
    },
    {
        bg: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80',
        tag: 'PRE-ORDER NOW',
        title: 'Experience Luxury<br />Like Never Before',
        sub: 'Reserve your dream car before it hits the showroom. Exclusive pre-order deals with special pricing.',
        cta: 'Pre-Order Now',
        link: '/all-cars?filter=preorder',
    },
    {
        bg: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80',
        tag: 'BEST VALUE',
        title: 'Quality Used Cars<br />You Can Trust',
        sub: 'Certified pre-owned vehicles thoroughly inspected and ready to hit the road. Great value, unbeatable quality.',
        cta: 'Browse Inventory',
        link: '/all-cars?filter=used',
    },
    {
        bg: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80',
        tag: 'SPORTS EDITION',
        title: 'Unleash Your<br />Inner Driver',
        sub: 'From sleek sports cars to rugged SUVs, we have the perfect ride for every personality and lifestyle.',
        cta: 'Explore Models',
        link: '/all-cars',
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const goTo = useCallback((idx) => {
        setCurrent((idx + slides.length) % slides.length);
    }, []);

    // Auto-advance every 10 seconds
    useEffect(() => {
        const timer = setInterval(() => goTo(current + 1), 10000);
        return () => clearInterval(timer);
    }, [current, goTo]);

    // Touch/swipe support
    useEffect(() => {
        let touchStartX = 0;
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
        const onTouchEnd = (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
        };

        hero.addEventListener('touchstart', onTouchStart, { passive: true });
        hero.addEventListener('touchend', onTouchEnd);
        return () => {
            hero.removeEventListener('touchstart', onTouchStart);
            hero.removeEventListener('touchend', onTouchEnd);
        };
    }, [current, goTo]);

    return (
        <section className="hero" id="home">
            <div className="slides-wrapper">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`slide ${i === current ? 'active' : ''}`}
                    >
                        <div
                            className="slide-bg"
                            style={{ backgroundImage: `url('${slide.bg}')` }}
                        />
                        <div className="container slide-content">
                            <p className="slide-tag">{slide.tag}</p>
                            <h1
                                className="slide-title"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />
                            <p className="slide-sub">{slide.sub}</p>
                            <Link href={slide.link} className="btn-primary">
                                {slide.cta} <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hero-progress">
                <div
                    className="progress-bar"
                    key={current} /* Restart animation on slide change */
                />
            </div>

            <button className="slide-arrow prev" onClick={() => goTo(current - 1)} aria-label="Previous">&#8249;</button>
            <button className="slide-arrow next" onClick={() => goTo(current + 1)} aria-label="Next">&#8250;</button>

            <div className="slide-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === current ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
