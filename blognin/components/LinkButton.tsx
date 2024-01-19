import React from 'react'
import Link from 'next/link'

const LinkButton: React.FC<{text: string}> = ({text}) => {
  return (
    <Link href="/coctails" className='bg-sky-600 p-4 rounded-md font-kaushan text-white w-1/4 ml-10 text-center'>{text}</Link>
  )
}

export default LinkButton