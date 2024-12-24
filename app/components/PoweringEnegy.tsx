import React from 'react'
import Image from 'next/image'
import PowerEnegyButton from './PowerEnegyButton'

const PoweringEnegy = () => {
  return (
    <div className='flex justify-between items-center pl-16'>
        <div className='flex flex-col justify-center pr-96'>
            <h1 className='font-bold text-4xl'>
                Powering Your Energy Future
            </h1>
            <p>As energy consultants, we provide tailored, independent guidance to help our clients overcome critical obstacles and make sound investment decisions.</p>
            <PowerEnegyButton />
        </div>
        <Image src='/assets/PowerE.jpg' alt='image' className='w-96' width={150} height={150}/>
    </div>
  )
}

export default PoweringEnegy