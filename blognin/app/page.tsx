import Image from 'next/image'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <Slider/>

        <div className='w-full p-6 mt-2'>
          <h1 className='text-4xl mb-8 font-kaushan text-purple-500 text-center'>Sztuka Barmańska</h1>

          <div className='flex justify-evenly relative'>
            <Image src="/images/pineapple.png" alt="pineapple" width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -100,position:'absolute', left:'200px'}}/>
            <div className='w-3/4 flex items-center text-lg font-bold'> 
              <p className='p-6'>W naszym blogu podzielimy się z Tobą sekretami najlepszych mikstur, opowiemy historie o kultowych drinkach i zainspirujemy Cię do własnych eksperymentów w świecie smaków.
              </p>
              <p className='p-6'>Każdy koktajl to nie tylko zestaw składników, ale opowieść o miejscach, kulturze i niezliczonych chwilach radości.</p>

              <p className='p-6'>Nasi eksperci od mieszania napojów przygotowali dla Ciebie unikalne przepisy, które podbiją podniebienie i sprawią, że Twoje spotkania ze znajomymi nabiorą zupełnie nowego wymiaru. Bez względu na to, czy jesteś doświadczonym barmanem czy też dopiero zaczynasz swoją przygodę z miksowaniem, nasze przepisy są dostosowane do różnych poziomów umiejętności.</p>
            </div>
          
            <Image src="/images/drink.png" alt="drink" width={200} height={200}/>

            <Image src='/images/cicrle.gif' alt='circle1' width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -120,position:'absolute', right:'100px'}}/>
          </div>
         
        </div>

        <div className='w-full p-6 mt-2'>

          <div className='flex justify-evenly relative'>
           
            <div className='w-3/4 flex items-center text-lg font-bold'> 
            <Image src="/images/shaker.png" alt="shaker" width={250} height={250}/>
            <Image src='/images/circle2.gif' alt='circle1' width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -120,position:'absolute', left:'100px'}}/>


              <p className='p-6 ml-5'>Przekop się przez zbiory klasycznych koktajli, eksperymentalnych kompozycji i owocowych eksplozji smaków. Znajdziesz tu również wskazówki dotyczące technik mieszania, odpowiednich narzędzi i najlepszych składników, dzięki którym stworzysz napoje godne najbardziej prestiżowych barów.</p>
            </div>
          
            
            <Image src="/images/lemon.png" alt="pineapple" width={0} height={0} sizes="100vw" style={{ width: '250px', height: '250px', zIndex: -100,position:'absolute', right:'200px'}}/>
          </div>
         
        </div>
    </main>
  )
}


