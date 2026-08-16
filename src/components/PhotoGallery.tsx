import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig, GalleryImage } from '../config/weddingConfig';
import { LightboxModal } from './LightboxModal';
import { Camera, Image as ImageIcon } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Couple', 'Engagement', 'Family', 'Wedding Moments'];

  const filteredImages =
    activeCategory === 'All'
      ? weddingConfig.galleryImages
      : weddingConfig.galleryImages.filter((img) => img.category === activeCategory);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="relative py-24 bg-maroon-900 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400 flex items-center justify-center space-x-2">
            <Camera className="w-4 h-4 text-gold-400" />
            <span>Our Memories</span>
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            PHOTO GALLERY
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-cinzel text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 shadow-gold-glow font-bold'
                  : 'bg-maroon-950/80 text-gold-300/80 hover:text-gold-200 border border-gold-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-gold-500/30 hover:border-gold-400 shadow-xl cursor-pointer bg-maroon-950"
            >
              {!failedImages[img.id] ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={() => handleImageError(img.id)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                /* Fallback Graphic Placeholder */
                <div className="w-full h-full bg-parchment p-6 flex flex-col items-center justify-center text-maroon-900 text-center">
                  <ImageIcon className="w-12 h-12 text-gold-700 mb-2" />
                  <p className="font-cinzel text-base font-bold">{img.title}</p>
                  <p className="font-sans text-xs text-maroon-800 mt-1">{img.category}</p>
                </div>
              )}

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-cinzel text-[10px] text-gold-400 uppercase tracking-widest">
                  {img.category}
                </span>
                <h4 className="font-cinzel text-xl font-bold text-gold-gradient">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Viewer */}
      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
};
