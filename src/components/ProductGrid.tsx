/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, Heart, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useWishlist } from '../lib/WishlistContext';

export default function ProductGrid() {
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden mughal-pattern" id="handicrafts">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-heritage-gold mb-4">
            <Sparkles size={20} />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em]">Handpicked for You</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-heritage-teal mb-4 italic">Timeless Masterpieces</h2>
          <div className="w-24 h-1 bg-heritage-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PRODUCTS.map((product, idx) => {
            const isFavorite = isInWishlist(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
                id={`product-${product.id}`}
              >
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl mb-5 md:mb-6 bg-heritage-bg border border-heritage-gold/10 group-hover:border-heritage-gold/40 transition-all duration-500 shadow-soft group-hover:shadow-heritage">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className={`w-10 h-10 shadow-lg rounded-full flex items-center justify-center transition-colors ${isFavorite ? 'bg-heritage-saffron text-white border-transparent' : 'bg-white/80 backdrop-blur-sm text-heritage-teal hover:bg-heritage-saffron hover:text-white border border-white/20'}`}
                      aria-label="Toggle Wishlist"
                    >
                      <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
                    </button>
                    <button className="w-10 h-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-heritage-teal hover:bg-heritage-saffron hover:text-white transition-colors border border-white/20">
                      <ShoppingCart size={18} />
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="bg-heritage-teal/80 backdrop-blur-sm text-white text-[9px] px-3 py-1 rounded-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 inline-block">
                      Origin: {product.origin}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="px-1">
                  <div className="flex justify-between items-start mb-1.5 md:mb-2">
                    <h3 className="font-display text-lg md:text-xl text-heritage-teal group-hover:text-heritage-saffron transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <span className="font-sans font-black text-heritage-teal text-sm md:text-base">{product.price}</span>
                  </div>
                  <p className="text-xs md:text-sm text-heritage-teal/60 line-clamp-2 font-body font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-heritage-gold bg-heritage-gold/5 px-2.5 py-1 rounded border border-heritage-gold/10">
                      Collection: {product.category}
                    </span>
                    <div className="flex-1 h-px bg-heritage-gold/10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-3 border-2 border-heritage-teal text-heritage-teal font-bold uppercase text-xs tracking-widest hover:bg-heritage-teal hover:text-white transition-all transform active:scale-95" id="view-all-products">
            View All Traditions
          </button>
        </div>
      </div>
    </section>
  );
}
