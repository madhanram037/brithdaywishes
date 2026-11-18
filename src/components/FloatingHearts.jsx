import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Lightweight decorative hearts that drift upward behind the page.
// Positions are chosen once on mount so they do not jump on re-render.
export default function FloatingHearts({ count = 12 }) {
  const [hearts] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 14,
      duration: 14 + Math.random() * 10,
      delay: Math.random() * 12,
      color: i % 2 === 0 ? '#ffafd3' : '#d8b4fe',
    })),
  );

  return (
    <div className="ambient-layer" aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          style={{ position: 'absolute', bottom: '-40px', left: `${h.left}%`, opacity: 0 }}
          animate={{ y: ['0vh', '-110vh'], opacity: [0, 0.5, 0.5, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: 'linear' }}
        >
          <Heart size={h.size} color={h.color} fill={h.color} fillOpacity={0.35} />
        </motion.span>
      ))}
    </div>
  );
}
