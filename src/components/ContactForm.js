'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle | loading | success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1200);
    };

    return (
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit} style={{ boxShadow: 'none', padding: 0 }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Send Us a Message</h3>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Fill out the form below and one of our experts will get back to you within 24 hours.
            </p>

            <div className="form-row">
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>First Name *</label>
                    <input type="text" placeholder="John" required
                        style={{ width: '100%', border: '1px solid #ddd', background: '#f9f9f9' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Last Name *</label>
                    <input type="text" placeholder="Doe" required
                        style={{ width: '100%', border: '1px solid #ddd', background: '#f9f9f9' }} />
                </div>
            </div>

            <div className="form-row" style={{ marginTop: '20px' }}>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address *</label>
                    <input type="email" placeholder="john@example.com" required
                        style={{ width: '100%', border: '1px solid #ddd', background: '#f9f9f9' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Phone Number</label>
                    <input type="tel" placeholder="+254 XXX XXX"
                        style={{ width: '100%', border: '1px solid #ddd', background: '#f9f9f9' }} />
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Subject</label>
                <select style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', background: '#f9f9f9', fontFamily: 'inherit' }}>
                    <option value="">General Inquiry</option>
                    <option value="buy">Looking to Buy</option>
                    <option value="sell">Looking to Sell</option>
                    <option value="finance">Financing Questions</option>
                    <option value="service">Service &amp; Maintenance</option>
                </select>
            </div>

            <div style={{ marginTop: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Your Message *</label>
                <textarea placeholder="How can we help you?" rows={6} required
                    style={{ width: '100%', border: '1px solid #ddd', background: '#f9f9f9' }}></textarea>
            </div>

            <button
                type="submit"
                className="btn-primary"
                disabled={status === 'loading'}
                style={{ width: '100%', marginTop: '20px', fontSize: '1.1rem', padding: '15px' }}
            >
                {status === 'loading' ? 'Sending…' : <>Send Message <span>→</span></>}
            </button>

            {status === 'success' && (
                <div style={{ marginTop: '20px', padding: '15px', borderRadius: '5px', background: '#d4edda', color: '#155724' }}>
                    ✓ Message sent! We&apos;ll get back to you shortly.
                </div>
            )}
        </form>
    );
}
