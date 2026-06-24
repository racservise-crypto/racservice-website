import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'R-AC Service | Dinginnya Pasti, Kerjanya Rapi',
  description: 'Layanan AC profesional di Gresik, Surabaya, dan Sidoarjo. Teknisi berpengalaman, harga terjangkau, dan garansi pengerjaan.',
  keywords: 'AC service, perbaikan AC, cuci AC, freon AC, Gresik, Surabaya, Sidoarjo',
  openGraph: {
    title: 'R-AC Service | Dinginnya Pasti, Kerjanya Rapi',
    description: 'Layanan AC profesional dengan teknisi berpengalaman',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#0284c7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${poppins.variable} font-poppins bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
