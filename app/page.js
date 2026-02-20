import React from 'react'
import HeroSection from './component/HeroSection'
import FAQ from './component/faq'
import { Products } from './component/products'

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