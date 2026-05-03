/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-heritage-teal text-white pt-24 pb-12 px-6 md:px-12 border-t border-heritage-gold/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                <span className="text-heritage-teal font-display font-black text-sm">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-heritage-gold font-bold leading-none tracking-tight">BHARAT</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold">Heritage Hub</span>
              </div>
            </div>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-8 font-body font-light max-w-xs">
              Celebrating the soul of India through authentic handicrafts, regional couture, and spiritual artifacts. Connecting 50,000+ local artisans to the global stage.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-heritage-saffron transition-all border border-white/10 hover:border-transparent group">
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-heritage-gold font-display text-lg mb-8 italic font-medium">Quick Explore</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.15em] text-white/50 font-bold">
              <li><a href="#" className="hover:text-heritage-saffron transition-colors inline-block">Our Story</a></li>
              <li><a href="#" className="hover:text-heritage-saffron transition-colors inline-block">Artisan Directory</a></li>
              <li><a href="#" className="hover:text-heritage-saffron transition-colors inline-block">Impact Report</a></li>
              <li><a href="#" className="hover:text-heritage-saffron transition-colors inline-block">Bulk & Gifting Suite</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-heritage-gold font-display text-lg mb-8 italic font-medium">Collections</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.15em] text-white/50 font-bold">
              <li><a href="#handicrafts" className="hover:text-heritage-saffron transition-colors inline-block">Handicrafts</a></li>
              <li><a href="#couture" className="hover:text-heritage-saffron transition-colors inline-block">Regional Couture</a></li>
              <li><a href="#sacred" className="hover:text-heritage-saffron transition-colors inline-block">Sacred Artifacts</a></li>
              <li><a href="#ayurvedic" className="hover:text-heritage-saffron transition-colors inline-block">Ayurvedic Wellness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-heritage-gold font-display text-lg mb-8 italic font-medium">Reach Us</h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin size={16} className="text-heritage-gold" />
                </div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 leading-relaxed font-bold">
                  Heritage Tower, MG Road,<br />Bengaluru, KA 560001
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail size={16} className="text-heritage-gold" />
                </div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 font-bold">support@bharat.hub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold font-body text-center md:text-left">
            &copy; 2026 Bharat Heritage Hub. Created by Hansu Rattewal.
          </p>
          <div className="flex items-center gap-8 text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold">
            <a href="#" className="hover:text-heritage-saffron transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-heritage-saffron transition-colors text-heritage-white/40">Terms</a>
            <a href="#" className="hover:text-heritage-saffron transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heritage-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-heritage-saffron/5 rounded-full blur-[80px] -ml-32 -mb-32" />
    </footer>
  );
}
