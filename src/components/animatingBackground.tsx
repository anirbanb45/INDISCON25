'use client';
import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface AnimatedGridBackgroundProps {
  colors?: {
    grid: string;
    glow: string;
  };
  children?: ReactNode;
  className?: string;
}

const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
  colors = {
    grid: '#93c5fd',
    glow: '#2563eb',
  },
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateGridSize = () => {
      const container = containerRef.current;
      if (!(container instanceof HTMLDivElement)) return;
      
      const containerWidth = container.clientWidth;
      const calculatedSize = Math.max(20, Math.min(80, containerWidth / 25));
      container.style.setProperty('--grid-size', `${calculatedSize}px`);
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const style: CSSProperties = {
    '--grid-color': colors.grid,
    '--glow-color': colors.glow,
  } as unknown as CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-screen h-full -z-50 overflow-hidden bg-gradient-to-br from-white via-blue-200 to-blue-400 ${className}`}
      style={style}
    >
      <div
        className="absolute inset-0 bg-[length:var(--grid-size)_var(--grid-size)] opacity-90"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--grid-color) 3px, transparent 1px)',
          filter: 'brightness(1.5) contrast(1.8)',
        }}
      />

      {/* Static Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/40 to-transparent" />

      {children}
    </div>
  );
};

export default AnimatedGridBackground;