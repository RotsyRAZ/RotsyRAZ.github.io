import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import Pdp from "../assets/Pdp.jpg";
import "./Hero.css";

const roles = {
  fr: [
    "Développeur Web & Mobile",
    "Passionné par JavaScript",
    "Product Owner",
    "QA Tester",
    "Fan de Figma",
  ],
  en: [
    "Web & Mobile Developer",
    "JavaScript Enthusiast",
    "Product Owner",
    "QA Tester",
    "Figma Fan",
  ],
};

export default function Hero() {
  const { lang } = useLang();
  const T = t[lang].hero;
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[lang][roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles[lang].length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx, lang]);

  useEffect(() => {
    setDisplayed("");
    setDeleting(false);
    setRoleIdx(0);
  }, [lang]);

  return (
    <section id="hero" className="hero">
      <div
        className="blob"
        style={{
          width: 600,
          height: 600,
          background: "var(--purple)",
          top: "-100px",
          left: "-150px",
        }}
      />
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: "var(--cyan)",
          bottom: "0",
          right: "-100px",
        }}
      />
      <div
        className="blob"
        style={{
          width: 300,
          height: 300,
          background: "var(--pink)",
          top: "40%",
          left: "40%",
        }}
      />

      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">{T.greeting}</p>
          <h1 className="hero-name">
            Rotsy <span className="grad-text">RAZAKAMIADANA</span>
          </h1>

          <div className="hero-role">
            <span>{displayed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-sub">{T.sub}</p>

          <div className="hero-ctas">
            {/* <a href="#projects" className="btn btn-primary">
              {T.cta_projects} <FiArrowDown />
            </a> */}
            <a href="#contact" className="btn btn-outline">
              {T.cta_contact}
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/RotsyRAZ"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rotsy-razakamiadana-2a8a29260/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:rotsyrazakamiadana@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-glow" />
            <div className="avatar-photo">
              <img src={Pdp} alt="Rotsy RAZAKAMIADANA" />
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-hint">
        <FiArrowDown />
      </a>
    </section>
  );
}
