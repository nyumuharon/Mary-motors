import { TagIcon } from '@sanity/icons'

export const vehicleSchema = {
    name: 'vehicle',
    title: 'Vehicle Inventory',
    type: 'document',
    icon: TagIcon,
    groups: [
        { name: 'basic', title: 'Basic Info', default: true },
        { name: 'pricing', title: 'Pricing & Status' },
        { name: 'specs', title: 'Specifications' },
        { name: 'media', title: 'Media & Details' }
    ],
    fieldsets: [
        { name: 'basic', title: 'Basic Information', options: { collapsible: true, collapsed: false } },
        { name: 'pricing', title: 'Pricing & Classification', options: { collapsible: true, collapsed: false } },
        { name: 'specs', title: 'Technical Specifications', options: { collapsible: true, collapsed: true } },
        { name: 'media', title: 'Media & Description', options: { collapsible: true, collapsed: false } }
    ],
    fields: [
        {
            name: 'make',
            title: 'Make',
            type: 'string',
            validation: Rule => Rule.required(),
            description: 'e.g., Mercedes-Benz, BMW, Toyota',
            group: 'basic'
        },
        {
            name: 'name',
            title: 'Model / Name',
            type: 'string',
            validation: Rule => Rule.required(),
            description: 'e.g., G-Class (G63 AMG), M5 (F90)',
            group: 'basic'
        },
        {
            name: 'badge',
            title: 'Status Badge',
            type: 'string',
            initialValue: 'Available Now',
            description: 'e.g., Available Now, Coming Soon, Under Offer',
            group: 'pricing'
        },
        {
            name: 'price',
            title: 'Price (String)',
            type: 'string',
            validation: Rule => Rule.required(),
            description: 'e.g., KES 28,500,000',
            group: 'pricing'
        },
        {
            name: 'vehicleType',
            title: 'Vehicle Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Used Car', value: 'used' },
                    { title: 'New Car', value: 'new' },
                    { title: 'Motorcycle', value: 'motorcycle' }
                ],
                layout: 'radio'
            },
            initialValue: 'used',
            group: 'pricing'
        },
        {
            name: 'mainImage',
            title: 'Main Header Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
            group: 'media'
        },
        {
            name: 'gallery',
            title: 'Image Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Additional images for the slideshow',
            group: 'media'
        },
        {
            name: 'description',
            title: 'Overview Description',
            type: 'text',
            description: 'A short paragraph describing the vehicle.',
            group: 'media'
        },
        {
            name: 'bodyType',
            title: 'Body Type',
            type: 'string',
            initialValue: 'Sedan/SUV',
            group: 'specs'
        },
        {
            name: 'engine',
            title: 'Engine Format',
            type: 'string',
            description: 'e.g., 4.0L V8 BiTurbo',
            group: 'specs'
        },
        {
            name: 'transmission',
            title: 'Transmission',
            type: 'string',
            initialValue: 'Automatic',
            description: 'e.g., 9G-TRONIC Automatic',
            group: 'specs'
        },
        {
            name: 'fuel',
            title: 'Fuel Type',
            type: 'string',
            initialValue: 'Petrol',
            group: 'specs'
        },
        {
            name: 'mileage',
            title: 'Mileage',
            type: 'string',
            initialValue: '0 km',
            group: 'specs'
        },
        {
            name: 'color',
            title: 'Exterior Color',
            type: 'string',
            group: 'specs'
        },
        {
            name: 'seats',
            title: 'Number of Seats',
            type: 'number',
            initialValue: 5,
            group: 'specs'
        },
        {
            name: 'weight',
            title: 'Vehicle Weight',
            type: 'string',
            description: 'e.g., 2,560 kg',
            fieldset: 'specs'
        }
    ],
    preview: {
        select: {
            name: 'name',
            make: 'make',
            price: 'price',
            badge: 'badge',
            media: 'mainImage',
        },
        prepare(selection) {
            const { name, make, price, badge, media } = selection
            return {
                title: `${make} ${name}`,
                subtitle: `${price} | ${badge || 'No Status'}`,
                media: media
            }
        }
    }
}
