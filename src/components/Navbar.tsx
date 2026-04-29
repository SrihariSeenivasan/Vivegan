"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Facility', href: '/facility' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-2 shadow-lg' : 'bg-vme-dark/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
    >
      {/* Top bar for contact info - hidden on scroll/mobile */}
      <div className={`hidden md:block border-b border-white/10 pb-2 mb-2 transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-xs text-vme-blue uppercase tracking-widest font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-vme-red" /> +91 83440 70649</span>
            <span className="flex items-center gap-2 lowercase"><Mail size={14} className="text-vme-red" /> viveganme@gmail.com</span>
          </div>
          <div>Established 2023 | Precision Excellence</div>
        </div>
      </div>

      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-15 h-15 bg-white rounded-4xl p-2 group-hover:scale-105 transition-transform overflow-hidden">
            <Image
              src="/logos/viveganLogo.jpeg"
              alt="VME Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-outfit text-white tracking-tight leading-none">VIVEGAN</span>
            <span className="text-[10px] text-vme-blue uppercase tracking-[0.2em] font-bold">Manufacturing Engineering</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-vme-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vme-red transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-vme-red hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/90"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-vme-red text-white text-center py-3 rounded-xl font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
