'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="navbar" id="navbar">
            <div className="container nav-inner">
                <Link href="/" className="logo">
                    <svg className="logo-icon" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="10" width="36" height="6" rx="3" fill="#c0392b" />
                        <circle cx="10" cy="16" r="4" fill="#222" />
                        <circle cx="10" cy="16" r="2" fill="#888" />
                        <circle cx="30" cy="16" r="4" fill="#222" />
                        <circle cx="30" cy="16" r="2" fill="#888" />
                        <path d="M4 10 L10 3 L30 3 L36 10" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    </svg>
                    <span className="logo-text">MARY <span className="logo-accent">MOTORS</span></span>
                </Link>

                <nav className="nav-links" id="nav-links">
                    <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                    <Link href="/all-cars" className={`nav-link ${pathname === '/all-cars' ? 'active' : ''}`}>Vehicles</Link>
                    <Link href="/gallery" className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
                    <Link href="/contact-us" className={`nav-link ${pathname === '/contact-us' ? 'active' : ''}`}>Contact</Link>
                    <div className="dropdown">
                        <Link href="/all-cars" className="nav-link dropdown-toggle" onClick={(e) => {
                            if (window.innerWidth <= 768) {
                                e.preventDefault();
                                e.currentTarget.parentElement.classList.toggle('active');
                            }
                        }}>Shop <span className="arrow">▾</span></Link>
                        <div className="dropdown-menu">
                            <Link href="/all-cars?filter=new">New Cars</Link>
                            <Link href="/all-cars?filter=used">Used Cars</Link>
                            <Link href="/all-cars?filter=preorder">Pre-Orders</Link>
                        </div>
                    </div>
                </nav>

                <div className="nav-right">
                    <button className="hamburger" id="hamburger" aria-label="Menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
