/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PRODUCTS } from '../constants';

export default function SelectionRail() {
  const curated = PRODUCTS.slice(0, 3);

  return (
    <section className="h-48 w-full bg-heritage-teal flex items-center px-12 gap-12 relative z-10 overflow-hidden">
      <div className="w-48 text-white shrink-0">
        <h3 className="font-display text-xl leading-tight">Curated Artifacts</h3>
        <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Weekly Selection</p>
      </div>
      
      {/* Product Tiles */}
      <div className="flex-1 flex gap-6 overflow-x-auto no-scrollbar py-4">
        {curated.map((product) => (
          <div 
            key={product.id}
            className="flex-1 min-w-[280px] bg-white/10 hover:bg-white/20 p-3 flex items-center gap-4 cursor-pointer border border-white/5 transition-colors group"
          >
            <div className="w-20 h-20 bg-heritage-bg overflow-hidden shrink-0">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="text-white">
              <div className="text-[10px] font-bold text-heritage-gold uppercase tracking-widest">{product.origin}</div>
              <div className="text-sm font-display">{product.name}</div>
              <div className="text-xs mt-1 font-sans opacity-70">{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative corner element */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M0 100 L100 100 L100 0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
