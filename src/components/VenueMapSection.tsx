import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass } from 'lucide-react';

export const VenueMapSection: React.FC = () => {
  const [customOrigin, setCustomOrigin] = useState<string>('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [venueImgError, setVenueImgError] = useState(false);

  const destinationQuery = encodeURIComponent(weddingConfig.venue.fullAddress);

  // Copy address to clipboard
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(weddingConfig.venue.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  // Open Google Maps Directions URL
  const openDirections = (originQuery?: string) => {
    let url = `https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}`;
    if (originQuery && originQuery.trim()) {
      url += `&origin=${encodeURIComponent(originQuery.trim())}`;
    }
    window.open(url, '_blank');
  };

  // Geolocation Handler
  const handleCurrentLocation = () => {
    setGeoError(null);
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser. Please use 'Open Google Maps'.");
      return;
    }

    setIsGettingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsGettingLocation(false);
        const { latitude, longitude } = position.coords;
        const originString = `${latitude},${longitude}`;
        openDirections(originString);
      },
      (error) => {
        setIsGettingLocation(false);
        console.warn('Geolocation error:', error);
        setGeoError("We couldn't access your location. Please use 'Open Google Maps' instead.");
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <section id="venue" className="relative py-24 bg-maroon-950 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400 flex items-center justify-center space-x-2">
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Find Your Way</span>
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            WEDDING VENUE & DIRECTIONS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Venue Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Venue Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-maroon-900/80 border border-gold-500/30 backdrop-blur-md shadow-2xl space-y-6"
          >
            {/* Image / Vector Placeholder */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-gold-400/40 bg-maroon-950 flex items-center justify-center">
              {!venueImgError ? (
                <img
                  src={weddingConfig.venue.image}
                  alt={weddingConfig.venue.name}
                  onError={() => setVenueImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-parchment p-6 flex flex-col items-center justify-center text-maroon-900 text-center">
                  <MapPin className="w-10 h-10 text-gold-700 mb-2" />
                  <p className="font-cinzel text-lg font-bold">{weddingConfig.venue.name}</p>
                  <p className="font-sans text-xs text-maroon-800">Doddaballapura Taluk</p>
                </div>
              )}
            </div>

            {/* Venue Address Title */}
            <div>
              <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 font-cinzel text-xs font-semibold uppercase tracking-wider">
                Official Venue
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-gold-gradient mt-3">
                {weddingConfig.venue.name}
              </h3>
            </div>

            {/* Address Details */}
            <div className="space-y-2 text-champagne-light text-sm font-sans">
              <p className="flex items-center space-x-2 text-gold-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-gold-400" />
                <span>{weddingConfig.venue.landmark}</span>
              </p>
              <p className="flex items-center space-x-2 text-champagne-light/90">
                <span className="w-2 h-2 rounded-full bg-gold-400/60" />
                <span>{weddingConfig.venue.busStand}</span>
              </p>
              <p className="flex items-center space-x-2 text-champagne-light/90">
                <span className="w-2 h-2 rounded-full bg-gold-400/60" />
                <span>{weddingConfig.venue.taluk}</span>
              </p>
            </div>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-maroon-950 hover:bg-maroon-800 border border-gold-500/40 text-gold-300 font-cinzel text-xs font-semibold tracking-wider transition-all cursor-pointer"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 font-bold">Address Copied ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-400" />
                  <span>COPY VENUE ADDRESS</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Right Column: Interactive Navigation & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Origin Selection Header */}
            <div className="p-6 sm:p-8 rounded-3xl bg-maroon-900/80 border border-gold-500/30 backdrop-blur-md shadow-2xl space-y-6">
              
              <div>
                <h4 className="font-cinzel text-xl font-bold text-gold-gradient">
                  WHERE ARE YOU COMING FROM?
                </h4>
                <p className="font-cormorant text-base text-champagne-light/80 italic mt-1">
                  Select your starting point to launch instant turn-by-turn navigation on Google Maps
                </p>
              </div>

              {/* Preset Origin Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openDirections(weddingConfig.origins.masarapadi)}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-maroon-950 hover:bg-gold-500/20 border border-gold-500/40 text-gold-300 font-cinzel text-xs font-semibold tracking-wider transition-all cursor-pointer hover:border-gold-400"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>📍 Masarapadi</span>
                </button>

                <button
                  onClick={() => openDirections(weddingConfig.origins.bhairapura)}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-maroon-950 hover:bg-gold-500/20 border border-gold-500/40 text-gold-300 font-cinzel text-xs font-semibold tracking-wider transition-all cursor-pointer hover:border-gold-400"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>📍 Bhairapura</span>
                </button>

                {/* My Current Location Button */}
                <button
                  onClick={handleCurrentLocation}
                  disabled={isGettingLocation}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400 text-gold-200 font-cinzel text-xs font-bold tracking-wider transition-all cursor-pointer shadow-gold-glow"
                >
                  <Navigation className={`w-3.5 h-3.5 text-gold-300 ${isGettingLocation ? 'animate-spin' : ''}`} />
                  <span>{isGettingLocation ? 'Acquiring GPS...' : '📍 My Current Location'}</span>
                </button>
              </div>

              {/* Geolocation Error Alert if any */}
              {geoError && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-sans">
                  {geoError}
                </div>
              )}

              {/* Custom Location Input */}
              <div className="pt-2 border-t border-gold-500/20 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your town or city..."
                  value={customOrigin}
                  onChange={(e) => setCustomOrigin(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-maroon-950 border border-gold-500/40 text-gold-100 placeholder-gold-500/40 text-sm focus:outline-none focus:border-gold-400"
                />
                <button
                  onClick={() => openDirections(customOrigin)}
                  disabled={!customOrigin.trim()}
                  className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-maroon-950 font-cinzel font-bold text-xs tracking-wider transition-colors cursor-pointer"
                >
                  NAVIGATE
                </button>
              </div>

              {/* Main Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold-500/20">
                <button
                  onClick={() => openDirections()}
                  className="flex items-center justify-center space-x-2 py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-maroon-950 font-cinzel font-bold text-sm tracking-widest shadow-gold-glow uppercase transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </button>

                <a
                  href={weddingConfig.venue.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-4 px-6 rounded-xl bg-maroon-950 hover:bg-maroon-800 border border-gold-400 text-gold-200 font-cinzel font-bold text-sm tracking-widest uppercase transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>OPEN GOOGLE MAPS</span>
                </a>
              </div>

            </div>

            {/* Embedded Map Visual Frame */}
            <div className="w-full h-64 sm:h-72 rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl relative">
              <iframe
                title="Sri Ramanjaneya Kalyana Mantapa Location Map"
                src={`https://maps.google.com/maps?q=${destinationQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) saturate(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
