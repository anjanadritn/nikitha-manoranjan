import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Infinity as InfinityIcon } from 'lucide-react';

export const StoryTimeline: React.FC = () => {
  const steps = [
    {
      title: 'TWO FAMILIES',
      description: 'Rooted in rich heritage, values, and traditional South Indian culture.',
      icon: '🏛️',
    },
    {
      title: 'TWO JOURNEYS',
      description: 'Individual paths guided by grace, family blessings, and elders.',
      icon: '✨',
    },
    {
      title: 'ONE BEAUTIFUL BEGINNING',
      description: 'Uniting in sacred matrimony on 26 August 2026.',
      icon: '💍',
    },
    {
      title: 'FOREVER STARTS HERE',
      description: 'Stepping together into a lifetime of harmony, devotion, and joy.',
      icon: '❤️',
    },
  ];

  return (
    <section className="relative py-24 bg-maroon-950 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400">
            A Symbolic Union
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            THE JOURNEY OF TOGETHERNESS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Vertical Stepper Timeline */}
        <div className="relative border-l-2 border-gold-500/30 ml-6 sm:ml-auto max-w-2xl mx-auto pl-8 sm:pl-12 space-y-12 text-left">
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gold-400 bg-maroon-900 flex items-center justify-center text-sm shadow-gold-glow group-hover:scale-110 transition-transform">
                <span>{step.icon}</span>
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-maroon-900/60 border border-gold-500/30 hover:border-gold-400 transition-colors backdrop-blur-sm">
                <span className="font-cinzel text-[10px] text-gold-400 uppercase tracking-widest block mb-1">
                  STAGE 0{index + 1}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-gold-gradient">
                  {step.title}
                </h3>
                <p className="font-cormorant text-lg text-champagne-light/90 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
