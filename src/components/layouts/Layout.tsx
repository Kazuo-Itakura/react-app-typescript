import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'
import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className='pt-28'>
          <Sidebar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
