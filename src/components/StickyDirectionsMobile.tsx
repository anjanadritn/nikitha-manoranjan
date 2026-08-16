import React, { useState, useEffect } from 'react';
import { Navigation } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export const StickyDirectionsMobile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 300px, hide near footer/RSVP
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;

      if (scrollPosition > 350 && scrollPosition < documentHeight - windowHeight - 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleOpenDirections = () => {
    const destinationQuery = encodeURIComponent(weddingConfig.venue.fullAddress);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}`, '_blank');
  };

  return (
    <div className="lg:hidden fixed bottom-5 right-5 z-30 animate-bounce">
      <button
        onClick={handleOpenDirections}
        className="flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 font-cinzel font-bold text-xs tracking-widest uppercase shadow-gold-glow-lg border border-gold-300 active:scale-95 transition-all cursor-pointer"
      >
        <Navigation className="w-4 h-4 fill-maroon-950" />
        <span>📍 GET DIRECTIONS</span>
      </button>
    </div>
  );
};
