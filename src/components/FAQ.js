import Image from 'next/image';

const FAQ = () => {
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
            a: 'Check the vehicle history, mileage, inspection reports, and service records. A professional inspection can also help confirm the car\'s condition.'
        },
        {
            q: 'What documents are required to buy a car in Kenya?',
            a: null,
            list: ['National ID or passport', 'KRA PIN', 'Proof of payment', 'Insurance documents']
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

    return (
        <section className="faq">
            <div className="faq-header">
                <div className="container">
                    <p className="section-tag">FAQ</p>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p>Everything you need to know about buying a car in Kenya with Mary Motors.</p>
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
                                    {faq.a && <p>{faq.a}</p>}
                                    {faq.list && (
                                        <ul className="faq-list">
                                            {faq.list.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
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
