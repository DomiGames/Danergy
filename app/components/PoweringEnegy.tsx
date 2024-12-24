import React from 'react'
import Image from 'next/image'
import PowerEnegyButton from './PowerEnegyButton'

const PoweringEnegy = () => {
  return (
    <div>
        <div>
            <h1>
                Powering Your Energy Future
            </h1>
            <p>As energy consultants, we provide tailored, independent guidance to help our clients overcome critical obstacles and make sound investment decisions.</p>
            <PowerEnegyButton />
        </div>
        <Image src={''} alt='image'/>
    </div>
  )
}

export default PoweringEnegy