import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets:  ['latin'],
  weight:   ['700', '800'],
  variable: '--font-syne',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['400', '500'],
  variable: '--font-dm-sans',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       'One Sentient — We Build What the Future Runs On',
  description: 'One Sentient is a freelance tech studio and product builder working in AI, Cybersecurity, and Fintech. Products include Finora, Apex, and Lucent Labs.',
  metadataBase: new URL('https://one-sentient.one'),
  openGraph: {
    title:       'One Sentient — We Build What the Future Runs On',
    description: 'Freelance tech studio + product builder. AI · Cybersecurity · Fintech.',
    url:         'https://one-sentient.one',
    siteName:    'One Sentient',
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'One Sentient',
    description: 'Freelance tech studio + product builder.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-void text-text antialiased">
        {children}
      </body>
    </html>
  )
}
