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
                    <Link href={''}>Home</Link>
                </li>
                <li>
                    <Link href={''}>Blog</Link>
                </li>
                <li>
                    <Link href={''}>Projects</Link>
                </li>
                <li>
                    <Link href={''}>About Us</Link>
                </li>
                <li>
                    <Link href={''}>Contact</Link>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default NavBar