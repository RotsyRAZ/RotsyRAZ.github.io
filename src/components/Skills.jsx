import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiFigma,
  SiGit,
  SiJira,
} from "react-icons/si";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import "./Skills.css";

const frontendSkills = [
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
  {
    icon: <span style={{ fontWeight: 700, fontSize: 13 }}>CSS</span>,
    name: "CSS3",
    color: "#264DE4",
  },
  { icon: <SiNodedotjs />, name: "Node", color: "#339933" },
];

const toolSkills = [
  { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
  { icon: <SiGit />, name: "Git", color: "#F05032" },
  { icon: <SiJira />, name: "Jira", color: "#0052CC" },
];

function SkillChip({ icon, name, color }) {
  return (
    <span className="skill-chip">
      <span className="skill-chip-icon" style={{ color }}>
        {icon}
      </span>
      {name}
    </span>
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
            <div className="skills-list">
              {frontendSkills.map((s) => (
                <SkillChip key={s.name} {...s} />
              ))}
            </div>
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
              <div className="skills-list">
                {toolSkills.map((s) => (
                  <SkillChip key={s.name} {...s} />
                ))}
              </div>
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
