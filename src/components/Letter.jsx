import { motion } from 'framer-motion';
import { Heart, PenLine } from 'lucide-react';
import { letter } from '../data/birthdayData.js';

export default function Letter() {
  return (
    <section id="letter" className="section section-narrow" aria-labelledby="letter-title">
      <motion.header
        className="text-center mb-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">{letter.eyebrow}</span>
        <h2 id="letter-title" className="section-heading mt-2 mb-2">
          {letter.heading}
        </h2>
        <p className="mx-auto mb-0" style={{ maxWidth: 576 }}>
          {letter.intro}
        </p>
      </motion.header>

      <motion.article
        className="letter-paper"
        initial={{ opacity: 0, y: 40, rotate: -0.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* wax seal */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -20,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #85145a 0%, #ffafd3 50%, #ffdc71 100%)',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Heart size={20} color="#3d0026" fill="#3d0026" aria-hidden="true" />
        </div>

        <div className="letter-body">
          <h3 className="mb-4" style={{ fontSize: 28, color: 'var(--light-pink)' }}>
            {letter.salutation}
          </h3>

          {letter.paragraphs.map((p, i) => (
            <p key={i} className="mb-3">
              {p}
            </p>
          ))}

          <p
            className="mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, color: 'var(--gold)' }}
          >
            {letter.signoff}
          </p>

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pt-3" style={{ borderTop: '1px solid rgba(255,175,211,0.15)' }}>
            <span className="d-inline-flex align-items-center gap-2" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.55px', textTransform: 'uppercase', color: 'var(--body)' }}>
              <PenLine size={13} aria-hidden="true" />
              {letter.guarantee}
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--pink)' }}>
              {letter.signature}
            </span>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
