import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles, Heart } from 'lucide-react';

export const FamilyBlessings: React.FC = () => {
  return (
    <section className="relative py-20 bg-maroon-950 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-maroon-900/60 border border-gold-500/40 backdrop-blur-md shadow-2xl space-y-8"
        >
          {/* Invocation Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 text-gold-400">
              <Sparkles className="w-4 h-4" />
              <span className="font-cinzel text-xs uppercase tracking-[0.3em]">Divine Grace</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-gold-gradient">
              WITH THE BLESSINGS OF OUR FAMILIES
            </h2>
            <p className="font-kannada text-lg text-gold-200 font-semibold">
              "{weddingConfig.blessings.deitiesKannada}"
            </p>
          </div>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />

          {/* Families Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            
            {/* Bride Family */}
            <div className="p-6 rounded-2xl bg-maroon-950/80 border border-gold-500/30 space-y-2">
              <span className="font-cinzel text-xs text-gold-400 font-bold uppercase tracking-wider block">
                Bride's Family
              </span>
              <h4 className="font-cinzel text-xl font-bold text-gold-gradient">
                {weddingConfig.bride.fullName}
              </h4>
              <p className="font-cormorant text-lg text-champagne-light">
                D/o {weddingConfig.bride.mother} & {weddingConfig.bride.father}
              </p>
              <p className="font-sans text-xs text-gold-300/80">
                {weddingConfig.bride.districtInfo}
              </p>
            </div>

            {/* Groom Family */}
            <div className="p-6 rounded-2xl bg-maroon-950/80 border border-gold-500/30 space-y-2">
              <span className="font-cinzel text-xs text-gold-400 font-bold uppercase tracking-wider block">
                Groom's Family
              </span>
              <h4 className="font-cinzel text-xl font-bold text-gold-gradient">
                {weddingConfig.groom.fullName}
              </h4>
              <p className="font-cormorant text-lg text-champagne-light">
                S/o {weddingConfig.groom.mother} & {weddingConfig.groom.father}
              </p>
              <p className="font-sans text-xs text-gold-300/80">
                {weddingConfig.groom.districtInfo}
              </p>
            </div>

          </div>

          <div className="pt-4">
            <p className="font-cormorant text-xl text-champagne-light/90 italic">
              "We warmly seek your presence, prayers, and blessings as Nikitha & Manoranjan begin their journey of married life."
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
