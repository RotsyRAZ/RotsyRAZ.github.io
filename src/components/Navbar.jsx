import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../data/translations";
import "./Navbar.css";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const T = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: T.about },
    { href: "#experience", label: T.experience },
    { href: "#skills", label: T.skills },
    // { href: "#projects", label: T.projects },
    { href: "#contact", label: T.contact },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          R<span className="grad-text">.</span>R
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Activer le thème clair"
                : "Activer le thème sombre"
            }
            title={theme === "dark" ? "Thème clair" : "Thème sombre"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label="Toggle language"
          >
            {lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
          <a href="#contact" className="btn btn-primary nav-cta">
            {lang === "fr" ? "Me contacter" : "Contact me"}
          </a>
          <button
            className="burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
