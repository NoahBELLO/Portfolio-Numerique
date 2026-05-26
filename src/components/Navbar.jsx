import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const links = [
  { label: 'À propos',     href: '#about' },
  { label: 'Compétences',  href: '#skills' },
  { label: 'Expérience',   href: '#experience' },
  { label: 'Projets',      href: '#projects' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="navbar-logo gradient-text" onClick={close}>
        NB.
      </a>

      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={close}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href={personal.cvUrl} download className="navbar-cta">
        <FiDownload style={{ marginRight: 6, verticalAlign: 'middle' }} />
        CV PDF
      </a>

      <button
        className="navbar-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  )
}
