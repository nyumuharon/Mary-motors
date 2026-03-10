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
                        /* PRO RED UI OVERRIDE */
                        
                        :root { 
                            font-size: 135% !important; 
                        }

                        /* 1. THE PUBLISH BUTTON - PRO PILL STYLE */
                        button[data-testid="publish-button"],
                        [data-testid="pane-footer"] button {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            transform: scale(1.2) !important;
                            padding: 12px 28px !important;
                            font-weight: 900 !important;
                            border-radius: 50px !important;
                            box-shadow: 0 4px 15px rgba(255, 77, 77, 0.4) !important;
                            margin: 10px !important;
                            border: 2px solid #e03d0e !important;
                            transition: all 0.2s ease !important;
                        }

                        button[data-testid="publish-button"]:hover {
                            background-color: #e03d0e !important;
                            transform: scale(1.25) !important;
                        }

                        button[data-testid="publish-button"] *, 
                        [data-testid="pane-footer"] button * {
                            color: white !important;
                            stroke: white !important;
                        }

                        /* 2. PANE HEADER ICONS - CLEAN CIRCULAR BUTTONS */
                        [data-testid="pane-header"] button,
                        [data-testid="default-pane-header"] button {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            border-radius: 50% !important;
                            width: 42px !important;
                            height: 42px !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            margin: 0 10px !important;
                            box-shadow: 0 3px 10px rgba(255, 77, 77, 0.3) !important;
                            border: 2px solid #e03d0e !important;
                        }

                        [data-testid="pane-header"] button svg {
                            transform: scale(1.2) !important;
                            stroke: white !important;
                        }

                        /* 3. SIDEBAR NAVIGATION - ENLARGE ICONS */
                        [data-testid="panes-column"] {
                            min-width: 380px !important;
                        }

                        /* Form label visibility */
                        label {
                            font-size: 1.15rem !important;
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
