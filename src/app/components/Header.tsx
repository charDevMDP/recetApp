import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div className='py-2 bg-slate-300'  >
        <div>
          <Link href='/'>
            <h1 className='text-gray-900 font-bold text-xl text-center'>
              RECETAPP
            </h1>
          </Link>
        </div>
      </div>
  )
}

export default Header