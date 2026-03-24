import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'khqg9ywx',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-05-03', // use current date or latest API version
    useCdn: process.env.NODE_ENV === 'production',
})

// Helper to get image URLs from Sanity image records
const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}

// Helper to map a sanity vehicle doc to the format expected by our UI
export function mapSanityVehicle(doc) {
    if (!doc) return null;
    return {
        id: doc._id,
        make: doc.make || 'Unknown',
        name: doc.name || 'Unknown',
        badge: doc.badge || 'Available Now',
        price: doc.price || 'KES 0',
        img: doc.mainImage ? urlFor(doc.mainImage).url() : '',
        gallery: doc.gallery ? doc.gallery.map(img => urlFor(img).url()) : (doc.mainImage ? [urlFor(doc.mainImage).url()] : []),
        type: doc.vehicleType || 'used',
        bodyType: doc.bodyType || 'Sedan/SUV',
        fuel: doc.fuel || 'Petrol',
        mileage: doc.mileage || '0 km',
        seats: doc.seats || 5,
        engine: doc.engine || 'N/A',
        transmission: doc.transmission || 'Automatic',
        color: doc.color || 'Dynamic',
        weight: doc.weight || 'N/A',
        description: doc.description || '',
        _createdAt: doc._createdAt,
    }
}

// Queries
export async function getVehicles() {
    // Fetch all vehicles properly sorted with a lean projection for performance
    const query = `*[_type == "vehicle"] | order(_createdAt desc) {
        _id,
        make,
        name,
        badge,
        price,
        mainImage,
        gallery,
        vehicleType,
        bodyType,
        fuel,
        mileage,
        seats,
        engine,
        transmission,
        color,
        weight,
        description,
        _createdAt
    }`;
    const docs = await client.fetch(query, {}, { useCdn: true }); // Enable CDN for faster repeat fetches
    return docs.map(mapSanityVehicle);
}

export async function getVehicleById(id) {
    // Fetch a single vehicle by its Sanity ID with a full projection
    const query = `*[_type == "vehicle" && _id == $id][0] {
        _id,
        make,
        name,
        badge,
        price,
        mainImage,
        gallery,
        vehicleType,
        bodyType,
        fuel,
        mileage,
        seats,
        engine,
        transmission,
        color,
        weight,
        description,
        _createdAt
    }`;
    const doc = await client.fetch(query, { id });
    return mapSanityVehicle(doc);
}
