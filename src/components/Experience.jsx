import { motion } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import './Experience.css';

export default function Experience() {
  const { lang } = useLang();
  const T = t[lang].experience;
  const icons = [FiBriefcase, FiBriefcase, FiBook, FiBook];

  return (
    <section id="experience" className="section" style={{ background:'var(--bg2)' }}>
      <div className="blob" style={{ width:350, height:350, background:'var(--pink)', top:'20%', right:'-80px' }} />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{T.tag}</span>
          <h2 className="section-title">{T.title}</h2>
        </div>

        <div className="timeline">
          {T.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity:0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ duration:.6, delay:i * .15 }}
              >
                <div className="timeline-dot">
                  <Icon />
                </div>
                <div className="timeline-card glass-card">
                  <span className="timeline-date">{item.date}</span>
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-company">{item.company}</span>
                  {item.bullets ? (
                    <ul className="timeline-bullets">
                      {item.bullets.map((b, j) => (
                        <li key={j}>
                          <strong>{b.label}</strong> {b.text}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="timeline-desc">{item.desc}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
