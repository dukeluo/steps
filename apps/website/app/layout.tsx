import '@/styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'steps',
  description: 'Something I learned today',
  keywords: 'developer growth, frontend development, software design patterns, react, typescript',
  authors: { url: 'https://shaiwang.life', name: 'Huan Luo' },
  openGraph: {
    title: 'steps',
    description: 'Something I learned today',
    url: 'https://steps.shaiwang.life',
    type: 'website',
    images: 'https://avatars.githubusercontent.com/u/26000789',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'steps',
    description: 'Something I learned today',
    creator: '@ihuanluo',
    images: 'https://avatars.githubusercontent.com/u/26000789',
  },
  robots: 'index, follow',
  metadataBase: new URL('https://steps.shaiwang.life'),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="wireframe">
      <body className="min-h-screen">
        <main className="mx-auto max-w-sm px-4 py-20 md:max-w-3xl lg:max-w-4xl">{children}</main>
      </body>
    </html>
  )
}
