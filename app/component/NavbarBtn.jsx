
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
const NavbarBtn = ({className}) => {
      //  const className=`hover:text-[#FFD700] text-red transition-all duration-300 cursor-pointer`
 
  return (
<Sheet>
  <SheetTrigger><Menu size={25}  /></SheetTrigger>
  <SheetContent side='left' className={" p-4 "}>

    <SheetHeader className={" flex items-center justify-center"}>
      <SheetTitle>
                <div className='font-semibold text-3xl flex items-center justify-center'>BlueCart</div>
      </SheetTitle>
    </SheetHeader>
  
        <ul className='gap-4 font-semibold md:hidden flex flex-col '>

        <li className='text-2xl font-semibold p-2 '><Link  href={"/"} className={`${className}`}>Home</Link></li>
        <li className='text-2xl font-semibold p-2'><Link href={"/shop"} className={className}>Shop</Link></li>
        <li className='text-2xl font-semibold p-2'><Link href={"/"} className={className}>Contact</Link></li>
    </ul>


  </SheetContent>
</Sheet>
  )
}

export default NavbarBtn


