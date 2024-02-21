import React from 'react'
import Image from 'next/image'
import { getCoctailThumbnails } from '@/lib/coctailsThumbnail'
import Search from '@/components/Search'
import Link from 'next/link'


const page = async () => {


  const coctailThumbnails = await getCoctailThumbnails()

  const coctailNodes = coctailThumbnails.posts.edges


  const coctails = coctailNodes.map(coctail =>{
    return {
    coctailUrl: coctail.node.recipe.image.sourceUrl,
    coctailTitle: coctail.node.recipe.title
    } 
  })

  console.log(coctails)


  return (
    <div className="flex min-h-screen flex-col items-center">

      <Search coctails={coctails}/>

      <div className='bg-white w-full  flex flex-wrap items-center justify-center'>

      {coctails.map(coctail =>
        {
          return <p key={coctail.coctailTitle} className='flex flex-col items-center font-kaushan hover:scale-110 cursor-pointer transition-transform'>
            <Link className='text-center' href={`/coctails/${coctail.coctailTitle}`}>
            <Image src={coctail.coctailUrl} alt={coctail.coctailTitle} width={200} height={200} style={{ filter: 'drop-shadow(3px 1px 10px #000000)' }}/>
            {coctail.coctailTitle}
            </Link>
            </p>
        })}

      </div>
    </div>
  )
}

export default page