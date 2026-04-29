import { motion, useMotionValue, useTransform } from "framer-motion";
import HeroParticles from "./HeroParticles";
import profileImg from "../assets/images/profile.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  /* Parallax motion values */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="hero">
      {/* BACKGROUND PARTICLES */}
      <HeroParticles />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-intro">Hello, I'm</p>

          <h1 className="hero-name">
            Amrit <span>Gupta</span>
          </h1>

          <p className="hero-role">
            AI & Data Science Engineer <br />
            Full Stack Web Developer · Generative AI Engineer · Deep Learning · LLM & RAG Pipelines
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>

            <a href="#projects" className="btn secondary">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-glow">
            <img src={profileImg} alt="Amrit Gupta" />
          </div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  );
}
