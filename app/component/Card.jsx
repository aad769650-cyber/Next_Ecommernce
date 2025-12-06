import { ArrowDown, ArrowUp, Minus, Plus, X } from 'lucide-react';
import React from 'react'

const Card = ({faqs,handleBtnClick,isActive}) => {
  
  return (
    <>
    
        { faqs?.map((curr,idx)=>{
                return (
                   
                   
                   
           <div className=' p-4' key={idx}>

                 
            <div className='p-4 shadow text-xl font-semibold flex justify-between'>
                        {curr.q}
<div onClick={()=>handleBtnClick(curr.id)}>
  
{isActive==curr.id?<Minus    className="w-8 h-8 p-2 rounded-full bg-emerald-400"/>:<Plus className="w-8 h-8 p-2 rounded-full bg-emerald-400" />}
</div>
                    </div>


<div className={`${curr.id==isActive?"block":"hidden"}`}>{curr.ans}</div>
           </div>      


          )
})}
</>
  )
}

export default Card