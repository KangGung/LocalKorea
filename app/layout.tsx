import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local Korea',
  description: 'Discover and book local experiences in Korea',
  manifest: '/manifest.json',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'theme-color': '#111111'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Simple service worker registration */}
        <script dangerouslySetInnerHTML={{__html: `
          if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js').catch(() => {})
            })
          }
        `}} />
      </body>
    </html>
  )
}
