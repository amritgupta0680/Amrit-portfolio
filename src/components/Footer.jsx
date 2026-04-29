import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-info">
          <h3>Amrit Gupta</h3>
          <p>
            AI & Data Science Engineer <br />
            Full Stack Web Developer · Generative AI Engineer · Deep Learning · LLM & RAG Pipelines
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-icons">
          <a
            href="https://github.com/amritgupta0680"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:amritgupta0680@gmail.com"
            aria-label="Email"
          >
            <MailIcon />
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Amrit Gupta. All rights reserved.
      </div>
    </footer>
  );
}

/* ICONS */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.42 7.86 10.95.57.1.78-.25.78-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.65.23 2.87.11 3.17.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.97-2.92 4v7.74h-4z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}
