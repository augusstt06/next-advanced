'use client'

import React from 'react'

import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class">
          <header style={{ background: 'lightblue', padding: '1rem' }}>
            <p>Header</p>
          </header>
          {children}
          <footer style={{ background: 'gray', padding: '1rem' }}>
            Footer
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
