# Mon Coach Informatique (MCI) 💻

> **L'informatique, simple comme un clic.**

Site vitrine moderne et responsive pour la micro-entreprise Mon Coach Informatique, spécialisée dans le *Fait avec ❤️ à Nantes par Mon Coach Informatique*oaching et la formation informatique accessibles à tous.

## 🚀 Aperçu

Ce site présente les services de formation informatique destinés aux particuliers, collectivités, écoles et associations. Il offre une expérience utilisateur moderne avec un design épuré et professionnel.

### ✨ Fonctionnalités

- **Design responsive** : Optimisé pour tous les appareils
- **Animations fluides** : Transitions élégantes avec Framer Motion
- **Interface moderne** : Design épuré avec TailwindCSS
- **SEO optimisé** : Métadonnées complètes et structure sémantique
- **Sécurité renforcée** : CSP et bonnes pratiques de sécurité
- **Performance** : Code optimisé et images compressées

## 🛠️ Technologies utilisées

- **React 19** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **TailwindCSS 4** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes
- **CSS personnalisé** - Styles additionnels

## 📦 Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**

   ```bash
   git clone <votre-repo>
   cd MCI
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Scripts disponibles

```bash
# Développement
npm run dev          # Serveur de développement sur port 3000

# Production
npm run build        # Build optimisé pour la production
npm run preview      # Prévisualisation du build de production

# Qualité de code
npm run lint         # Analyse ESLint
```

## 🏗️ Structure du projet

```
MCI/
├── public/
│   ├── favicon.svg          # Favicon personnalisé MCI
│   └── vite.svg
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.jsx       # Navigation et header
│   │   ├── Hero.jsx         # Section hero avec CTA
│   │   ├── Services.jsx     # Présentation des services
│   │   ├── Testimonials.jsx # Témoignages clients
│   │   ├── About.jsx        # À propos et valeurs
│   │   ├── Contact.jsx      # Formulaire de contact
│   │   ├── Footer.jsx       # Pied de page
│   │   └── NotFound.jsx     # Page 404 personnalisée
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée React
│   └── index.css            # Styles globaux et Tailwind
├── index.html               # Template HTML avec SEO
├── tailwind.config.js       # Configuration Tailwind
├── vite.config.js           # Configuration Vite
└── package.json             # Dépendances et scripts
```

## 🎨 Charte graphique

### Couleurs

- **Bleu principal** : `#3B82F6` - Confiance et professionnalisme
- **Vert accent** : `#10B981` - Croissance et réussite
- **Gris clair** : `#F3F4F6` - Fond et élégance
- **Fond** : Blanc - Clarté et simplicité

### Typographie

- **Titres** : Poppins (600, 700)
- **Texte** : Open Sans (400, 500, 600)

## 📱 Sections du site

1. **Hero** - Présentation avec slogan et CTA
2. **Services** - 6 services détaillés avec icônes
3. **Témoignages** - Retours clients authentiques
4. **À propos** - Parcours et approche pédagogique
5. **Contact** - Formulaire et informations de contact
6. **Footer** - Liens et mentions légales

## 🔒 Sécurité

- **Content Security Policy** configurée
- **Sourcemaps désactivées** en production
- **Validation côté client** pour le formulaire
- **Pas de stockage** de données utilisateur

## 📈 SEO & Performance

- **Meta tags** optimisés
- **Open Graph** configuré
- **Lazy loading** des images
- **Code splitting** automatique
- **Compression** des assets

## 🚀 Déploiement

### Netlify (recommandé)

1. Connecter le repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Importer le projet depuis GitHub
2. Déploiement automatique configuré

### Cloudflare Pages

1. Connecter le repository
2. Build command: `npm run build`
3. Build output directory: `dist`

## 🛡️ Variables d'environnement

Aucune variable d'environnement n'est requise pour ce projet. Toutes les configurations sont intégrées.

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence privée - tous droits réservés Mon Coach Informatique.

## 📞 Contact

**Mon Coach Informatique (MCI)**

- 📧 Email: contact@moncoach-informatique.fr
- 📱 Téléphone: 06 XX XX XX XX
- 📍 Zone: Nantes & agglomération

---

_Fait avec ❤️ à Gex par Mon Coach Informatique_

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
