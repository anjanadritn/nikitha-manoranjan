import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaneshaEmblem } from './GaneshaEmblem';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles, ArrowRight } from 'lucide-react';

interface OpeningExperienceProps {
  onEnter: () => void;
}

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({ onEnter }) => {
  const [isOpeningCard, setIsOpeningCard] = useState(false);

  const handleEnterClick = () => {
    setIsOpeningCard(true);
    // Store in sessionStorage so returning visitors in the same browser session enter immediately
    try {
      sessionStorage.setItem('nikitha_manoranjan_intro_seen', 'true');
    } catch (e) {}

    setTimeout(() => {
      onEnter();
    }, 700);
  };

  const handleSkipIntro = () => {
    try {
      sessionStorage.setItem('nikitha_manoranjan_intro_seen', 'true');
    } catch (e) {}
    onEnter();
  };

  return (
    <AnimatePresence>
      {!isOpeningCard ? (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-maroon-radial px-4 py-6 text-center overflow-hidden"
        >
          {/* Skip Intro Button */}
          <div className="w-full flex justify-end max-w-5xl z-20">
            <button
              onClick={handleSkipIntro}
              aria-label="Skip Intro"
              className="text-[11px] uppercase tracking-widest text-gold-300/90 hover:text-gold-100 bg-maroon-900/80 hover:bg-maroon-800 border border-gold-500/40 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-md"
            >
              Skip Intro →
            </button>
          </div>

          {/* Center Cinematic Card Content */}
          <div className="my-auto max-w-xl w-full flex flex-col items-center space-y-4 z-10 px-4">
            
            {/* STEP 2: Ganesha Mandala Emblem Reveal */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GaneshaEmblem size="md" />
            </motion.div>

            {/* STEP 3: Sacred Invocations */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-0.5"
            >
              <p className="font-cinzel text-lg sm:text-xl text-gold-300 tracking-wider font-semibold">
                {weddingConfig.blessings.invocationSanskrit}
              </p>
              <p className="font-kannada text-base sm:text-lg text-gold-200/90 font-medium">
                {weddingConfig.blessings.invocationKannada}
              </p>
            </motion.div>

            {/* Decorative Gold Flourish Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-28 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />

            {/* STEP 4: Elder Blessings Announcement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-cinzel text-[11px] sm:text-xs text-gold-300/80 uppercase tracking-[0.25em]"
            >
              {weddingConfig.blessings.eldersHeader}
            </motion.p>

            {/* STEP 5: Couple Names Reveal */}
            <div className="space-y-1 py-1">
              <motion.h1
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gold-gradient drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              >
                {weddingConfig.bride.name}
              </motion.h1>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="font-script text-3xl sm:text-4xl text-gold-200 my-0.5"
              >
                &
              </motion.div>

              <motion.h1
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gold-gradient drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              >
                {weddingConfig.groom.name}
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="font-cormorant italic text-base sm:text-lg text-champagne-light/90"
            >
              "{weddingConfig.blessings.invitationSubtitle}"
            </motion.p>

            {/* STEP 6: Date Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-gold-500/40 bg-maroon-900/70 backdrop-blur-md text-gold-300 font-cinzel text-xs sm:text-sm tracking-widest shadow-gold-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>25 • 26 AUGUST 2026</span>
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            </motion.div>

            {/* STEP 7: Golden ENTER INVITATION Button */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="pt-2"
            >
              <button
                onClick={handleEnterClick}
                className="group relative inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-maroon-950 font-cinzel font-bold text-sm sm:text-base tracking-widest uppercase shadow-gold-glow-lg hover:shadow-[0_0_50px_rgba(212,175,55,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">OPEN INVITATION</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Footer Note */}
          <div className="z-10 text-gold-400/60 font-cinzel text-[10px] tracking-widest uppercase">
            {weddingConfig.blessings.deities}
          </div>
        </motion.div>
      ) : (
        /* Physical Card Unfolding Visual Animation */
        <motion.div
          key="card-unfold"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-950 pointer-events-none"
        >
          <div className="w-full max-w-md h-80 border-4 border-gold-400 bg-parchment rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 text-center animate-pulse">
            <GaneshaEmblem size="md" />
            <h2 className="font-cinzel text-xl text-maroon-900 font-bold mt-4">Unfolding Invitation...</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
