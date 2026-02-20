'use client'

import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';
import React, { useState } from 'react'

const FAQ = () => {

  const [isActive, setIsActive] = useState(false)

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

  // ── Logic 100% unchanged ──
  const handleClick = (id) => {
    console.log(id);
    setIsActive((prev) => {
      console.log(prev);
      return prev == id ? false : id
    })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0d0d0f] px-4 py-24">

      {/* Subtle noise texture via radial gradients layered */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.015] blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[20%] h-[350px] w-[500px] rounded-full bg-white/[0.01] blur-[120px]" />
        <div className="absolute right-[10%] top-[40%] h-[250px] w-[300px] rounded-full bg-zinc-700/20 blur-[80px]" />
      </div>

      {/* Faint dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">

        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-zinc-600" />
            <HelpCircle size={14} className="text-zinc-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-zinc-600" />
          </div>

          <h2
            className="font-serif font-light tracking-tight text-zinc-100"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.08 }}
          >
            Frequently
            <br />
            <span className="font-normal italic text-white">Asked Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xs text-[0.8rem] font-light leading-relaxed tracking-wide text-zinc-600">
            Everything you need to know. Can't find what you're looking for?
          </p>

          {/* Divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-zinc-800" />
            <div className="h-1 w-1 rounded-full bg-zinc-700" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-zinc-800" />
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="flex flex-col gap-1.5">
          {faqs.map((faq, idx) => {
            const open = isActive === faq.id;

            return (
              <div
                key={faq.id}
                className={`group relative overflow-hidden rounded-[3px] transition-all duration-300 ${
                  open
                    ? 'bg-[#141417] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)]'
                    : 'bg-[#111113] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-[#131315] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                }`}
              >
                {/* Active top border */}
                {open && (
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
                )}

                {/* Question row */}
                <button
                  onClick={() => handleClick(faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <span
                      className={`shrink-0 font-mono text-[0.6rem] tabular-nums transition-colors duration-200 ${
                        open ? 'text-zinc-400' : 'text-zinc-700 group-hover:text-zinc-600'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Question */}
                    <span
                      className={`text-[0.95rem] font-normal leading-snug transition-colors duration-200 md:text-[1rem] ${
                        open ? 'text-zinc-100' : 'text-zinc-400 group-hover:text-zinc-200'
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      open
                        ? 'border-zinc-500 bg-zinc-700/50 text-zinc-200'
                        : 'border-zinc-800 text-zinc-600 group-hover:border-zinc-600 group-hover:text-zinc-400'
                    }`}
                  >
                    {open
                      ? <Minus size={11} strokeWidth={2.5} />
                      : <Plus size={11} strokeWidth={2.5} />
                    }
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="flex gap-4">
                      {/* Vertical guide line */}
                      <div className="ml-[1.1rem] mt-1 w-px shrink-0 self-stretch bg-gradient-to-b from-zinc-600/40 to-transparent" />
                      <p className="text-[0.82rem] font-light leading-[1.9] tracking-wide text-zinc-500">
                        {faq.ans}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Contact CTA ── */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-700">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="group flex items-center gap-2 rounded-[3px] border border-zinc-800 bg-zinc-900/80 px-6 py-3 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-zinc-500 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-200"
          >
            <MessageCircle size={12} className="transition-transform duration-200 group-hover:scale-110" />
            Talk to Support
          </a>
        </div>

      </div>
    </section>
  )
}

export default FAQ