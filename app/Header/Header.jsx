import { Input } from '@/components/ui/input'
import { Search, ShoppingCart } from 'lucide-react'
import { Urbanist } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import NavbarBtn from '../component/NavbarBtn'
import { ModeToggle } from '../component/ToggleBtn'

const Header = () => {

    
    const className=`hover:text-[#FFD700] transition-all duration-300 cursor-pointer`
  return (
    
    <div className=' gap-4 flex justify-around md:justify-evenly items-center shadow p-4 dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]'>
                  <img src="logo (2).svg" alt="Logo img" className='w-40 h-10 cursor-pointer' />
    <ul className=' items-center gap-4 font-semibold hidden md:flex'>
        <li className='text-xl'><Link  href={"/"} className={className}>Home</Link></li>
        <li className='text-xl'><Link href={"/shop"} className={className}>Shop</Link></li>
        <li className='text-xl'><Link href={"/contact"} className={className}>Contact</Link></li>
    </ul>


<div className='flex justify-center items-center gap-6 '>
 <div className='hidden md:flex justify-center items-center gap-2 '>
      <Input placeholder="Search Product..." type={"text"} />
      <Search />


 </div>

<Link href={"/cart"}> <ShoppingCart  size={30} className='hover:scale-110  transition-all duration-300 cursor-pointer '/>
</Link>
<div className={"flex gap-2 justify-center items-center "}>
  <div className={"md:hidden"}>

     <NavbarBtn value={className} ></NavbarBtn>
  </div>
<div >
     <ModeToggle/>
</div>
</div>

</div>
    </div>
  )
}

export default Header