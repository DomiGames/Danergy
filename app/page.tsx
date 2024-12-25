import { Main } from "next/document";
import Image from "next/image";
import NavBar from "./components/Nav";
import ExploreProperties from "./components/ExploreProperties";
import FeaturedPost from "./components/FeaturedPost";
import PoweringEnegy from "./components/PoweringEnegy";
import Link from "next/link";
import Tailored from "./components/Tailored";



export default function Home() {
  return (
    <main>
      <NavBar/>
      <ExploreProperties/>
      <FeaturedPost/>
      <PoweringEnegy/>
      <Tailored/>
      <footer className='flex justify-evenly align-centre p-5 bg-blue-600 mt-10'>
        <p>c davo energy all rights reserved </p>
        <Link href={''}><Image src={''} alt="image"/></Link>
        <Link href={''}><Image src={''} alt="image"/></Link>
        <Link href={''}><Image src={''} alt="image"/></Link>
        <Link href={''}><Image src={''} alt="image"/></Link>
        <Link href={''}><Image src={''} alt="image"/></Link>
      </footer>
    </main>
  );
}
