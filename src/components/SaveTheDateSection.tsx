import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export const SaveTheDateSection: React.FC = () => {
  return (
    <section id="save-the-date" className="relative py-20 bg-maroon-900 overflow-hidden border-y border-gold-500/20">
      
      {/* Background Ornament Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border-[12px] border-gold-400 border-dashed animate-spin-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-12"
        >
          <div className="flex items-center justify-center space-x-3 text-gold-400">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
            <Sparkles className="w-4 h-4" />
            <span className="font-cinzel text-xs uppercase tracking-[0.3em]">Save The Dates</span>
            <Sparkles className="w-4 h-4" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
            SAVE THE DATES
          </h2>
          <p className="font-cormorant text-xl text-champagne-light/90 italic">
            Mark your calendar to celebrate with us in Doddaballapura Taluk
          </p>
        </motion.div>

        {/* Two Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Engagement Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative p-8 rounded-2xl bg-maroon-950/80 border border-gold-500/30 hover:border-gold-400 shadow-xl hover:shadow-gold-glow transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 text-gold-400/40 group-hover:text-gold-400 transition-colors">
              <Heart className="w-6 h-6" />
            </div>

            <div className="space-y-4 text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-cinzel text-xs font-semibold tracking-wider">
                DAY 01 • ENGAGEMENT
              </span>

              <div>
                <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">
                  {weddingConfig.engagement.dateFormatted}
                </h3>
                <p className="font-sans text-sm text-gold-300/80 mt-1">
                  {weddingConfig.engagement.dayOfWeek} • {weddingConfig.engagement.timeFormatted}
                </p>
              </div>

              <div className="pt-4 border-t border-gold-500/20">
                <p className="font-cinzel text-xs text-gold-400 uppercase tracking-widest">Ritual</p>
                <p className="font-cormorant text-lg text-champagne-light mt-0.5">
                  Engagement & Ring Ceremony
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wedding Muhurtham Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative p-8 rounded-2xl bg-maroon-950/90 border-2 border-gold-400 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 text-gold-400">
              <Sparkles className="w-6 h-6 animate-spin-slow" />
            </div>

            <div className="space-y-4 text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400 text-gold-200 font-cinzel text-xs font-bold tracking-wider">
                DAY 02 • SACRED MUHURTHAM
              </span>

              <div>
                <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">
                  {weddingConfig.wedding.dateFormatted}
                </h3>
                <p className="font-sans text-sm text-gold-300/90 mt-1">
                  {weddingConfig.wedding.dayOfWeek} • {weddingConfig.wedding.timeFormatted}
                </p>
              </div>

              <div className="pt-4 border-t border-gold-500/20">
                <p className="font-cinzel text-xs text-gold-400 uppercase tracking-widest">Auspicious Timing</p>
                <p className="font-cormorant text-lg text-champagne-light font-semibold mt-0.5">
                  Wedding Muhurtham: 4:50 AM to 5:30 AM IST
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
