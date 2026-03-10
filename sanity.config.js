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
                        /* EXTREME UI OVERRIDE - FORCE LARGE RED BUTTONS */
                        
                        :root { 
                            font-size: 155% !important; 
                        }

                        /* 1. PUBLISH AND ACTION BUTTONS - BRUTAL FORCE */
                        button[data-testid*="publish"],
                        button[data-testid*="action"],
                        [data-testid="pane-footer"] button {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            transform: scale(1.6) !important;
                            padding: 15px 30px !important;
                            font-weight: 900 !important;
                            border-radius: 10px !important;
                            box-shadow: 0 8px 25px rgba(255, 77, 77, 0.5) !important;
                            margin: 20px !important;
                            opacity: 1 !important; /* Force visibility even if disabled */
                        }

                        button[data-testid*="publish"] *, 
                        [data-testid="pane-footer"] button * {
                            color: white !important;
                            stroke: white !important;
                        }

                        /* 2. PANE HEADER ICONS (Link, Close, Comment) - BRUTAL FORCE */
                        [data-testid="pane-header"] button,
                        [data-testid="pane-header"] [role="button"],
                        [data-testid="default-pane-header"] button {
                            background-color: #ff4d4d !important;
                            color: white !important;
                            transform: scale(1.8) !important;
                            margin: 0 25px !important;
                            border-radius: 8px !important;
                            width: 45px !important;
                            height: 45px !important;
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            box-shadow: 0 4px 15px rgba(255, 77, 77, 0.4) !important;
                        }

                        [data-testid="pane-header"] button svg,
                        [data-testid="default-pane-header"] button svg {
                            transform: scale(1.4) !important;
                            stroke: white !important;
                            color: white !important;
                        }

                        /* 3. SIDEBAR AND GENERAL VISIBILITY */
                        [data-testid="panes-column"] {
                            min-width: 450px !important;
                        }

                        /* Enlarge all icons by default */
                        svg {
                            transform: scale(1.4) !important;
                        }

                        /* Form label visibility */
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
