import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { Heart, MapPin, GraduationCap, Users } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  const [brideImgError, setBrideImgError] = useState(false);
  const [groomImgError, setGroomImgError] = useState(false);

  return (
    <section id="couple" className="relative py-24 bg-maroon-900 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400">
            The Bride & Groom
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            TWO SOULS, ONE SACRED JOURNEY
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* BRIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-maroon-950/90 border border-gold-500/40 shadow-2xl flex flex-col items-center text-center relative group hover:border-gold-400 transition-colors"
          >
            {/* Portrait Image Frame */}
            <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-gold-400 shadow-gold-glow mb-6 bg-maroon-900 flex items-center justify-center">
              {!brideImgError ? (
                <img
                  src={weddingConfig.bride.image}
                  alt={weddingConfig.bride.fullName}
                  onError={() => setBrideImgError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                /* Royal Vector Avatar Fallback */
                <div className="w-full h-full bg-parchment p-6 flex flex-col items-center justify-center text-maroon-900">
                  <div className="w-20 h-20 rounded-full border-2 border-gold-600 bg-gold-100 flex items-center justify-center text-3xl font-cinzel font-bold text-maroon-900 mb-3 shadow">
                    N
                  </div>
                  <p className="font-cinzel text-sm font-bold text-maroon-900">THE BRIDE</p>
                  <p className="font-script text-lg text-gold-700">Nikitha H.</p>
                </div>
              )}
              {/* Gold Vignette Frame */}
              <div className="absolute inset-0 border border-gold-400/40 rounded-2xl pointer-events-none" />
            </div>

            {/* Bride Details */}
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/40 text-gold-300 font-cinzel text-xs font-semibold uppercase tracking-wider mb-2">
              The Bride
            </span>

            <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">
              {weddingConfig.bride.name}
            </h3>

            <div className="flex items-center space-x-2 text-gold-300/90 font-sans text-sm mt-1">
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span className="font-semibold">{weddingConfig.bride.qualification}</span>
            </div>

            <div className="w-full border-t border-gold-500/20 my-6" />

            {/* Parent Information */}
            <div className="space-y-4 text-left w-full max-w-md">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                <div>
                  <p className="font-cinzel text-xs text-gold-400 uppercase tracking-wider">Daughter of</p>
                  <p className="font-cormorant text-lg text-champagne-light font-semibold">
                    {weddingConfig.bride.mother} & {weddingConfig.bride.father}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                <div>
                  <p className="font-cinzel text-xs text-gold-400 uppercase tracking-wider">Native Place</p>
                  <p className="font-sans text-sm text-champagne-light/90">
                    {weddingConfig.bride.districtInfo}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* GROOM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-maroon-950/90 border border-gold-500/40 shadow-2xl flex flex-col items-center text-center relative group hover:border-gold-400 transition-colors"
          >
            {/* Portrait Image Frame */}
            <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-gold-400 shadow-gold-glow mb-6 bg-maroon-900 flex items-center justify-center">
              {!groomImgError ? (
                <img
                  src={weddingConfig.groom.image}
                  alt={weddingConfig.groom.fullName}
                  onError={() => setGroomImgError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                /* Royal Vector Avatar Fallback */
                <div className="w-full h-full bg-parchment p-6 flex flex-col items-center justify-center text-maroon-900">
                  <div className="w-20 h-20 rounded-full border-2 border-gold-600 bg-gold-100 flex items-center justify-center text-3xl font-cinzel font-bold text-maroon-900 mb-3 shadow">
                    M
                  </div>
                  <p className="font-cinzel text-sm font-bold text-maroon-900">THE GROOM</p>
                  <p className="font-script text-lg text-gold-700">Manoranjan B.V.</p>
                </div>
              )}
              {/* Gold Vignette Frame */}
              <div className="absolute inset-0 border border-gold-400/40 rounded-2xl pointer-events-none" />
            </div>

            {/* Groom Details */}
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/40 text-gold-300 font-cinzel text-xs font-semibold uppercase tracking-wider mb-2">
              The Groom
            </span>

            <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">
              {weddingConfig.groom.name}
            </h3>

            <div className="flex items-center space-x-2 text-gold-300/90 font-sans text-sm mt-1">
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span className="font-semibold">{weddingConfig.groom.qualification}</span>
            </div>

            <div className="w-full border-t border-gold-500/20 my-6" />

            {/* Parent Information */}
            <div className="space-y-4 text-left w-full max-w-md">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                <div>
                  <p className="font-cinzel text-xs text-gold-400 uppercase tracking-wider">Son of</p>
                  <p className="font-cormorant text-lg text-champagne-light font-semibold">
                    {weddingConfig.groom.mother} & {weddingConfig.groom.father}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                <div>
                  <p className="font-cinzel text-xs text-gold-400 uppercase tracking-wider">Native Place</p>
                  <p className="font-sans text-sm text-champagne-light/90">
                    {weddingConfig.groom.districtInfo}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Central Heart Emblem */}
        <div className="flex justify-center -mt-6 z-20 relative">
          <div className="w-12 h-12 rounded-full border-2 border-gold-400 bg-maroon-950 flex items-center justify-center text-gold-400 shadow-gold-glow">
            <Heart className="w-6 h-6 fill-gold-400/20" />
          </div>
        </div>

      </div>
    </section>
  );
};
