import Image from 'next/image'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <Slider/>

         <div className='w-full p-6 mt-2'>
          <h1 className='text-4xl mb-8 font-kaushan text-purple-500 text-center'>Sztuka Barmańska</h1>

         <p>W naszym blogu podzielimy się z Tobą sekretami najlepszych mikstur, opowiemy historie o kultowych drinkach i zainspirujemy Cię do własnych eksperymentów w świecie smaków.</p>
         <p>Każdy koktajl to nie tylko zestaw składników, ale opowieść o miejscach, kulturze i niezliczonych chwilach radości.</p>
        </div>
    </main>
  )
}


