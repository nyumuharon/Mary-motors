'use client';
import { useEffect } from 'react';

export default function ClientScripts() {
    useEffect(() => {
        // ── NAVBAR SCROLL ────────────────────────────────────
        const navbar = document.getElementById('navbar');
        const handleScroll = () => {
            if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // ── HAMBURGER MENU ───────────────────────────────────
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        const handleHamburger = () => {
            hamburger?.classList.toggle('open');
            navLinks?.classList.toggle('open');
        };
        hamburger?.addEventListener('click', handleHamburger);

        // Close mobile menu on nav link click
        navLinks?.querySelectorAll('.nav-link').forEach(l => {
            l.addEventListener('click', () => {
                hamburger?.classList.remove('open');
                navLinks?.classList.remove('open');
            });
        });

        // ── NEWSLETTER ───────────────────────────────────────
        const nlBtn = document.getElementById('nl-btn');
        const nlEmail = document.getElementById('nl-email');
        const handleNewsletter = () => {
            if (nlEmail?.value && nlEmail.value.includes('@')) {
                showToast('✓ Subscribed! Thanks for joining us.');
                nlEmail.value = '';
            } else {
                showToast('Please enter a valid email address.');
            }
        };
        nlBtn?.addEventListener('click', handleNewsletter);

        // ── INTERSECTION OBSERVER (fade-in) ──────────────────
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.feature-card, .testi-card, .blog-card, .gallery-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            hamburger?.removeEventListener('click', handleHamburger);
            nlBtn?.removeEventListener('click', handleNewsletter);
            observer.disconnect();
        };
    }, []);

    return null; // renders nothing
}

// Toast utility used by this file and ContactForm
export function showToast(msg) {
    const existing = document.getElementById('mm-toast');
    if (existing) existing.remove();

    const t = document.createElement('div');
    t.id = 'mm-toast';
    t.style.cssText = `
    position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
    background:#111;color:#fff;padding:12px 24px;border-radius:8px;
    font-size:0.875rem;font-weight:600;z-index:9999;
    box-shadow:0 4px 20px rgba(0,0,0,0.3);white-space:nowrap;
  `;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}
