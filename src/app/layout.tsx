import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prism - Your mind. Finally unfiltered.',
  description: 'A space where you don\'t have to translate yourself. Dump your raw thoughts, get clarity.',
  keywords: ['clarity', 'thoughts', 'mind', 'unfiltered', 'understanding'],
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-prism-black">
      <body className="font-refined antialiased">
        {children}
      </body>
    </html>
  )
}

