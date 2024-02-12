import React from 'react'
import Image from 'next/image'
import LinkButton from '@/components/LinkButton'
import Slider from '@/components/Slider'

const DrinkBar = () => {
  return (
    <main>

<section className='flex w-full flex-col'>
  <h1 className='text-6xl mb-8 mt-10 font-kaushan text-sky-600 text-center'>Drink bar na wesele</h1>
  

 <div className='w-full font-bold flex flex-col lg:flex-row relative'>
  <div className='w-full lg:order-2 lg:flex lg:items-center lg:justify-center lg:w-1/3 lg:relative top-60 '>  <Slider/></div>
  

  <div className='flex justify-evenly relative p-2 lg:w-1/3 lg:order-1'>
      <Image src="/images/pineapple.png" alt="pineapple" width={0} height={0} sizes="100vw" style={{ width: '250px', height: '250px', zIndex: -100,position:'absolute', left:'200px', transform: 'rotate(-15deg)'}}/>
      <div className='w-3/4 flex items-center text-md font-bold'> 

        <p className='p-6'>Zapewniamy wyjątkowe doświadczenie barmańskie, które wzbogaci każdą okazję, od wesel po prywatne imprezy firmowe. Nasz zespół doświadczonych barmanów jest gotów dostarczyć <span className='text-purple-500 font-bold'>niezapomniane wrażenia smakowe</span> dla Twojego wydarzenia.</p>
      </div>
    
      <Image src="/images/drink.png" alt="drink" width={200} height={200}/>

      <Image src='/images/cicrle.gif' alt='circle1' width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -120,position:'absolute', right:'100px'}}/>
  </div>


  <div className='w-full mt-6 flex justify-center flex-col items-center lg:w-1/3 lg:order-3'>

    <div className='flex justify-evenly relative'>
     
      <div className='w-full flex items-center text-md font-bold'> 
        <Image src="/images/shaker.png" alt="shaker" width={200} height={200}/>
        <Image src='/images/circle2.gif' alt='circle1' width={0} height={0} sizes="100vw" style={{ width: '300px', height: '300px', zIndex: -120,position:'absolute', left:'100px'}}/>


        <div className='flex flex-col p-2'> 
          <p className='p-6 ml-5'>Skontaktuj się z Nami, a My Stworzymy Niepowtarzalne Menu Drinków Dla Ciebie!
          Zapraszamy do kontaktu z naszym zespołem, aby omówić szczegóły i stworzyć personalizowaną ofertę drinków na Twój wyjątkowy event. Daj nam szansę uczynienia Twojego wydarzenia jeszcze bardziej <span className='text-purple-500 font-bold'>wyjątkowym i smakowitym!</span></p>
        </div>
      </div>
    

        <Image src="/images/lemon.png" alt="pineapple" width={0} height={0} sizes="100vw" style={{ width: '250px', height: '250px', zIndex: -100,position:'absolute', right:'200px'}}/>
       
   
    </div>
  </div>
  

   
  
 </div>
    <div className='flex mt-8 w-full justify-center lg:hidden'>
      <LinkButton text="Kontakt"/>
    </div>
</section>



<div className='mt-60 p-4'>

  <div className='flex relative'>  
  <h3 className='font-bold absolute -top-20 left-1/2 -translate-x-1/2 text-xs bg-sky-600 p-4 w-32 h-32 flex items-center text-center rounded-full'>Różnorodność Drinków na Wesele</h3>
        <p className="p-6 pt-16 rounded border-2 border-black">Na dzień ślubu pragniemy stworzyć magiczny klimat, a nasze drinki są doskonałym uzupełnieniem tej atmosfery. Oferujemy szeroki wybór klasycznych i nowoczesnych koktajli, które zaspokoją różne gusta Twoich gości. Od eleganckich martini po świeże i owocowe mojito, nasz drink bar sprawi, że każdy moment będzie wyjątkowy.</p>
        </div>
  <div className='flex relative mt-32'>
    <h3 className='font-bold absolute -top-20 left-1/2 -translate-x-1/2 text-xs bg-sky-600 p-4 w-32 h-32 flex items-center text-center rounded-full'>Personalizowane Menu na Imprezy Firmowe</h3>
<p className="p-6 pt-16 rounded border-2 border-black">Dla imprez firmowych dostosowujemy nasze menu do unikalnych preferencji Twojej firmy. Zaskocz swoich współpracowników i klientów oryginalnymi drinkami, przygotowywanymi przez naszych umiejętnych barmanów. Każdy drink jest starannie dostosowany do charakteru wydarzenia, tworząc niezapomniane chwile networkingowe.</p>
</div>
  <div className='flex relative mt-32'>
    <h3 className='font-bold absolute -top-20 left-1/2 -translate-x-1/2 text-xs bg-sky-600 p-4 w-32 h-32 flex items-center text-center rounded-full'>Ekskluzywne Koktajle na Eventy VIP</h3>
<p className="p-6 pt-16 rounded border-2 border-black">Na wyjątkowe eventy VIP proponujemy ekskluzywne koktajle, które spełnią najbardziej wymagające gusta. Nasz drink bar obsługuje nawet najbardziej prestiżowe wydarzenia, oferując najwyższą jakość i profesjonalizm. Każdy detal jest starannie przemyślany, aby stworzyć wyrafinowaną oprawę dla Twoich gości.</p>
</div>
  <div className='flex relative mt-32'>
  <h3 className='font-bold absolute -top-20 left-1/2 -translate-x-1/2 text-xs bg-sky-600 p-4 w-32 h-32 flex items-center text-center rounded-full'>Obsługa Barmańska na Miejscu</h3>
<p className="p-6 pt-16 rounded border-2 border-black">Nasz zespół nie tylko przygotowuje doskonałe napoje, ale również dba o elegancką prezentację i obsługę. Barmani doskonale radzą sobie z utrzymaniem dynamicznego tempa podczas imprez, zachowując przy tym pełen profesjonalizm. Obsługa barmańska na miejscu to gwarancja, że Twoi goście będą cieszyć się każdym łykiem.</p>
  </div>
  <div className='flex relative mt-32'>

  <h3 className='font-bold absolute -top-20 left-1/2 -translate-x-1/2 text-xs bg-sky-600 p-4 w-32 h-32 flex items-center text-center rounded-full'>Dostosowane Opcje dla Każdego Eventu</h3>
<p className="p-6 pt-16 rounded border-2 border-black">Nie ważne, czy organizujesz kameralne przyjęcie czy wielką galę – nasza oferta drink barowa dostosowuje się do różnych rozmiarów i charakterów wydarzeń. Dzięki naszemu doświadczeniu i elastyczności możemy stworzyć idealne menu dla każdej okazji.</p>
  </div>
      







    </div>

  {/* <div className='w-full h-96'>
    <VideoBanner src="/images/animated.mp4"/>
  </div> */}



 

    </main>
  )
}

export default DrinkBar