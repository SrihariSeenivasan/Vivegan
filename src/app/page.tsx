"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Settings, Cpu, DraftingCompass, ArrowRight, ShieldCheck, Microscope, Zap } from 'lucide-react'
import Testimonials from '@/components/Testimonials'

const MotionDiv = motion.div

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-vme-dark">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/machines/vmc-1.png" 
            alt="CNC Machining" 
            fill 
            className="object-cover opacity-30 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vme-dark via-vme-dark/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-vme-red/10 border border-vme-red/20 px-4 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-vme-red rounded-full animate-pulse"></span>
              <span className="text-vme-red text-xs font-bold uppercase tracking-widest">Precision Engineering Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-outfit text-white mb-6 leading-tight">
              The Bedrock of <br/>
              <span className="text-vme-blue">Innovative Engineering</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Providing world-class precision manufacturing solutions since 2021. Specializing in high-tolerance CNC machining for Aerospace, Automotive, and Medical industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/services" 
                className="bg-vme-blue hover:bg-sky-400 text-vme-dark px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:translate-y-[-2px]"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link 
                href="/portfolio" 
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all"
              >
                View Our Facility
              </Link>
            </div>
          </MotionDiv>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden lg:flex gap-12 z-10 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-vme-blue font-outfit">0.0002"</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Tolerance Precision</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-vme-red font-outfit">2021</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Established Year</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-outfit">4th Axis</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">VMC Capability</div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/parts/parts-1.png" alt="Machined Parts" width={600} height={400} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-vme-blue/10 rounded-2xl -z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-vme-red/30"></div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-vme-red font-bold uppercase tracking-widest text-sm">Welcome to VME</h3>
                <h2 className="text-4xl font-bold font-outfit text-vme-slate">Your Solution in Precision Manufacturing</h2>
                <p className="text-slate-600 leading-relaxed">
                  VIVEGAN MANUFACTURING ENGINEERING specializes in total project management, providing support services at all stages from product development engineering services, design for manufacturability, prototyping, to production.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous standards for every component." },
                  { icon: Zap, title: "Fast Turnaround", desc: "Efficient processes to meet your deadlines." },
                  { icon: Microscope, title: "Expert Engineering", desc: "Decades of collective technical expertise." },
                  { icon: Settings, title: "Advanced Tech", desc: "Modern 4th Axis VMC machinery." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-vme-blue/30 transition-colors group">
                    <item.icon className="text-vme-blue group-hover:text-vme-red transition-colors shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-vme-slate">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold font-outfit text-vme-slate text-center">Core Engineering Expertise</h2>
            <div className="w-20 h-1 bg-vme-red mx-auto rounded-full"></div>
            <p className="text-slate-600">We offer a vertical array of services designed to take your concept from design to high-precision reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "CNC Machining", 
                desc: "Specialized in Jig & Fixtures, Component Manufacturing, and Tool & Die with high accuracy.",
                image: "/machines/vmc-1.png"
              },
              { 
                icon: Settings, 
                title: "Manufacturing Service", 
                desc: "Precision conventional machining, press tools, and mold manufacturing with innovative tech.",
                image: "/parts/parts-1.png"
              },
              { 
                icon: DraftingCompass, 
                title: "Engineering Service", 
                desc: "3D Process design, conceptual modeling for manufacturability, and turn-key solutions.",
                image: "/machines/vmc-1.png"
              }
            ].map((service, i) => (
              <MotionDiv 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-vme-slate/40 group-hover:bg-vme-blue/40 transition-colors"></div>
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg text-vme-blue shadow-lg">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-vme-slate">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="text-vme-blue font-bold text-sm inline-flex items-center gap-2 group-hover:text-vme-red transition-colors">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-vme-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-outfit">Ready to start your next project?</h2>
            <p className="text-white/80">Get a precision-focused consultation and quote from our engineering experts.</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-white text-vme-blue hover:bg-vme-slate hover:text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl"
          >
            Contact VME Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
