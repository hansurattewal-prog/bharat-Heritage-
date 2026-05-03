/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

const REGIONS = [
  { id: 'raj', name: 'Rajasthan', specialty: 'Blue Pottery & Leather', color: '#E16120', img: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc20e2?auto=format&fit=crop&q=80&w=400' },
  { id: 'ker', name: 'Kerala', specialty: 'Brass & Spices', color: '#005F69', img: 'https://images.unsplash.com/photo-1593693411515-c202e93fe3ef?auto=format&fit=crop&q=80&w=400' },
  { id: 'pun', name: 'Punjab', specialty: 'Phulkari & Juttis', color: '#D4AF37', img: 'https://images.unsplash.com/photo-1605649440417-449332eaeba4?auto=format&fit=crop&q=80&w=400' },
  { id: 'ben', name: 'West Bengal', specialty: 'Dhaka Silk & Tant', color: '#E16120', img: 'https://images.unsplash.com/photo-1621434614144-42b45070014b?auto=format&fit=crop&q=80&w=400' },
  { id: 'kas', name: 'Kashmir', specialty: 'Pashmina & Walnut Wood', color: '#005F69', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=400' },
  { id: 'tam', name: 'Tamil Nadu', specialty: 'Kanjeevaram & Bronzeware', color: '#D4AF37', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=400' },
];

export default function StateDiscovery() {
  return (
    <section className="py-20 px-6 bg-heritage-bg border-y border-heritage-gold/10 relative overflow-hidden" id="couture">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 text-heritage-saffron mb-4">
              <MapPin size={20} strokeWidth={1.5} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Regional Discovery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-heritage-teal italic">Shop by State</h2>
            <p className="mt-4 text-sm md:text-base text-heritage-teal/60 font-body">
              Every fold of Indian soil holds a unique craft. Discover the authentic soul of India, one region at a time.
            </p>
          </div>
          <button className="w-fit text-[11px] font-bold text-heritage-teal uppercase tracking-widest flex items-center space-x-2 group border-b-2 border-heritage-saffron/30 pb-1 hover:border-heritage-saffron transition-all">
            <span>Explore All 28 States</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-8 no-scrollbar snap-x snap-mandatory px-2 -mx-2 lg:grid lg:grid-cols-6 lg:overflow-visible lg:space-x-0 lg:px-0 lg:mx-0">
          {REGIONS.map((region, idx) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-44 md:w-56 lg:w-full snap-center group cursor-pointer"
              id={`state-card-${region.id}`}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-heritage-gold/20 group-hover:border-heritage-gold/60 transition-all duration-500 shadow-soft group-hover:shadow-heritage">
                <img 
                  src={region.img} 
                  alt={region.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-teal via-heritage-teal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[8px] md:text-[9px] text-heritage-saffron font-bold uppercase tracking-widest mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {region.specialty}
                  </p>
                  <h3 className="font-display text-lg md:text-xl leading-none italic group-hover:translate-x-1 transition-transform duration-300">{region.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
