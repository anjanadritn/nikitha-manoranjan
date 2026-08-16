import React, { useState, useEffect } from 'react';
import { OpeningExperience } from './components/OpeningExperience';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SaveTheDateSection } from './components/SaveTheDateSection';
import { CountdownTimer } from './components/CountdownTimer';
import { InvitationMessage } from './components/InvitationMessage';
import { CoupleSection } from './components/CoupleSection';
import { StoryTimeline } from './components/StoryTimeline';
import { WeddingEvents } from './components/WeddingEvents';
import { VenueMapSection } from './components/VenueMapSection';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVPSection } from './components/RSVPSection';
import { DigitalBlessings } from './components/DigitalBlessings';
import { ContactSection } from './components/ContactSection';
import { WhatsAppShare } from './components/WhatsAppShare';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { StickyDirectionsMobile } from './components/StickyDirectionsMobile';
import { FloatingPetals } from './components/FloatingPetals';

export const App: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('nikitha_manoranjan_intro_seen') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

  const handleEnterInvitation = () => {
    setIntroCompleted(true);
  };

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-maroon-950 text-warm-cream selection:bg-gold-500 selection:text-maroon-950 relative">
      
      {/* Floating Gold Petals & Particle Background */}
      <FloatingPetals />

      {/* Cinematic Opening Experience for first-time visitors */}
      {!introCompleted ? (
        <OpeningExperience onEnter={handleEnterInvitation} />
      ) : (
        <>
          {/* Top Sticky Luxury Navbar */}
          <Navbar isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />

          {/* Main Website Sections */}
          <main>
            <HeroSection />
            <SaveTheDateSection />
            <CountdownTimer />
            <InvitationMessage />
            <CoupleSection />
            <StoryTimeline />
            <WeddingEvents />
            <VenueMapSection />
            <PhotoGallery />
            <RSVPSection />
            <DigitalBlessings />
            <ContactSection />
            <WhatsAppShare />
          </main>

          {/* Footer */}
          <Footer />

          {/* Persistent Floating Controls */}
          <AudioPlayer isPlaying={isMusicPlaying} onToggle={toggleMusic} />
          <StickyDirectionsMobile />
        </>
      )}

    </div>
  );
};

export default App;
