"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Ruler, Monitor, Cpu, Gauge, ShieldCheck, Cog, CheckCircle2 } from 'lucide-react'

const machines = [
  {
    name: "VME 850V",
    type: "Vertical Machining",
    bed: "1000 x 510 mm",
    travel: "X: 800mm | Y: 500mm | Z: 500mm",
    speed: "10000 RPM",
    controller: "FANUC Series Oi-MF plus",
    extra: "4th Axis Rotary Table (200mm dia Ucam)",
    image: "/machines/VME850V.png"
  },
  {
    name: "VME 9500",
    type: "Vertical Machining",
    bed: "1000 x 650 mm",
    travel: "X: 950mm | Y: 550mm | Z: 550mm",
    speed: "10000 RPM",
    controller: "Mitsubishi",
    image: "/machines/cnc-op.png"
  },
  {
    name: "VME RDX-20",
    type: "Vertical Machining",
    bed: "1000 x 510 mm",
    travel: "X: 800mm | Y: 500mm | Z: 500mm",
    speed: "8000 RPM",
    controller: "FANUC Series Oi-MF plus",
    image: "/services/manufacturing.png"
  },
  {
    name: "VME 740V",
    type: "Vertical Machining",
    bed: "900 x 400 mm",
    travel: "X: 750mm | Y: 470mm | Z: 400mm",
    speed: "10000 RPM",
    controller: "FANUC Series Oi-MF plus",
    extra: "4th Axis Rotary Table (200mm dia Ucam)",
    image: "/services/tool-die.png"
  }
]

const instruments = [
  {
    name: "Surface Plate",
    detail: "Grade I, 500 X 500 mm, Granite (GMT Make)",
    image: "/parts/parts-1.png",
    icon: Gauge
  },
  {
    name: "Height Gauge",
    detail: "300 mm Long (Digital Height Gauge Mitutoyo)",
    image: "/machines/vmc-1.png",
    icon: Ruler
  },
  {
    name: "Dial Comparator",
    detail: "1 m Mahr make (1 Nos)",
    image: "/services/component-manufacturing.png",
    icon: Monitor
  },
  {
    name: "Micrometers",
    detail: "0-25 to 50-75 mm (Mitutoyo make)",
    image: "/services/tool-die.png",
    icon: Gauge
  },
  {
    name: "Vernier Calipers",
    detail: "200mm, 300mm, 150mm (Digital Vernier Mitutoyo)",
    image: "/parts/parts-1.png",
    icon: Ruler
  }
]

const FacilityPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 grainy-bg"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">Manufacturing Facility</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Equipped with modern CNC Vertical Machining Centers and high-precision Inspection Equipments to ensure absolute accuracy and quality in every part.
          </p>
        </div>
      </section>

      {/* Machine List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-center gap-4">
            <div className="w-12 h-1 bg-vme-red rounded-full"></div>
            <h2 className="text-3xl font-bold font-outfit text-vme-slate uppercase tracking-wider">Vertical Machining Centers</h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {machines.map((m, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-shadow group">
                <div className="md:w-1/3 bg-slate-200 relative min-h-[200px]">
                  <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-vme-blue text-vme-dark px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">{m.type}</div>
                </div>
                <div className="p-8 flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold font-outfit text-vme-slate">{m.name}</h3>
                    <div className="text-vme-red"><Cpu size={24} /></div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                    <div className="space-y-1">
                      <div className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">Bed Size</div>
                      <div className="font-semibold text-slate-700">{m.bed}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">Spindle Speed</div>
                      <div className="font-semibold text-slate-700">{m.speed}</div>
                    </div>
                    <div className="space-y-1 col-span-2">
                      <div className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">Travel (X/Y/Z)</div>
                      <div className="font-semibold text-slate-700">{m.travel}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">Controller</div>
                      <div className="font-semibold text-slate-700">{m.controller}</div>
                    </div>
                    {m.extra && (
                      <div className="space-y-1">
                        <div className="text-vme-blue uppercase text-[10px] font-bold tracking-widest">Capability</div>
                        <div className="font-semibold text-vme-blue">{m.extra}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vme-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 -z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-vme-blue/10 px-4 py-1 rounded-full text-vme-blue text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} /> Quality Control Mastery
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-outfit text-vme-slate">Gallery</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our quality lab is equipped with calibrated instruments to ensure that every dimension meets the tightest tolerances required by our Aerospace and Automotive partners.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {instruments.map((ins, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-vme-blue/30 transition-all group h-full flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <Image src={ins.image} alt={ins.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-vme-slate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-vme-blue shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <ins.icon size={20} />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-vme-slate mb-2 group-hover:text-vme-blue transition-colors">{ins.name}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{ins.detail}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-vme-red uppercase tracking-widest">Digital Precision</span>
                    <CheckCircle2 size={14} className="text-vme-blue" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-vme-dark rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
              <Image src="/parts/parts-1.png" alt="Lab" fill className="object-cover opacity-30 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-vme-dark via-vme-dark/60 to-transparent"></div>
              <div className="relative z-10 flex flex-col justify-center h-full max-w-xl">
                <h3 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6 leading-tight">ISO Standard Execution</h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic border-l-4 border-vme-red pl-6">
                  "Our commitment to quality is embedded in our processes, following rigorous ISO standards to deliver components that define precision."
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 bg-vme-blue rounded-[3rem] p-12 text-vme-dark flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <ShieldCheck size={48} className="mb-8" />
                <h3 className="text-3xl font-bold font-outfit mb-4">Total Compliance</h3>
                <p className="font-medium text-vme-dark/80">Every instrument is calibrated to global standards ensuring repeatable accuracy.</p>
              </div>
              <Image src="/logos/vme-logo.png" alt="VME logo" width={100} height={100} className="relative z-10 opacity-20 invert group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Overlay */}
      <section className="h-64 relative bg-vme-dark flex items-center justify-center overflow-hidden">
        <Image src="/machines/vmc-1.png" alt="Background" fill className="object-cover opacity-20" />
        <div className="container px-6 relative z-10 text-center">
          <h2 className="text-2xl font-bold font-outfit text-white mb-6 italic">"Precision at Every Micron"</h2>
          <div className="w-32 h-1 bg-vme-blue mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  )
}

export default FacilityPage
