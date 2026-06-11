import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import './Projects.css';

const projectColors = [
  ['#3E72AD', '#2F5A8F'],
  ['#A47B51', '#8C6A43'],
  ['#475569', '#64748B'],
];

export default function Projects() {
  const { lang } = useLang();
  const T = t[lang].projects;

  return (
    <section id="projects" className="section">
      <div className="blob" style={{ width:400, height:400, background:'var(--cyan)', top:'0', right:'-80px' }} />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{T.tag}</span>
          <h2 className="section-title">{T.title}</h2>
          <p className="section-sub">{T.sub}</p>
        </div>

        <div className="projects-grid">
          {T.items.map((p, i) => {
            const [c1, c2] = projectColors[i];
            return (
              <motion.div
                key={i}
                className="project-card glass-card"
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:.6, delay:i * .12 }}
              >
                <div className="project-thumb" style={{ background:`linear-gradient(135deg, ${c1}, ${c2})` }}>
                  <span className="project-num">0{i+1}</span>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="#" className="proj-link">
                      <FiGithub /> {T.code}
                    </a>
                    <a href="#" className="proj-link proj-link-primary">
                      <FiExternalLink /> {T.demo}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
