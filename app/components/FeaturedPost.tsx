import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedPost = () => {
  return (
    <div>
        <h2>Fetured Post</h2>
        <ul>
            <li>
                <Link href={''}>
                    <Image src={''} alt='image'/>
                    <h3>SOLAR FARMS</h3>
                    <p>Solar farms harness sunlight to create electricity</p>
                    <Link href={''}>Read More</Link>
                </Link>
            </li>
            <li>
                <Link href={''}>
                    <Image src={''} alt='image'/>
                    <h3>HYDROPOWER</h3>
                    <p>Hydropower leverages waterfall to create electricity</p>
                    <Link href={''}>Read More</Link>
                </Link>
            </li>
            <li>
                <Link href={''}>
                    <Image src={''} alt='image'/>
                    <h3>GEOTHERMAL ENERGY</h3>
                    <p>Geothermal enegy taps Earth's internal heat to produce electricity</p>
                    <Link href={''}>Read More</Link>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default FeaturedPost