import NavBar from '@/components/navbar/_navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/_footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Du lịch Anh Hiếu',
  description: 'Generated by Phạm Tiến Đạt',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
