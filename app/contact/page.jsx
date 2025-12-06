'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react'
import { register } from '../zod/zod';
import z, { email } from 'zod';
import { toast } from 'sonner';

const Contact = () => {

const [error,setError]=useState({})
const [formData,setFormData]=useState({})



    const formAction=async(FormData)=>{
      const data=Object.fromEntries(FormData.entries())
      
        const {success,error}=register.safeParse(data)
        
setFormData(data)
        if(!success){
            
            const err=z.flattenError(error).fieldErrors;
            console.log(err);
            setError(err)
            
        }else{
            toast.success("User Registered Successfully")
            setError({}),
            setFormData({})
                      
        }
        
        
    }


    const contactInfo=[
        
        {
            id:1,
        placeholder:"Enter your name",
        name:"name",
        error:error.name,
        data:formData.name
    },
        {
            id:2,
        placeholder:"Enter your email",
        name:"email",
        error:error.email,
        data:formData.email,
    },
        {
            id:3,
        placeholder:"Enter your address",
        name:"address",
        error:error.email,
       data:formData.address
    },



]




console.log(formData);

  return (
   <>
 <h1 className='text-2xl font-bold flex justify-center items-center p-4'>Contact Us</h1>
   


    <div className='p-2 flex justify-center items-center'>
        <form action={formAction} method="POST" className='p-2 shadow rounded w-full md:w-100  flex flex-col gap-4'>

         {
            contactInfo.map((curr)=>{
               return <div key={curr.id}>
                 <Label>{curr.name.toUpperCase()}:</Label>
                <Input placeholder={curr.placeholder} name={curr.name} className={"p-2"} defaultValue={curr.data}></Input>
{curr.error&&                <div className='p-1 bg bg-red-400  rounded'>{curr.error}</div>}
               </div>

            })
         }
    <Button type="submit"   >Submit</Button>
    
        </form>
    </div>
   </>
  )
}

export default Contact