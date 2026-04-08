"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const originalTestimonials = [
  {
    name: "Rajesh Kumar",
    role: "Production Manager",
    company: "Automotive Solutions Ltd.",
    content: "The precision and quality of the CNC components provided by VME exceeded our expectations. Their technical expertise and timely delivery have made them our go-to partner for all engineering needs.",
    rating: 5,
    initials: "RK"
  },
  {
    name: "Sarah Chen",
    role: "Aeronautical Engineer",
    company: "SkyHigh Aerospace",
    content: "Working with Vivegan Manufacturing Engineering has been a game-changer for our prototyping phase. Their attention to detail and ability to handle tight tolerances is unmatched in the industry.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Vikram Singh",
    role: "CTO",
    company: "MedTech Innovations",
    content: "VME's 4th axis machining capabilities allowed us to create complex medical device parts that other suppliers couldn't handle. Their commitment to excellence is evident in every piece they produce.",
    rating: 5,
    initials: "VS"
  },
  {
    name: "Anita Desai",
    role: "Operations Head",
    company: "Precision Tools India",
    content: "VME has consistently delivered high-precision jigs and fixtures that have significantly improved our production efficiency. Their support from design to delivery is exceptional.",
    rating: 5,
    initials: "AD"
  },
  {
    name: "Michael Roberts",
    role: "Engineering Director",
    company: "Global Dynamics",
    content: "The communication and project management at VIVEGAN are top-tier. They understand the nuances of engineering design and always provide valuable insights for manufacturability.",
    rating: 5,
    initials: "MR"
  }
]

// To create a seamless loop, we clone the items
const testimonials = [...originalTestimonials, ...originalTestimonials, ...originalTestimonials]

const Testimonials = () => {
  const [itemsToShow, setItemsToShow] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(originalTestimonials.length)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleTransitionEnd = () => {
    // Check if we've reached the duplicated sets
    if (currentIndex >= originalTestimonials.length * 2) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex - originalTestimonials.length)
    } else if (currentIndex <= originalTestimonials.length - itemsToShow) {
      // Logic for backward wrap if needed
    }
  }

  // Effectively reset transition state for smooth jumps
  useEffect(() => {
    if (!isTransitioning) {
      // Force a reflow or wait a tick to re-enable transitions
      const timer = setTimeout(() => setIsTransitioning(true), 10)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1)
  }

  const offset = (currentIndex * 100) / itemsToShow

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full translate-y-1/2 -translate-x-1/2 -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-vme-red font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-vme-slate">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-vme-blue mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-6">Trusted by leading companies across automotive, aerospace, and medical sectors.</p>
          </motion.div>
        </div>

        <div className="relative group/nav max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-vme-slate hover:bg-vme-blue hover:text-white transition-all active:scale-95 md:opacity-0 group-hover/nav:opacity-100"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-vme-slate hover:bg-vme-blue hover:text-white transition-all active:scale-95 md:opacity-0 group-hover/nav:opacity-100"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${offset}%` }}
              transition={isTransitioning ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleTransitionEnd}
            >
              {testimonials.map((testimonial, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 px-4" 
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:border-vme-blue/30 transition-all group">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} size={16} className="fill-vme-blue text-vme-blue" />
                      ))}
                    </div>

                    <div className="relative mb-8 flex-grow">
                      <Quote className="absolute -top-4 -left-4 text-vme-blue/10 w-12 h-12 -z-0" />
                      <p className="text-slate-600 italic leading-relaxed relative z-10 text-sm md:text-base">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4 border-t border-slate-50 pt-6">
                      <div className="w-12 h-12 rounded-full bg-vme-slate flex items-center justify-center text-white font-bold group-hover:bg-vme-red transition-colors shrink-0 shadow-sm">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-vme-slate text-sm md:text-base">{testimonial.name}</h4>
                        <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Pagination dots (using original length) */}
          <div className="flex justify-center gap-2 mt-12">
            {originalTestimonials.map((_, i) => {
              const isActive = (currentIndex % originalTestimonials.length) === i;
              return (
                <button
                  key={i}
                  onClick={() => {
                    const diff = i - (currentIndex % originalTestimonials.length);
                    setCurrentIndex(currentIndex + diff);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-vme-red w-6' : 'bg-slate-200'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
