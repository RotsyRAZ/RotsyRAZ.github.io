import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import "./Contact.css";

export default function Contact() {
  const { lang } = useLang();
  const T = t[lang].contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:rotsyrazakamiadana@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: "var(--purple)",
          bottom: "-80px",
          left: "-100px",
        }}
      />
      <div
        className="blob"
        style={{
          width: 300,
          height: 300,
          background: "var(--cyan)",
          top: "10%",
          right: "-60px",
        }}
      />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{T.tag}</span>
          <h2 className="section-title">{T.title}</h2>
          <p className="section-sub">{T.sub}</p>
        </div>

        <div className="contact-grid">
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label>{T.name}</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Rotsy RAZAKAMIADANA"
              />
            </div>
            <div className="form-group">
              <label>{T.email}</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="contact@example.com"
              />
            </div>
            <div className="form-group">
              <label>{T.message}</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={
                  lang === "fr"
                    ? "Bonjour Rotsy, j'aimerais vous proposer..."
                    : "Hi Rotsy, I'd like to..."
                }
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary contact-btn"
              disabled={sent}
            >
              {sent ? (
                "✓ Envoyé !"
              ) : (
                <>
                  <FiSend /> {T.send}
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-detail glass-card">
              <FiMail className="cd-icon" />
              <div>
                <strong>Email</strong>
                <a href="mailto:rotsyrazakamiadana@gmail.com">
                  rotsyrazakamiadana@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-detail glass-card">
              <FiLinkedin className="cd-icon" />
              <div>
                <strong>LinkedIn</strong>
                <a
                  href="https://www.linkedin.com/in/rotsy-razakamiadana-2a8a29260/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rotsy RAZAKAMIADANA
                </a>
              </div>
            </div>
            <div className="contact-detail glass-card">
              <FiMapPin className="cd-icon" />
              <div>
                <strong>Localisation</strong>
                <span>Analamahitsy, Antananarivo, Madagascar 🇲🇬</span>
              </div>
            </div>

            {/* <div className="contact-availability">
              <span className="avail-dot" />
              <span>{lang === 'fr' ? 'Disponible pour de nouvelles opportunités' : 'Open to new opportunities'}</span>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
