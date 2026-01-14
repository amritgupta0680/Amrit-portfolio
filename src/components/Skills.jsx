import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  {
  title: "programming:",
  items: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 90 },
    { name: "SQL", level: 85 },
  ],
  },
  {
  title: "Ai:",
  items: [
    { name: "Machine Learning", level: 88 },
    { name: "Deep Learning", level: 82 },
    { name: "NLP", level: 80 },
    { name: "RNNs", level: 75 },
  ],
  },
  {
    title: "web:",
    items: [
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 78 },
    { name: "REST APIs", level: 85 },
  ],
  },
  {
  title: "tools:",
  items: [
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Power BI", level: 78 },
    { name: "GitHub", level: 80 },
  ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies & proficiency levels
        </p>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <h3>{group.title}</h3>

              {group.items.map((skill, i) => (
                <div className="skill-bar" key={i}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
