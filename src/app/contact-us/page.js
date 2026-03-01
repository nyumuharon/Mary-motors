import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact Us – Mary Motors' };

export default function ContactPage() {
    return (
        <>
            <div className="page-header"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1600&q=80') center/cover", padding: '100px 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.1rem', color: '#eee' }}>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home</Link>
                        &nbsp;/&nbsp;Contact Us
                    </p>
                </div>
            </div>

            <section className="contact-page" style={{ padding: '100px 0', background: '#fdfdfd' }}>
                <div className="container contact-grid" style={{ alignItems: 'flex-start', gap: '60px' }}>

                    {/* Info Column */}
                    <div className="contact-info" style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 30px rgba(0,0,0,0.05)' }}>
                        <p className="section-tag">GET IN TOUCH</p>
                        <h2 className="section-title">Visit Our Showroom</h2>
                        <p style={{ color: '#666', marginBottom: '30px', lineHeight: 1.6 }}>Whether you have a question about our inventory, financing options, or want to schedule a test drive, our dedicated team is here to help.</p>

                        {[
                            { icon: '📍', title: 'Headquarters', detail: '123 Motors Avenue, Westlands\nNakuru, Kenya' },
                            { icon: '📞', title: 'Phone', detail: '+254 700 123 456\n+254 722 987 654' },
                            { icon: '✉️', title: 'Email', detail: 'sales@marymotors.co.ke\nsupport@marymotors.co.ke' },
                            { icon: '🕐', title: 'Business Hours', detail: 'Mon–Sat: 8:00 AM – 6:00 PM\nSunday: 10:00 AM – 4:00 PM' },
                        ].map((item, i) => (
                            <div key={i} className="info-item" style={{ marginBottom: '25px' }}>
                                <div className="info-icon" style={{ background: 'var(--red-light)', color: 'var(--red)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '5px' }}>{item.title}</strong>
                                    <span style={{ color: '#666', whiteSpace: 'pre-line' }}>{item.detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form Column */}
                    <div style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 30px rgba(0,0,0,0.05)' }}>
                        <ContactForm />
                    </div>

                </div>
            </section>

            {/* Map */}
            <section style={{ height: '400px', width: '100%', background: '#eee' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d63821.95765!2d36.0660!3d-0.3031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182920c9f09c2b3f%3A0x1a5e3e!2sNakuru!5e0!3m2!1sen!2ske!4v1683050000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mary Motors Location – Nakuru"
                />
            </section>
        </>
    );
}
