
import { useEffect, useRef, useState } from 'react';

interface Metric {
  icon: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  displayOverride?: string;
}

const metrics: Metric[] = [
  { icon: 'ri-message-3-line', numericValue: 10, suffix: 'K', label: 'SMS Per Second' },
  { icon: 'ri-timer-flash-line', numericValue: 300, prefix: '<', suffix: 'MS', label: 'Platform Latency' },
  { icon: 'ri-shield-check-line', numericValue: 99.99, suffix: '%', label: 'Infrastructure Uptime' },
  { icon: 'ri-phone-line', numericValue: 5, suffix: 'K', label: 'Calls Per Second' },
];

function useCountUp(target: number, duration: number, started: boolean, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, decimals]);

  return count;
}

function AnimatedMetric({ metric, started }: { metric: Metric; started: boolean }) {
  const decimals = metric.numericValue % 1 !== 0 ? 2 : 0;
  const count = useCountUp(metric.numericValue, 1800, started, decimals);

  return (
    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
          style={{ backgroundColor: '#0F48DC' }}
        >
          <i className={`${metric.icon} text-white text-2xl`}></i>
        </div>
      </div>
      <div className="text-4xl font-bold mb-2 tabular-nums" style={{ color: '#0F48DC' }}>
        {metric.prefix ?? ''}
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {metric.suffix ?? ''}
      </div>
      <div className="text-sm font-medium text-gray-600">{metric.label}</div>
    </div>
  );
}

const TrustRow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <AnimatedMetric key={index} metric={metric} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustRow;
