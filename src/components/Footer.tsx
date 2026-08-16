import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Navigation, Sparkles } from 'lucide-react';
import { GaneshaEmblem } from './GaneshaEmblem';
import { weddingConfig } from '../config/weddingConfig';

export const Footer: React.FC = () => {
  const handleDirectionsClick = () => {
    const destinationQuery = encodeURIComponent(weddingConfig.venue.fullAddress);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}`, '_blank');
  };

  const handleRSVPClick = () => {
    const element = document.querySelector('#rsvp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-maroon-950 text-warm-cream border-t-2 border-gold-500/40 pt-20 pb-12 overflow-hidden">
      
      {/* Background Ornament Texture */}
      <div className="absolute inset-0 opacity-5 bg-maroon-pattern pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-16">
        
        {/* Final Emotional CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-maroon-900 via-maroon-950 to-maroon-900 border border-gold-400/50 shadow-gold-glow-lg space-y-8"
        >
          <div className="flex items-center justify-center space-x-2 text-gold-400">
            <Sparkles className="w-5 h-5" />
            <span className="font-cinzel text-xs uppercase tracking-[0.3em]">We Eagerly Await You</span>
            <Sparkles className="w-5 h-5" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-gold-gradient tracking-tight">
            WE CAN'T WAIT TO CELEBRATE WITH YOU
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl text-champagne-light italic max-w-2xl mx-auto">
            "Your presence is the greatest gift of all. Come bless Nikitha & Manoranjan on their sacred day."
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <button
              onClick={handleRSVPClick}
              className="flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 font-cinzel font-bold text-sm tracking-widest uppercase shadow-gold-glow hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-maroon-950" />
              <span>❤️ RSVP NOW</span>
            </button>

            <button
              onClick={handleDirectionsClick}
              className="flex items-center space-x-3 px-8 py-4 rounded-full bg-maroon-900 hover:bg-maroon-800 border-2 border-gold-400 text-gold-200 font-cinzel font-bold text-sm tracking-widest uppercase shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Navigation className="w-5 h-5 text-gold-400" />
              <span>📍 GET DIRECTIONS</span>
            </button>
          </div>
        </motion.div>

        {/* Footer Brand Monogram & Blessings */}
        <div className="space-y-6 pt-8 border-t border-gold-500/20">
          
          <div className="flex justify-center">
            <GaneshaEmblem size="sm" />
          </div>

          <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-gold-gradient tracking-widest">
            NIKITHA & MANORANJAN
          </h3>

          <p className="font-cinzel text-sm text-gold-300 tracking-widest">
            25 • 26 AUGUST 2026
          </p>

          <p className="font-kannada text-base text-gold-200/90 font-medium">
            {weddingConfig.blessings.deitiesKannada}
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />

          <p className="font-cormorant text-lg text-champagne-light/70 italic">
            With love, blessings and best wishes from both families ❤️
          </p>

          <p className="font-sans text-xs text-gold-500/40 uppercase tracking-widest pt-4">
            See you at the wedding • Doddaballapura Taluk
          </p>

        </div>

      </div>
    </footer>
  );
};
