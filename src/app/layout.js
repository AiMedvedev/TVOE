import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TVOЁ',
  description: 'Киносервис для тебя',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;