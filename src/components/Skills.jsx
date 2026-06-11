import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiFigma,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import "./Skills.css";

const frontendSkills = [
  { icon: <SiJavascript />, name: "JavaScript", level: 80, color: "#F7DF1E" },
  { icon: <SiReact />, name: "React", level: 75, color: "#61DAFB" },
  { icon: <SiHtml5 />, name: "HTML5", level: 80, color: "#E34F26" },
  {
    icon: <span style={{ fontWeight: 700, fontSize: 14 }}>CSS</span>,
    name: "CSS3",
    level: 80,
    color: "#264DE4",
  },
  { icon: <SiNodedotjs />, name: "Node", level: 70, color: "#339933" },
];

const toolSkills = [
  { icon: <SiFigma />, name: "Figma", level: 80, color: "#F24E1E" },
  { icon: <SiGit />, name: "Git", level: 75, color: "#F05032" },
  // { icon: <SiGithub />, name: "GitHub", level: 80, color: "#fff" },
  { icon: <SiVite />, name: "Vite", level: 70, color: "#646CFF" },
];

function SkillBar({ icon, name, level, color, delay }) {
  return (
    <motion.div
      className="skill-bar-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="skill-bar-header">
        <span className="skill-icon" style={{ color }}>
          {icon}
        </span>
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--silver))",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const T = t[lang].skills;

  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg2)" }}
    >
      <div
        className="blob"
        style={{
          width: 350,
          height: 350,
          background: "var(--purple)",
          bottom: "5%",
          left: "-80px",
        }}
      />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{T.tag}</span>
          <h2 className="section-title">{T.title}</h2>
          <p className="section-sub">{T.sub}</p>
        </div>

        <div className="skills-grid">
          <motion.div
            className="skills-col glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skills-col-title">{T.frontend}</h3>
            {frontendSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.08} />
            ))}
          </motion.div>

          <div className="skills-right">
            <motion.div
              className="skills-col glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="skills-col-title">{T.tools}</h3>
              {toolSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.08} />
              ))}
            </motion.div>

            <motion.div
              className="glass-card soft-skills"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="skills-col-title">{T.soft}</h3>
              <div className="soft-tags">
                {T.softList.map((s) => (
                  <span key={s} className="soft-tag">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
