/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search, ShoppingBag, User, Heart, Globe, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useWishlist } from '../lib/WishlistContext';

export default function Navbar({ onOpenWishlist }: { onOpenWishlist: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Handicrafts', id: 'handicrafts' },
    { name: 'Regional Couture', id: 'couture' },
    { name: 'Sacred Artifacts', id: 'sacred' },
    { name: 'Wellness', id: 'ayurvedic' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 ${
        isScrolled ? 'py-3 bg-heritage-bg/95 backdrop-blur-md shadow-soft border-b border-heritage-gold/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-heritage-teal hover:text-heritage-saffron transition-all"
        >
          <Menu size={24} />
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer transition-transform hover:scale-105">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-heritage-teal rounded-full flex items-center justify-center border border-heritage-gold shadow-md">
            <span className="text-heritage-gold font-display font-bold text-lg md:text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-display font-bold tracking-tight text-heritage-teal leading-none">
              BHARAT <span className="text-heritage-saffron">HERITAGE</span>
            </h1>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-heritage-gold font-bold">Heritage Hub</span>
          </div>
        </div>

        {/* Categories - Desktop */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {categories.map((cat) => (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-heritage-teal/70 hover:text-heritage-saffron transition-colors relative group"
              >
                {cat.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-heritage-saffron transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-5 text-heritage-teal ml-6 border-l border-heritage-gold/20 pl-6">
            <button className="hover:text-heritage-saffron transition-colors" id="nav-search">
              <Search size={20} strokeWidth={2} />
            </button>
            <button 
              onClick={onOpenWishlist}
              className="hover:text-heritage-saffron transition-all relative" 
              id="nav-wishlist"
            >
              <Heart size={20} strokeWidth={2} className={wishlist.length > 0 ? "text-heritage-saffron fill-heritage-saffron" : ""} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-heritage-teal text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-heritage-bg">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="hover:text-heritage-saffron transition-all relative" id="nav-cart">
              <ShoppingBag size={20} strokeWidth={2} />
              <span className="absolute -top-1.5 -right-2 bg-heritage-saffron text-heritage-black text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-heritage-bg">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-heritage-black/60 backdrop-blur-sm z-[110]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-screen w-4/5 max-w-sm bg-heritage-bg z-[120] shadow-2xl p-10 pt-20"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="absolute top-6 right-6 text-heritage-teal p-2"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col h-full">
                <div className="space-y-8">
                  {categories.map((cat) => (
                    <a 
                      key={cat.id} 
                      href={`#${cat.id}`} 
                      className="block text-3xl font-display italic text-heritage-teal hover:text-heritage-saffron transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {cat.name}
                    </a>
                  ))}
                </div>

                <div className="mt-auto space-y-6 pb-6 border-t border-heritage-gold/10 pt-10">
                   <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-heritage-teal/5 flex items-center justify-center text-heritage-teal">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-heritage-gold font-bold">Account</p>
                      <p className="text-sm font-bold text-heritage-teal">Join Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
