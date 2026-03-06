import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link href="/" className="logo">
                        <svg className="logo-icon" viewBox="0 0 40 20" fill="none">
                            <rect x="2" y="10" width="36" height="6" rx="3" fill="#c0392b" />
                            <circle cx="10" cy="16" r="4" fill="#555" />
                            <circle cx="30" cy="16" r="4" fill="#555" />
                            <path d="M4 10 L10 3 L30 3 L36 10" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinejoin="round" />
                        </svg>
                        <span className="logo-text" style={{ color: '#fff' }}>MARY <span className="logo-accent">MOTORS</span></span>
                    </Link>
                    <p>Your trusted partner for premium new, pre-order, and certified used vehicles. Drive your dream with Mary Motors.</p>
                    <div className="socials">
                        <a href="#" aria-label="Facebook">Facebook</a>
                        <a href="#" aria-label="Instagram">Instagram</a>
                        <a href="#" aria-label="Twitter">X</a>
                        <a href="#" aria-label="YouTube">YouTube</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/all-cars">Vehicles</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/contact-us">Contact</Link>
                </div>

                <div className="footer-col">
                    <h4>Inventory</h4>
                    <Link href="/all-cars?filter=new">New Cars</Link>
                    <Link href="/all-cars?filter=used">Used Cars</Link>
                    <Link href="/all-cars?filter=preorder">Pre-Orders</Link>
                    <Link href="/all-cars">SUVs</Link>
                    <Link href="/all-cars">Sedans</Link>
                    <Link href="/all-cars">Trucks</Link>
                </div>


            </div>
            <div className="footer-bottom">
                <p>© 2026 Mary Motors. All rights reserved. | Designed by haron +254702864025 </p>
            </div>
        </footer>
    );
}
