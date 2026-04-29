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
    points: ["Aerospace", "Medical", "Jig & Fixtures", "Tool & Die"],
    description: "High-precision machining solutions tailored for complex industrial requirements.",
    image: "/machines/vmc-1.png",
    subSections: [
      {
        title: "Aerospace Components Manufacturing",
        image: "/services/AerospaceComponentsManufacturing.jpg",
        content: "Precision-engineered components for the aerospace industry, where safety and reliability are paramount. We specialize in machining complex parts using high-grade materials like Titanium and Inconel, adhering to stringent quality standards and tight tolerances required for flight-critical applications."
      },
      {
        title: "Medical Components Manufacturing",
        image: "/services/MedicalComponentsManufacturing.avif",
        content: "Manufacturing high-precision medical device components and surgical instruments. Our processes ensure extreme accuracy and surface finish quality, utilizing bio-compatible materials to meet the rigorous demands of the healthcare industry and improve patient outcomes."
      },
      {
        title: "JIG & FIXTURES",
        image: "/services/jig-&-fixture.png",
        content: "With the rapid advancement in manufacturing technology, consumerism has increased over the years. Therefore, to meet the higher demands, manufacturers have come up with innovative methods of producing high-quality products at a much faster rate."
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
    image: "/services/manufacturing.png",
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
    image: "/services/engineering.png",
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
                {service.subSections ? (
                  <>
                    {/* 1. Header Area for Multi-column services */}
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

                    {/* Case 1: CNC Machining (Grid of Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {service.subSections.map((sub: any, idx) => (
                        <MotionDiv
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative h-[650px] rounded-3xl overflow-hidden group/card shadow-2xl border border-slate-100/10 flex flex-col bg-vme-slate"
                        >
                          {/* Top Image Section (Clearly Separate) */}
                          <div className="relative h-72 w-full shrink-0">
                            <Image
                              src={sub.image || service.image}
                              alt={sub.title}
                              fill
                              className="object-cover group-hover/card:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-vme-dark/50 to-transparent" />
                          </div>

                          {/* Bottom Content Section (With Blur Effect) */}
                          <div className="flex-grow relative overflow-hidden">
                            {/* Blurred Image Background for the Content Area to make the effect pop */}
                            <Image
                              src={sub.image || service.image}
                              alt=""
                              fill
                              className="object-cover blur-3xl opacity-20 scale-150"
                            />
                            <div className="absolute inset-0 backdrop-blur-2xl bg-vme-slate/80 p-8 flex flex-col">
                              <div className="relative z-10 flex-grow">
                                <h3 className="text-xl font-bold font-outfit text-white mb-4 flex items-center gap-3">
                                  <span className="w-1.5 h-6 bg-vme-red rounded-full"></span>
                                  {sub.title}
                                </h3>
                                <p className="text-white/70 text-[13px] leading-relaxed text-justify line-clamp-8">
                                  {sub.content}
                                </p>
                              </div>
                              
                              <div className="mt-auto pt-6 flex justify-between items-center border-t border-white/10">
                                <span className="text-[10px] font-black uppercase tracking-widest text-vme-red opacity-80">Vivegan Precision</span>
                                <service.icon size={22} className="text-white/30 group-hover/card:text-vme-red transition-colors" />
                              </div>
                            </div>
                          </div>
                        </MotionDiv>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Case 2: Standard (Header & Points together in one column + Image in another) */
                  <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Image side */}
                    <div className="w-full lg:w-5/12 relative">
                      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100/10 group/card">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover/card:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-vme-dark via-vme-dark/20 to-transparent"></div>

                        {/* Bottom Quote/Desc Overlay - Intensified Blur */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-vme-slate/60 border-t border-white/10 group-hover/card:bg-vme-slate/70 transition-all duration-500">
                          <p className="text-lg md:text-xl font-outfit font-medium text-white leading-snug italic">
                            "{service.description}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Info side (Header + Details) */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center">
                      <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
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

                      <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="w-1.5 h-8 bg-vme-blue rounded-full"></span>
                          <h4 className="text-2xl font-bold font-outfit text-vme-slate tracking-tight">
                            Key Technical Points
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-md transition-all group/point">
                              <CheckCircle2 size={18} className="text-vme-red shrink-0 group-hover/point:scale-110 transition-transform" />
                              <span className="text-xs font-bold text-slate-700 leading-tight">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials We Machine Section ────────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vme-blue/5 skew-x-12 transform origin-top-right -z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-outfit text-vme-slate mb-4">Materials We Machine</h2>
              <p className="text-slate-500 text-lg">We work with a wide variety of high-grade materials to meet diverse industry standards and application requirements.</p>
            </div>
            <div className="w-20 h-1 bg-vme-red rounded-full hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group/card hover:border-vme-blue/30 transition-all duration-500 overflow-hidden flex flex-col hover:shadow-2xl relative aspect-[4/5]">
              <Image src="/materials/ss-materials.png" alt="Stainless Steel" fill className="object-cover object-top group-hover/card:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-vme-dark/80 via-transparent to-transparent"></div>

              {/* Intense Blurred Title & Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-vme-slate/60 border-t border-white/10 group-hover/card:bg-vme-slate/70 transition-all duration-500">
                <h3 className="text-xl font-bold text-white font-outfit mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-vme-red rounded-full animate-pulse"></span>
                  Stainless Steel Grades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["SS304", "SS304L", "SS316", "SS316L", "SS321", "SS317", "SS317L", "SS410", "SS347H", "Nitronic 60", "17-4PH"].map((grade, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-white group-hover:bg-vme-red transition-all">
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group/card hover:border-vme-blue/30 transition-all duration-500 overflow-hidden flex flex-col hover:shadow-2xl relative aspect-[4/5]">
              <Image src="/materials/metals.png" alt="Industrial Metals" fill className="object-cover object-top group-hover/card:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-vme-dark/80 via-transparent to-transparent"></div>

              {/* Intense Blurred Title & Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-vme-slate/60 border-t border-white/10 group-hover/card:bg-vme-slate/70 transition-all duration-500">
                <h3 className="text-xl font-bold text-white font-outfit mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-vme-red rounded-full animate-pulse"></span>
                  Industrial Metals
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Mild Steel", "EN Series", "Aluminum", "High-Speed Steel (HSS)", "Castings", "Aluminum & SS Forgings"].map((metal, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-white/90">
                      <CheckCircle2 size={14} className="text-vme-red" />
                      {metal}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group/card hover:border-vme-blue/30 transition-all duration-500 overflow-hidden flex flex-col hover:shadow-2xl relative aspect-[4/5]">
              <Image src="/materials/plastics.png" alt="Specialty Materials" fill className="object-cover object-top group-hover/card:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-vme-dark/80 via-transparent to-transparent"></div>

              {/* Intense Blurred Title & Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-vme-slate/60 border-t border-white/10 group-hover/card:bg-vme-slate/70 transition-all duration-500">
                <h3 className="text-xl font-bold text-white font-outfit mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-vme-red rounded-full animate-pulse"></span>
                  Specialty Materials
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Polyurethane", "Nylon", "Seamless Pipes", "Welded Assemblies"].map((material, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-white/90">
                      <CheckCircle2 size={14} className="text-vme-red" />
                      {material}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
