export const metadata = {
    title: 'Mary Motors CMS',
    description: 'Content Management System for Mary Motors',
}

export default function StudioLayout({ children }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100dvh',
            zIndex: 999999,
            backgroundColor: '#111',
            overflow: 'hidden'
        }}>
            <style suppressHydrationWarning>{`
        body { margin: 0; padding: 0; overflow: hidden; }
      `}</style>
            {children}
        </div>
    )
}
