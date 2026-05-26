import { useInView } from '../hooks/useInView'
import { experiences, education } from '../data/portfolio'

function Timeline({ items }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`timeline reveal${inView ? ' visible' : ''}`}>
      {items.map((item, i) => (
        <div key={i} className="tl-item">
          <div className="tl-card">
            <div className="tl-head">
              <span className="tl-title">{item.title}</span>
              <span className="tl-period">{item.period}</span>
            </div>
            <div className="tl-org">
              {item.company || item.school}
              {item.tags?.map(t => (
                <span key={t} className="tl-badge">{t}</span>
              ))}
              {item.tag && <span className="tl-badge">{item.tag}</span>}
            </div>
            {item.items.length > 0 && (
              <ul className="tl-list">
                {item.items.map((li, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-label">Parcours</span>
        <h2 className="section-title">Expérience & Formation</h2>
        <div className="section-divider" />

        <div className="exp-edu-grid">
          <div>
            <p className="exp-section-title">Expérience professionnelle</p>
            <Timeline items={experiences} />
          </div>
          <div>
            <p className="exp-section-title">Formation</p>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  )
}
