"use client"
import { Input } from '@/components/ui/input'
import { Search, ShoppingCart, Menu, X, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavbarBtn from '../component/NavbarBtn'
import { ModeToggle } from '../component/ToggleBtn'
import { useSelector } from 'react-redux'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [savedCart, setSavedCart] = useState([])

  const res = useSelector((state) => state)
  console.log(res);

  // ── Logic unchanged ──
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(savedCart);
    setSavedCart(res.cart)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50/95 text-gray-800 shadow-sm backdrop-blur-md">

        {/* ── Announcement Bar ── */}
        <div className="border-b border-gray-200 bg-gray-100">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4">
            <p className="flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.1em] text-gray-500">
              <Sparkles size={10} className="text-gray-400" />
              Free Shipping
              <span className="text-gray-300">·</span>
              on orders over
              <span className="font-semibold text-gray-700">$100</span>
              <Sparkles size={10} className="text-gray-400" />
            </p>
          </div>
        </div>

        {/* ── Main Header ── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[68px] items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="group shrink-0">
              <img
                src="logo (2).svg"
                alt="Elite Circle"
                className="h-9 w-auto cursor-pointer opacity-80 transition-all duration-300 group-hover:opacity-100"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gray-400 transition-colors duration-200 hover:text-gray-800"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gray-800 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-1">

              {/* Desktop Search */}
              <div className="hidden items-center lg:flex">
                {!searchOpen ? (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-gray-400 transition-all duration-200 hover:bg-gray-200 hover:text-gray-700"
                    aria-label="Open search"
                  >
                    <Search size={16} />
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Input
                        placeholder="Search products..."
                        type="text"
                        autoFocus
                        className="h-9 w-60 rounded-md border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:ring-0"
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                    </div>
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="flex h-9 w-9 items-center justify-center rounded-md text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-700"
                      aria-label="Close search"
                    >
                      <X size={15} />
                    </button>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="mx-2 hidden h-4 w-px bg-gray-300 lg:block" />

              {/* Cart */}
              <Link
                href="/cart"
                className="group relative flex h-9 w-9 items-center justify-center rounded-md text-gray-400 transition-all duration-200 hover:bg-gray-200 hover:text-gray-700"
              >
                <ShoppingCart size={18} />
                {savedCart.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-800 text-[0.52rem] font-bold text-white">
                    {savedCart.length}
                  </span>
                )}
              </Link>

              {/* Theme Toggle */}
              <div className="hidden sm:block">
                <ModeToggle />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-md text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-700 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>

            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-7xl space-y-5 px-4 py-6 sm:px-6">

            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
              <Input
                placeholder="Search products..."
                type="text"
                className="h-10 w-full rounded-md border-gray-300 bg-gray-50 pl-9 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
              />
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center gap-3 rounded-md px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-800"
                >
                  <span className="h-px w-3 bg-gray-300 transition-all duration-200 group-hover:w-5 group-hover:bg-gray-600" />
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Theme Toggle */}
            <div className="border-t border-gray-200 pt-4 sm:hidden">
              <ModeToggle />
            </div>

          </div>
        </div>

      </header>
    </>
  );
};

export default Header;