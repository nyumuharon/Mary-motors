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
    // Fetch all vehicles properly sorted
    const docs = await client.fetch(`*[_type == "vehicle"] | order(_createdAt desc)`);
    return docs.map(mapSanityVehicle);
}

export async function getVehicleById(id) {
    // Fetch a single vehicle by its Sanity ID
    const doc = await client.fetch(`*[_type == "vehicle" && _id == $id][0]`, { id });
    return mapSanityVehicle(doc);
}
