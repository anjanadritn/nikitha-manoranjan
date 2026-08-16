import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { CalendarExport } from './CalendarExport';
import { Sparkles, Heart, Clock, MapPin, Flame } from 'lucide-react';

export const WeddingEvents: React.FC = () => {
  return (
    <section id="events" className="relative py-24 bg-maroon-900 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400">
            Auspicious Ceremonies
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            WEDDING EVENTS TIMELINE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* EVENT 01: ENGAGEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-maroon-950/80 border border-gold-500/30 hover:border-gold-400 shadow-xl flex flex-col justify-between relative group"
          >
            <div className="space-y-6">
              
              {/* Badge & Icon */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 font-cinzel text-xs font-bold tracking-widest uppercase">
                  EVENT 01
                </span>
                <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-maroon-900 flex items-center justify-center text-gold-300">
                  <Heart className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Date */}
              <div>
                <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">
                  ENGAGEMENT CEREMONY
                </h3>
                <p className="font-kannada text-sm text-gold-300/80 mt-1">
                  ನಿಶ್ಚಿತಾರ್ಥ ಸಮಾರಂಭ
                </p>
              </div>

              {/* Date & Time Highlights */}
              <div className="space-y-3 p-4 rounded-xl bg-maroon-900/60 border border-gold-500/20">
                <div className="flex items-center space-x-3 text-champagne-light">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="font-sans text-sm font-semibold">
                    {weddingConfig.engagement.dayOfWeek}, {weddingConfig.engagement.dateFormatted}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gold-300">
                  <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="font-sans text-sm font-bold">
                    {weddingConfig.engagement.timeFormatted}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-cormorant text-lg text-champagne-light/90 leading-relaxed italic">
                Ring exchange ceremony and family gathering to celebrate the divine promise between Nikitha & Manoranjan.
              </p>

            </div>

            {/* Add to Calendar */}
            <div className="pt-6 border-t border-gold-500/20 mt-6">
              <p className="font-cinzel text-[11px] text-gold-400 uppercase tracking-widest mb-2">
                Add to your schedule:
              </p>
              <CalendarExport type="engagement" />
            </div>
          </motion.div>

          {/* EVENT 02: WEDDING MUHURTHAM (Visually Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-3xl bg-gradient-to-b from-maroon-900 to-maroon-950 border-2 border-gold-400 shadow-gold-glow-lg flex flex-col justify-between relative group scale-102"
          >
            <div className="space-y-6">
              
              {/* Badge & Flame Mandap Icon */}
              <div className="flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 font-cinzel text-xs font-black tracking-widest uppercase shadow-gold-glow">
                  EVENT 02 • SACRED MUHURTHAM
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-gold-400 bg-maroon-950 flex items-center justify-center text-gold-400 shadow-gold-glow">
                  <Flame className="w-6 h-6 animate-pulse text-gold-300" />
                </div>
              </div>

              {/* Title & Date */}
              <div>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-gold-gradient">
                  WEDDING MUHURTHAM
                </h3>
                <p className="font-kannada text-base text-gold-200 mt-1 font-semibold">
                  ಮದುವೆ ಮುಹೂರ್ತ (ಧಾರೆ ಮುಹೂರ್ತ)
                </p>
              </div>

              {/* Date & Time Highlights */}
              <div className="space-y-3 p-5 rounded-xl bg-gold-500/10 border-2 border-gold-400/50 shadow-inner">
                <div className="flex items-center space-x-3 text-champagne-light">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="font-sans text-base font-bold">
                    {weddingConfig.wedding.dayOfWeek}, {weddingConfig.wedding.dateFormatted}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gold-200">
                  <Sparkles className="w-5 h-5 text-gold-300 shrink-0 animate-spin-slow" />
                  <span className="font-sans text-base font-black text-gold-gradient">
                    Auspicious Muhurtham: {weddingConfig.wedding.timeFormatted}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-cormorant text-xl text-champagne-light leading-relaxed italic font-medium">
                The sacred Kanyadana, Mangalya Dharane and Saptapadi ceremonies under the blessings of Sri Masarapadi Anjaneya Swamy & Sri Kavalamma Devi.
              </p>

            </div>

            {/* Add to Calendar */}
            <div className="pt-6 border-t border-gold-500/30 mt-6">
              <p className="font-cinzel text-[11px] text-gold-300 uppercase tracking-widest mb-2 font-bold">
                Save Muhurtham to calendar:
              </p>
              <CalendarExport type="wedding" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
