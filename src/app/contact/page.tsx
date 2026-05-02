"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, User } from 'lucide-react'

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-20">
      {/* Contact Banner */}
      <section className="bg-vme-red py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white">Let&apos;s Connect</h1>
            <p className="text-white/80 mt-4 text-lg">Discuss your precision manufacturing requirements with our engineering team.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Info Column */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-outfit text-vme-slate">Contact Information</h2>
                <p className="text-slate-500 leading-relaxed">
                  Our office and factory is located in the heart of Ambattur Industrial Estate, Chennai. We are ready to serve your needs 24/7 for critical requirements.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Our Location", text: "No.38 Padavattamman Industrial Estate, Ambattur, Chennai - 600098" },
                  { icon: Phone, label: "Call Us", text: "+91 83440 70649" },
                  { icon: Mail, label: "Email Addresses", text: "viveganme@gmail.com" },
                  { icon: Clock, label: "Working Hours", text: "Mon - Sat: 9:00 AM - 7:00 PM" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-vme-red shrink-0 border border-slate-100 group-hover:bg-vme-red group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</div>
                      <div className="text-slate-700 font-medium mt-1">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-vme-blue/5 rounded-3xl border border-vme-blue/10 space-y-4">
                <h4 className="font-bold text-vme-blue font-outfit flex items-center gap-2">
                  <User size={18} /> Mr. Manivasagam BE
                </h4>
                <p className="text-sm text-slate-500 italic uppercase tracking-wider">Proprietor & Engineering Lead</p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-vme-slate">Message Sent Successfully!</h3>
                    <p className="text-slate-500">Thank you for reaching out. Our team will get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="text-vme-blue font-bold uppercase tracking-widest text-xs border-b border-vme-blue pb-1">Send another message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-vme-blue/20 focus:border-vme-blue transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-vme-blue/20 focus:border-vme-blue transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-vme-blue/20 focus:border-vme-blue transition-all"
                        placeholder="Request for Quote - Milling Project"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                      <textarea 
                        rows={5}
                        required
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-vme-blue/20 focus:border-vme-blue transition-all resize-none"
                        placeholder="How can we help you with your project?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-vme-blue hover:bg-vme-slate text-white py-5 rounded-xl font-bold shadow-lg shadow-vme-blue/20 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]"
                    >
                      Process Inquiry <MessageSquare size={20} />
                    </button>
                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">We value your privacy. No data is shared with third parties.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grayscale opacity-40">
           {/* Placeholder for Map Image/Iframe */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-white text-center shadow-2xl max-w-sm">
          <MapPin size={48} className="text-vme-red mx-auto mb-4" />
          <h3 className="text-xl font-bold text-vme-slate font-outfit mb-2">Visit Our Factory</h3>
          <p className="text-sm text-slate-500 mb-6">Ambattur Industrial Estate, Chennai, Tamil Nadu</p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=No.38+Padavattamman+Industrial+Estate+Ambattur+Chennai+600098" 
            target="_blank"
            className="inline-block bg-vme-slate text-white px-8 py-3 rounded-lg font-bold text-sm tracking-widest uppercase"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
