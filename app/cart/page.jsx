'use client'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, X } from 'lucide-react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove, removeAll, setCartFromLocalStorage } from '../slice/slice';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AddToCart = () => {
  const dispatch = useDispatch();
  
  // 1. Always pull from Redux, not local useState
  // Replace 'todo' with your actual slice name if different
  const cart = useSelector((state) => state.cart);

  // 2. Initial Hydration: Load from LocalStorage into Redux on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch(setCartFromLocalStorage(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  // 3. Persistence: Keep LocalStorage updated whenever Redux cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // 4. Calculate Total (Simplified)
  const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] px-4 py-14 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[15%] h-64 w-96 rounded-full bg-[#b49450]/[0.05] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-72 w-80 rounded-full bg-[#b49450]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px]">
        {/* ── Page Header ── */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-[0.62rem] font-medium uppercase tracking-[0.25em] text-[#b49450]">
            Your Selection
          </span>
          <h1
            className="font-serif font-light leading-[1.1] tracking-tight text-[#f0ece4]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Cart Items
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#b49450] to-transparent" />
        </div>

        {/* ── Empty State ── */}
        {(!cart || cart.length === 0) && (
          <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
            <ShoppingBag size={48} className="text-[#b49450]/30" />
            <p className="text-sm font-light tracking-widest text-[#f0ece4]/30 uppercase">Your cart is empty</p>
            <Button variant="outline" asChild className="mt-4 border-[#b49450]/20 text-[#b49450] hover:bg-[#b49450]/10">
                <Link href="/">Return to Shop</Link>
            </Button>
          </div>
        )}

        {/* ── Cart Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cart?.map((curr) => (
            <section
              key={curr.id}
              className="group relative flex flex-col overflow-hidden border border-[#b49450]/15 bg-gradient-to-br from-[#111111] to-[#161616] transition-all duration-300 hover:-translate-y-1 hover:border-[#b49450]/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_24px_rgba(180,148,80,0.06)]"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#b49450]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative h-52 overflow-hidden bg-[#0d0d0d]">
                <img
                  src={curr.url}
                  alt={curr.name}
                  className="h-full w-full object-cover saturate-[0.85] contrast-[1.05] transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="font-serif text-[1.1rem] font-normal leading-snug text-[#f0ece4]">
                  {curr.name}
                </h3>

                <div className="flex flex-col leading-none">
                  <span className="mb-1 text-[0.53rem] uppercase tracking-[0.15em] text-[#b49450]/50">Unit Price</span>
                  <span className="font-serif text-xl font-normal text-[#b49450]">
                    {curr.price.toLocaleString()}
                    <span className="ml-1 text-[0.65rem] font-light text-[#b49450]/50">PKR</span>
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-0 border border-[#b49450]/20 w-fit">
                  <button
                    onClick={() => dispatch(decrement(curr.id))}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center border-r border-[#b49450]/20 text-[#b49450]/70 transition-colors hover:bg-[#b49450]/10 hover:text-[#b49450]"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="flex h-9 w-10 items-center justify-center font-serif text-base text-[#f0ece4]">
                    {curr.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increment(curr.id))}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center border-l border-[#b49450]/20 text-[#b49450]/70 transition-colors hover:bg-[#b49450]/10 hover:text-[#b49450]"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                {/* Subtotal & Remove */}
                <div className="flex items-center justify-between border-t border-[#b49450]/10 pt-3">
                  <div className="flex flex-col leading-none">
                    <span className="mb-1 text-[0.53rem] uppercase tracking-[0.15em] text-[#b49450]/50">Subtotal</span>
                    <span className="font-serif text-lg font-normal text-[#b49450]">
                      {(curr.price * curr.quantity).toLocaleString()}
                      <span className="ml-1 text-[0.65rem] font-light text-[#b49450]/50">PKR</span>
                    </span>
                  </div>

                  <button
                    onClick={() => {
                        dispatch(remove(curr.id));
                        toast.error("Item removed from cart");
                    }}
                    className="flex cursor-pointer items-center gap-1.5 border border-red-500/20 bg-red-500/5 px-3 py-2 text-[0.6rem] font-medium uppercase tracking-widest text-red-400/70 transition-all hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                  >
                    <Trash2 size={11} />
                    Remove
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── Order Summary ── */}
        {cart.length > 0 && (
          <div className="mt-10 border border-[#b49450]/15 bg-gradient-to-br from-[#111111] to-[#161616]">
            <div className="border-b border-[#b49450]/10 px-8 py-5">
              <span className="text-[0.62rem] uppercase tracking-[0.2em] text-[#b49450]/60">Order Summary</span>
            </div>

            <div className="flex flex-col gap-6 px-8 py-7 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[0.58rem] uppercase tracking-[0.15em] text-[#b49450]/50">Total Amount</span>
                <div className="flex items-end gap-2">
                  <span
                    className="font-serif font-light leading-none text-[#f0ece4]"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
                  >
                    {total.toLocaleString()}
                  </span>
                  <span className="mb-1 text-sm font-light text-[#b49450]/60">PKR</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    toast.info("Cart cleared");
                    dispatch(removeAll());
                  }}
                  className="flex cursor-pointer items-center justify-center gap-2 border border-red-500/25 bg-transparent px-6 py-3 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-red-400/60 transition-all hover:border-red-500/50 hover:bg-red-500/8 hover:text-red-400"
                >
                  <X size={13} />
                  Clear Cart
                </button>

                <Button
                  className="cursor-pointer rounded-none border border-[#b49450]/40 bg-transparent px-8 py-3 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[#b49450] shadow-none transition-all hover:border-[#b49450] hover:bg-[#b49450]/10 hover:text-[#d4b06a]"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Proceed to Payment
                    <ArrowRight size={13} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddToCart;