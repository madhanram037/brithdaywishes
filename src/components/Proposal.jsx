import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { proposal } from '../data/birthdayData.js';
import Confetti from './Confetti.jsx';
import FloatingHearts from './FloatingHearts.jsx';

// Both buttons lead to the same celebration, as the Figma note says.
export default function Proposal() {
  const [celebrating, setCelebrating] = useState(false);

  return (
    <section id="proposal" className="section section-narrow" aria-labelledby="proposal-title">
      <motion.div
        className="proposal-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 384,
            height: 384,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(133,20,90,0.3) 0%, rgba(216,180,254,0.2) 100%)',
            filter: 'blur(64px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span
            className="eyebrow mb-3 d-inline-flex"
            style={{ background: 'rgba(133,20,90,0.6)', borderRadius: 9999, padding: '4px 16px', color: 'var(--pink)' }}
          >
            <Sparkles size={14} aria-hidden="true" />
            {proposal.eyebrow}
          </span>

          <h2 id="proposal-title" className="proposal-heading mb-4">
            {proposal.heading}
          </h2>

          <p className="proposal-question mb-4">{proposal.question}</p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-3" style={{ maxWidth: 448, margin: '0 auto' }}>
            <motion.button
              type="button"
              className="btn-pill btn-yes flex-fill"
              onClick={() => setCelebrating(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {proposal.yesButton}
              <Heart size={18} aria-hidden="true" fill="#3d0026" />
            </motion.button>
            <motion.button
              type="button"
              className="btn-pill btn-no flex-fill"
              onClick={() => setCelebrating(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {proposal.noButton}
            </motion.button>
          </div>

          <p className="mb-0" style={{ fontSize: 13, opacity: 0.8 }}>
            {proposal.note}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {celebrating && (
          <motion.div
            key="celebration"
            className="celebration"
            role="dialog"
            aria-modal="true"
            aria-labelledby="celebration-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Confetti />
            <FloatingHearts count={18} />
            <motion.div
              className="celebration-text"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            >
              <Heart size={56} color="#ffafd3" fill="#ffafd3" className="mb-3" aria-hidden="true" />
              <h2 id="celebration-message" className="proposal-heading mb-4" style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}>
                {proposal.celebrationTitle}
              </h2>
              <p className="proposal-question mb-4" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>
                {proposal.celebrationMessage}
              </p>
              <button type="button" className="btn-pill btn-glass" onClick={() => setCelebrating(false)}>
                <RotateCcw size={16} aria-hidden="true" />
                {proposal.closeButton}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
