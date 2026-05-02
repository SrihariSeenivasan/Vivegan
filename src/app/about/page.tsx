"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye, Users, CheckCircle2 } from 'lucide-react'
import ClientCarousel from '@/components/ClientCarousel'

const MotionDiv = motion.div

const AboutPage = () => {
  return (
    <div className="pt-20 bg-white">

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="bg-vme-dark py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/machines/vmc-1.png" alt="Engineering Background" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-vme-red via-vme-blue to-vme-red"></div>
        <div className="container mx-auto px-6 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-vme-blue border border-vme-blue/30 bg-vme-blue/10 px-4 py-1.5 rounded-full mb-5">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-4 leading-tight">
              About <span className="text-vme-blue">Us</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium uppercase tracking-widest">
              Precision Manufacturing Excellence Since 2023
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text side */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-vme-red border border-vme-red/30 bg-vme-red/5 px-4 py-1.5 rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl font-bold font-outfit text-vme-slate leading-tight">
                  Quality Precision Machining &amp; Engineering
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  VIVEGAN MANUFACTURING ENGINEERING was established in 2023 to provide high-precision
                  manufacturing solutions with innovative engineering at the world-class cutting edge.
                </p>
                <p>
                  We specialize in total project management, providing support services at all
                  stages—from product development and design for manufacturability to prototyping and
                  full-scale production.
                </p>
                <p>
                  Our team has vast experience in manufacturing various materials like Aluminum,
                  Stainless Steel, Alloy Steel, Inconel, Titanium, and more for critical domains such
                  as Aerospace, Automotive, Oil &amp; Gas, and Medical.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'Specialization in tight tolerance parts up to 0.0002"',
                  "Innovative engineering & strategic manufacturing",
                  "Expert team of production and planning engineers",
                  "Zero defect delivery commitment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-vme-blue shrink-0 mt-0.5" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionDiv>

            {/* Image side */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative group">
                <Image
                  src="/assets/about.webp"
                  alt="Facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="text-4xl font-bold text-vme-red font-outfit">0.0002 &quot;</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Tolerance Precision</div>
              </div>
              {/* Corner decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-vme-blue/30 rounded-tr-3xl pointer-events-none"></div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Teamwork ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-vme-blue border border-vme-blue/30 bg-vme-blue/10 px-4 py-1.5 rounded-full mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-vme-slate">
              What Drives Us
            </h2>
            <div className="w-16 h-1 bg-vme-red rounded-full mx-auto mt-4"></div>
          </div>

          {/* Stacked large cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: Eye,
                number: "01",
                title: "Vision",
                desc: 'Our vision is to become a leading world class, vertically integrated Components/Assemblies manufacturing company in India to support global requirements.',
                bg: "bg-vme-blue",
                textColor: "text-white",
                subColor: "text-white/70",
                numColor: "text-white/10",
              },
              {
                icon: Target,
                number: "02",
                title: "Mission",
                desc: 'Our mission is to maintain and grow the supply of quality products and "Build to print" components/assemblies in the fields of Precision CNC manufacturing, Jigs/Fixtures, Mold/Die, Metal stamping and Injection molding etc. to the Aerospace and equipment makers for Semiconductor, Oil/Gas, Medical and other industries.',
                bg: "bg-vme-red",
                textColor: "text-white",
                subColor: "text-white/70",
                numColor: "text-white/10",
              },
              {
                icon: Users,
                number: "03",
                title: "TeamWork",
                desc: "At VIVEGAN MANUFACTURING ENGINEERING, we know success and transformational change is only achieved through working together.",
                bg: "bg-vme-slate",
                textColor: "text-white",
                subColor: "text-white/70",
                numColor: "text-white/10",
              },
            ].map((item, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`${item.bg} rounded-3xl overflow-hidden relative group`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center">
                  {/* Left — icon + title */}
                  <div className="relative px-10 py-12 md:border-r border-white/10 flex flex-col justify-center space-y-5">
                    {/* Giant background number */}
                    <span className={`absolute top-4 right-4 text-9xl font-black font-outfit leading-none select-none pointer-events-none ${item.numColor}`}>
                      {item.number}
                    </span>
                    <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <item.icon size={30} className={item.textColor} />
                    </div>
                    <div className="relative z-10">
                      <p className={`text-xs font-bold uppercase tracking-[0.3em] ${item.subColor} mb-2`}>VME Principle</p>
                      <h3 className={`text-4xl font-bold font-outfit ${item.textColor} leading-tight`}>{item.title}</h3>
                    </div>
                  </div>

                  {/* Right — description */}
                  <div className="px-10 py-12 flex items-center">
                    <div className="space-y-4">
                      {/* Quote mark */}
                      <div className={`text-5xl leading-none font-serif ${item.subColor} select-none`}>&ldquo;</div>
                      <p className={`${item.textColor} text-base md:text-lg leading-relaxed font-medium`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle bottom accent bar */}
                <div className="h-1 bg-white/20"></div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Section ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left column */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 lg:sticky lg:top-32"
            >
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-vme-red border border-vme-red/30 bg-vme-red/5 px-4 py-1.5 rounded-full mb-4">
                  Our Commitment
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-outfit text-vme-red leading-tight">
                  Quality
                </h2>
                <div className="w-16 h-1 bg-vme-blue rounded-full mt-4"></div>
              </div>

              <p className="text-slate-600 leading-relaxed">
                At Vivegan Manufacturing Engineering, quality is not just a standard — it is a
                culture. Every process, every part, and every delivery reflects our commitment to
                excellence.
              </p>

              <div className="bg-gradient-to-br from-vme-red/5 to-vme-blue/5 border border-vme-red/10 rounded-2xl p-8 space-y-2">
                <div className="w-8 h-8 text-vme-red mb-3">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" /></svg>
                </div>
                <p className="text-vme-slate font-bold font-outfit text-lg leading-snug">
                  On-Time Delivery with Zero Defects
                </p>
                <p className="text-slate-500 text-sm">— The VME Promise</p>
              </div>

              {/* Mini stat strip */}
              <div className="flex gap-6">
                <div className="bg-vme-slate rounded-2xl px-6 py-5 text-center flex-1">
                  <div className="text-2xl font-bold text-vme-blue font-outfit">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Quality Rate</div>
                </div>
                <div className="bg-vme-slate rounded-2xl px-6 py-5 text-center flex-1">
                  <div className="text-2xl font-bold text-white font-outfit">Zero</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Defect Policy</div>
                </div>
              </div>
            </MotionDiv>

            {/* Right column — quality points */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {[
                "Followed Reduce NG",
                "Control work delay",
                "Improve employee skill",
                "Improve the Work Environment",
                "Implement the Competitive Cost Strategy",
                "Develop the Lean Manufacturing Techniques",
                "Enhanced Manufacturing Efficiency",
                "On-Time Delivery with Zero Defects",
                "Develop the skills of the Smart tech engineering Team thru training",
                "Contribute to the clean environment",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 py-3.5 px-5 rounded-xl bg-white border border-slate-100 hover:border-vme-red/30 hover:shadow-md hover:translate-x-1 transition-all duration-200 group"
                >
                  {/* Bullseye icon matching the reference */}
                  <div className="w-5 h-5 rounded-full border-2 border-vme-red flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-vme-red transition-colors">
                    <div className="w-2 h-2 rounded-full bg-vme-red group-hover:bg-white transition-colors"></div>
                  </div>
                  <span className="text-[14px] font-medium text-slate-700 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ── Client Carousel ─────────────────────────────────── */}
      <ClientCarousel />

      {/* ── Stats Bar ───────────────────────────────────────── */}
      <section className="py-20 bg-vme-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vme-red via-vme-blue to-vme-red"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {[
              { val: "2023", label: "Established" },
              { val: '0.0001"', label: "Min Tolerance" },
              { val: "100%", label: "Quality Assurance" },
              { val: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-8 py-6">
                <div className="text-4xl md:text-5xl font-bold font-outfit text-vme-blue">{stat.val}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
