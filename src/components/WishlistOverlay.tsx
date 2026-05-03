/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Heart, Trash2 } from 'lucide-react';
import { useWishlist } from '../lib/WishlistContext';
import { PRODUCTS } from '../constants';

export default function WishlistOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const wishlistedItems = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-heritage-black/40 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full sm:max-w-md bg-heritage-bg z-[110] shadow-2xl p-6 md:p-8 flex flex-col border-l border-heritage-gold/20"
          >
            <div className="flex justify-between items-center mb-8 md:mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-heritage-saffron/10 flex items-center justify-center">
                  <Heart size={20} className="text-heritage-saffron" fill="currentColor" />
                </div>
                <h2 className="text-2xl font-display text-heritage-teal font-bold italic">Your Wishlist</h2>
              </div>
              <button 
                onClick={onClose} 
                className="w-10 h-10 rounded-full hover:bg-heritage-teal/5 flex items-center justify-center text-heritage-teal hover:rotate-90 transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {wishlistedItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-20 h-20 bg-heritage-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Heart size={32} className="text-heritage-gold/40" />
                  </div>
                  <p className="text-heritage-teal font-display text-xl mb-2 italic">Nothing saved yet</p>
                  <p className="text-sm text-heritage-teal/50 font-body">Explore our collections and save your favorite heritage pieces.</p>
                  <button 
                    onClick={onClose}
                    className="mt-8 px-8 py-3 bg-heritage-teal text-white text-[11px] font-bold uppercase tracking-widest hover:bg-heritage-saffron hover:text-heritage-black transition-all"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {wishlistedItems.map((product) => (
                    <motion.div 
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-heritage-gold/10 group"
                    >
                      <div className="w-24 h-24 bg-heritage-bg rounded-lg overflow-hidden shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-display font-bold text-heritage-teal leading-tight truncate">{product.name}</h3>
                          <p className="text-[9px] uppercase tracking-widest text-heritage-gold font-bold mt-1">{product.origin}</p>
                          <p className="text-xs font-sans font-bold text-heritage-teal mt-2">{product.price}</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                          <button className="text-[10px] uppercase font-bold tracking-widest text-heritage-teal flex items-center space-x-2 border-b border-heritage-teal pb-1 hover:text-heritage-saffron hover:border-heritage-saffron transition-colors">
                            <ShoppingCart size={12} />
                            <span>Add to Bag</span>
                          </button>
                          <button 
                            onClick={() => toggleWishlist(product.id)}
                            className="text-heritage-black/30 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {wishlistedItems.length > 0 && (
              <div className="pt-6 border-t border-heritage-gold/10">
                <button className="w-full py-4 bg-heritage-teal text-white text-[11px] font-bold uppercase tracking-widest hover:bg-heritage-saffron hover:text-heritage-black transition-all shadow-lg">
                  Move All to Bag
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
