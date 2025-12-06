
'use client'
import {  DollarSign, Minus, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove, removeAll } from '../slice/slice';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AddToCart = () => {

    const res=useSelector((state)=>state);
    // console.log(res);
    
const [cart,setCart]=useState([])

const dispatch=useDispatch()

useEffect(()=>{



const data=JSON.parse(localStorage.getItem('cart'))
// console.log(data);

setCart(data)
},[])


const total=res.cart.reduce((acc,curr)=>{
  console.log(acc);
  
   acc+=(curr.price*curr.quantity);
 return acc
  
},0)



return(
  <>
  
  <h1 className='flex justify-evenly text-2xl font-bold items-center p-3'>Cart Items</h1>
<div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-4'>

  {
    res.cart?.map((curr)=>{
      return(
        <section key={curr.id} className='flex justify-evenly border-2 rounded-xl shadow-2xl p-3 hover:scale-105 transition-all duration-300 cursor-pointer gap-2'>
      <div>
        <img src={curr.url} alt="product image"  className='w-50 h-50 rounded' />
        <div className='font-semibold text-2xl'>
  {curr.name}
</div>

  <span className='font-semibold'>Price:{curr.price}</span>


  <div className='flex p-2 shadow gap-3 justify-evenly'>
    <span onClick={()=>{
      // console.log(curr.id);
      
      dispatch(decrement(curr.id))
    
  
    }

      }><Minus /></span>
    {curr.quantity}

    <span onClick={()=>{
      // console.log(curr.id);
      
      dispatch(increment(curr.id))
    
  
    }

      }><Plus /></span>


  </div>
      <div className='cursor-pointer shadow flex justify-center text-xl rounded items-center p-2'
       onClick={()=>{
      // console.log(curr.id);
      
      dispatch(remove(curr.id))
    
  
    }

      }>
        Delete</div>


<div className='font-bold text-xl'>
  TotalPrice:{curr.price*curr.quantity}
</div>

      </div>


  
        </section>
      )
    })
  }
</div>


<div className='p-2 shadow-2xl rounded h-50 flex flex-col gap-2 justify-center items-center'>
  <div className='text-2xl font-bold'>
    TotalPrice:{total}


  </div>
    <Button className={"cursor-pointer"} ><Link href="/contact">Payment</Link></Button>
</div>














    {
      res.cart[0]&&
        <div className='cursor-pointer bg-emerald-300 flex justify-center text-2xl font-bold items-center p-2'
         onClick={()=>{
      console.log("remove"),
      toast.info("All Carts are removed")
        dispatch(removeAll())


      }}>Clear Cart</div>
    }






  </>
)
}

export default AddToCart