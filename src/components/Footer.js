import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link href="/" className="logo">
                        <Image
                            src="/logo.svg"
                            alt="Mary Motors Logo"
                            className="logo-icon"
                            width={240}
                            height={60}
                            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                        />
                    </Link>
                    <p>Your trusted partner for premium new and certified used vehicles. Drive your dream with Mary Motors.</p>
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
