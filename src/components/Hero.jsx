import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const techTags = ['TypeScript', 'React', 'Angular', 'Node.js', 'Python', 'Docker']

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" />

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Disponible · Alternance M1 · Montpellier
        </div>

        <h1 className="hero-name gradient-text">
          Noah<br />BELLO
        </h1>

        <p className="hero-title">
          <strong>Développeur Full-Stack</strong> · Alternant M1 Expert Dev.
        </p>

        <p className="hero-desc">
          Architecture microservices, développement front/back et déploiement DevOps.
          Autonome, curieux et orienté solution.
        </p>

        <div className="hero-tags">
          {techTags.map(t => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Voir mes projets <FiArrowRight />
          </a>
          <a href={personal.cvUrl} download className="btn-outline">
            <FiDownload /> Télécharger le CV
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hero-social-link"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-bar" />
      </div>
    </section>
  )
}
