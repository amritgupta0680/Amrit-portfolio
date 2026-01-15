import { useEffect, useState } from "react";
import "../styles/Navbar.css";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll shadow + active section */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="nav-logo">
          Amrit<span>.</span>
        </div>

        {/* LINKS */}
        <ul className="nav-links">
          {sections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta">
          <a
            href="public/resume/Amrit_Gupta_Resume.pdf"
            download
            className="resume-btn"
          >
            <ResumeIcon />
            Resume
          </a>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume/Amrit_Gupta_Resume.pdf"
            download
            className="mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            <ResumeIcon />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

/* ICON */
function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2H4v2h16v-2z" />
    </svg>
  );
}
