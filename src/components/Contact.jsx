import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

const contactLinks = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bello-noah',
    href: personal.linkedin,
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/NoahBELLO',
    href: personal.github,
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const sub = encodeURIComponent(`[Portfolio] ${form.subject}`)
    const body = encodeURIComponent(
      `Bonjour Noah,\n\nNom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    )
    window.open(`mailto:${personal.email}?subject=${sub}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="section-label">Me contacter</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-divider" />

        <div ref={ref} className={`contact-grid reveal${inView ? ' visible' : ''}`}>
          <div>
            <h3 className="contact-info-title">Discutons ensemble</h3>
            <p className="contact-info-text">
              Vous avez un projet, une opportunité d'alternance ou simplement envie d'échanger ?
              N'hésitez pas à me contacter — je réponds rapidement.
            </p>
            <div className="contact-links">
              {contactLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="contact-link"
                >
                  <div className="contact-link-icon">{l.icon}</div>
                  <div>
                    <div className="contact-link-text">{l.label}</div>
                    <div className="contact-link-sub">{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nom</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={set('name')}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={set('email')}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Sujet</label>
              <input
                className="form-input"
                type="text"
                placeholder="Opportunité d'alternance"
                value={form.subject}
                onChange={set('subject')}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                rows={5}
                placeholder="Bonjour Noah, je souhaitais vous contacter au sujet de..."
                value={form.message}
                onChange={set('message')}
                required
              />
            </div>

            <button type="submit" className="btn-primary form-submit">
              {sent ? 'Client mail ouvert !' : (
                <><FiSend /> Envoyer le message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
