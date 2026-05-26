import { useInView } from '../hooks/useInView'
import { skillsMain, skillsCategories } from '../data/portfolio'

export default function Skills() {
  const [barsRef, barsInView] = useInView()
  const [catsRef, catsInView] = useInView()

  return (
    <section id="skills" className="section" style={{ background: 'rgba(13,27,42,0.4)' }}>
      <div className="container">
        <span className="section-label">Stack technique</span>
        <h2 className="section-title">Compétences</h2>
        <div className="section-divider" />

        <div ref={barsRef} className={`skills-bars reveal${barsInView ? ' visible' : ''}`}>
          {skillsMain.map(skill => (
            <div key={skill.name} className="skill-bar">
              <div className="skill-bar-top">
                <span className="skill-bar-name">{skill.name}</span>
                <span className="skill-bar-badge">{skill.label}</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: barsInView ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div ref={catsRef} className={`skills-cats reveal${catsInView ? ' visible' : ''}`}>
          {skillsCategories.map((cat, i) => (
            <div key={cat.title} className={`skill-cat reveal d${i % 4 + 1}${catsInView ? ' visible' : ''}`}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-cat-tags">
                {cat.items.map(item => (
                  <span key={item} className="skill-cat-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
