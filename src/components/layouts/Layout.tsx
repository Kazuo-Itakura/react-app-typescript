import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'
import { ReactNode } from 'react'

import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ['latin'],
  display: "swap",
  variable: "--font-notojp",
})

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`${notoSansJP.variable}`}>
      <Header />
      <div className='pt-28'>
        <Sidebar />
        <main className="flex-1 p-4 sm:ml-64">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
