/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StateDiscovery from './components/StateDiscovery';
import ProductGrid from './components/ProductGrid';
import SpiritualAisle from './components/SpiritualAisle';
import ArtisanSpotlight from './components/ArtisanSpotlight';
import SelectionRail from './components/SelectionRail';
import WishlistOverlay from './components/WishlistOverlay';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { WishlistProvider } from './lib/WishlistContext';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <WishlistProvider>
      <div className="relative min-h-screen">
        {/* Decorative Borders */}
        <div className="corner-border-tl" />
        <div className="corner-border-br" />

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-heritage-saffron z-[110] origin-left shadow-sm"
          style={{ scaleX }}
        />

        <Navbar onOpenWishlist={() => setIsWishlistOpen(true)} />
        
        <main>
          <Hero />
          
          {/* Dynamic Festival Banner */}
          <section className="bg-heritage-saffron/90 backdrop-blur-sm py-3 px-6 text-center text-heritage-black overflow-hidden relative border-y border-heritage-gold/20">
              <motion.div 
                  animate={{ x: [0, -2000] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap flex space-x-12"
              >
                  {[...Array(20)].map((_, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center">
                           <span className="w-1.5 h-1.5 bg-heritage-black rounded-full mr-4" />
                           Maha Shivratri Special • Free Pan-India Shipping • Curated Heritage Collections • Direct-from-Artisan •
                      </span>
                  ))}
              </motion.div>
          </section>

          <StateDiscovery />
          
          <ProductGrid />
          
          <SpiritualAisle />
          
          <ArtisanSpotlight />

          <SelectionRail />
        </main>

        <WishlistOverlay isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
        <Footer />
        <Chatbot />

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-24 right-6 md:right-12 z-[90] w-12 h-12 rounded-full bg-heritage-teal text-white shadow-heritage flex items-center justify-center hover:bg-heritage-saffron hover:text-heritage-black transition-all border border-white/10"
              aria-label="Back to top"
            >
              <ArrowUp size={20} strokeWidth={2.5} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </WishlistProvider>
  );
}

