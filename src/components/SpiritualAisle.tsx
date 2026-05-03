/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Shield, Flower2, HeartHandshake } from 'lucide-react';

const RELIGIONS = [
  { name: 'Sacred Hindu Artifacts', description: 'Idols, Puja essentials, and Spiritual art.', icon: Flower2, img: 'https://images.unsplash.com/photo-1544923246-77307dddd546?auto=format&fit=crop&q=80&w=400' },
  { name: 'Islamic Devotional Items', description: 'Tasbih, Halal decor, and fine calligraphy.', icon: Star, img: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sikh Heritage', description: 'Authentic Kada, ceremonial daggers, and art.', icon: Shield, img: 'https://images.unsplash.com/photo-1621255869033-90d635035fce?auto=format&fit=crop&q=80&w=400' },
  { name: 'Christian Liturgy', description: 'Handcrafted crosses, candles, and art pieces.', icon: HeartHandshake, img: 'https://images.unsplash.com/photo-1544894079-e81a9fe1dd48?auto=format&fit=crop&q=80&w=400' },
];

export default function SpiritualAisle() {
  return (
    <section className="py-20 px-6 bg-heritage-teal text-white relative overflow-hidden" id="sacred">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-heritage-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
              Inclusive Spirituality
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-8 leading-[1.2] italic">
              Aisle of Devotion<br />& Unity
            </h2>
            <p className="text-white/70 text-sm md:text-lg mb-12 leading-relaxed max-w-xl font-body font-light">
              We celebrate the diverse spiritual fabric of India. This dedicated portal brings together sacred artifacts from every faith, crafted with respect and authenticity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {RELIGIONS.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full border border-heritage-gold/30 flex items-center justify-center text-heritage-gold mb-6 group-hover:bg-heritage-gold group-hover:text-heritage-teal transition-all">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl mb-3 text-heritage-gold">{item.name}</h3>
                  <p className="text-xs md:text-sm text-white/50 font-body font-light leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group order-1 lg:order-2">
            <div className="absolute inset-0 border border-heritage-gold/30 transform translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500" />
            <div className="relative aspect-[4/5] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=800"
                alt="Devotion"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-teal via-heritage-teal/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-heritage-saffron text-heritage-black text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
                  Featured Spotlight
                </span>
                <h4 className="text-2xl md:text-3xl font-display text-white italic mb-2">Universal Prayer Bells</h4>
                <p className="text-white/60 text-xs md:text-sm font-body font-light">Resonating across boundaries with pure metal resonance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Mandala Background */}
      <div className="absolute -right-40 -top-40 opacity-[0.03] select-none pointer-events-none">
          <svg width="800" height="800" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" />
              {[...Array(36)].map((_, i) => (
                  <rect key={i} x="49.5" y="0" width="1" height="50" fill="white" transform={`rotate(${i * 10} 50 50)`} />
              ))}
          </svg>
      </div>
    </section>
  );
}
