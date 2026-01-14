import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* LEFT */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Who I am & what I do
          </p>

          <p className="about-text">
            I’m <strong>Amrit Gupta</strong>, an AI & Data Science Engineer and
            Full Stack Web Developer who loves building intelligent systems and
            visually engaging web applications.
          </p>

          <p className="about-text">
            I specialize in <strong>machine learning</strong>,{" "}
            <strong>data-driven solutions</strong>, and modern web technologies.
            I enjoy solving real-world problems and turning ideas into scalable
            products.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="about-card">
            <h3>Quick Facts</h3>
            <ul>
              <li>🎓 AI & Data Science Engineer</li>
              <li>💻 Full Stack Developer</li>
              <li>🚀 Passionate about innovation</li>
              <li>📍 Open to opportunities</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
