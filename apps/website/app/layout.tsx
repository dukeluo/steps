import '../styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'steps',
  description: 'Something I learned today',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="wireframe">
      <body>{children}</body>
    </html>
  )
}
