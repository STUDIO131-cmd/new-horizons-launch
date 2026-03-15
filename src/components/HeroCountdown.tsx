import { useState, useEffect } from "react";

const HeroCountdown = () => {
  const targetDate = new Date("2026-02-21T13:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="font-display text-5xl md:text-7xl font-bold text-white">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-ui text-sm text-white/70 mt-2">{label}</span>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-black text-center">
      <h2 className="font-display text-2xl md:text-4xl text-white mb-12">
        A próxima edição está chegando: <strong style={{ color: '#E8956A' }}>21 e 22 de Fevereiro de 2026</strong>
      </h2>

      <div className="flex justify-center gap-6 md:gap-12">
        <TimeBlock value={timeLeft.days} label="Dias" />
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <TimeBlock value={timeLeft.minutes} label="Minutos" />
        <TimeBlock value={timeLeft.seconds} label="Segundos" />
      </div>
    </section>
  );
};

export default HeroCountdown;
