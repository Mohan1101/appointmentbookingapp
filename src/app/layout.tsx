import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/Header'
import Banner from '@/components/banner'
import {Provide} from '@/components/provide'


export const metadata = {
  title: 'Appointment Booking App',
  description: 'Page description',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-white text-black tracking-tight`}>
      <Provide>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        
        </div>
        </Provide>
      </body>
    </html>
  )
}
 