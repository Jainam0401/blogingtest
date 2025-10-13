// app/styles/fonts.ts
import { Inter, Roboto,Lato } from 'next/font/google'
import localFont from 'next/font/local'

// Google Fonts
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
export const lato = Lato({
  weight: ["100" , "300" , "400" , "700" , "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

// Local font (Satoshi - download from satoshifont.com)
export const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})