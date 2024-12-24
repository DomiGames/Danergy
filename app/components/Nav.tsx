import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul className='flex justify-between items-center'>
                <li className='ml-20'>
                    <Image src='/assets/logo.jpg' alt='logo' width={50} height={50}/>
                </li>
                <div className='mr-20 flex space-x-9'>
                    <li>
                        <Link href={'null'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'null'}>Blog</Link>
                    </li>
                    <li>
                        <Link href={'null'}>Projects</Link>
                    </li>
                    <li>
                        <Link href={'null'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'null'}>Contact</Link>
                    </li>
                </div>

            </ul>
        </nav>
    </div>
  )
}

export default NavBar