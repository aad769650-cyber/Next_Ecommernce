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
      url: "/hero-image1.webp",
      tag: "Technology"
    },
    {
      title: "Premium Collection",
      description: "Discover a curated selection of luxury, modern, and classic watches crafted with precision, style, and timeless engineering.",
      url: "/hero-image2.webp",
      tag: "Luxury"
    },
    {
      title: "Crafted for Every Moment",
      description: "From elegant formal designs to rugged everyday wear, find the perfect watch that matches your lifestyle and personality.",
      url: "/hero-image3.avif",
      tag: "Lifestyle"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

        .hero-wrapper {
          background: #0a0a0a;
          padding: 3rem 1.5rem;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .hero-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(180, 148, 80, 0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 20% 50%, rgba(180, 148, 80, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-carousel-wrap {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Override shadcn card for dark theme */
        .hero-carousel-wrap [data-slot="card"] {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        .hero-slide-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 2.5rem;
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, #111111 0%, #161616 50%, #121212 100%);
          border: 1px solid rgba(180, 148, 80, 0.2);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          min-height: 340px;
        }

        @media (min-width: 768px) {
          .hero-slide-inner {
            flex-direction: row;
            min-height: 400px;
            padding: 3.5rem 4rem;
          }
        }

        .hero-slide-inner::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #b49450, transparent);
        }

        .hero-slide-inner::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(to left, rgba(180,148,80,0.5), transparent);
        }

        .hero-text-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-align: center;
          animation: fadeSlideIn 0.6s ease both;
        }

        @media (min-width: 768px) {
          .hero-text-block {
            text-align: left;
            max-width: 480px;
          }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-tag {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b49450;
          border: 1px solid rgba(180, 148, 80, 0.4);
          padding: 0.25rem 0.85rem;
          border-radius: 0;
          width: fit-content;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .hero-tag { margin: 0; }
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 300;
          line-height: 1.1;
          color: #f0ece4;
          letter-spacing: -0.01em;
        }

        .hero-title em {
          font-style: italic;
          color: #b49450;
        }

        .hero-description {
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(240, 236, 228, 0.5);
          letter-spacing: 0.02em;
          max-width: 380px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .hero-description { margin: 0; }
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #b49450;
          text-decoration: none;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          margin: 0 auto;
          transition: gap 0.3s ease;
        }

        @media (min-width: 768px) {
          .hero-cta { margin: 0; }
        }

        .hero-cta:hover { gap: 1.25rem; }

        .hero-cta-line {
          display: block;
          width: 32px;
          height: 1px;
          background: #b49450;
          transition: width 0.3s ease;
        }

        .hero-cta:hover .hero-cta-line { width: 50px; }

        .hero-image-block {
          position: relative;
          flex-shrink: 0;
          animation: fadeSlideIn 0.6s 0.15s ease both;
        }

        .hero-image-frame {
          position: relative;
          width: 220px;
          height: 220px;
        }

        @media (min-width: 768px) {
          .hero-image-frame {
            width: 280px;
            height: 280px;
          }
        }

        .hero-image-frame::before {
          content: '';
          position: absolute;
          inset: -6px;
          border: 1px solid rgba(180,148,80,0.25);
          border-radius: 1px;
          z-index: 0;
        }

        .hero-image-frame::after {
          content: '';
          position: absolute;
          inset: -12px;
          border: 1px solid rgba(180,148,80,0.1);
          border-radius: 1px;
          z-index: 0;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 1px;
          position: relative;
          z-index: 1;
          filter: contrast(1.05) saturate(0.9);
        }

        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 60%);
          z-index: 2;
          border-radius: 1px;
          pointer-events: none;
        }

        /* carousel nav buttons override */
        .hero-carousel-wrap button[class*="carousel"] {
          border: 1px solid rgba(180,148,80,0.3) !important;
          background: rgba(10,10,10,0.9) !important;
          color: #b49450 !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 0 !important;
          transition: background 0.2s ease, border-color 0.2s ease !important;
        }

        .hero-carousel-wrap button[class*="carousel"]:hover {
          background: rgba(180,148,80,0.1) !important;
          border-color: rgba(180,148,80,0.7) !important;
        }

        .hero-carousel-wrap button[class*="carousel"] svg {
          stroke: #b49450 !important;
          width: 16px !important;
          height: 16px !important;
        }

        /* Decorative corner marks */
        .corner-mark {
          position: absolute;
          width: 16px;
          height: 16px;
        }

        .corner-mark.tl { top: 12px; left: 12px; border-top: 1px solid rgba(180,148,80,0.5); border-left: 1px solid rgba(180,148,80,0.5); }
        .corner-mark.tr { top: 12px; right: 12px; border-top: 1px solid rgba(180,148,80,0.5); border-right: 1px solid rgba(180,148,80,0.5); }
        .corner-mark.bl { bottom: 12px; left: 12px; border-bottom: 1px solid rgba(180,148,80,0.5); border-left: 1px solid rgba(180,148,80,0.5); }
        .corner-mark.br { bottom: 12px; right: 12px; border-bottom: 1px solid rgba(180,148,80,0.5); border-right: 1px solid rgba(180,148,80,0.5); }
      `}</style>

      <div className="hero-wrapper">
        <div className="hero-carousel-wrap">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent>
              {content.map((curr, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-0">
                      <div className="hero-slide-inner">
                        {/* Decorative corners */}
                        <span className="corner-mark tl" />
                        <span className="corner-mark tr" />
                        <span className="corner-mark bl" />
                        <span className="corner-mark br" />

                        {/* Text */}
                        <div className="hero-text-block">
                          <span className="hero-tag">{curr.tag}</span>
                          <h2 className="hero-title">{curr.title}</h2>
                          <p className="hero-description">{curr.description}</p>
                          <button className="hero-cta">
                            <span className="hero-cta-line" />
                            Explore Collection
                          </button>
                        </div>

                        {/* Image */}
                        <div className="hero-image-block">
                          <div className="hero-image-frame">
                            <img
                              src={curr.url}
                              alt={curr.title}
                              className="hero-img"
                            />
                            <div className="hero-img-overlay" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default HeroSection