'use client'

import { ArrowBigDown, ArrowDown } from 'lucide-react';
import React, { useState } from 'react'
import Card from './Card';

const FAQ = () => {

const [isActive,setIsActive]=useState(false)



    const faqs = [
  {
    id: 1,
    q: "How can I track my order?",
    ans: "Once your order is shipped, we will send you a tracking number via email. You can use it to track your order on our website or the courier's website."
  },
  {
    id: 2,
    q: "What payment methods do you accept?",
    ans: "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and net banking. All payments are secure and encrypted."
  },
  {
    id: 3,
    q: "Can I return or exchange a product?",
    ans: "Yes! We offer returns and exchanges within 30 days of delivery, provided the item is unused and in its original packaging."
  },
  {
    id: 4,
    q: "Do you offer international shipping?",
    ans: "Currently, we only ship within the country. We plan to offer international shipping soon."
  },
  {
    id: 5,
    q: "How do I apply a discount or promo code?",
    ans: "You can enter the promo code at checkout in the 'Apply Coupon' field. The discount will be applied before you make payment."
  },
  {
    id: 6,
    q: "Is my personal information safe?",
    ans: "Absolutely! We use industry-standard encryption to protect your data. We never share your information with third parties."
  },
  {
    id: 7,
    q: "How long does delivery take?",
    ans: "Delivery usually takes 3-7 business days depending on your location. You will get a confirmation email with the expected delivery date."
  }
];

const handleClick=(id)=>{
    console.log(id);
    
setIsActive((prev)=>{
    console.log(prev);
    
return prev==id?false:id
})
}



  return (
<>

<div className='font-bold flex justify-center items-center p-2 text-2xl '>
    FAQS
</div>

    <div>
        <Card faqs={faqs} handleBtnClick={handleClick} isActive={isActive} ></Card>
    </div>
    </>

  )
}

export default FAQ