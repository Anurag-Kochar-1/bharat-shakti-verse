import './globals.css'
import { useEffect, useContext } from "react"
import NavBar from '@/components/NavBar/NavBar'
import { Montserrat, Open_Sans } from "next/font/google"
import { onAuthChanged } from '@/service/Auth/AuthService'
import AppContextProvider, { AppContext, IAppContextType } from '@/context/AppContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebaseConfig'


export const metadata = {
  title: 'Combat Campus',
  description: 'Generated by create next app',
}

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (

    <html lang="en" className={` ${montserrat.variable} ${open_sans.variable} `
    }>
      <body>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html >
  )
}
