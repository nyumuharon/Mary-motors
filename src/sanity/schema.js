export const vehicleSchema = {
    name: 'vehicle',
    title: 'Vehicle Inventory',
    type: 'document',
    fields: [
        {
            name: 'make',
            title: 'Make',
            type: 'string',
            validation: Rule => Rule.required(),
            description: 'e.g., Mercedes-Benz, BMW, Toyota'
        },
        {
            name: 'name',
            title: 'Model / Name',
            type: 'string',
            validation: Rule => Rule.required(),
            description: 'e.g., G-Class (G63 AMG), M5 (F90)'
        },
        {
            name: 'badge',
            title: 'Status Badge',
            type: 'string',
            initialValue: 'Available Now',
            description: 'e.g., Available Now, Coming Soon, Under Offer'
        },
        {
            name: 'price',
            title: 'Price (String)',
            type: 'string',
            validation: Rule => Rule.required(),
            description: 'e.g., KES 28,500,000'
        },
        {
            name: 'mainImage',
            title: 'Main Header Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'gallery',
            title: 'Image Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Additional images for the slideshow'
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
        },
        {
            name: 'bodyType',
            title: 'Body Type',
            type: 'string',
            initialValue: 'Sedan/SUV'
        },
        {
            name: 'engine',
            title: 'Engine Format',
            type: 'string',
            description: 'e.g., 4.0L V8 BiTurbo'
        },
        {
            name: 'transmission',
            title: 'Transmission',
            type: 'string',
            initialValue: 'Automatic',
            description: 'e.g., 9G-TRONIC Automatic'
        },
        {
            name: 'fuel',
            title: 'Fuel Type',
            type: 'string',
            initialValue: 'Petrol'
        },
        {
            name: 'mileage',
            title: 'Mileage',
            type: 'string',
            initialValue: '0 km'
        },
        {
            name: 'color',
            title: 'Exterior Color',
            type: 'string'
        },
        {
            name: 'seats',
            title: 'Number of Seats',
            type: 'number',
            initialValue: 5
        },
        {
            name: 'weight',
            title: 'Vehicle Weight',
            type: 'string',
            description: 'e.g., 2,560 kg'
        },
        {
            name: 'description',
            title: 'Overview Description',
            type: 'text',
            description: 'A short paragraph describing the vehicle.'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'make',
            media: 'mainImage',
        },
        prepare(selection) {
            const { title, subtitle, media } = selection
            return {
                title: `${subtitle} ${title}`,
                media: media
            }
        }
    }
}
