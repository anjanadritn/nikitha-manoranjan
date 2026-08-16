import React, { useEffect, useRef } from 'react';

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Canvas sizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedY: number;
      speedX: number;
      opacity: number;
      pulse: number;
    }

    const particleCount = window.innerWidth < 768 ? 35 : 70;
    const particles: Particle[] = [];

    const colors = [
      'rgba(212, 175, 55, ',   // Antique Gold
      'rgba(255, 241, 172, ',  // Champagne
      'rgba(251, 245, 183, ',  // Soft Gold
      'rgba(180, 130, 40, ',   // Deep Gold
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: Math.sin(Math.random() * Math.PI) * 0.2,
        opacity: Math.random() * 0.7 + 0.2,
        pulse: Math.random() * 0.02,
      });
    }

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.15;
        p.opacity += Math.sin(Date.now() * 0.002 + p.x) * 0.005;

        // Reset if off top of screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(0.9, p.opacity))})`;
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
    />
  );
};
