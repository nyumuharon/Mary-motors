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
            backgroundColor: '#fff',
            overflow: 'hidden',
            fontSize: '18px' // Global scale up for all REM units
        }}>
            <style suppressHydrationWarning>{`
                body { margin: 0; padding: 0; overflow: hidden; background: #fff; }
                /* Force Sanity Studio UI elements to scale up */
                :root { font-size: 110% !important; }
                @media (max-width: 768px) {
                    :root { font-size: 115% !important; }
                }
            `}</style>
            {children}
        </div>
    )
}
