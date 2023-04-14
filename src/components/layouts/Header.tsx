import Image from 'next/image'
import Button from '@/components/elements/Button'

export default function Header() {
  return (
    <header className='h-28 block fixed w-full bg-white shadow-md z-50 flex items-center justify-between'>
      <div className=''>
        <Image className='px-5 py-3' src="/next.svg" alt="logo" width={250} height={250} />
      </div>
      <div className='w-2/5'>
        <form className="">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="検索する" required />
          </div>
        </form>
      </div>
      <div className=''>
        <Button />
      </div>
    </header>
  )
}
