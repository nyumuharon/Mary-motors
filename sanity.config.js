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
                        /* REFINED PRO UI OVERRIDE */

                        :root { 
                            font-size: 120% !important; 
                        }

                        /* 1. PRIMARY ACTION BUTTONS (Publish, Create) */
                        button[data-testid="publish-button"],
                        button[data-testid="new-document-button"] {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            padding: 12px 30px !important;
                            font-weight: 900 !important;
                            font-size: 1rem !important;
                            border-radius: 50px !important;
                            box-shadow: 0 6px 15px rgba(255, 77, 77, 0.4) !important;
                            border: 2px solid #e03d0e !important;
                            cursor: pointer !important;
                            position: relative !important;
                            z-index: 1000 !important;
                            pointer-events: auto !important;
                        }

                        button[data-testid="publish-button"] *, 
                        button[data-testid="new-document-button"] * {
                            color: white !important;
                            stroke: white !important;
                        }

                        /* 2. PANE UTILITY ICONS (Link, Close, etc) */
                        [data-testid="pane-header"] button:has(svg):not(:has(span)),
                        button[data-testid="search-button"] {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            border-radius: 50% !important;
                            width: 44px !important;
                            height: 44px !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            border: 2px solid #e03d0e !important;
                            box-shadow: 0 3px 10px rgba(255, 77, 77, 0.3) !important;
                            cursor: pointer !important;
                            pointer-events: auto !important;
                        }

                        /* 3. RESTORE HEADERS & LAYOUT FIXES */
                        [data-testid="pane-header"] {
                            background-color: #fff !important;
                            border-bottom: 1px solid #eee !important;
                        }

                        [data-testid="panes-column"] {
                            min-width: 350px !important;
                            z-index: 1 !important; /* Lowered to prevent header overlap */
                        }

                        label {
                            font-size: 1.1rem !important;
                            font-weight: 700 !important;
                            color: #333 !important;
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
