export const personal = {
  name: 'Noah BELLO',
  title: 'Développeur Full-Stack',
  subtitle: 'Alternant M1 — Expert Dev.',
  location: 'Montpellier, France',
  email: 'axnanoan@hotmail.fr',
  linkedin: 'https://linkedin.com/in/bello-noah',
  github: 'https://github.com/NoahBELLO',
  cvUrl: '/CV_Noah_BELLO_2026.pdf',
}

export const skillsMain = [
  { name: 'TypeScript / JavaScript', level: 95, label: 'Expert' },
  { name: 'Angular / React', level: 85, label: 'Avancé' },
  { name: 'Node.js / NestJS', level: 80, label: 'Avancé' },
  { name: 'Python / FastAPI', level: 65, label: 'Intermédiaire' },
  { name: 'Docker / DevOps', level: 65, label: 'Intermédiaire' },
  { name: 'PHP / Symfony', level: 60, label: 'Intermédiaire' },
  { name: 'WINDEV / WEBDEV', level: 40, label: 'En cours' },
]

export const skillsCategories = [
  {
    title: 'Front-End',
    items: ['Angular', 'React', 'Vue.js', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Back-End',
    items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'Flask', 'PHP', 'Symfony', 'Java'],
  },
  {
    title: 'Bases de données',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'ClickHouse', 'Prisma ORM', 'SQL avancé'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Docker', 'Nginx', 'Git', 'CI/CD', 'GitHub Actions', 'Firebase', 'Stripe', 'Linux'],
  },
  {
    title: 'Architecture',
    items: ['Microservices', 'API REST', 'N-Tier', 'MVC', 'Gestion agile'],
  },
  {
    title: 'Logiciel métier',
    items: ['WINDEV', 'WEBDEV', 'WINDEV Mobile', 'PC Soft'],
  },
]

export const experiences = [
  {
    title: 'Développeur WINDEV · WEBDEV · WINDEV Mobile',
    company: 'CTDEV',
    tags: ['Alternance', 'Télétravail'],
    period: 'Sept 2024 — Présent',
    items: [
      '<strong>Segly</strong> (segly.app) — SPA d\'analyse de traces GPX : JS ES6, Firebase Auth, Stripe, PWA, i18n 4 langues, en production',
      '<strong>API-Segly</strong> — API REST Python/FastAPI, SQL Server, Docker multi-stage, CI/CD GitHub Actions, Stripe webhooks',
      '<strong>Front-Oihana</strong> — Site vitrine agence de voyages en HTML5 / CSS3 / JS vanilla',
      'Développement d\'applications métier avec WINDEV, WEBDEV et WINDEV Mobile (PC Soft)',
      'Gestion autonome du cycle complet en environnement 100 % distant',
    ],
  },
]

export const education = [
  {
    title: 'Master Expert Architecture & Développement Informatique',
    school: 'Keyce Academy · Montpellier',
    tag: 'En alternance',
    period: '2025 — 2027',
    items: [
      'Architecture avancée · Cybersécurité · Green IT · UX/UI · BPMN/UML · Éthique & droit numérique',
      'Next.js / Vercel · Cloud computing · Documentation technique · Veille technologique',
    ],
  },
  {
    title: 'Bachelor Coordinateur Projet Informatique',
    school: 'Keyce Academy · Montpellier',
    period: '2022 — 2025',
    items: [
      'Web, mobile, BDD, DevOps, architecture logicielle, gestion de projet agile',
      'Stack : HTML/CSS/JS/TS · Python · PHP · Java · C++ · SQL · Docker · Angular · React · Symfony',
    ],
  },
  {
    title: 'Licence 1 Mathématiques',
    school: 'Université de Nîmes',
    period: '2021 — 2022',
    items: [],
  },
]

export const projects = [
  {
    name: 'Segly',
    subtitle: 'segly.app',
    badge: 'Production',
    tags: ['JS ES6', 'Firebase', 'Stripe', 'PWA', 'PHP', 'i18n'],
    description:
      'SPA d\'analyse de traces GPX pour sportifs outdoor : segmentation automatique, stats par segment, export PDF, abonnements Stripe.',
    url: 'https://segly.app',
  },
  {
    name: 'API-Segly',
    badge: 'Production',
    tags: ['Python', 'FastAPI', 'SQL Server', 'Docker', 'GitHub Actions', 'Stripe'],
    description:
      'Backend REST async : moteur d\'analyse GPX, génération PDF, gestion utilisateurs Firebase, abonnements Stripe, images Docker Linux/Windows.',
    url: null,
  },
  {
    name: 'Projet-BDD Multi-Plateforme',
    tags: ['TypeScript', 'Angular', 'Electron', 'MongoDB', 'PostgreSQL'],
    description:
      'Architecture N-Tier : web Angular + desktop Electron, 5 microservices backend avec authentification JWT et gestion des rôles.',
    url: null,
  },
  {
    name: 'Projet-BDD (OLTP + OLAP)',
    tags: ['TypeScript', 'Python', 'Angular', 'PostgreSQL', 'ClickHouse', 'Docker'],
    description:
      '7 conteneurs Docker : gateway Nginx, 2 APIs, base transactionnelle PostgreSQL et analytique ClickHouse.',
    url: null,
  },
]
