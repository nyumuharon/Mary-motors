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
    studio: {
        components: {
            logo: () => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img
                        src="/logo.png"
                        alt="Mary Motors"
                        style={{ height: '24px', width: 'auto', borderRadius: '4px' }}
                    />
                    <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>MARY MOTORS</span>
                </div>
            )
        }
    },
    document: {
        // This ensures the custom icons and titles appear everywhere
        productionViews: (prev, { schemaType }) => prev,
    }
})
