import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const socials = [
  { icon: <FiGithub />,   href: personal.github,                  label: 'GitHub' },
  { icon: <FiLinkedin />, href: personal.linkedin,                label: 'LinkedIn' },
  { icon: <FiMail />,     href: `mailto:${personal.email}`,       label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {year} <strong>Noah BELLO</strong> · Développeur Full-Stack · Montpellier
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                className="footer-social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
