/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FESTIVALS } from '../constants';

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % FESTIVALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIdx((prev) => (prev + 1) % FESTIVALS.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + FESTIVALS.length) % FESTIVALS.length);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={FESTIVALS[currentIdx].image} 
            alt={FESTIVALS[currentIdx].name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          key={`text-${currentIdx}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="bg-heritage-saffron/90 backdrop-blur-sm w-fit px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-sm text-heritage-black shadow-sm">
            Now Celebrating: {FESTIVALS[currentIdx].id.toUpperCase()}
          </div>
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-display mb-6 md:mb-8 leading-[1.1] md:leading-none italic">
            Illuminating<br className="hidden md:block"/>
            <span className="text-heritage-gold"> {FESTIVALS[currentIdx].name}</span>
          </h1>
          <p className="text-white/80 text-sm md:text-lg font-body font-light mb-8 md:mb-12 leading-relaxed max-w-md md:max-w-xl">
            {FESTIVALS[currentIdx].description}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="w-full sm:w-auto px-10 py-4 bg-heritage-gold text-heritage-black font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:scale-105 transition-all shadow-xl active:scale-95" id="shop-now-hero">
              Shop Collection
            </button>
            <div className="flex items-center gap-5 text-white/90">
              <span className="text-xl font-display font-medium">0{currentIdx + 1}</span>
              <div className="w-16 h-px bg-white/20"></div>
              <span className="text-white/30 text-sm">03</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/50">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-10 bg-gradient-to-b from-heritage-gold to-transparent"
        />
      </div>

      {/* Background Mandala */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100" className="animate-spin-slow">
            <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 1" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M50 10 Q55 30 50 50 Q45 30 50 10" fill="white" transform={`rotate(${i * 30} 50 50)`} />
            ))}
        </svg>
      </div>
    </section>
  );
}
