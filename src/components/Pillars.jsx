import { motion } from 'framer-motion';
import { Anchor, Shield, Smile, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { pillars } from '../data/birthdayData.js';

// Maps the icon names in birthdayData.js to Lucide components.
const iconMap = { Anchor, Shield, Smile, TrendingUp, Zap };

// Icon background and accent colours, taken from the Figma pillar cards.
const pillarColors = [
  { bg: 'rgba(133,20,90,0.5)', fg: '#ffafd3', tag: '#ffafd3' },
  { bg: 'rgba(230,191,58,0.4)', fg: '#ffdc71', tag: '#ffdc71' },
  { bg: 'rgba(216,180,254,0.3)', fg: '#ecd7ff', tag: '#ecd7ff' },
  { bg: 'rgba(133,20,90,0.4)', fg: '#ffafd3', tag: '#ffafd3' },
  { bg: 'rgba(230,191,58,0.3)', fg: '#ffdc71', tag: '#ffdc71' },
];

export default function Pillars() {
  return (
    <section id="pillars" className="section section-wide" aria-labelledby="pillars-title">
      <motion.header
        className="text-center mb-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">{pillars.eyebrow}</span>
        <h2 id="pillars-title" className="section-heading mt-2 mb-2">
          {pillars.heading}
        </h2>
        <p className="mx-auto mb-0" style={{ maxWidth: 672 }}>
          {pillars.intro}
        </p>
      </motion.header>

      <div className="row g-4">
        {pillars.items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Sparkles;
          const color = pillarColors[i];
          // Figma: the last card spans two columns on large screens.
          const colClass = i === 4 ? 'col-12 col-lg-8' : 'col-12 col-md-6 col-lg-4';
          return (
            <div key={item.title} className={colClass}>
              <motion.article
                className="glass pillar-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <div className="pillar-icon" style={{ background: color.bg }}>
                  <Icon size={22} color={color.fg} aria-hidden="true" />
                </div>
                <h3 className="pillar-title">{item.title}</h3>
                <p className="mb-0">{item.text}</p>
                <span className="pillar-tag" style={{ color: color.tag }}>
                  <Sparkles size={12} aria-hidden="true" />
                  {item.tag}
                </span>
              </motion.article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
