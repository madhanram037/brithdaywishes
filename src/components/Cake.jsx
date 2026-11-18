import { motion } from 'framer-motion';

// A simple drawn cake with a flickering flame.
// The Figma file's cake artwork could not be downloaded, so this is a
// close stand-in. Swap in the exported SVG later if you have it.
export default function Cake() {
  return (
    <div
      role="img"
      aria-label="A birthday cake with a glowing candle"
      style={{ position: 'relative', width: 260, height: 260, margin: '0 auto' }}
    >
      {/* soft glow behind the cake */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background:
            'linear-gradient(45deg, rgba(255,175,211,0.25) 0%, rgba(255,220,113,0.2) 50%, rgba(216,180,254,0.25) 100%)',
          filter: 'blur(36px)',
        }}
      />

      <svg viewBox="0 0 260 260" width="260" height="260" style={{ position: 'relative' }}>
        {/* plate */}
        <ellipse cx="130" cy="236" rx="110" ry="12" fill="#322440" />
        {/* bottom tier */}
        <rect x="40" y="170" width="180" height="62" rx="14" fill="#85145a" opacity="0.9" />
        <rect x="40" y="170" width="180" height="16" rx="8" fill="#ffafd3" opacity="0.85" />
        {/* top tier */}
        <rect x="70" y="118" width="120" height="56" rx="12" fill="#6f5092" opacity="0.9" />
        <rect x="70" y="118" width="120" height="14" rx="7" fill="#d8b4fe" opacity="0.85" />
        {/* drips */}
        <path d="M60 178 q8 16 16 0 q8 14 16 0 q8 16 16 0 q8 14 16 0 q8 16 16 0 q8 14 16 0 q8 16 16 0 q8 -1 0 -2 z" fill="#ffd8e7" opacity="0.7" />
        {/* candle */}
        <rect x="124" y="84" width="12" height="36" rx="3" fill="#ffdc71" />
        <rect x="128" y="78" width="4" height="8" fill="#cdc3d0" />
      </svg>

      {/* flame */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: 40,
          width: 16,
          height: 28,
          marginLeft: -8,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          background: 'linear-gradient(to top, #ffdc71, #ffffff 60%, #ffafd3)',
          boxShadow: '0 0 18px 4px rgba(255,220,113,0.7)',
        }}
        animate={{ scaleY: [1, 1.12, 0.95, 1.06, 1], scaleX: [1, 0.92, 1.05, 0.98, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
