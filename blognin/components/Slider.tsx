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
      if(prev >= 5)
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

    <div className='w-full flex items-center justify-center relative'>
      <video src='/images/slider/slider.mp4' autoPlay loop muted playsInline></video>
      <h1 className='absolute font-kaushan text-6xl text-white'>Tworzymy Magię w Każdym Łyku.</h1>
    </div>
      // <div className='w-full overflow-hidden flex justify-center'>
      //   <Image src={`/images/slider/${actualImage}.jpg`} alt={`slide ${actualImage}`}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '500px', borderRadius: '10px'}}  />
      // </div>
  );
};

export default Slider;
