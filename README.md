# Portfolio Numérique — Noah BELLO

Portfolio personnel de **Noah BELLO**, développeur Full-Stack en alternance M1 Expert Dev., construit avec React + Vite et déployé sur GitHub Pages.

## Stack technique

| Couche | Technologie |
|---|---|
| UI | React 18, react-icons |
| Build | Vite 5 |
| Style | CSS vanilla (dark theme cyan/violet) |
| CI/CD | GitHub Actions → GitHub Pages |
| Dev | Docker + docker-compose |

## Structure du projet

```
src/
├── components/   # Sections de la page (Hero, About, Skills, Experience, Projects, Contact, Footer)
├── data/         # Données centralisées (portfolio.js)
├── hooks/        # useInView — animations au scroll
├── App.jsx
├── main.jsx
└── styles.css
```

## Lancer en local

### Avec Node.js

```bash
npm install
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

### Avec Docker

```bash
docker-compose up
```

## Build de production

```bash
npm run build
npm run preview
```

Le dossier `dist/` contient les fichiers statiques prêts à être déployés.

## Déploiement

Le déploiement est automatisé via GitHub Actions à chaque push sur `main`.

Le workflow (`.github/workflows/deploy.yml`) :
1. Installe les dépendances (`npm ci`)
2. Copie le CV PDF dans `public/`
3. Lance le build Vite avec `VITE_BASE_URL=/Portfolio-Numerique/`
4. Publie le dossier `dist/` sur GitHub Pages

**URL de production :** `https://noahbello.github.io/Portfolio-Numerique/`

## Sections

- **Hero** — présentation, liens vers le CV, LinkedIn et GitHub
- **À propos** — parcours et profil
- **Compétences** — barres de progression + grille par catégorie
- **Expérience & Formation** — timeline alternance / diplômes
- **Projets** — Segly, API-Segly et projets académiques
- **Contact** — formulaire et liens directs

## Contact

- Email : axnanoan@hotmail.fr
- LinkedIn : [linkedin.com/in/bello-noah](https://linkedin.com/in/bello-noah)
- GitHub : [github.com/NoahBELLO](https://github.com/NoahBELLO)
