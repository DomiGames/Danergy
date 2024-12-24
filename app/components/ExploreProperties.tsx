import React from 'react'
import Image from 'next/image'
import ExplorePropButton from './ExplorePropButton'

const ExploreProperties = () => {
  return (
    <div className='relative w-full h-96'>
        <Image src='/assets/PropertiesBg.jpg' alt='logo'  className='z-0' layout='fill'  />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10'>
            <h1 className='text-white text-4xl font-bold'>
                Shaping The Future of Renewable Energy
            </h1>
            <ExplorePropButton/>
        </div>

    </div>
  )
}

export default ExploreProperties