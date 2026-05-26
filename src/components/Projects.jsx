import { FiExternalLink } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section" style={{ background: 'rgba(13,27,42,0.4)' }}>
      <div className="container">
        <span className="section-label">Réalisations</span>
        <h2 className="section-title">Projets</h2>
        <div className="section-divider" />

        <div ref={ref} className={`projects-grid reveal${inView ? ' visible' : ''}`}>
          {projects.map((p, i) => (
            <div key={p.name} className={`proj-card reveal d${i % 4 + 1}${inView ? ' visible' : ''}`}>
              <div className="proj-head">
                <div className="proj-name">
                  {p.name}
                  {p.subtitle && <small> · {p.subtitle}</small>}
                </div>
                {p.badge && <span className="proj-badge">{p.badge}</span>}
              </div>

              <p className="proj-desc">{p.description}</p>

              <div className="proj-tags">
                {p.tags.map(t => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>

              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" className="proj-link">
                  Voir le projet <FiExternalLink />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
