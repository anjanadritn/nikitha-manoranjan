import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { Clock, Sparkles } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isCompleted: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    // Parse target date strictly in Indian Standard Time (IST: UTC +05:30)
    const targetDateIST = new Date(weddingConfig.wedding.targetIsoDateIST).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDateIST - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF9D6', '#AA771C', '#6A1B29'],
    });
  };

  return (
    <section className="relative py-16 bg-maroon-950 text-warm-cream border-b border-gold-500/20 overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Title */}
        <div className="flex items-center justify-center space-x-2 text-gold-400 mb-3">
          <Clock className="w-4 h-4" />
          <span className="font-cinzel text-xs uppercase tracking-[0.25em]">Countdown to Sacred Muhurtham</span>
        </div>

        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient mb-8">
          26 AUGUST 2026 • 4:50 AM IST
        </h3>

        {!timeLeft.isCompleted ? (
          /* Glassmorphic Countdown Cards */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-5 rounded-xl bg-maroon-900/80 border border-gold-500/30 backdrop-blur-md shadow-gold-glow flex flex-col items-center justify-center group hover:border-gold-400 transition-colors"
              >
                <div className="font-cinzel text-4xl sm:text-5xl font-black text-gold-gradient drop-shadow">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="font-cinzel text-[10px] sm:text-xs text-gold-300/80 tracking-widest mt-2 font-semibold">
                  {item.label}
                </div>
              </motion.div>
            ))}

          </div>
        ) : (
          /* Zero State Celebration Announcement */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onAnimationComplete={triggerConfetti}
            className="p-8 rounded-2xl bg-gold-500/20 border-2 border-gold-400 backdrop-blur-md shadow-gold-glow-lg max-w-xl mx-auto"
          >
            <Sparkles className="w-8 h-8 text-gold-300 mx-auto mb-3 animate-spin-slow" />
            <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">
              THE CELEBRATION HAS BEGUN ❤️
            </h3>
            <p className="font-cormorant text-lg text-champagne-light mt-2">
              Nikitha & Manoranjan are tied in holy matrimony!
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};
