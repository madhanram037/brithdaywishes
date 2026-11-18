import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { wishPortal } from '../data/birthdayData.js';

// One balloon. Each one bobs up and down on its own timing.
function Balloon({ color, size, width, style, delay }) {
  return (
    <motion.div
      style={{ position: 'absolute', ...style }}
      animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <div
        style={{
          width: width,
          height: size,
          borderRadius: '50% 50% 48% 48%',
          background: `linear-gradient(to top, ${color.from}, ${color.to})`,
          opacity: 0.9,
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.25)',
          position: 'relative',
        }}
      >
        {/* knot */}
        <div
          style={{
            position: 'absolute',
            bottom: -4,
            left: '50%',
            marginLeft: -4,
            width: 8,
            height: 8,
            background: color.to,
            transform: 'rotate(45deg)',
          }}
        />
      </div>
      {/* string */}
      <div
        style={{
          width: 1,
          height: 40,
          margin: '0 auto',
          background: 'rgba(150,142,154,0.5)',
        }}
      />
    </motion.div>
  );
}

export default function WishPortal() {
  const [blown, setBlown] = useState(false);

  return (
    <section id="wish" className="section section-narrow" aria-labelledby="wish-title">
      <motion.div
        className="wish-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <span
              className="eyebrow mb-3 d-inline-flex"
              style={{ background: '#322440', borderRadius: 9999, padding: '4px 10px' }}
            >
              {wishPortal.eyebrow}
            </span>
            <h2 id="wish-title" className="mb-3" style={{ fontSize: 28, lineHeight: 1.3 }}>
              {wishPortal.heading}
            </h2>
            <p className="mb-4">{wishPortal.body}</p>

            <blockquote className="quote-tag mb-4 mx-0">“{wishPortal.quote}”</blockquote>

            <AnimatePresence mode="wait">
              {blown ? (
                <motion.p
                  key="done"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-0"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--gold)' }}
                  role="status"
                >
                  {wishPortal.done}
                </motion.p>
              ) : (
                <motion.button
                  key="button"
                  type="button"
                  className="btn-pill btn-primary-grad"
                  style={{ fontSize: 16, padding: '16px 24px', background: '#d8b4fe' }}
                  onClick={() => setBlown(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Wand2 size={16} aria-hidden="true" />
                  {wishPortal.button}
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="col-12 col-lg-6">
            <div className="candle-scene" aria-label="Balloons and a birthday candle">
              <Balloon
                delay={0}
                size={96}
                width={80}
                style={{ left: 24, top: 0 }}
                color={{ from: '#85145a', to: '#ffafd3' }}
              />
              <Balloon
                delay={1}
                size={112}
                width={18}
                style={{ right: 40, top: 0 }}
                color={{ from: '#6f5092', to: '#d8b4fe' }}
              />

              {/* candle */}
              <div style={{ position: 'absolute', left: '50%', bottom: 20, transform: 'translateX(-50%)', textAlign: 'center' }}>
                <AnimatePresence>
                  {!blown && (
                    <motion.div
                      key="flame"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: [1, 1.1, 0.95, 1] }}
                      exit={{ opacity: 0, scale: 0.2, y: -12 }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                      style={{
                        width: 20,
                        height: 32,
                        margin: '0 auto',
                        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                        background: 'linear-gradient(to top, #ffdc71, #ffffff 60%, #ffafd3)',
                        boxShadow: '0 0 16px rgba(255,220,113,0.9)',
                      }}
                    />
                  )}
                </AnimatePresence>
                <div style={{ width: 4, height: 12, background: '#cdc3d0', margin: '0 auto' }} />
                <div
                  style={{
                    position: 'relative',
                    width: 48,
                    height: 80,
                    margin: '0 auto',
                    background: '#3d2f4c',
                    borderRadius: '2px 2px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 10, color: 'var(--gold)', letterSpacing: '-0.5px' }}>
                    {wishPortal.candleLabel}
                  </span>
                </div>
                <div style={{ width: 80, height: 10, margin: '0 auto', borderRadius: 9999, background: '#322440' }} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
