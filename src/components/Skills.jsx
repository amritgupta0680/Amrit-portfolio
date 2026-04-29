import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Skills.css";

const skillsData = {
  programming: {
    label: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 85 },
    ],
  },
  ai: {
    label: "AI & GenAI",
    icon: "🧠",
    skills: [
      { name: "LLMs", level: 90 },
      { name: "RAG", level: 90 },
      { name: "Machine Learning", level: 88 },
      { name: "LangChain", level: 85 },
      { name: "Deep Learning", level: 82 },
      { name: "NLP", level: 80 },
    ],
  },
  web: {
    label: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React.js", level: 88 },
      { name: "REST APIs", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 78 },
    ],
  },
  tools: {
    label: "Tools & DBs",
    icon: "🛠️",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "Power BI", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
};

const tabKeys = ["programming", "ai", "web", "tools"];

export default function Skills() {
  const [active, setActive] = useState("programming");

  const activeData = skillsData[active];

  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="skills-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies & proficiency levels
          </p>
        </div>

        <div className="skills-container">
          
          {/* LEFT: Tab buttons (Hidden on mobile) */}
          <div className="skills-tabs">
            {tabKeys.map((key) => {
              const isActive = active === key;
              const { label, icon } = skillsData[key];
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`skill-tab-btn ${isActive ? "active" : ""}`}
                >
                  <span className="icon">{icon}</span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Skill bars */}
          <div className="skills-content">
            
            {/* DESKTOP VIEW: Only active tab shown with AnimatePresence */}
            <div className="skills-desktop-view">
              <div className="skill-card">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontSize: '1.4rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{activeData.icon}</span> 
                  {activeData.label}
                </h3>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                  >
                    {activeData.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                      >
                        <div className="skill-info">
                          <span style={{ fontWeight: 500, color: '#f8fafc' }}>{skill.name}</span>
                          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{skill.level}%</span>
                        </div>

                        <div className="skill-track">
                          <motion.div
                            className="skill-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              delay: index * 0.08 + 0.1,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* MOBILE VIEW: All tabs stacked (Hidden on desktop) */}
            <div className="skills-mobile-view">
              {tabKeys.map((key) => {
                const data = skillsData[key];
                return (
                  <div key={key} className="skill-card" style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontSize: '1.4rem' }}>
                      <span style={{ fontSize: '1.8rem' }}>{data.icon}</span> 
                      {data.label}
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {data.skills.map((skill, index) => (
                        <div key={skill.name}>
                          <div className="skill-info">
                            <span style={{ fontWeight: 500, color: '#f8fafc' }}>{skill.name}</span>
                            <span style={{ fontVariantNumeric: 'tabular-nums' }}>{skill.level}%</span>
                          </div>

                          <div className="skill-track">
                            <motion.div
                              className="skill-fill"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.08 + 0.1,
                                duration: 0.8,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
