import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import "./Footer.css";

export default function Footer() {
  const { lang } = useLang();
  const T = t[lang].footer;

  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <div className="footer-logo">
          R<span className="grad-text">.</span>R
        </div>

        <p className="footer-copy">
          {T.made} <span className="grad-text">Rotsy RAZAKAMIADANA</span> —{" "}
          {new Date().getFullYear()} {T.rights}
        </p>

        <div className="footer-socials">
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
      </div>
    </footer>
  );
}
