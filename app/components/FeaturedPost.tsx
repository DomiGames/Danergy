import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedPost = () => {
  return (
    <div className='pt-16 pl-16 pr-16'>
        <h2 className='text-green-800 font-bold text-2xl'>Featured Posts.</h2>
        <ul className='flex justify-between items-center'>
            <li>
                <div>

                    <Link href={''}>
                        <Image src='/assets/solar.jpg' alt='image' width={400} height={150}/>
                        <h3 className='text-green-700'>SOLAR FARMS</h3>
                        <p>Solar farms harness sunlight to create electricity</p>
                        <p className='text-green-700'>Read More</p>
                    </Link>
                </div>
            </li>
            <li>
                <div>

                    <Link href={''}>
                        <Image src='/assets/hydro.jpg' alt='image'  width={400} height={160}/>
                        <h3 className='text-green-700'>HYDROPOWER</h3>
                        <p>Hydropower leverages waterfall to create electricity</p>
                        <p className='text-green-700'>Read More</p>
                        
                    </Link>
                </div>
            </li>
            <li>
                <div>

                    <Link href={''}>
                        <Image src='/assets/geo.jpg' alt='image'  width={400} height={170}/>
                        <h3 className='text-green-700 pt-10' >GEOTHERMAL ENERGY</h3>
                        <p>Geothermal enegy taps Earth's internal heat to produce electricity</p>
                        <p className='text-green-700'>Read More</p>
                        
                    </Link>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default FeaturedPost