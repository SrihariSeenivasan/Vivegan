"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cpu, Settings, DraftingCompass, CheckCircle2 } from 'lucide-react'

const MotionDiv = motion.div

const services = [
  {
    title: "CNC Machining Service",
    icon: Cpu,
    points: ["Jig & Fixtures", "Component Manufacturing", "Tool & Die"],
    description: "High-precision machining solutions tailored for complex industrial requirements.",
    image: "/machines/vmc-1.png",
    subSections: [
      {
        title: "JIG & FIXTURES",
        image: "/machines/vmc-1.png",
        content: "With the rapid advancement in manufacturing technology, consumerism has increased over the years. Therefore, to meet the higher demands, manufacturers have come up with innovative methods of producing high-quality products at a much faster rate."
      },
      {
        title: "COMPONENT MANUFACTURING",
        image: "/services/component-manufacturing.png",
        content: "Component engineering can also refer to the manufacturer of selected equipment used in theatrical motion picture projection. This equipment falls into two categories: units that automatically control the presentation and those that comprise part of the sound system. Auto component manufacturing, aerospace component manufacturing."
      },
      {
        title: "TOOL & DIE",
        image: "/services/tool-die.png",
        content: "Tool and die makers are precision metal workers who craft tools and metal forms for stamping and forging operations. They analyze design specifications, cut and shape metal, assemble parts, and test completed products for use in manufacturing facilities."
      }
    ],
    details: ["Precision Jigs & Fixtures Manufacturing", "Press Tools & Mold Manufacturing", "Custom Receiver Gage Manufacturing", "Advanced Production Management", "Precision Conventional Machining", "Precision CNC Machining", "Job Orders"]
  },
  {
    title: "Manufacturing Service",
    icon: Settings,
    points: ["Precision Machining", "Custom Tools", "Production Orders"],
    description: "World-class manufacturing facilities for precision components and assemblies.",
    image: "/parts/parts-1.png",
    details: [
      "Precision Conventional Machining",
      "Precision Jigs & Fixtures Manufacturing",
      "Press Tools & Mold Manufacturing",
      "Custom Receiver Gage Manufacturing",
      "Precision CNC Machining",
      "Job Orders",
      "Advanced Production Management"
    ]
  },
  {
    title: "Engineering Service",
    icon: DraftingCompass,
    points: ["3D Design", "Conceptual Modeling", "Reverse Engineering"],
    description: "Innovative engineering support at every stage of the product lifecycle.",
    image: "/machines/vmc-1.png",
    details: [
      "Conceptual Design for Manufacturability",
      "3D Process Design & Drafting",
      "Jigs & Fixture Design",
      "Press Tool & Mold Design",
      "Turn Key Solutions for CNC Multi-Axis Machining",
      "CAM Programming & Advanced Simulation",
      "Legacy Data Conversion",
      "Advanced Production Documentation",
      "Manufacturing Data Management",
      "Advanced Tooling Design",
      "Custom Receiver Gage Design",
      "Reverse Engineering",
      "Re-Engineering",
      "Inspection Data Management"
    ]
  }
]

const ServicesPage = () => {
  return (
    <div className="pt-20 bg-white">
      {/* ── Professional Hero Banner ─────────────────────────── */}
      <section className="bg-vme-blue py-20 relative overflow-hidden">
        {/* Blueprint/Technical Background Grid */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/parts/parts-1.png" alt="Engineering Grid" fill className="object-cover" />
        </div>
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-vme-blue via-vme-blue/80 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <span className="w-2 h-2 rounded-full bg-vme-red animate-pulse"></span>
              Vertical Integration
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-[1.1]">
              Our <span className="text-white/60">Services</span>
            </h1>
            <p className="text-white/80 mt-4 max-w-xl text-base md:text-lg font-medium leading-relaxed">
              High-precision component manufacturing and innovative engineering solutions for global industries.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── Services Breakdown ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, i) => (
              <div key={i} className="group">
                {/* 1. Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-vme-red shadow-sm group-hover:bg-vme-red group-hover:text-white transition-all duration-300">
                      <service.icon size={32} />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-vme-slate tracking-tight">
                        {service.title}
                      </h2>
                      <div className="flex gap-4 mt-2">
                        {service.points.map((p, idx) => (
                          <span key={idx} className="text-[10px] uppercase font-black tracking-widest text-vme-blue border-r border-slate-200 pr-4 last:border-0">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Content Area */}
                <div>
                  {service.subSections ? (
                    /* Case 1: CNC Machining (Grid of Cards) */
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {service.subSections.map((sub: any, idx) => (
                        <MotionDiv
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative aspect-[4/5] rounded-3xl overflow-hidden group/card shadow-2xl flex flex-col border border-slate-100/10"
                        >
                          {/* Background Image */}
                          <Image
                            src={sub.image || service.image}
                            alt={sub.title}
                            fill
                            className="object-cover group-hover/card:scale-110 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-vme-dark/90 via-vme-dark/20 to-transparent" />
                          
                          {/* Blurred Bottom Content Area (Fixed Height for Alignment) */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-xl bg-white/5 border-t border-white/10 group-hover/card:bg-white/10 transition-all duration-500 overflow-hidden h-[240px] flex flex-col justify-center">
                            <div className="relative z-10 transition-transform duration-500 group-hover/card:-translate-y-2">
                              <h3 className="text-xl font-bold font-outfit text-white mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-vme-red rounded-full"></span>
                                {sub.title}
                              </h3>
                              <p className="text-white/80 text-[14px] leading-relaxed text-justify opacity-100 transition-all duration-500">
                                {sub.content}
                              </p>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-30 transition-opacity">
                              <service.icon size={60} className="text-white" />
                            </div>
                          </div>
                        </MotionDiv>
                      ))}
                    </div>
                  ) : (
                    /* Case 2: Standard (Image Card + Points Sidebar) */
                    <div className={`flex flex-col lg:flex-row items-start gap-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Image side with Card Overlay (Fixed Height for Global Symmetry) */}
                      <div className="w-full lg:w-1/2 relative h-[650px]">
                        <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100/10 group/card">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover/card:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-vme-dark/90 via-vme-dark/20 to-transparent"></div>
                          
                          {/* Blurred Bottom Content Area */}
                          <div className="absolute bottom-0 left-0 right-0 p-10 backdrop-blur-xl bg-white/5 border-t border-white/10 group-hover/card:bg-white/10 transition-all duration-500 h-[240px] flex flex-col justify-center">
                            <div className="relative z-10 transition-transform duration-500 group-hover/card:-translate-y-2">
                              <p className="text-xl md:text-2xl font-outfit font-medium text-white leading-snug italic">
                                "{service.description}"
                              </p>
                            </div>
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover/card:opacity-30 transition-opacity">
                              <service.icon size={80} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info side (Details) */}
                      <div className="w-full lg:w-1/2 space-y-8 py-6">
                        <h4 className="text-2xl font-bold font-outfit text-vme-slate tracking-tight flex items-center gap-4">
                          <span className="w-1.5 h-8 bg-vme-blue rounded-full"></span>
                          Key Technical Points
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all group/point">
                              <CheckCircle2 size={20} className="text-vme-red shrink-0 group-hover/point:scale-110 transition-transform" />
                              <span className="text-sm font-bold text-slate-700 leading-tight">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precision mastery Section ──────────────────────────── */}
      <section className="py-20 bg-vme-dark relative overflow-hidden">
        {/* Subtle Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">Tight Tolerance Mastery</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Specializing in the manufacturing of tight tolerance parts up to <span className="text-vme-blue font-black underline decoration-vme-red underline-offset-8">0.0002"</span> in production mode, utilizing premium materials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Standard Accuracy", val: "±0.005mm", color: "text-white" },
                { label: "Min. Tolerance", val: "0.0002\"", color: "text-vme-blue" },
                { label: "Surface Finish", val: "N4 – N7", color: "text-white" }
              ].map((stat, i) => (
                <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 group-hover:text-vme-blue transition-colors">{stat.label}</div>
                  <div className={`text-4xl font-bold font-outfit ${stat.color}`}>{stat.val}</div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
