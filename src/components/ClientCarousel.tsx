"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  { name: 'Apex Industrial', logo: '/logos/vme-logo.png' }, // Placeholders
  { name: 'Global Tech', logo: '/logos/vme-logo.png' },
  { name: 'Precision Parts', logo: '/logos/vme-logo.png' },
  { name: 'Chennai Aero', logo: '/logos/vme-logo.png' },
  { name: 'Smart Machining', logo: '/logos/vme-logo.png' },
  { name: 'Tough Tools', logo: '/logos/vme-logo.png' },
]

const ClientCarousel = () => {
  return (
    <div className="py-20 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold font-outfit text-vme-slate">Our Trusted Clients</h2>
        <div className="w-20 h-1 bg-vme-red mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex animate-infinite-scroll whitespace-nowrap py-10">
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="px-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="relative w-40 h-16 flex items-center justify-center">
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  fill 
                  className="object-contain" 
                  sizes="160px"
                />
              </div>
              <span className="ml-4 font-outfit font-bold text-slate-400 group-hover:text-vme-slate transition-colors">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientCarousel
