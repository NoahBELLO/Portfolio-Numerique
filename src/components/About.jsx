import { FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

const infoItems = [
  { icon: <FiMapPin />, text: 'Montpellier, France' },
  { icon: <FiMail />,   text: personal.email },
  { icon: <FiGithub />, text: 'github.com/NoahBELLO' },
  { icon: <FiLinkedin />, text: 'linkedin.com/in/bello-noah' },
]

const stats = [
  { num: '1+',  lbl: "An d'alternance" },
  { num: '4+',  lbl: 'Projets réels' },
  { num: '10+', lbl: 'Technologies' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-label">Qui suis-je ?</span>
        <h2 className="section-title">À propos</h2>
        <div className="section-divider" />

        <div ref={ref} className={`about-grid reveal${inView ? ' visible' : ''}`}>
          <div className="about-visual">
            <div className="about-avatar">
              <span className="gradient-text">NB</span>
            </div>
            <div className="about-info">
              {infoItems.map((item, i) => (
                <div key={i} className="about-info-item">
                  <span className="about-info-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-content">
            <p>
              Développeur Full-Stack en <strong>1ère année de Master Expert Architecture &
              Développement Informatique</strong> à Keyce Academy (Montpellier), en alternance
              chez <strong>CTDEV</strong> depuis septembre 2024.
            </p>
            <p>
              Je maîtrise l'ensemble de la chaîne de développement : conception d'architecture,
              développement front/back, gestion de bases de données hétérogènes
              (PostgreSQL, MongoDB, ClickHouse) et déploiement DevOps via Docker et GitHub Actions.
            </p>
            <p>
              Bilingue français / anglais, je gère mes projets en totale autonomie dans un
              environnement 100 % distant. Curieux par nature, je pratique une veille technologique
              régulière pour rester à jour sur les pratiques et outils du secteur.
            </p>

            <div className="about-stats">
              {stats.map(s => (
                <div key={s.lbl} className="about-stat">
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
