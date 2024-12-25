import React from 'react'
import Image from 'next/image'
import PowerEnegyButton from './PowerEnegyButton'

const PoweringEnegy = () => {
  return (
    <div className='flex justify-between items-center pl-16 space-x-40'>
        <div className='flex flex-col justify-center pr-96'>
            <h1 className='font-bold text-4xl'>
                Powering Your Energy Future
            </h1>
            <p>As energy consultants, we provide tailored, independent guidance to help our clients overcome critical obstacles and make sound investment decisions.</p>
            <PowerEnegyButton />
        </div>
        <Image src='/assets/PowerE.jpg' alt='image' width={600} height={150}/>
    </div>
  )
}

export default PoweringEnegy