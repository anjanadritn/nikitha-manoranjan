import React from 'react';

export const Watermark: React.FC = () => {
  return (
    <div
      className="fixed bottom-4 right-4 z-20 pointer-events-none"
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '11px',
        fontWeight: 300,
        letterSpacing: '2px',
        color: 'rgba(212, 175, 55, 0.25)',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        textTransform: 'uppercase',
      }}
    >
      Anjan
    </div>
  );
};
