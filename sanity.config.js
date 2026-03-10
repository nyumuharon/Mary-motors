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
                        /* ULTRA-VISIBLE RED UI OVERRIDE */
                        
                        :root { 
                            font-size: 140% !important; 
                        }

                        /* 1. FORCE ALL ACTION & UTILITY BUTTONS TO BE RED & LARGE */
                        /* Targets Publish, Create, Search, Link, Close, Comment, and Menu buttons */
                        button[data-testid*="button"],
                        button[data-testid*="action"],
                        [role="button"]:has(svg) {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            padding: 10px 20px !important;
                            font-weight: 900 !important;
                            border-radius: 8px !important;
                            box-shadow: 0 4px 12px rgba(255, 77, 77, 0.4) !important;
                            border: 2px solid #e03d0e !important;
                            cursor: pointer !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            margin: 5px !important;
                            min-width: 44px !important;
                            min-height: 44px !important;
                        }

                        /* Ensure icons inside these buttons are large and white */
                        button[data-testid*="button"] svg,
                        [role="button"] svg {
                            transform: scale(1.3) !important;
                            stroke: white !important;
                            color: white !important;
                        }

                        /* Special handling for the main 'Create' and 'Publish' to be even bigger */
                        button[data-testid="new-document-button"],
                        button[data-testid="publish-button"] {
                            padding: 12px 35px !important;
                            border-radius: 50px !important;
                        }

                        /* 2. RESTORE HEADER TEXT (Prevent red ovals) */
                        [data-testid="pane-header"], 
                        [data-testid="default-pane-header"] {
                            background-color: #fff !important;
                            border-bottom: 1px solid #eee !important;
                        }

                        /* Ensure title text doesn't inherit the button style */
                        [data-testid="pane-header"] h2,
                        [data-testid="default-pane-header"] h2 {
                            background: none !important;
                            border: none !important;
                            box-shadow: none !important;
                            color: #000 !important;
                            font-weight: 800 !important;
                            font-size: 1.3rem !important;
                            padding: 0 !important;
                            margin: 0 15px !important;
                        }

                        /* 3. SIDEBAR WIDTH */
                        [data-testid="panes-column"] {
                            min-width: 400px !important;
                            z-index: 1 !important;
                        }

                        /* Form label clarity */
                        label {
                            font-size: 1.2rem !important;
                            font-weight: 800 !important;
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
