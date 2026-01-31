import React from 'react'
import { useSelector } from 'react-redux'

const AddToCart = () => {

    const res=useSelector((state)=>state);
    console.log(res);
    

  return (
    <div>AddToCart</div>
  )
}

export default AddToCart