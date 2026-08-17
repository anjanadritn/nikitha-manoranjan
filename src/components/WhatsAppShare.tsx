import React from 'react';
import { MessageCircle } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export const WhatsAppShare: React.FC = () => {
  const handleShare = () => {
    // Encodes the message string including the Vercel URL
    const encodedMessage = encodeURIComponent(weddingConfig.whatsAppShare.message);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-16 bg-maroon-950 overflow-hidden border-t border-gold-500/20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-8 rounded-3xl bg-maroon-900/60 border border-gold-500/30 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="font-cinzel text-2xl font-bold text-gold-gradient">
              INVITE FRIENDS & FAMILY
            </h3>
            <p className="font-cormorant text-lg text-champagne-light/90 italic">
              Share our digital invitation link on WhatsApp
            </p>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center space-x-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-cinzel font-bold text-sm tracking-wider uppercase shadow-lg transition-all hover:scale-105 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>SHARE ON WHATSAPP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
