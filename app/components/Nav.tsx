import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Image src={'/logo.png'} alt='logo' width={50} height={50}/>
                </li>
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

            </ul>
        </nav>
    </div>
  )
}

export default NavBar