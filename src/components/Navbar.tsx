import React, { useState, useEffect } from 'react';
import { Menu, X, Music, VolumeX, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

interface NavbarProps {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMusicPlaying, toggleMusic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Save Date', href: '#save-the-date' },
    { name: 'Invitation', href: '#invitation' },
    { name: 'The Couple', href: '#couple' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Venue & Map', href: '#venue' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-maroon-950/90 backdrop-blur-md border-b border-gold-500/30 shadow-maroon-deep py-3'
          : 'bg-gradient-to-b from-maroon-950/90 via-maroon-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="flex items-center space-x-2 group"
        >
          <span className="w-9 h-9 rounded-full border border-gold-400/60 bg-maroon-900/80 flex items-center justify-center font-cinzel font-bold text-sm text-gold-300 group-hover:shadow-gold-glow transition-all">
            N&M
          </span>
          <span className="font-cinzel text-base md:text-lg font-bold text-gold-gradient hidden sm:inline-block">
            NIKITHA & MANORANJAN
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="font-cinzel text-xs uppercase tracking-widest text-gold-200/80 hover:text-gold-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls (Music + Mobile Drawer Toggle) */}
        <div className="flex items-center space-x-3">
          
          {/* Music Control Button */}
          <button
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? 'Mute Music' : 'Play Music'}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-cinzel uppercase tracking-wider transition-all duration-300 ${
              isMusicPlaying
                ? 'border-gold-400 bg-gold-500/20 text-gold-200 shadow-gold-glow'
                : 'border-gold-500/30 bg-maroon-900/40 text-gold-400/70 hover:text-gold-300'
            }`}
          >
            {isMusicPlaying ? (
              <>
                <Music className="w-3.5 h-3.5 text-gold-300 animate-spin-slow" />
                <span className="hidden sm:inline">MUSIC ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">MUSIC OFF</span>
              </>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg text-gold-300 hover:bg-maroon-900/60 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-maroon-950/95 backdrop-blur-xl border-b border-gold-500/40 py-6 px-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-cinzel text-sm uppercase tracking-widest text-gold-200 hover:text-gold-400 py-2 border-b border-gold-500/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-gold-400 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
