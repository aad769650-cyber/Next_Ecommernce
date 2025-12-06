import React from 'react'

export const Footer = () => {
  return (
    <>
   <section className='bg-gray-900 p-4 text-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

 <div className='flex flex-col gap-2'>
       <div className='hover:text-white'>
        Home
          </div>
    <div className='hover:text-white'>
        About Us
          </div>
    <div className='hover:text-white'>
        Services
          </div>
    <div className='hover:text-white'>
        
Patient Tools
  
          </div>
 </div>


<div  className='flex flex-col gap-2'>
    <div className='hover:text-white cursor-pointer'>
        Testimonials

    </div>
    <div className='hover:text-white cursor-pointer'>

FAQ's

    </div>
    <div className='hover:text-white cursor-pointer'>
       
Contact Us
    </div>
</div>



<div  className='flex flex-col gap-2'>
<div className='font-semibold text-emerald-400'>


   CareBridge Primary Care, PLLC

</div>
<div className='text-white'>


 
115 Parkway Office Ct, suite 104, Cary NC, 27518

</div>
<div className='text-white'>


Phone: <span className='text-emerald-400'>919 230 7439</span>

</div>
<div className='text-white'>


  
Fax:<span className='text-emerald-400'> 1 919 912 5442</span>

</div>
<div className='text-white'>



Email: <a href='mailto:aad769650@gmail.com' className='text-emerald-400'>aad769650@gmail.com</a>
</div>

</div>





   </section>
   <hr className='text-gray-300'/>
<div className='flex justify-between items-center p-4 bg-gray-900  text-gray-400'>
<div className='flex gap-2 items-center'>
        <div className='w-8 h-8 shrink-0 flex items-center justify-center text-gray-950 font-bold bg-emerald-400 rounded-full'>CP</div>
    <div>CareBridge</div>
</div>

<div>Made with love on Earth By <a href="https://github.com/aad769650-cyber" className='text-emerald-400 hover:underline'>Mahar</a></div>
</div>
</>
  )
}
