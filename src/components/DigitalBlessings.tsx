import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Sparkles } from 'lucide-react';

interface Blessing {
  id: string;
  name: string;
  message: string;
  date: string;
}

export const DigitalBlessings: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [blessings, setBlessings] = useState<Blessing[]>([
    {
      id: 'b-1',
      name: 'Ananth & Family',
      message: 'Wishing Nikitha & Manoranjan a lifetime of happiness, divine harmony, and endless joy! 🌸✨',
      date: 'Aug 16, 2026',
    },
    {
      id: 'b-2',
      name: 'Sunitha & Family',
      message: 'May Lord Anjaneya Swamy bless your sacred union with peace, prosperity and health.',
      date: 'Aug 15, 2026',
    },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem('nikitha_manoranjan_blessings');
    if (saved) {
      try {
        setBlessings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handlePostBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: `b-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    localStorage.setItem('nikitha_manoranjan_blessings', JSON.stringify(updated));
    setName('');
    setMessage('');
  };

  return (
    <section className="relative py-20 bg-maroon-950 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400 flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>Guestbook</span>
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            LEAVE YOUR BLESSINGS
          </h2>
          <p className="font-cormorant text-xl text-champagne-light/90 italic">
            Write your warm wishes for the couple to cherish forever
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handlePostBlessing} className="p-6 sm:p-8 rounded-3xl bg-maroon-900/80 border border-gold-500/40 shadow-2xl mb-12 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              required
              placeholder="Your Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="sm:col-span-1 px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/40 text-champagne-light placeholder-gold-500/40 text-sm focus:outline-none focus:border-gold-400"
            />
            <input
              type="text"
              required
              placeholder="Your Blessing / Message for Nikitha & Manoranjan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="sm:col-span-2 px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/40 text-champagne-light placeholder-gold-500/40 text-sm focus:outline-none focus:border-gold-400"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-maroon-950 font-cinzel font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center space-x-2 ml-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>POST BLESSING</span>
          </button>
        </form>

        {/* Blessings Wall Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blessings.map((b) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-maroon-900/40 border border-gold-500/30 backdrop-blur-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-cinzel text-base font-bold text-gold-gradient">
                  {b.name}
                </h4>
                <span className="font-sans text-[10px] text-gold-400/60 uppercase">{b.date}</span>
              </div>
              <p className="font-cormorant text-lg text-champagne-light italic">
                "{b.message}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
