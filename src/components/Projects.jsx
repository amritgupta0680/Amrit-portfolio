import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "Generative AI Applications",
    description:
      "Built multiple real-world GenAI apps using LLMs, RAG pipelines, and intelligent agents.",
    longDescription:
      "A collection of hands-on Generative AI projects exploring LLMs, RAG systems, agents, and fine-tuning techniques.\n\n Projects Included:\n\n• Q&A Chatbot with Groq\nMulti-model chatbot using LLaMA 3 and Mixtral with LangSmith tracing and real-time parameter tuning.\n\n• RAG Document Q&A\nEnd-to-end RAG pipeline with PDF ingestion, chunking, FAISS vector store, and LLM-based answers with source references.\n\n• MathsGPT Agent\nReAct-based intelligent agent with tools including calculator, Wikipedia search, and step-by-step reasoning.\n\n• YouTube & Website Summarizer\nSummarizes content from YouTube videos and web URLs using Groq and HuggingFace LLM backends.\n\n• Fine-Tuned Chatbot (LoRA)\nCustom fine-tuned LLM using LoRA with comparison between base and fine-tuned model responses.\n\nDemonstrates end-to-end understanding of LLM application development, from prompt engineering and retrieval systems to deployment using Streamlit.",
    tech: ["Python", "LangChain", "Groq", "FAISS", "Streamlit", "LoRA", "Transformers"],
    github: "https://github.com/amritgupta0680/Genai-portfolio",
    demo: "https://www.linkedin.com/posts/amrit-gupta-1162b232a_generativeai-langchain-rag-ugcPost-7454815172298219520-QhOh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFL7QSIBxQXKXaYvKjflJba5PxY0pxjuIjk"
  },
  {
    title: "Emotion-Based Music Recommender",
    description:
      "Deep learning system that detects human facial emotions from webcam & predict songs.",
    longDescription:
      "An AI-driven application that performs real-time facial emotion recognition and dynamically suggests music tailored to the user’s emotional state. Combines deep learning, computer vision, and backend integration to deliver a complete end-to-end experience.",
    tech: ["Python", "CNN", "OpenCV", "flask"],
    github: "https://github.com/amritgupta0680/Facial-Emotion-Recognition-with-Music-Recommendation.git",
    demo: "https://drive.google.com/file/d/1R056JnOn2smY10Z-IN4-OQgq3xRjdClH/view?usp=drivesdk",
  },
  {
    title: "Personalized Diet Recommender",
    description:
      "AI-based nutrition recommendation system.",
    longDescription:
      "Provides personalized diet plans using machine learning based on user health, goals, and nutritional requirements.",
    tech: ["Python", "Machine Learning", "Deep Learning", "Streamlit"],
    github: "https://github.com/amritgupta0680/Personalize-Diet-Recommender.git",
    demo: "https://drive.google.com/file/d/1soP2uGuwJv8LeHdOWyxNt9V-1vH_xkce/view?usp=sharing",
  },
  {
    title: "AI-Powered Notes App",
    description:
      "A full-stack notes app using AI to generate concise summaries and improve productivity.",
    longDescription:
      "A complete notes management system where users can create, manage, and summarize notes using AI-powered NLP models. Built with a scalable backend and a modern frontend.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/amritgupta0680/-AI-Powered-Notes-App.git",
    demo: "https://drive.google.com/file/d/1sTbzbLZc5STN2xU7SuWj2HJl-2VWaLoY/view?usp=drive_link",
  },
  {
    title: "IMDB Sentiment Analysis",
    description:
      "RNN-based sentiment analysis model for movie reviews.",
    longDescription:
      "Uses NLP pipelines and RNN architectures to predict sentiment polarity (positive/negative) from IMDB movie reviews.",
    tech: ["Python", "NLP", "RNN", "Streamlit"],
    github: "https://github.com/amritgupta0680/IMDB-Sentiment-Analysis-RNN.git",
    demo: "https://drive.google.com/file/d/1W3udjQOMgfuP6TI0SNZd5OSQcssG7mUl/view?usp=drive_link",
  },
  {
    title: "Threadink App",
    description:
      "Full-stack content creation platform with a clean and responsive UI.",
    longDescription:
      "A full-stack web application enabling content creation, user engagement, authentication, and backend API integration.",
    tech: ["React", "Node.js", "Express", "Postgress SQL"],
    github: "https://github.com/amritgupta0680/threadink-app.git",
    demo: "https://drive.google.com/file/d/15VVx9ioDEXsEdzMeXF1jGQWY8KF21OzK/view",
  },
  {
    title: "Electricity Load Forecasting",
    description:
      "Machine learning-based time-series forecasting system.",
    longDescription:
      "Predicts electricity demand patterns using historical data and machine learning time-series models for improved energy planning.",
    tech: ["Python", "Machine Learning", "Time Series", "flask"],
    github: "https://github.com/amritgupta0680/electricity-load-forecasting.git",
    demo: "https://drive.google.com/file/d/19WqBlzJwM4o0H6ceHekZxfkO59_DD4ZV/view?usp=sharing",
  },
  {
    title: "Exercise Form Estimator",
    description:
      "Analyzes workout videos using MediaPipe to compute joint angles and score form accuracy. Built with Python and Streamlit",
    longDescription:
      "Analyzes workout videos using MediaPipe to compute joint angles and score form accuracy. Built with Python and Streamlit for easy deployment.",
    tech: ["MediaPipe", "Python", , "OpenCV"],
    github: "https://github.com/amritgupta0680/Form-Estimator-.git",
    demo: "https://github.com/amritgupta0680/Form-Estimator-.git",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center">
          Selected work showcasing my skills
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* BODY */}
              <div
                className="project-body"
                onClick={() => setActiveProject(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View Code
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary"
                  >
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="project-modal-overlay"
            onClick={() => setActiveProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3>{activeProject.title}</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{activeProject.longDescription}</p>

              <div className="modal-tech">
                {activeProject.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <button onClick={() => setActiveProject(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
