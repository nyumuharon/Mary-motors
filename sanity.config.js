import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { vehicleSchema } from './src/sanity/schema'

export default defineConfig({
    name: 'default',
    title: 'Mary Motors Administration',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'khqg9ywx',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [structureTool()],

    schema: {
        types: [vehicleSchema],
    },
    document: {
        // This ensures the custom icons and titles appear everywhere
        productionViews: (prev, { schemaType }) => prev,
    }
})
