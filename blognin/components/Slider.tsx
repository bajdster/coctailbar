'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import slider from "../public/images/slider/1.jpg"

const Slider: React.FC = () => {

const [actualImage, setActualImage] = useState<number>(1);

useEffect(()=>
{
  const sliderTimer = setInterval(()=>
  {
    setActualImage((prev)=>
    {
      if(prev >= 4)
      {
        return 1
      }
      return prev+1;
    })
  }, 3000)

  return ()=>
  {
    clearInterval(sliderTimer)
  }
}, [])


const images = slider
console.log(images)

  return (

    <div className='w-full overflow-hidden flex justify-center lg:rounded-full lg:w-96 lg:h-96'>
        <Image src={`/images/slider/${actualImage}.jpg`} alt={`slide ${actualImage}`}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '500px'}} />
       </div>

  );
};

export default Slider;
