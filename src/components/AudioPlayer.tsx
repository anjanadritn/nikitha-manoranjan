import React, { useEffect, useRef, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = new Audio(weddingConfig.music.file);
    audio.loop = true;
    audio.volume = 0.4;

    audio.addEventListener('error', () => {
      setHasError(true);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback info:', err);
        setHasError(true);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-5 left-5 z-30">
      <button
        onClick={onToggle}
        aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
        className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-full border shadow-xl transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-maroon-900/90 border-gold-400 text-gold-200 shadow-gold-glow animate-pulse'
            : 'bg-maroon-950/80 border-gold-500/30 text-gold-400/80 hover:text-gold-200'
        }`}
      >
        {isPlaying ? (
          <>
            <Music className="w-4 h-4 text-gold-300 animate-spin-slow" />
            <span className="font-cinzel text-xs font-bold tracking-widest uppercase text-gold-gradient">
              {hasError ? '🎵 MUSIC ON (AUDIO MISSING)' : '🎵 MUSIC ON'}
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-gold-400" />
            <span className="font-cinzel text-xs font-semibold tracking-widest uppercase">
              🔇 MUSIC OFF
            </span>
          </>
        )}
      </button>
    </div>
  );
};
