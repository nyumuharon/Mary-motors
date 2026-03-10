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
                
                /* High-visibility scaling */
                :root { 
                    font-size: 145% !important; 
                }

                @media (max-width: 768px) {
                    :root { 
                        font-size: 120% !important; 
                    }
                }

                /* Target icons and utility buttons in the top right to make them specifically larger */
                [data-testid="studio-header"] button,
                [data-testid="studio-header"] [role="button"] {
                    transform: scale(1.25);
                    margin: 0 5px;
                }

                /* Ensure the user profile and tasks text are visible */
                [data-testid="studio-header"] span {
                    font-weight: 600 !important;
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
