import Image from 'next/image'
import Slider from '@/components/Slider'
import Link from 'next/link'
import VideoBanner from '@/components/VideoBanner'
import LinkButton from '@/components/LinkButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className='w-full h-1/2 relative'>
          <Image src="/images/maintheme3.png" alt="maintheme" width={0} height={0} sizes="100vw" quality={100} style={{ width: '100%', height: '70%'}}/>
          <Image src="/images/logowhite.png" alt="logo" width={0} height={0} sizes="100vw" style={{ width: '400px', height: '400px', position: 'absolute', top:'50px', left:'50%', transform:'translate(-50%)'}}/>
        </div>

        <div className='w-full p-6 mt-2'>
          <h1 className='text-6xl mb-8 font-kaushan text-sky-600 text-center'>Sztuka Barmańska</h1>

          <div className='flex justify-evenly relative'>
            <Image src="/images/pineapple.png" alt="pineapple" width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -100,position:'absolute', left:'200px', transform: 'rotate(-15deg)'}}/>
            <div className='w-3/4 flex items-center text-lg font-bold'> 
              <p className='p-6'>W naszym blogu podzielimy się z Tobą sekretami najlepszych mikstur, opowiemy historie o kultowych drinkach i zainspirujemy Cię do <span className='text-purple-500 font-bold'>własnych eksperymentów</span> w świecie smaków.
              </p>

              <p className='p-6'>Nasi eksperci od mieszania napojów przygotowali dla Ciebie <span className='text-purple-500 font-bold'>unikalne przepisy</span>, które podbiją podniebienie i sprawią, że Twoje spotkania ze znajomymi nabiorą zupełnie nowego wymiaru. Bez względu na to, czy jesteś doświadczonym barmanem czy też dopiero zaczynasz swoją przygodę z miksowaniem, nasze przepisy są dostosowane do różnych poziomów umiejętności.</p>
            </div>
          
            <Image src="/images/drink.png" alt="drink" width={200} height={200}/>

            <Image src='/images/cicrle.gif' alt='circle1' width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -120,position:'absolute', right:'100px'}}/>
          </div>
         
        </div>

        <div className='w-full p-6 mt-6 flex justify-center flex-col items-center'>

          <div className='flex justify-evenly relative'>
           
            <div className='w-3/4 flex items-center text-lg font-bold'> 
              <Image src="/images/shaker.png" alt="shaker" width={250} height={250}/>
              <Image src='/images/circle2.gif' alt='circle1' width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -120,position:'absolute', left:'100px'}}/>


              <div className='flex flex-col'> 
                <p className='p-6 ml-5'>Przekop się przez zbiory klasycznych koktajli, eksperymentalnych kompozycji i owocowych eksplozji smaków. Znajdziesz tu również wskazówki dotyczące technik mieszania, odpowiednich narzędzi i najlepszych składników, dzięki którym stworzysz napoje godne <span className='text-purple-500 font-bold'>najbardziej prestiżowych barów.</span></p>
                <LinkButton text="Chcę poznać przepisy na najlepsze drinki!"/>
              </div>
            </div>
          

              <Image src="/images/lemon.png" alt="pineapple" width={0} height={0} sizes="100vw" style={{ width: '250px', height: '250px', zIndex: -100,position:'absolute', right:'200px'}}/>
             

       

           
          </div>
        </div>

        {/* <div className='w-full h-96'>
          <VideoBanner src="/images/animated.mp4"/>
        </div> */}

      <section className='flex w-full mt-12 p-8'>
        <div className='w-1/3'>  <Slider/></div>
     
       <div className='w-2/3 p-8 font-bold  flex flex-col'>
        <h1 className='text-6xl mb-8 font-kaushan text-sky-600 text-center'>Drink bar na wesele</h1>

        <p className='text-lg'>Zapewniamy wyjątkowe doświadczenie barmańskie, które wzbogaci każdą okazję, od wesel po prywatne imprezy firmowe. Nasz zespół doświadczonych barmanów jest gotów dostarczyć <span className='text-purple-500 font-bold'>niezapomniane wrażenia smakowe</span> dla Twojego wydarzenia.</p>

        

        <h3 className='mt-8 text-xl font-extrabold'>Skontaktuj się z Nami, a My Stworzymy Niepowtarzalne Menu Drinków Dla Ciebie!
          Zapraszamy do kontaktu z naszym zespołem, aby omówić szczegóły i stworzyć personalizowaną ofertę drinków na Twój wyjątkowy event. Daj nam szansę uczynienia Twojego wydarzenia jeszcze bardziej wyjątkowym i smakowitym!</h3>
         
          <div className='flex mt-8 w-full justify-center'>
            <LinkButton text="Oferta Drink Bar"/>
            <LinkButton text="Kontakt"/>
          </div>
       </div>
      </section>
    </main>
  )
}


