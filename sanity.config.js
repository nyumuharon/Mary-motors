import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { vehicleSchema } from './src/sanity/schema'
import { buildLegacyTheme } from 'sanity'

// Define a premium, high-accessibility "Chunky" theme
const props = {
    '--black': '#000',
    '--white': '#fff',
    '--brand-primary': '#e74c3c', // Mary Motors Red
    '--brand-secondary': '#1a1a1a',
    '--gray': '#f4f4f4',
    '--focus-color': '#e74c3c',
}

const customTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--black'],
    '--white': props['--white'],

    '--gray': '#666',
    '--gray-base': '#666',

    '--component-bg': props['--white'],
    '--component-text-color': props['--black'],

    /* Brand */
    '--brand-primary': props['--brand-primary'],

    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--brand-primary'],
    '--default-button-success-color': '#2ecc71',
    '--default-button-warning-color': '#f1c40f',
    '--default-button-danger-color': '#e74c3c',

    /* State */
    '--state-info-color': props['--brand-primary'],
    '--state-success-color': '#2ecc71',
    '--state-warning-color': '#f1c40f',
    '--state-danger-color': '#e74c3c',

    /* Navbar */
    '--main-navigation-color': props['--black'],
    '--main-navigation-color--inverted': props['--white'],

    '--focus-color': props['--focus-color'],
})

export default defineConfig({
    name: 'default',
    title: 'Mary Motors Administration',
    theme: customTheme,

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'khqg9ywx',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Management Console')
                    .items([
                        S.listItem()
                            .title('Vehicle Inventory')
                            .icon(vehicleSchema.icon)
                            .child(
                                S.documentTypeList('vehicle')
                                    .title('All Vehicles')
                                    // Make "Create" obvious in the list header
                                    .initialValueTemplates([
                                        S.initialValueTemplateItem('vehicle')
                                    ])
                            ),
                    ])
        })
    ],

    schema: {
        types: [vehicleSchema],
    },
    studio: {
        components: {
            logo: () => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 10px' }}>
                    <img
                        src="/logo.png"
                        alt="Mary Motors"
                        style={{ height: '32px', width: 'auto', borderRadius: '4px' }}
                    />
                    <span style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.03em', color: '#e74c3c' }}>MARY MOTORS</span>
                </div>
            )
        }
    },
    document: {
        productionViews: (prev, { schemaType }) => prev,
    }
})
