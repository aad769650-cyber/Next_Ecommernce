'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const HeroSection = () => {


const content = [
    {
       
        title: "Fast & Seamless Performance",
        description: "Enjoy lightning-fast load times and smooth interactions with an optimized and responsive design built for modern users.",
        url: "/hero-image1.webp"
    },
    {
      
        title: "Premium Collection ",
        description: "Discover a curated selection of luxury, modern, and classic watches crafted with precision, style, and timeless engineering.",
        url: "/hero-image2.webp"
    },
    {
    
        title: "Crafted for Every Moment",
        description: "From elegant formal designs to rugged everyday wear, find the perfect watch that matches your lifestyle and personality.",
        url: "/hero-image3.avif"
    }
];



  return (
    <div  className=' flex justify-center p-4 '>





 
    <Carousel className="w-70 md:w-250  "
    opts={
    {
    loop:true
    }
    }
    plugins={[
        Autoplay({delay:3000})
    ]}
    >
      <CarouselContent >
      
      
    {content.map((curr,index)=>{


    return(
    
        <CarouselItem key={index} className={"w-100"} 
        >
            <div className="p-2 ">
              <Card  >
                <CardContent className="flex w-full items-center justify-evenly flex-col md:flex-row   gap-4  md:h-50">



              <div>
                    <span className=" text-2xl md:text-4xl font-semibold ">{curr.title}</span>
                  
                 <div className="md:mt-4">
                  {curr.description}
                 </div>

              </div>
                  
                  <span className=" md:w-50 md:h-50 text-4xl    font-semibold">
                    
                    <img src={curr.url} className="object-cover  w-50 rounded-2xl h-50"></img>
                  </span>



                </CardContent>
              </Card>
            </div>
          </CarouselItem>
    )
    })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  





    </div>
  )
}

export default HeroSection