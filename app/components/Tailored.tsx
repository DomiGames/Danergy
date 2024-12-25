import React from 'react'
import Image from 'next/image'

const Tailored = () => {
  return (
    <div className='flex flex-col justify-between items-center px-16 '>
        <div className='flex justify-between items-center space-x-40'>
            <Image src='/assets/tailored.jpg' alt = 'image' width={500} height={170}/>
            <div>
                <p>Imagine a future powered by clean, sustainable energy. We’re here to make that future a reality. As renewable energy experts, We provide in-depth research, insightful consultancy, rigorous analysis, impactful training, and innovative creative strategies to equip engineers, entrepreneurs, and technicians with the tools and knowledge they need to excel in this dynamic field. From grid integration and cutting-edge innovations to real-world applications, we empower professionals to drive transformative change and accelerate the global transition to a sustainable energy future.</p>
            </div>
        </div>
        <div className='flex justify-between items-center space-x-40'>
            <div>
                <h1 className=' text-4xl'>Tailored to fulfill your desired outcomes.</h1>
                <p>As your trusted partner, we empower energy companies with the strategic insights, robust analysis, and actionable solutions needed to navigate the evolving energy landscape and achieve long-term success. Our expertise spans strategic planning, commercial strategy, market analysis, and independent valuations, all backed by proprietary research and senior advisory experience.</p>
            </div>
            <Image src='/assets/PropertiesBg.jpg' alt = 'image' width={700} height={150}/>
        </div>
    </div>
  )
}

export default Tailored