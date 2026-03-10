import { createClient } from '@sanity/client';
import { vehicles } from '../src/lib/vehicles.js';

// Initialize the Sanity client securely with the provided Token
const client = createClient({
    projectId: 'khqg9ywx',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
    token: 'skQOJOLCdLvNipOmBf0OiyUOkmQmeZRUwx11wDkvsJVInWjU4E3VYJz6Gk1B39MkQ7bK1kN1TlAIefNKybw7elogQMQeua5WaDNkvGu32qGOOihaT4N5zxtzOm83BLY5G2bryaxH1xbsXUgdk2QjsexqVfHf8HfQyW2BozhC4X57Gdmu1beH'
});

async function uploadImage(url) {
    if (!url) return null;
    try {
        const res = await fetch(url);
        const buffer = await res.arrayBuffer();

        // Generate a friendly filename from URL
        let filename = url.split('/').pop().split('?')[0];
        if (!filename.includes('.')) filename += '.jpg';

        const asset = await client.assets.upload('image', Buffer.from(buffer), {
            filename: filename
        });

        return {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id }
        };
    } catch (e) {
        console.error(' [!] Failed to upload image:', url, e.message);
        return null;
    }
}

async function runMigration() {
    console.log(`[+] Starting migration of ${vehicles.length} vehicles to Sanity CMS...`);

    for (const v of vehicles) {
        console.log(`\n[-] Processing: ${v.make} ${v.name}...`);

        // 1. Upload Main Image
        process.stdout.write(`    Uploading main image... `);
        let mainImage = await uploadImage(v.img);
        console.log(mainImage ? 'Done' : 'Failed');

        // 2. Upload Gallery Images
        let gallery = [];
        if (v.gallery && v.gallery.length > 0) {
            process.stdout.write(`    Uploading ${v.gallery.length} gallery images... `);
            for (const gUrl of v.gallery) {
                const gAsset = await uploadImage(gUrl);
                if (gAsset) gallery.push(gAsset);
            }
            console.log(`Done`);
        }

        // 3. Construct Sanity Document payload matching our new schema
        const doc = {
            _type: 'vehicle',
            make: v.make,
            name: v.name,
            badge: v.badge,
            price: v.price,
            vehicleType: v.type, // 'new' vs 'used'
            fuel: v.fuel,
            mileage: v.mileage,
            seats: parseInt(v.seats) || 5,
            engine: v.engine,
            transmission: v.transmission,
            color: v.color,
            weight: v.weight,
            bodyType: v.id > 13 ? 'Motorcycle' : 'Sedan/SUV',
            mainImage: mainImage || undefined,
            gallery: gallery.length > 0 ? gallery : undefined
        };

        // 4. Push to Sanity
        try {
            const res = await client.create(doc);
            console.log(`    [SUCCESS] Created document: ${res._id}`);
        } catch (e) {
            console.error(`    [ERROR] Failed to insert document:`, e.message);
        }
    }

    console.log('\n[+] Migration complete! You can now visit /all-cars to see the dynamic data.');
}

// Execute script
runMigration().catch(err => {
    console.error('Fatal Migration Error:', err);
    process.exit(1);
});
