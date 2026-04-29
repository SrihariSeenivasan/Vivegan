import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Globe, Share2, Info } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-vme-dark text-white pt-20 pb-10 border-t border-vme-blue/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-20 h-20 bg-white rounded-4xl p-2 overflow-hidden">
                <Image src="/logos/viveganLogo.jpeg" alt="VME Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-outfit text-white tracking-tight leading-none">VIVEGAN</span>
                <span className="text-[10px] text-vme-blue uppercase tracking-[0.2em] font-bold">Manufacturing Engineering</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Innovative engineering and strategic manufacturing since 2023. Specializing in precision CNC machining and total project management for Aerospace, Automotive, and Medical domains.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-vme-blue transition-colors"><Globe size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-vme-blue transition-colors"><Share2 size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-vme-blue transition-colors"><Info size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-outfit text-vme-blue">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-vme-red transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-vme-red transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-vme-red transition-colors">Services</Link></li>
              <li><Link href="/facility" className="hover:text-vme-red transition-colors">Facility</Link></li>
              <li><Link href="/contact" className="hover:text-vme-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-outfit text-vme-blue">Our Expertise</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Aerospace Component Manufacturing</li>
              <li>Medical Component Manufacturing</li>
              <li>Jig & Fixtures</li>
              <li>Tool & Die</li>
              <li>Engineering Service</li>
              <li>Manufacturing Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-outfit text-vme-blue">Get In Touch</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-vme-red shrink-0" />
                <span>No.38 Padavattamman Industrial Estate, Ambattur, Chennai - 600098</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-vme-red shrink-0" />
                <span>+91 83440 70649</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-vme-red shrink-0" />
                <span>viveganme@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Vivegan Manufacturing Engineering. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
