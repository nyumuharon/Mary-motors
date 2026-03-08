'use client';
import { useState } from 'react';

const faqs = [
    {
        q: 'What are the best cars to buy in Kenya?',
        a: 'The best cars in Kenya depend on your budget and needs. Popular choices include Toyota, Mazda, Nissan, and Subaru because they are reliable, fuel-efficient, and have affordable spare parts.'
    },
    {
        q: 'How much does it cost to buy a car in Kenya?',
        a: 'Car prices in Kenya vary depending on the model, year, and condition. Used cars can start from around KES 500,000, while newer imported vehicles can range from KES 1 million to over KES 5 million.'
    },
    {
        q: 'Can I import a car from Japan to Kenya?',
        a: 'Yes. Many vehicles in Kenya are imported from Japan. The process involves purchasing the vehicle, shipping it to Kenya, paying import duty, and registering it locally.'
    },
    {
        q: 'What is the best place to buy used cars in Nairobi?',
        a: 'You can buy used cars from trusted car dealerships, online car marketplaces, and certified vehicle importers in Nairobi.'
    },
    {
        q: 'Do you offer car financing in Kenya?',
        a: 'Yes. Many dealerships work with banks and lenders to provide car financing options so customers can pay in monthly installments.'
    },
    {
        q: 'How do I know if a used car is in good condition?',
        a: "Check the vehicle history, mileage, inspection reports, and service records. A professional inspection can also help confirm the car's condition."
    },
    {
        q: 'What documents are required to buy a car in Kenya?',
        a: 'You need a National ID or passport, KRA PIN, proof of payment, and insurance documents.'
    },
    {
        q: 'What are the most fuel-efficient cars in Kenya?',
        a: 'Some fuel-efficient cars include the Toyota Vitz, Honda Fit, Mazda Demio, and Suzuki Alto, which are popular for daily commuting.'
    },
    {
        q: 'Can I trade in my old car for a new one?',
        a: 'Yes. Many dealerships allow trade-ins where the value of your current vehicle is deducted from the price of the new one.'
    },
    {
        q: 'How can I schedule a test drive?',
        a: 'You can schedule a test drive online through the dealership website or contact the sales team to book an appointment.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section style={{ padding: '80px 0', background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p className="section-tag">FAQ</p>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p style={{ color: 'var(--secondary-text)', maxWidth: '560px', margin: '12px auto 0' }}>
                        Everything you need to know about buying a car in Kenya with Mary Motors.
                    </p>
                </div>

                <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{
                            border: '1px solid var(--stroke)',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: openIndex === i ? 'var(--shadow-lg)' : 'none'
                        }}>
                            <button onClick={() => toggle(i)} style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '18px 24px',
                                background: openIndex === i ? 'var(--accent)' : '#fff',
                                color: openIndex === i ? '#fff' : 'var(--primary-text)',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                                fontSize: '1rem',
                                fontWeight: '600',
                                transition: 'background 0.3s ease, color 0.3s ease',
                                gap: '16px'
                            }}>
                                <span>{faq.q}</span>
                                <span style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '300',
                                    flexShrink: 0,
                                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                    lineHeight: 1
                                }}>+</span>
                            </button>
                            {openIndex === i && (
                                <div style={{
                                    padding: '16px 24px 20px',
                                    background: '#fafafa',
                                    borderTop: '1px solid var(--stroke)',
                                    color: 'var(--secondary-text)',
                                    lineHeight: '1.7',
                                    fontSize: '0.95rem'
                                }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
