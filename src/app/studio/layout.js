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
                
                /* Reset scaling to standard values to prevent header overcrowding */
                :root { 
                    font-size: 100%; 
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
