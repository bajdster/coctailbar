import Image from 'next/image'
import Slider from '@/components/Slider'
import Link from 'next/link'
import VideoBanner from '@/components/VideoBanner'
import LinkButton from '@/components/LinkButton'
import { getCoctailThumbnails } from '@/lib/coctailsThumbnail'



export default async function Home() {


  const coctailThumbnails = await getCoctailThumbnails()

  const coctailNodes = coctailThumbnails.posts.edges

  
  const coctails = coctailNodes.map(coctail =>{
    return {
      coctailUrl: coctail.node.recipe.image.sourceUrl,
      coctailTitle: coctail.node.recipe.title
    }
  })


  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className='w-full h-1/2 relative'>
          <Image src="/images/maintheme5.png" alt="maintheme" width={0} height={0} sizes="100vw" quality={100} style={{ width: '100%', height: '70%'}}/>
          <Image src="/images/logowhite.png" alt="logo" width={0} height={0} sizes="100vw" style={{ width: '400px', height: '400px', position: 'absolute', top:'50px', left:'50%', transform:'translate(-50%)'}} className='hidden lg:flex'/>
        </div>

       <div className='bg-white w-full h-screen flex items-center justify-center flex-wrap'>

       {/* <h1 className='text-4xl mb-8 mt-10 font-kaushan text-sky-600 text-center'>Wybierz drink dopasowany do siebie</h1> */}

        {coctails.map(coctail =>
          {
            return <p key={coctail.coctailTitle} className='flex flex-col items-center font-kaushan hover:scale-110 cursor-pointer transition-transform'>
              <Link className="text-center" href={`coctails/${coctail.coctailTitle}`}>
              <Image src={coctail.coctailUrl} alt={coctail.coctailTitle} width={200} height={200} style={{ filter: 'drop-shadow(3px 1px 10px #000000)' }}/>
              {coctail.coctailTitle}
              </Link>
              </p>
          })}

       </div>
    </main>
  )
}


//https://bajdster.cfolks.pl/wp-admin/