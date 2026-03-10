import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { vehicleSchema } from './src/sanity/schema'
import { buildLegacyTheme } from 'sanity'

// DEFINE A RADIANT, BOLD, ACCESSIBLE THEME
const props = {
    '--black': '#000000',
    '--white': '#ffffff',
    '--brand-primary': '#ff4d4d', // Bold Accent Red
    '--brand-secondary': '#111111',
}

const chunkyTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--black'],
    '--white': props['--white'],

    '--gray': '#8a8a8a',
    '--gray-base': '#8a8a8a',

    '--component-bg': props['--white'],
    '--component-text-color': props['--black'],

    /* Brand */
    '--brand-primary': props['--brand-primary'],

    // Default button
    '--default-button-primary-color': props['--brand-primary'],
    '--default-button-danger-color': '#ff4d4d',

    /* Navbar */
    '--main-navigation-color': props['--black'],
    '--main-navigation-color--inverted': props['--white'],
})

export default defineConfig({
    name: 'default',
    title: 'Mary Motors',
    theme: chunkyTheme,

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'khqg9ywx',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [
        structureTool({
            name: 'inventory',
            title: 'Inventory',
            structure: (S) =>
                S.list()
                    .title('MANAGEMENT CONSOLE')
                    .items([
                        S.listItem()
                            .title('ADD VEHICLE')
                            .icon(() => '🚗')
                            .child(
                                S.document()
                                    .schemaType('vehicle')
                                    .documentId('new-vehicle')
                                    .title('Vehicle Form')
                            ),
                        S.divider(),
                        S.listItem()
                            .title('ALL VEHICLES')
                            .icon(vehicleSchema.icon)
                            .child(
                                S.documentTypeList('vehicle')
                                    .title('STOCK LIST')
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
            layout: (props) => (
                <>
                    <style>{`
                        /* SURGICAL UI OVERRIDE */
                        
                        :root { 
                            font-size: 130% !important; 
                        }

                        /* 1. THE PUBLISH BUTTON - SPECIFIC AND CLEAN */
                        button[data-testid="publish-button"],
                        [data-testid="pane-footer"] button {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            transform: scale(1.3) !important;
                            padding: 10px 25px !important;
                            font-weight: 800 !important;
                            border-radius: 8px !important;
                            box-shadow: 0 6px 15px rgba(255, 77, 77, 0.4) !important;
                            margin: 15px !important;
                            border: none !important;
                        }

                        button[data-testid="publish-button"] *, 
                        [data-testid="pane-footer"] button * {
                            color: white !important;
                            stroke: white !important;
                        }

                        /* 2. PANE HEADER UTILITY ICONS (Link, Close, etc) - SURGICAL */
                        [data-testid="pane-header"] button,
                        [data-testid="default-pane-header"] button {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            border-radius: 6px !important;
                            width: 36px !important;
                            height: 36px !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            margin: 0 8px !important;
                            box-shadow: 0 2px 8px rgba(255, 77, 77, 0.3) !important;
                            border: none !important;
                        }

                        [data-testid="pane-header"] button svg,
                        [data-testid="default-pane-header"] button svg {
                            transform: scale(1.1) !important;
                            stroke: white !important;
                            color: white !important;
                        }

                        /* 3. FIX OVERLAP AND SIDEBAR */
                        [data-testid="panes-column"] {
                            min-width: 350px !important;
                            z-index: 100 !important;
                        }

                        /* Ensure the main form area doesn't have a red background */
                        [data-testid="pane-header"] {
                            background-color: #fff !important;
                            border-bottom: 1px solid #eee !important;
                        }

                        /* Form label visibility */
                        label {
                            font-size: 1.1rem !important;
                            font-weight: 700 !important;
                            color: #000 !important;
                        }
                    `}</style>
                    {props.renderDefault(props)}
                </>
            ),
            logo: () => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '5px' }}>
                    <div style={{ backgroundColor: '#ff4d4d', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '1.3rem' }}>M</div>
                    <span style={{ fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.02em', color: '#000', whiteSpace: 'nowrap' }}>MARY MOTORS</span>
                </div>
            )
        }
    },

    document: {
        productionViews: (prev, { schemaType }) => prev,
    }
})
