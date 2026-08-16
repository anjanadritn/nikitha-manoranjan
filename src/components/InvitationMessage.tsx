import React from 'react';
import { motion } from 'framer-motion';
import { GaneshaEmblem } from './GaneshaEmblem';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles } from 'lucide-react';

export const InvitationMessage: React.FC = () => {
  return (
    <section id="invitation" className="relative py-24 bg-maroon-950 overflow-hidden">
      
      {/* Background Mandala Texture */}
      <div className="absolute inset-0 opacity-10 bg-maroon-pattern pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        
        {/* Unfolding Digital Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-parchment text-warm-dark shadow-2xl border-4 border-gold-500 overflow-hidden"
        >
          {/* Inner Foil Border Accent */}
          <div className="absolute inset-3 sm:inset-4 border-2 border-gold-600/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-5 sm:inset-6 border border-gold-500/30 rounded-xl pointer-events-none" />

          {/* Corner Floral Motifs */}
          <div className="absolute top-4 left-4 text-gold-700 font-cinzel text-xl font-bold">✤</div>
          <div className="absolute top-4 right-4 text-gold-700 font-cinzel text-xl font-bold">✤</div>
          <div className="absolute bottom-4 left-4 text-gold-700 font-cinzel text-xl font-bold">✤</div>
          <div className="absolute bottom-4 right-4 text-gold-700 font-cinzel text-xl font-bold">✤</div>

          {/* Inner Content */}
          <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            
            {/* Ganesha Emblem */}
            <div className="flex justify-center">
              <GaneshaEmblem size="md" />
            </div>

            {/* Sacred Invocations */}
            <div className="space-y-1">
              <p className="font-cinzel text-xl text-maroon-900 font-bold tracking-wider">
                {weddingConfig.blessings.invocationSanskrit}
              </p>
              <p className="font-kannada text-lg text-maroon-800 font-semibold">
                {weddingConfig.blessings.invocationKannada}
              </p>
            </div>

            <div className="gold-divider my-4">
              <Sparkles className="w-5 h-5 text-gold-600 mx-2" />
            </div>

            {/* Invocation Deities */}
            <p className="font-kannada text-sm sm:text-base text-maroon-900/90 italic font-medium">
              "{weddingConfig.blessings.deitiesKannada}"
            </p>

            {/* Invitation Heading */}
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-maroon-900 tracking-tight">
              WITH HEARTS FULL OF JOY
            </h2>

            {/* Body Text */}
            <p className="font-cormorant text-xl sm:text-2xl text-maroon-950 leading-relaxed italic">
              "With hearts full of joy, we invite you to bless the union of Nikitha and Manoranjan."
            </p>

            {/* Formal Details Card inside Paper */}
            <div className="p-6 rounded-xl bg-gold-50/80 border border-gold-300 shadow-inner space-y-4 my-6 text-left">
              
              {/* Couple Names */}
              <div className="text-center space-y-1">
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-maroon-900">
                  {weddingConfig.bride.fullName}
                  <span className="text-sm font-sans text-maroon-700 ml-2 font-normal">({weddingConfig.bride.qualification})</span>
                </h3>
                <p className="font-cormorant text-sm text-maroon-800 italic text-center">
                  Daughter of {weddingConfig.bride.mother} & {weddingConfig.bride.father}
                </p>
                <div className="font-script text-2xl text-gold-700 text-center my-1">&</div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-maroon-900">
                  {weddingConfig.groom.fullName}
                  <span className="text-sm font-sans text-maroon-700 ml-2 font-normal">({weddingConfig.groom.qualification})</span>
                </h3>
                <p className="font-cormorant text-sm text-maroon-800 italic text-center">
                  Son of {weddingConfig.groom.mother} & {weddingConfig.groom.father}
                </p>
              </div>

              {/* Event Timings Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold-200">
                <div className="p-3 rounded-lg bg-white/70 border border-gold-300">
                  <p className="font-cinzel text-xs font-bold text-maroon-900 uppercase">Engagement</p>
                  <p className="font-sans text-sm font-semibold text-maroon-800">
                    {weddingConfig.engagement.dateFormatted}
                  </p>
                  <p className="font-sans text-xs text-maroon-700">
                    {weddingConfig.engagement.timeFormatted}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white/70 border-2 border-gold-500">
                  <p className="font-cinzel text-xs font-bold text-maroon-900 uppercase">Wedding Muhurtham</p>
                  <p className="font-sans text-sm font-bold text-maroon-900">
                    {weddingConfig.wedding.dateFormatted}
                  </p>
                  <p className="font-sans text-xs font-semibold text-maroon-800">
                    {weddingConfig.wedding.timeFormatted}
                  </p>
                </div>
              </div>

            </div>

            {/* Heartfelt Closing Note */}
            <p className="font-cinzel text-base sm:text-lg font-bold text-maroon-900 tracking-wider">
              YOUR PRESENCE IS THE GREATEST GIFT OF ALL.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
