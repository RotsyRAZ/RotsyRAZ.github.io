import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiCode, FiClipboard, FiCheckCircle } from 'react-icons/fi';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import aboutPhoto from '../assets/Pdp.jpg';
import './About.css';

export default function About() {
  const { lang } = useLang();
  const T = t[lang].about;

  return (
    <section id="about" className="section">
      <div className="blob" style={{ width:400, height:400, background:'var(--blue)', top:'10%', right:'-100px' }} />
      <div className="container about-inner">
        <motion.div
          className="about-visual"
          initial={{ opacity:0, x:-40 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
        >
          <div className="about-img-box">
            <div className="about-img-frame">
              <img src={aboutPhoto} alt="Rotsy RAZAKAMIADANA" />
              <div className="about-img-shine" />
            </div>
            <div className="about-degree-card glass-card">
              <FiAward className="deg-icon" />
              <div>
                <strong>{T.degree}</strong>
                <span>{T.school}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity:0, x:40 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7, delay:.1 }}
        >
          <span className="section-tag">{T.tag}</span>
          <h2 className="section-title">{T.title}</h2>
          <p className="about-text">{T.p1}</p>
          <p className="about-text">{T.p2}</p>
          <p className="about-text">{T.p3}</p>

          <div className="about-roles">
            <span className="role-chip role-dev">
              <FiCode /> {lang === 'fr' ? 'Développeur' : 'Developer'}
            </span>
            <span className="role-chip role-po">
              <FiClipboard /> Product Owner
            </span>
            <span className="role-chip role-qa">
              <FiCheckCircle /> QA Tester
            </span>
          </div>

          <div className="about-stats">
            {[
              { num: 'M2', label: lang === 'fr' ? 'Diplôme' : 'Degree' },
              { num: 'JS', label: 'Stack principal' },
              { num: '∞', label: lang === 'fr' ? 'Curiosité' : 'Curiosity' },
            ].map(s => (
              <div key={s.num} className="stat-item">
                <span className="stat-num grad-text">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <a
            href="/CV-Rotsy-RAZAKAMIADANA.pdf"
            download
            className="btn btn-primary"
            style={{ width:'fit-content' }}
          >
            <FiDownload /> {T.download}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
