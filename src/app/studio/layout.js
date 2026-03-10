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
                
                /* High visibility scaling */
                :root { 
                    font-size: 145% !important; 
                }

                @media (max-width: 768px) {
                    :root { 
                        font-size: 120% !important; 
                    }
                }

                /* Enlarge icons but keep layout stable */
                svg {
                    transform: scale(1.2);
                }

                /* Header layout stability */
                [data-testid="studio-header"] {
                    height: 70px !important;
                }

                /* Give buttons enough breathing room without breaking hitboxes */
                [data-testid="studio-header"] button {
                    margin: 0 10px !important;
                }

                /* Fix for the Create button overlap */
                [data-testid="studio-logo"] {
                    margin-right: 30px !important;
                    z-index: 1;
                }
                
                button[data-testid="new-document-button"] {
                    z-index: 10 !important;
                    position: relative;
                }

                /* Sidebar width for large scale */
                [data-testid="panes-column"] {
                    min-width: 380px !important;
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
