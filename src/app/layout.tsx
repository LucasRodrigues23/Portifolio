import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import '../scss/main.scss'
import styles from './styles.module.scss'
import NavBar from '@/components/navBar'

export const metadata: Metadata = {
  title: 'Lucas Rodrigues',
  description: 'Seja bem vindo ao meu portifólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.bgAnimation}>
          <NavBar />
          {children}
        </div>
      </body>
    </html >
  )
}
