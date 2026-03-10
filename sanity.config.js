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
                            padding: 10px 24px !important;
                            font-weight: 800 !important;
                            border-radius: 50px !important;
                            box-shadow: 0 4px 12px rgba(255, 77, 77, 0.3) !important;
                            border: none !important;
                            min-height: 44px !important;
                        }

                        button[data-testid="publish-button"] *, 
                        button[data-testid="new-document-button"] * {
                            color: white !important;
                            stroke: white !important;
                        }

                        /* 2. PANE UTILITY ICONS (Link, Close, etc) */
                        /* Target buttons that ONLY contain icons, avoiding text headers */
                        [data-testid="pane-header"] button:has(svg):not(:has(span)),
                        button[data-testid="search-button"] {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            border-radius: 50% !important;
                            width: 40px !important;
                            height: 40px !important;
                            min-width: 40px !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            border: none !important;
                            box-shadow: 0 2px 8px rgba(255, 77, 77, 0.2) !important;
                        }

                        /* 3. RESTORE HEADERS (Fix the red ovals) */
                        [data-testid="pane-header"] {
                            background-color: #fff !important;
                            border-bottom: 1px solid #eee !important;
                        }

                        /* Ensure titles are just bold text, not red shapes */
                        [data-testid="pane-header"] h2,
                        [data-testid="default-pane-header"] h2 {
                            background: none !important;
                            color: #000 !important;
                            font-weight: 800 !important;
                            font-size: 1.2rem !important;
                        }

                        /* 4. SIDEBAR & FORM LABELS */
                        [data-testid="panes-column"] {
                            min-width: 350px !important;
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
