import { createClient } from '@sanity/client';
import fs from 'fs';

const client = createClient({
    projectId: 'khqg9ywx',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
    token: 'skQOJOLCdLvNipOmBf0OiyUOkmQmeZRUwx11wDkvsJVInWjU4E3VYJz6Gk1B39MkQ7bK1kN1TlAIefNKybw7elogQMQeua5WaDNkvGu32qGOOihaT4N5zxtzOm83BLY5G2bryaxH1xbsXUgdk2QjsexqVfHf8HfQyW2BozhC4X57Gdmu1beH'
});

async function run() {
    try {
        console.log("Reading Audi RS image...");
        const imgBuffer = fs.readFileSync('C:\\Users\\Administrator\\Downloads\\Mary-motors-main\\Mary-motors-main\\audi rs.jpeg');
        console.log("Uploading to Sanity Assets...");
        const asset = await client.assets.upload('image', imgBuffer, {
            filename: 'audi-rs.jpeg'
        });
        console.log("Image uploaded! Creating vehicle document...");

        const doc = {
            _type: 'vehicle',
            make: 'Audi',
            name: 'RS Model',
            badge: 'New Arrival',
            price: 'KES 8,500,000',
            vehicleType: 'used',
            fuel: 'Petrol',
            mileage: '15,000 km',
            seats: 5,
            engine: '2.9L V6 Twin-Turbo',
            transmission: '8-Speed Automatic',
            color: 'Metallic Grey',
            bodyType: 'Sedan/SUV',
            mainImage: {
                _type: 'image',
                asset: { _type: 'reference', _ref: asset._id }
            }
        };

        const res = await client.create(doc);
        console.log("Success! Created document: ", res._id);
    } catch (e) {
        console.error("Error:", e);
    }
}
run();
