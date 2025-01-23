import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flex flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24  '>
        <Image 
          src="/camp.svg"
          alt="camp"
          height={50}
          width={50}
        />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50 '>We are here for you.</p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10 '>
          <h2 className='bold-40 lg:bold-55 xl:max-w-[390px] '>Guide You To Easy Path</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Only with the hilink application you will no longer get lost and get lost again, because we
             already support the offline maps when there is no internet connection in the field. Invite your 
             friends, relatives and loved ones to have fun in the Wilderness through the valley and reach 
             the top of the mountain. 
          </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full '>
        <Image
          src="/boat.png"
          alt="boat"
          height={580}
          width={1440}
          className='w-full object-center object-cover 2xl:rounded-5xl '   
        />
        <div className='absolute flex bg-white py-8 pr-7 pl-5 gap-3 rounded-3xl border shadow-md md:left-[5%]
        lg:top-20'>
          <Image 
            src="/meter.svg"
            alt="meter"
            height={158}
            width={16}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full '>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
                
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              
              <p className='regular-16 text-gray-20'>Start tack</p>
              <p className='bold-20 mt-2 whitespace-nowrap '>Wonorejo Pasuan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide