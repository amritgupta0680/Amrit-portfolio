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
              I’m <strong>Amrit Gupta</strong>, a B.Tech graduate in Artificial Intelligence and Data Science, passionate about building intelligent, real-world solutions using AI.
              </p>
              
           <p className="about-text">
              I specialize in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Generative AI</strong>, with hands-on experience in LLMs, RAG pipelines, and data-driven applications.
          </p>
              
          <p className="about-text">
              Alongside AI, I have experience in <strong>full-stack web development</strong>, allowing me to build complete, scalable, and user-focused applications.
          </p>

          <p className="mt-4 text-textSecondary leading-relaxed">
             I’m actively seeking opportunities in <strong>Data Science</strong> and <strong>Generative AI</strong> to contribute to impactful, production-level systems.
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
              <li>🤖 Generative AI Developer (LLMs, RAG, Agents)</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
