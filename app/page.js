import React from 'react'
import HeroSection from './component/HeroSection'
import { Products } from './component/products'
import FAQ from './component/faq'

const page = () => {
  return (
<>
   <HeroSection></HeroSection>

   <hr/>


<Products></Products>


<FAQ></FAQ>
</>
  )
}

export default page