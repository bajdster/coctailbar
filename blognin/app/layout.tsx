import type { Metadata } from 'next'
import { Inter, Kaushan_Script } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/MainNav'



const inter = Inter({ subsets: ['latin'] })

const kaushan = Kaushan_Script({
  subsets:['latin'],
  weight:['400'],
  variable: '--font-kaushan'

})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kaushan.variable}>
        <MainNav/>
        {children}
        </body>
    </html>
  )
}
