import { motion } from 'framer-motion';
import { ChevronDown, Heart, Mail, Sparkles } from 'lucide-react';
import { hero } from '../data/birthdayData.js';
import Cake from './Cake.jsx';

// Smooth-scroll to a section by its id.
export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: 'easeOut' } }),
};

export default function Hero() {
  return (
    <section id="top" className="hero section-narrow" aria-labelledby="hero-title">
      <div className="ambient-orb" style={{ width: 620, height: 620, top: -120, left: -160, background: 'rgba(219,184,255,0.15)' }} />
      <div className="ambient-orb" style={{ width: 520, height: 520, top: 40, left: '50%', transform: 'translateX(-50%)', background: 'rgba(133,20,90,0.25)' }} />

      <div className="text-center" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.1} className="mb-3">
          <span
            className="eyebrow glass"
            style={{ borderRadius: 9999, padding: '4px 16px', background: 'rgba(50,36,64,0.8)' }}
          >
            <Sparkles size={14} aria-hidden="true" />
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          className="hero-title mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.25}
        >
          {hero.titleLine1}
          <span className="gradient-line">{hero.titleLine2}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-4"
          style={{ maxWidth: 672, fontSize: 18, lineHeight: 1.6 }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.55} className="mb-4">
          <Cake />
        </motion.div>

        <motion.div
          className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.7}
        >
          <button
            type="button"
            className="btn-pill btn-primary-grad"
            onClick={() => scrollToId('milestones')}
          >
            <Heart size={18} aria-hidden="true" />
            {hero.primaryCta}
          </button>
          <button
            type="button"
            className="btn-pill btn-glass"
            onClick={() => scrollToId('letter')}
          >
            <Mail size={16} aria-hidden="true" />
            {hero.secondaryCta}
          </button>
        </motion.div>

        <motion.button
          type="button"
          className="scroll-hint mt-5 d-inline-flex flex-column align-items-center"
          onClick={() => scrollToId('milestones')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label={hero.scrollHint}
        >
          <span>{hero.scrollHint}</span>
          <ChevronDown size={16} aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  );
}
