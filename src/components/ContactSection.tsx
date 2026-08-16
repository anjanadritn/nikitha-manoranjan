import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export const ContactSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-maroon-900 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400 flex items-center justify-center space-x-2">
            <HelpCircle className="w-4 h-4 text-gold-400" />
            <span>Assistance</span>
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            NEED HELP OR DIRECTIONS?
          </h2>
          <p className="font-cormorant text-xl text-champagne-light/90 italic">
            Reach out to our family members for any wedding-related assistance
          </p>
        </div>

        {/* Contact Phone Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {weddingConfig.contacts.map((contact, idx) => (
            <motion.a
              key={contact.number}
              href={`tel:${contact.number}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-maroon-950/80 border border-gold-500/30 hover:border-gold-400 shadow-xl flex flex-col items-center justify-center space-y-3 transition-all hover:scale-105 active:scale-95"
            >
              <div className="w-12 h-12 rounded-full border border-gold-400/50 bg-gold-500/10 flex items-center justify-center text-gold-300 group-hover:bg-gold-500 group-hover:text-maroon-950 transition-colors shadow-gold-glow">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-cinzel text-xs text-gold-400 uppercase tracking-wider font-semibold">
                  {contact.label}
                </p>
                <p className="font-sans text-lg font-bold text-champagne-light group-hover:text-gold-200 mt-1">
                  {contact.display}
                </p>
              </div>
              <span className="text-[10px] font-cinzel text-gold-400/70 uppercase tracking-widest group-hover:text-gold-300">
                TAP TO CALL 📞
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
