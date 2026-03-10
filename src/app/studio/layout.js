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

                /* ENLARGE AND RED STYLE FOR ACTION BUTTONS (Publish, etc) */
                [data-testid="pane-footer"] button,
                button[data-testid="publish-button"],
                button[data-testid^="action-"] {
                    background-color: #ff4d4d !important;
                    color: white !important;
                    transform: scale(1.4) !important;
                    padding: 12px 24px !important;
                    font-weight: 800 !important;
                    border-radius: 8px !important;
                    margin: 15px !important;
                    box-shadow: 0 4px 12px rgba(255, 77, 77, 0.3) !important;
                }

                [data-testid="pane-footer"] button svg,
                button[data-testid="publish-button"] svg {
                    stroke: white !important;
                }

                /* ENLARGE AND RED STYLE FOR PANE HEADER ICONS (Link, Close, etc) */
                [data-testid="pane-header"] button {
                    background-color: #ff4d4d !important;
                    color: white !important;
                    transform: scale(1.5) !important;
                    margin: 0 15px !important;
                    border-radius: 6px !important;
                    width: 40px !important;
                    height: 40px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }

                [data-testid="pane-header"] button svg {
                    transform: scale(1.2) !important;
                    stroke: white !important;
                    color: white !important;
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
