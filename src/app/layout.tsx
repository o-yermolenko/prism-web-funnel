import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prism - Your mind. Finally unfiltered.',
  description: 'A space where you don\'t have to translate yourself. Dump your raw thoughts, get clarity.',
  keywords: ['clarity', 'thoughts', 'mind', 'unfiltered', 'understanding'],
  themeColor: '#000000',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-prism-black`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
