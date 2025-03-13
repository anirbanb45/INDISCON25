'use client'
import { useEffect, useState } from "react";

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl p-4 md:p-6 min-w-[120px] md:min-w-[140px] backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group">
    <span className="text-4xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tighter">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-xs md:text-sm text-white/80 font-medium uppercase tracking-widest">
      {label}
    </span>
    
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
      <div className="absolute -inset-[2px] bg-gradient-to-br from-blue-300/30 to-transparent rounded-xl blur-[12px]" />
    </div>
  </div>
);

const Countdown = () => {
  const eventDate = "2025-8-20 23:59:59";

  const calculateTimeLeft = () => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0 };
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { months, days, hours };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-20 overflow-hidden isolate">
      
      <div className="absolute inset-0 opacity-20 animate-gradient-rotate">
        <div className="absolute -inset-24 bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#3b82f6_50%,#2563eb_100%)] animate-spin [animation-duration:20s]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            INDISCON 2025
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 md:mb-16 font-semibold">
            August 21, 2025
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <CountdownBox value={timeLeft.months} label="Months" />
            <CountdownBox value={timeLeft.days} label="Days" />
            <CountdownBox value={timeLeft.hours} label="Hours" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZmIi8+PC9zdmc+')]" />
    </div>
  );
};

export default Countdown;