'use client'
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, setCartFromLocalStorage } from '../slice/slice';
import { toast } from 'sonner';
import { nanoid } from '@reduxjs/toolkit';

export const Products = () => {

const dispatch=useDispatch()


  useEffect(() => {
    dispatch(setCartFromLocalStorage());
  }, [dispatch]);


    const products = [
  {
    id: 1,
    name: "Everyday Instant Tea Whitener",
    category: "Grocery",
    brand: "Nestlé",
    description: "Nestlé Everyday tea whitener made for rich and creamy tea.",
    price: 350,
    currency: "PKR",
    stock: 120,
    rating: 4.7,
  url:"product1.avif"
  },
  {
    id: 2,
    name: "Deep Clean Face Wash",
    category: "Skincare",
    brand: "Clean & Clear",
    description: "Oil-free deep clean face wash for fresh and clear skin.",
    price: 499,
    currency: "PKR",
    stock: 80,
    rating: 4.5,
url:"product2.avif"
  },
  {
    id: 3,
    name: "Nestlé Nido Fortified Milk Powder",
    category: "Grocery",
    brand: "Nestlé",
    description: "Milk powder rich in vitamins and minerals for growing kids.",
    price: 2200,
    currency: "PKR",
    stock: 60,
    rating: 4.8,
   url:"product3.avif"
  },
  {
    id: 4,
    name: "Nestlé Bunyad Milk Powder",
    category: "Grocery",
    brand: "Nestlé",
    description: "Affordable and nutritious milk powder for everyday family use.",
    price: 380,
    currency: "PKR",
    stock: 90,
    rating: 4.6,
 url:"product4.avif"
  },
  {
    id: 5,
    name: "Women Shoulder Handbag",
    category: "Fashion",
    brand: "Local",
    description: "Stylish women’s shoulder bag with premium leather finish.",
    price: 1999,
    currency: "PKR",
    stock: 40,
    rating: 4.4,
 url:"product5.avif"
  },
  {
    id: 6,
    name: "Apple AirPods (2nd Generation)",
    category: "Electronics",
    brand: "Apple",
    description: "Wireless AirPods with high-quality sound and long battery life.",
    price: 28999,
    currency: "PKR",
    stock: 25,
    rating: 4.9,
   url:"product6.avif"
  },
  {
    id: 7,
    name: "Men’s Cotton T-Shirt",
    category: "Clothes",
    brand: "Unbranded",
    description: "Soft cotton t-shirt suitable for daily casual wear.",
    price: 799,
    currency: "PKR",
    stock: 100,
    rating: 4.3,
    url: "product7.avif"
  },
  {
    id: 8,
    name: "Women’s Winter Hoodie",
    category: "Clothes",
    brand: "FashionWear",
    description: "Warm and stylish hoodie perfect for winter season.",
    price: 2499,
    currency: "PKR",
    stock: 50,
    rating: 4.6,
    url: "product8.avif"
  },
  {
    id: 9,
    name: "Men’s Denim Jeans",
    category: "Clothes",
    brand: "DenimCo",
    description: "Comfort-fit denim jeans with strong stitching quality.",
    price: 1999,
    currency: "PKR",
    stock: 70,
    rating: 4.5,
    url: "product9.avif"
  },

];

  return (
   <div>
    <h1 className='text-2xl font-bold flex justify-center items-center p-4'>Our Products</h1>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
      {
        products.map((curr,idx)=>{
          return(
            <section key={idx}>
            <div className='flex flex-col gap-2 justify-evenly border-2 rounded-xl shadow-2xl p-3 hover:scale-105 transition-all duration-300'>
<div className='flex justify-center items-center '>
  <img src={curr.url} alt="products images " className='w-50 h-50 rounded'/>

</div>

<div className='font-semibold text-2xl'>
  {curr.name}
</div>

<div className=' text-gray-600 dark:text-white'>
  {curr.description}
</div>

     
     <div className='flex gap-4'>
      <span className='p-1 rounded-4xl  bg-emerald-300 hover:text-gray-700 cursor-pointer'>{curr.category}</span>
      <span className='p-1 cursor-pointer hover:text-gray-700  hover:bg-emerald-400 rounded-4xl  bg-emerald-300'>{curr.brand}</span>
      </div>         


   <div className='font-semibold text-xl text-emerald-300'>
        <span className='text-black mr-2 dark:text-white'>
        Price:</span>
      <span>{curr.price}</span>
      <span>{curr.currency}</span>
      </div>      


      <div className='text-sky-400'>Ratings:{curr.rating}</div>   

<Button className={"cursor-pointer"} onClick={()=>{
toast.success("Product is Added to Cart")

  dispatch(addToCart({
    id:curr.id,
  url:curr.url,
name:curr.name,
price:curr.price,
quantity:1,

}))}}>AddToCart <ShoppingCart color="#ffffff" size={30} className='hover:scale-110  transition-all duration-300 cursor-pointer '/>
</Button>
            </div>


            </section>
          )
        })
      }
    </div>
   </div>
  )
}
