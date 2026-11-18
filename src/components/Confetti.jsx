import { useState } from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#ffdc71', '#ffafd3', '#d8b4fe', '#ffd8e7', '#ecd7ff'];

// Confetti pieces fall once and the parent unmounts this when finished.
export default function Confetti({ pieces = 90 }) {
  const [items] = useState(() =>
    Array.from({ length: pieces }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      width: 6 + Math.random() * 6,
      height: 10 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 160,
      spin: 360 + Math.random() * 720,
      duration: 3 + Math.random() * 2.5,
      delay: Math.random() * 0.8,
      color: COLORS[i % COLORS.length],
      round: i % 3 === 0,
    })),
  );

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {items.map((p) => (
        <motion.span
          key={p.id}
          style={{
            position: 'absolute',
            top: '-30px',
            left: `${p.left}%`,
            width: p.width,
            height: p.height,
            background: p.color,
            borderRadius: p.round ? '50%' : '2px',
          }}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
          animate={{ y: '115vh', x: p.drift, rotate: p.spin, opacity: [1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  );
}
