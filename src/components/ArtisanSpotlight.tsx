/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, BookOpenText, Sparkles } from 'lucide-react';

export default function ArtisanSpotlight() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-24 px-6 bg-heritage-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 text-heritage-saffron mb-4">
            <Sparkles size={20} />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em]">Make in India</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-heritage-teal italic">Artisan Spotlight</h2>
          <p className="mt-4 text-heritage-teal/60 max-w-2xl mx-auto font-body">
            Discover the hands that weave magic. Every product tells a story of generations-old heritage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Story */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden group shadow-xl border border-heritage-gold/20 bg-heritage-black"
          >
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800"
                    alt="Artisan at work"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-heritage-black/40 group-hover:bg-heritage-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={togglePlay}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-heritage-saffron transform transition-all group-hover:scale-110 shadow-2xl"
                    >
                      <Play fill="white" size={32} />
                    </button>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 text-white pointer-events-none">
                    <h3 className="text-3xl font-display mb-2 italic">The Silk Weavers of Kanchipuram</h3>
                    <p className="text-sm opacity-80 max-w-sm font-body font-light">Watch how Master Artisan Mr. Ramanathan creates a single saree over 20 days.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="video-player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20"
                >
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_08_Gwalior_05_preview.mp4"
                    autoPlay
                    loop
                    playsInline
                    onClick={togglePlay}
                  />
                  
                  <div className="absolute top-6 right-6 flex space-x-3">
                    <button 
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-heritage-saffron transition-colors"
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button 
                      onClick={() => setIsPlaying(false)}
                      className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/70 text-[10px] uppercase tracking-widest font-bold">
                    <div className="bg-black/40 px-3 py-1 rounded backdrop-blur-sm">Now Playing: Kanchipuram Silk Weaving</div>
                    <div className="bg-heritage-saffron text-heritage-black px-3 py-1 rounded font-bold">Live Story</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Secondary Stories */}
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-heritage-gold/10 flex items-center space-x-6 group"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={i === 1 ? "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=200" : "https://images.unsplash.com/photo-1621643235311-37d45268c71d?auto=format&fit=crop&q=80&w=200"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Legacy"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-display text-heritage-teal mb-2">{i === 1 ? 'Clay of the Earth' : 'The Sacred Brass'}</h4>
                  <p className="text-sm text-heritage-teal/60 font-body font-light mb-4 line-clamp-1">Celebrating {i === 1 ? 'Jaipur Blue Pottery' : 'Kerala Lamp Weavers'} through centuries.</p>
                  <button className="text-[10px] font-bold text-heritage-saffron uppercase tracking-widest flex items-center space-x-2 border-b border-heritage-saffron pb-1">
                    <BookOpenText size={14} />
                    <span>Read Story</span>
                  </button>
                </div>
              </motion.div>
            ))}

            <div className="p-8 rounded-xl bg-heritage-gold text-heritage-black mt-8 relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-display mb-2 font-bold italic">Make in India Initiative</h3>
                    <p className="text-sm text-heritage-black/80 mb-6 font-body font-normal">Supporting 50,000+ local artisans across 1,200 villages.</p>
                    <button className="bg-heritage-black text-heritage-gold px-6 py-3 rounded uppercase text-[10px] font-bold tracking-widest hover:bg-heritage-teal hover:text-white transition-all shadow-md">
                        Join the Movement
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 blur-xl">
                    <Sparkles size={160} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
