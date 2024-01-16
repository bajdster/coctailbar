import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const MainNav = () => {
  return (
    <nav className='w-full flex justify-center items-center flex-col sticky top-0 z-10 h-55 bg-white'>
      <header className='flex items-center justify-center w-full relative'>
        <div className='flex justify-around items-center absolute left-10 w-20 h-20  text-2xl'>
          <FaInstagram />
          <FaFacebook />
        </div>
        <Link href="/"><Image src="/images/logo.png" alt="site logo" width={160} height={160}/></Link>
        {/* search */}
      </header>
      
      <ul className='w-full flex justify-around font-kaushan text-sky-600 text-xl font-bold text-md mb-4'>
        <Link href="/">Start</Link>
        <Link href="/coctails">Mikser Koktaili</Link>
        <Link href="/">Oferta Drink Bar</Link>
        <Link href="/">O nas</Link>
        <Link href="/">Kontakt</Link>
      </ul>
    </nav>
  )
}

export default MainNav