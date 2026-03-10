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
                
                /* GLOBAL SCALE OVERRIDE */
                /* This forces Sanity's REM-based UI to enlarge by 25% */
                :root { 
                    font-size: 130% !important; 
                }

                @media (max-width: 768px) {
                    :root { 
                        font-size: 140% !important; 
                    }
                }

                /* Fix for button truncation */
                [data-testid="studio-logo"] {
                    min-width: 250px !important;
                }
                
                button[data-testid="new-document-button"] {
                    transform: scale(1.2);
                    margin-left: 20px;
                }
            `}</style>
            {children}
        </div>
    )
}
