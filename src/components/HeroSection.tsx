import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { GaneshaEmblem } from './GaneshaEmblem';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-maroon-950 pt-20 pb-12"
    >
      {/* Background Image Slot with Graceful Fallback */}
      {!imageError ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={weddingConfig.images.hero}
            alt="Nikitha & Manoranjan Wedding"
            onError={() => setImageError(true)}
            style={{ objectPosition: weddingConfig.heroPosition }}
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Dark Vignette Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/70 to-maroon-950/40" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </div>
      ) : (
        /* Royal Silk Parchment Luxury Fallback */
        <div className="absolute inset-0 z-0 bg-maroon-pattern opacity-90">
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/80 via-transparent to-maroon-950" />
        </div>
      )}

      {/* Decorative Golden Corner Borders */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold-400/60 pointer-events-none z-10 hidden sm:block" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold-400/60 pointer-events-none z-10 hidden sm:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gold-400/60 pointer-events-none z-10 hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold-400/60 pointer-events-none z-10 hidden sm:block" />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center space-y-6">
        
        {/* Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GaneshaEmblem size="md" />
        </motion.div>

        {/* Sacred Invocation */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-kannada text-base sm:text-lg text-gold-300 font-medium tracking-wide"
        >
          {weddingConfig.blessings.deitiesKannada}
        </motion.p>

        {/* Couple Main Title */}
        <div className="space-y-2">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gold-gradient tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          >
            {weddingConfig.bride.name}
          </motion.h1>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="font-script text-4xl sm:text-5xl text-gold-200"
          >
            &
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gold-gradient tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          >
            {weddingConfig.groom.name}
          </motion.h1>
        </div>

        {/* Formal Invitation Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-cormorant text-xl sm:text-2xl md:text-3xl text-champagne-light max-w-2xl leading-relaxed italic"
        >
          Together with their families, they invite you to celebrate their wedding.
        </motion.p>

        {/* Wedding Date Pills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-maroon-900/80 border border-gold-500/40 text-gold-200 font-cinzel text-sm sm:text-base tracking-widest shadow-gold-glow">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>25 — 26 AUGUST 2026</span>
          </div>

          <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-maroon-900/80 border border-gold-500/40 text-gold-200 font-cinzel text-xs sm:text-sm tracking-widest">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>DODDABALLAPURA TALUK</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#save-the-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="pt-8 flex flex-col items-center space-y-2 text-gold-300/80 hover:text-gold-200 transition-colors group cursor-pointer"
        >
          <span className="font-cinzel text-xs uppercase tracking-[0.2em]">Scroll to discover their story</span>
          <ChevronDown className="w-5 h-5 text-gold-400 group-hover:translate-y-1 transition-transform animate-bounce" />
        </motion.a>

      </div>
    </section>
  );
};
