import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const DesktopNav = () => {
  return (
    <nav className='w-full flex justify-center items-center flex-col sticky top-0 z-10 h-55 bg-black'>
      
      {/* w-full flex justify-around items-center font-kaushan text-sky-600 text-xl font-bold text-md p-2 */}
{/* 
      lg:flex-row lg:text-center lg:w-full lg:items-center lg:justify-around */}

      <ul className='hidden lg:flex w-full flex flex-row text-sky-600 font-kaushan text-lg font-bold p-2 items-center justify-around'>
         <Link href="/"><Image src="/images/logowhite.png" alt="site logo" width={90} height={80}/></Link>
        {/* search */}
        <li className='flex text-white w-1/6 justify-around lg: mb-0'>
          <a href="www.instagram.com" className='hover:text-purple-400'><FaInstagram /></a>
          <a href='www.facebook.com' className='hover:text-sky-500'><FaFacebook /></a>
        </li>
        <Link href="/">Start</Link>
        <Link href="/coctails">Mikser Koktaili</Link>
        <Link href="/drinkbar">Oferta Drink Bar</Link>
        <Link href="/">O nas</Link>
        <Link href="/">Kontakt</Link>
      </ul>
    </nav>
  )
}

export default DesktopNav