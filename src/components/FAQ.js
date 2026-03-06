import Image from 'next/image';

const FAQ = () => {
    const faqs = [
        {
            q: 'What types of vehicles do you offer?',
            a: 'We offer a wide range of vehicles, including new and used cars, trucks, SUVs, and more from various manufacturers.'
        },
        {
            q: 'Do you offer certified pre-owned (CPO) vehicles?',
            a: 'Yes, we have a selection of certified pre-owned vehicles that have undergone rigorous inspections.'
        },
        {
            q: 'Do you provide financing options?',
            a: 'Yes, we offer financing solutions and work with various lenders to help you secure a loan that fits your budget.'
        },
        {
            q: 'Can I schedule a test drive?',
            a: 'Absolutely! You can schedule a test drive online, or contact our sales team to arrange a convenient time.'
        },
        {
            q: 'What is the trade-in process at your dealership?',
            a: 'We accept trade-ins and can provide you with a competitive offer. Simply bring your vehicle to our dealership.'
        },
        {
            q: 'What is the warranty coverage on your new cars?',
            a: 'Warranty coverage varies by manufacturer and model. Our team can provide detailed information for the car.'
        },
        {
            q: 'What should I bring when purchasing a vehicle?',
            a: 'When buying a car, bring a valid driver\'s license, proof of insurance, proof of income, and any required down payment.'
        },
        {
            q: 'Do you have on-site maintenance facilities?',
            a: 'Yes, we have a full-service maintenance by certified technicians to keep your vehicle in top condition.'
        }
    ];

    return (
        <section className="faq">
            <div className="faq-header">
                <div className="container">
                    <p className="section-tag">FAQ</p>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p>Here are some frequently asked questions (FAQs) that are commonly associated with corporate business</p>
                </div>
            </div>
            <div className="faq-content">
                <div className="container">
                    <div className="faq-grid">
                        <div className="faq-img-wrap">
                            <Image src="/faq-image.png" alt="FAQ support" className="faq-img" width={500} height={400} />
                        </div>
                        <div className="faq-questions">
                            {faqs.map((faq, i) => (
                                <div key={i} className="faq-item">
                                    <h3>{faq.q}</h3>
                                    <p>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
