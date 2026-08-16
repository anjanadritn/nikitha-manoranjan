import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GalleryImage } from '../config/weddingConfig';

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-maroon-950/95 backdrop-blur-xl flex items-center justify-center p-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-maroon-900/80 border border-gold-500/40 text-gold-300 hover:text-gold-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-maroon-900/80 border border-gold-500/40 text-gold-300 hover:text-gold-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Main Image Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-2xl flex flex-col items-center justify-center bg-maroon-900"
        >
          {!imgError ? (
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              onError={() => setImgError(true)}
              className="max-h-[75vh] w-auto object-contain"
            />
          ) : (
            <div className="w-full h-80 bg-parchment p-8 flex flex-col items-center justify-center text-maroon-900 text-center">
              <ImageIcon className="w-16 h-16 text-gold-700 mb-3" />
              <p className="font-cinzel text-xl font-bold">{currentImage.title}</p>
              <p className="font-sans text-xs text-maroon-800 mt-1">
                Category: {currentImage.category}
              </p>
            </div>
          )}

          {/* Caption Overlay */}
          <div className="w-full p-4 bg-maroon-950/90 border-t border-gold-500/30 text-center space-y-1">
            <h4 className="font-cinzel text-lg font-bold text-gold-gradient">
              {currentImage.title}
            </h4>
            <p className="font-sans text-xs text-gold-300/80">
              {currentIndex + 1} of {images.length} • {currentImage.category}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-maroon-900/80 border border-gold-500/40 text-gold-300 hover:text-gold-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
