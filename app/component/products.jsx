'use client'
import { ShoppingCart, Star, Package } from 'lucide-react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setCartFromLocalStorage } from '../slice/slice';
import { toast } from 'sonner';

// 1. Move static data outside to prevent re-renders
const CATEGORY_STYLE = {
  Grocery:     { text: 'text-green-400',  border: 'border-green-400/30',  bg: 'bg-green-400/10'  },
  Skincare:    { text: 'text-pink-300',   border: 'border-pink-300/30',   bg: 'bg-pink-300/10'   },
  Fashion:     { text: 'text-purple-400', border: 'border-purple-400/30', bg: 'bg-purple-400/10' },
  Electronics: { text: 'text-blue-400',   border: 'border-blue-400/30',   bg: 'bg-blue-400/10'   },
  Clothes:     { text: 'text-orange-400', border: 'border-orange-400/30', bg: 'bg-orange-400/10' },
};

const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Everyday Instant Tea Whitener',
    category: 'Grocery',
    brand: 'Nestlé',
    description: 'Nestlé Everyday tea whitener made for rich and creamy tea.',
    price: 350,
    currency: 'PKR',
    stock: 120,
    rating: 4.7,
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80&fit=crop',
  },
  {
    id: 2,
    name: 'Deep Clean Face Wash',
    category: 'Skincare',
    brand: 'Clean & Clear',
    description: 'Oil-free deep clean face wash for fresh and clear skin.',
    price: 499,
    currency: 'PKR',
    stock: 80,
    rating: 4.5,
    url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80&fit=crop',
  },
  {
    id: 3,
    name: 'Nestlé Nido Fortified Milk Powder',
    category: 'Grocery',
    brand: 'Nestlé',
    description: 'Milk powder rich in vitamins and minerals for growing kids.',
    price: 2200,
    currency: 'PKR',
    stock: 60,
    rating: 4.8,
    url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80&fit=crop',
  },
  {
    id: 4,
    name: 'Nestlé Bunyad Milk Powder',
    category: 'Grocery',
    brand: 'Nestlé',
    description: 'Affordable and nutritious milk powder for everyday family use.',
    price: 380,
    currency: 'PKR',
    stock: 90,
    rating: 4.6,
    url: 'https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=400&q=80&fit=crop',
  },
  {
    id: 5,
    name: 'Women Shoulder Handbag',
    category: 'Fashion',
    brand: 'Local',
    description: "Stylish women's shoulder bag with premium leather finish.",
    price: 1999,
    currency: 'PKR',
    stock: 40,
    rating: 4.4,
    url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80&fit=crop',
  },
  {
    id: 6,
    name: 'Apple AirPods (2nd Generation)',
    category: 'Electronics',
    brand: 'Apple',
    description: 'Wireless AirPods with high-quality sound and long battery life.',
    price: 28999,
    currency: 'PKR',
    stock: 25,
    rating: 4.9,
    url: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80&fit=crop',
  },
  {
    id: 7,
    name: "Men's Cotton T-Shirt",
    category: 'Clothes',
    brand: 'Unbranded',
    description: 'Soft cotton t-shirt suitable for daily casual wear.',
    price: 799,
    currency: 'PKR',
    stock: 100,
    rating: 4.3,
    url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80&fit=crop',
  },
  {
    id: 8,
    name: "Women's Winter Hoodie",
    category: 'Clothes',
    brand: 'FashionWear',
    description: 'Warm and stylish hoodie perfect for winter season.',
    price: 2499,
    currency: 'PKR',
    stock: 50,
    rating: 4.6,
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80&fit=crop',
  },
  {
    id: 9,
    name: "Men's Denim Jeans",
    category: 'Clothes',
    brand: 'DenimCo',
    description: 'Comfort-fit denim jeans with strong stitching quality.',
    price: 1999,
    currency: 'PKR',
    stock: 70,
    rating: 4.5,
    url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80&fit=crop',
  },
];

export const Products = () => {
  const dispatch = useDispatch();
  // Get cart state from redux
  const cart = useSelector((state) => state.cart);

  // 2. INITIAL LOAD: Sync LocalStorage to Redux (Only once on mount)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        dispatch(setCartFromLocalStorage(JSON.parse(savedCart)));
      } catch (err) {
        console.error("Failed to parse cart:", err);
      }
    }
  }, [dispatch]);

  // 3. PERSISTENCE: Save to LocalStorage whenever cart changes
  useEffect(() => {
    // Only save if the cart isn't empty OR if it's the first empty state after mount
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        fill={i < Math.floor(rating) ? '#b49450' : 'transparent'}
        stroke="#b49450"
        strokeWidth={1.5}
      />
    ));

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] px-4 py-16 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[8%] h-72 w-96 rounded-full bg-[#b49450]/5 blur-[120px]" />
        <div className="absolute bottom-[15%] right-[8%] h-80 w-80 rounded-full bg-[#b49450]/4 blur-[120px]" />
      </div>

      <div className="relative z-10 mb-14 text-center">
        <span className="mb-3 inline-block text-[0.62rem] font-medium uppercase tracking-[0.25em] text-[#b49450]">
          Curated Selection
        </span>
        <h2
          className="font-serif font-light leading-[1.1] tracking-tight text-[#f0ece4]"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
        >
          Our Products
        </h2>
        <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#b49450] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1300px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PRODUCTS_DATA.map((product) => {
          const style = CATEGORY_STYLE[product.category] || {
            text: 'text-[#b49450]',
            border: 'border-[#b49450]/30',
            bg: 'bg-[#b49450]/10',
          };

          return (
            <article
              key={product.id}
              className="group relative flex flex-col overflow-hidden border border-[#b49450]/15 bg-gradient-to-br from-[#111111] to-[#161616] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b49450]/45 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(180,148,80,0.07)]"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[2px] bg-gradient-to-b from-transparent via-[#b49450]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative h-56 overflow-hidden bg-[#0d0d0d]">
                <img
                  src={product.url}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover contrast-105 saturate-[0.85] transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 flex items-center gap-1.5 border border-[#b49450]/30 bg-[#0a0a0a]/85 px-2.5 py-1 text-[0.57rem] font-medium uppercase tracking-widest text-[#b49450] backdrop-blur-sm">
                  <Package size={9} />
                  {product.stock} left
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex flex-wrap gap-2">
                  <span className={`border px-2 py-0.5 text-[0.57rem] font-medium uppercase tracking-widest ${style.text} ${style.border} ${style.bg}`}>
                    {product.category}
                  </span>
                  <span className="border border-[#b49450]/20 bg-[#b49450]/[0.06] px-2 py-0.5 text-[0.57rem] font-medium uppercase tracking-widest text-[#b49450]/70">
                    {product.brand}
                  </span>
                </div>

                <h3 className="font-serif text-[1.15rem] font-normal leading-snug text-[#f0ece4]">
                  {product.name}
                </h3>

                <p className="text-[0.76rem] font-light leading-relaxed tracking-wide text-[#f0ece4]/40">
                  {product.description}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">{renderStars(product.rating)}</div>
                  <span className="text-[0.68rem] tracking-wide text-[#f0ece4]/35">
                    {product.rating} / 5
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-[#b49450]/10 px-5 py-4">
                <div className="flex flex-col leading-none">
                  <span className="mb-1 text-[0.53rem] font-normal uppercase tracking-[0.15em] text-[#b49450]/55">
                    Price
                  </span>
                  <span className="font-serif text-[1.3rem] font-normal leading-none text-[#b49450]">
                    {product.price.toLocaleString()}
                    <span className="ml-1 text-[0.65rem] font-light text-[#b49450]/55">
                      {product.currency}
                    </span>
                  </span>
                </div>

                <button
                  onClick={() => {
                    toast.success(`${product.name} added to cart!`);
                    dispatch(addToCart({ ...product, quantity: 1 }));
                  }}
                  className="flex cursor-pointer items-center gap-2 border border-[#b49450]/40 bg-transparent px-3.5 py-2.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-[#b49450] transition-all duration-200 hover:border-[#b49450] hover:bg-[#b49450]/10 hover:text-[#d4b06a] active:scale-95"
                >
                  <ShoppingCart size={13} />
                  Add to Cart
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};