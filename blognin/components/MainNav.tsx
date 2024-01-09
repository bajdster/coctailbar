import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MainNav = () => {
  return (
    <nav className='w-full flex justify-center items-center flex-col'>
      <Link href="/"><Image src="/images/logo.png" alt="site logo" width={230} height={230}/></Link>
      
      <ul className='w-full flex justify-around font-kaushan text-sky-600 text-xl font-bold'>
        <Link href="/">Start</Link>
        <Link href="/coctails">Koktaile</Link>
        <Link href="/">Archiwum</Link>
        <Link href="/">Drink Bar</Link>
        <Link href="/">Kontakt</Link>
      </ul>
    </nav>
  )
}

export default MainNav