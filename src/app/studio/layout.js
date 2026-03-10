export const metadata = {
    title: 'Mary Motors Administration',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
}

export default function StudioLayout({ children }) {
    return (
        <div id="studio-root" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100dvh',
            zIndex: 999999,
            backgroundColor: '#ffffff',
            overflow: 'hidden',
        }}>
            <style suppressHydrationWarning>{`
                body { 
                    margin: 0; 
                    padding: 0; 
                    overflow: hidden; 
                    background: #ffffff;
                }
                
                /* Max visibility scaling */
                :root { 
                    font-size: 155% !important; 
                }

                @media (max-width: 768px) {
                    :root { 
                        font-size: 130% !important; 
                    }
                }

                /* Enlarge all icons across the studio */
                svg {
                    transform: scale(1.35);
                }

                /* Header specific overrides */
                [data-testid="studio-header"] {
                    height: 80px !important;
                }

                [data-testid="studio-header"] button,
                [data-testid="studio-header"] [role="button"] {
                    transform: scale(1.4) !important;
                    margin: 0 12px !important;
                }

                /* Increase sidebar width to prevent "ADD NEW VEHICL..." truncation */
                [data-testid="panes-column"] {
                    min-width: 400px !important;
                }

                /* Make sidebar items larger and more clickable */
                [data-testid="sidebar-item"] {
                    padding: 18px 12px !important;
                }

                /* Ensure form labels and text are bold and clear */
                label {
                    font-weight: 700 !important;
                    font-size: 1.1rem !important;
                }

                /* Ensure the logo area doesn't push out other elements */
                [data-testid="studio-logo"] {
                    min-width: auto !important;
                }
                
                /* Ensure buttons have enough space and are not artificially enlarged */
                button[data-testid="new-document-button"] {
                    transform: none;
                    margin-left: 0;
                }
            `}</style>
            {children}
        </div>
    )
}
