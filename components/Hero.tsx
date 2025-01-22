import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 
    xl:flex-row border
    '>
      <div className='hero-map' />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 '>
        <img 
          src="/camp.svg" 
          alt="camp" 
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] lg:w-[50px]'
        />
        <h1 className='bold-52 lg:bold-88 '>
          Putuk Truno Camp Area
        </h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          We want to be in each of your journey seeking the satisfaction of seeing the incorruptible
           beauty of nature. We can help you on an adventure across the world in just one app.
        </p>
        <div className='my-11 flex flex-wrap gap-5 '>
          <div className='flex items-center gap-2 '>
            {Array(5).fill(1).map((_, index) => (
              <img 
                src="/star.svg" 
                alt="star"
                key={index} 
                className=''
                height={24}
                width={24}
              />
            ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>
            198k
            <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
          </p>
        </div>

        <div className='flex w-full sm:flex-row gap-3'>
            <Button 
              type='button'
              variant='btn_green'
              title="Download App"
            />

            <Button 
              type='button'
              variant='btn_white_text'
              title="How We Work?"
              icon="/play.svg"
            />
        </div>
      </div>
      <div className='relative flex flex-1 items-start'>
          <div className='relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>

            <div className='flex flex-col'>
              <div className='flexBetween'>
                <p className='regular-16 text-gray-20'>Location</p>
                <Image 
                  src="/close.svg"
                  alt="close"
                  width={24}
                  height={24}
                />
              </div>
              <p className='text-white bold-20'>Aguas Calientes</p>
            </div>

            <div className='flexBetween'>
              <div className='flex flex-col'>
                <p className='regular-16 block text-gray-20'>Distance</p>
                <p className='bold-20 text-white'>173.28 miles</p>
              </div>

              <div className='flex flex-col'>
                <p className='regular-16 block text-gray-20'>Elevation</p>
                <p className='bold-20 text-white'>2.040 km</p>
              </div>
            </div>

            
          </div>
      </div>
    </section>
  )
}

export default Hero