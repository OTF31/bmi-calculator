import '@mantine/core/styles.css'

import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'

import { theme } from '../../theme'

export const metadata: Metadata = {
  title: 'BMI calculator',
  description: 'Body Mass Index calculator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='light'>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
