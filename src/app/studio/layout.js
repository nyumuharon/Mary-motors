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

                /* FORCE RED BUTTON STYLE FOR ALL ACTION BUTTONS (Publish, etc) */
                button[data-testid*="action"],
                button[data-testid*="publish"],
                [data-testid="pane-footer"] button {
                    background-color: #ff4d4d !important;
                    color: #fff !important;
                    border: none !important;
                    transform: scale(1.5) !important;
                    padding: 15px 30px !important;
                    font-weight: 900 !important;
                    border-radius: 8px !important;
                    box-shadow: 0 6px 20px rgba(255, 77, 77, 0.4) !important;
                    cursor: pointer !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }

                /* Ensure text/icons inside these buttons are white */
                button[data-testid*="action"] *,
                button[data-testid*="publish"] *,
                [data-testid="pane-footer"] button * {
                    color: #fff !important;
                    stroke: #fff !important;
                }

                /* FORCE RED BUTTON STYLE FOR HEADER UTILITY ICONS (Link, Close, etc) */
                [data-testid="pane-header"] button,
                [data-testid="pane-header"] [role="button"] {
                    background-color: #ff4d4d !important;
                    color: #fff !important;
                    transform: scale(1.6) !important;
                    margin: 0 20px !important;
                    border-radius: 8px !important;
                    width: 45px !important;
                    height: 45px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    box-shadow: 0 4px 12px rgba(255, 77, 77, 0.3) !important;
                }

                [data-testid="pane-header"] button svg {
                    transform: scale(1.3) !important;
                    stroke: #fff !important;
                    color: #fff !important;
                }

                /* Enlarge all standard icons for general visibility */
                svg {
                    transform: scale(1.3);
                }

                /* Header layout stability */
                [data-testid="studio-header"] {
                    height: 85px !important;
                }

                /* Increase sidebar width to prevent truncation */
                [data-testid="panes-column"] {
                    min-width: 420px !important;
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
