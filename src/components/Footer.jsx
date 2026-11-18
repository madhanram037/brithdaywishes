import { motion } from 'framer-motion';
import { Heart, RotateCcw } from 'lucide-react';
import { footer } from '../data/birthdayData.js';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', zIndex: 1 }}>
      <div className="footer-bar" />

      <motion.p
        className="d-flex align-items-center justify-content-center gap-2 flex-wrap mb-2"
        style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--heading)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {footer.madeWith}
      </motion.p>

      <p
        className="mb-4"
        style={{ fontWeight: 600, fontSize: 14, letterSpacing: '0.56px', color: 'var(--body)' }}
      >
        {footer.tagline}
      </p>

      <motion.button
        type="button"
        className="btn-pill btn-glass"
        style={{ padding: '8px 16px', fontSize: 11, letterSpacing: '0.88px', textTransform: 'uppercase', background: 'rgba(50,36,64,0.8)' }}
        onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        whileTap={{ scale: 0.96 }}
      >
        <RotateCcw size={12} aria-hidden="true" />
        {footer.replayButton}
      </motion.button>

      <div className="mt-3" aria-hidden="true">
        <Heart size={12} color="#ffafd3" fill="#ffafd3" />
      </div>
    </footer>
  );
}
