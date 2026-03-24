'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    }, [slides.length]);

    // Auto-advance every 10 seconds
    useEffect(() => {
        const timer = setInterval(() => goTo(current + 1), 10000);
        return () => clearInterval(timer);
    }, [current, goTo]);

    return (
        <section className="hero" id="home">
            <div className="slides-wrapper">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`slide ${i === current ? 'active' : ''}`}
                    >
                        <Image
                            src={slide.bg}
                            alt={slide.tag}
                            fill
                            priority={i === 0}
                            className="slide-bg"
                            style={{ objectFit: 'cover' }}
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
