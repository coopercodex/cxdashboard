import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './components/Provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CX Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
