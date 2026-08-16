import React from 'react';

interface GaneshaEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const GaneshaEmblem: React.FC<GaneshaEmblemProps> = ({
  className = '',
  size = 'md',
  animated = true,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Rotating Mandala Ring */}
      <div
        className={`absolute inset-0 border border-gold-500/40 rounded-full border-dashed ${
          animated ? 'animate-spin-slow' : ''
        }`}
      />
      <div
        className={`absolute -inset-2 border border-gold-400/20 rounded-full ${
          animated ? 'animate-pulse-glow' : ''
        }`}
      />

      {/* SVG Vector Lord Ganesha Emblem */}
      <svg
        viewBox="0 0 200 200"
        className={`${sizeClasses[size]} drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9D6" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA771C" />
            <stop offset="100%" stopColor="#FCF6BA" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Decorative Sun / Mandala Rays */}
        <circle cx="100" cy="100" r="88" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="76" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
        
        {/* Ray Dots */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 100 + 82 * Math.cos(rad);
          const cy = 100 + 82 * Math.sin(rad);
          return <circle key={idx} cx={cx} cy={cy} r="2.5" fill="url(#goldGrad)" />;
        })}

        {/* Central Traditional Lord Ganesha Contour */}
        {/* Crown (Mukut) */}
        <path
          d="M100 32 L112 56 L100 50 L88 56 Z"
          fill="url(#goldGrad)"
          filter="url(#glow)"
        />
        <path
          d="M100 22 L106 34 L94 34 Z"
          fill="url(#goldGrad)"
        />

        {/* Ears */}
        <path
          d="M88 64 C70 55 52 75 72 88 C82 94 88 84 88 74 Z"
          fill="url(#goldGrad)"
          opacity="0.9"
        />
        <path
          d="M112 64 C130 55 148 75 128 88 C118 94 112 84 112 74 Z"
          fill="url(#goldGrad)"
          opacity="0.9"
        />

        {/* Head & Tilak */}
        <path
          d="M86 64 Q100 58 114 64 Q108 82 100 84 Q92 82 86 64 Z"
          fill="url(#goldGrad)"
        />
        {/* Sacred Tilak Lines */}
        <path d="M94 58 H106 M92 62 H108 M96 66 H104" stroke="#4A0E17" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="100" cy="70" r="2.5" fill="#4A0E17" />

        {/* Trunk (Sondulu - Sweeping Left in South Indian Tradition) */}
        <path
          d="M100 82 C104 92 108 108 92 118 C80 126 68 116 72 106 C74 100 82 102 80 110 C78 114 84 118 90 112 C98 104 94 92 92 82 Z"
          fill="url(#goldGrad)"
          filter="url(#glow)"
        />

        {/* Modak in Trunk tip */}
        <circle cx="78" cy="108" r="4" fill="url(#goldGrad)" filter="url(#glow)" />

        {/* Tusk (Modaka / Ekadanta detail) */}
        <path d="M108 86 L116 88 L108 90 Z" fill="#FFF9D6" />

        {/* Base Lotus Petals */}
        <path
          d="M60 148 Q100 132 140 148 Q100 166 60 148 Z"
          fill="url(#goldGrad)"
          opacity="0.75"
        />
        <path
          d="M75 144 Q100 136 125 144 Q100 156 75 144 Z"
          fill="url(#goldGrad)"
        />
      </svg>
    </div>
  );
};
