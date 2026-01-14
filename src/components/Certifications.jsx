import { motion } from "framer-motion";
import "../styles/Certifications.css";

const certifications = [
  {
    title: "Data Science",
    provider: "Infosys Springboard",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0141687577445335044/1-81f8ba78-a91f-4445-aec7-bfb5dafbe718.pdf",
  },
  {
    title: "Power BI for Business Professionals",
    provider: "Infosys Springboard",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01329487630381056036366_shared/1-4a37a9dc-296f-4ec4-9bfe-a9dfbc77858f.pdf",
  },
  {
    title: "Data Visualization",
    provider: "Tata (Forage)",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_AasKYZzbPemgT69Cw_1736530492934_completion_certificate.pdf",
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    provider: "Coursera",
    link: "https://coursera.org/share/000a786d0ba8353c2821d0a0ba2b3020",
  },
  {
    title: "Generative AI",
    provider: "Google Cloud",
    link: "https://drive.google.com/file/d/1R8DzqenrSLjZldjcB-ABmZ0lRqmUF1XM/view",
  },
  {
    title: "Web Development",
    provider: "Udemy",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications py-28">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Verified learning & professional credentials
        </motion.p>

        <div className="cert-list">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-row"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="cert-info">
                <span className="cert-bullet">▸</span>
                <div>
                  <h3>{cert.title}</h3>
                  <p>{cert.provider}</p>
                </div>
              </div>

              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
