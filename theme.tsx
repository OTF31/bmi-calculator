'use client'

import { MantineThemeOverride, createTheme } from '@mantine/core'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
})

const theme: MantineThemeOverride = createTheme({
  breakpoints: { xs: '23.4375em', sm: '48em', md: '62em', lg: '75em', xl: '90em' },
  fontFamily: inter.style.fontFamily,
  colors: {
    retroBlue: [
      '#EBEFFE',
      '#D6DFFD',
      '#C2CFFC',
      '#AEBFFB',
      '#859FFA',
      '#5D7FF8',
      '#345FF6',
      '#2A4CC5',
      '#1F3994',
      '#152662',
    ],
    crowBlack: [
      '#E9EBED',
      '#D3D6DA',
      '#BEC2C8',
      '#A8ADB5',
      '#7C8591',
      '#515C6C',
      '#253347',
      '#1E2939',
      '#161F2B',
      '#0F141C',
    ],
    sausalitoPort: [
      '#EFF1F3',
      '#DFE2E7',
      '#CFD4DA',
      '#BFC5CE',
      '#9EA8B6',
      '#7E8B9D',
      '#5E6E85',
      '#4B586A',
      '#384250',
      '#262C35',
    ],
    inuitBlue: [
      '#FBFCFD',
      '#F7F9FA',
      '#F3F6F8',
      '#EFF3F5',
      '#E8EEF1',
      '#E0E8EC',
      '#D8E2E7',
      '#ADB5B9',
      '#82888B',
      '#565A5C',
    ],
  },
})

export { theme }
