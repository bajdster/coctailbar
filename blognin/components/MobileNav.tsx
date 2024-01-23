'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

const MobileNav = () => {


    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)

    const openMenuHandler = () =>
    {
        setIsMenuOpen((prev)=>
        {
            return !prev;
        })
    }

  return (
    <nav className='w-full flex justify-center items-center flex-col sticky top-0 z-10 h-55 bg-black'>
       <Link href="/"><Image src="/images/logowhite.png" alt="site logo" width={100} height={100} className='lg:hidden'/></Link>

       <div className='flex text-white text-xl w-1/6 justify-around mb-8 absolute right-6'>
          <a href="www.instagram.com" className='hover:text-purple-400'><FaInstagram /></a>
          <a href='www.facebook.com' className='hover:text-sky-500'><FaFacebook /></a>
        </div>

      {isMenuOpen && <ul className='w-full flex flex-col text-sky-600 font-kaushan text-lg font-bold p-2 items-center lg:hidden'>
        
        {/* search */}
        <Link href="/">Start</Link>
        <Link href="/coctails">Mikser Koktaili</Link>
        <Link href="/drinkbar">Oferta Drink Bar</Link>
        <Link href="/">O nas</Link>
        <Link href="/">Kontakt</Link>
      </ul>}

      <button onClick={openMenuHandler} className='text-white text-xl mb-2 lg:hidden'>
        {!isMenuOpen ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
        </button>
    </nav>
  )
}

export default MobileNav

      {/* w-full flex justify-around items-center font-kaushan text-sky-600 text-xl font-bold text-md p-2 */}
{/* 
      lg:flex-row lg:text-center lg:w-full lg:items-center lg:justify-around */}