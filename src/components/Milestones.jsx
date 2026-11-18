import { motion } from 'framer-motion';
import { Heart, Infinity as InfinityIcon, Moon, Sparkles } from 'lucide-react';
import { milestones } from '../data/birthdayData.js';

const icons = [Sparkles, Moon, InfinityIcon, Heart];
const iconColors = [
  { bg: 'rgba(230,191,58,0.3)', fg: '#ffdc71' },
  { bg: 'rgba(216,180,254,0.3)', fg: '#ecd7ff' },
  { bg: 'rgba(133,20,90,0.5)', fg: '#ffafd3' },
  { bg: 'rgba(133,20,90,0.5)', fg: '#ffafd3' },
];

export default function Milestones() {
  return (
    <section id="milestones" className="section section-wide" aria-labelledby="milestones-title">
      <div className="ambient-orb" style={{ width: 600, height: 600, bottom: -160, right: -160, background: 'rgba(255,220,113,0.1)' }} />

      <motion.header
        className="text-center mb-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <span className="eyebrow">{milestones.eyebrow}</span>
        <h2 id="milestones-title" className="section-heading mt-2 mb-2">
          {milestones.heading}
        </h2>
        <p className="mx-auto mb-0" style={{ maxWidth: 672 }}>
          {milestones.intro}
        </p>
      </motion.header>

      <div className="row g-4" style={{ position: 'relative', zIndex: 1 }}>
        {milestones.stats.map((stat, i) => {
          const Icon = icons[i];
          const color = iconColors[i];
          return (
            <div key={stat.label} className="col-12 col-sm-6 col-lg-3">
              <motion.article
                className="glass stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="stat-icon" style={{ background: color.bg }}>
                  <Icon size={20} color={color.fg} aria-hidden="true" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div
                  className="mt-2"
                  style={{ fontWeight: 600, fontSize: 14, color: '#efdbff', letterSpacing: '0.56px' }}
                >
                  {stat.label}
                </div>
                <div className="mt-1" style={{ fontSize: 13, color: 'var(--body)' }}>
                  {stat.note}
                </div>
              </motion.article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
