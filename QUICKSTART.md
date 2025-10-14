# 🚀 Guide de Démarrage Rapide - Mon Coach Informatique

## Installation et lancement en 3 étapes

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancement du serveur de développement

```bash
npm run dev
```

➜ Ouvrez http://localhost:3000 dans votre navigateur

### 3. Build de production

```bash
npm run build
npm run preview  # Pour tester le build localement
```

## ✅ Checklist de déploiement

- [ ] Tester le site en local (`npm run dev`)
- [ ] Vérifier le build de production (`npm run build`)
- [ ] Tester la version de production (`npm run preview`)
- [ ] Valider tous les formulaires
- [ ] Vérifier la responsivité mobile
- [ ] Tester les animations
- [ ] Valider le SEO (métadonnées)

## 📋 Plateformes de déploiement recommandées

### Netlify (Gratuit)

1. Connecter le repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel (Gratuit)

1. Importer depuis GitHub
2. Framework Preset: Vite
3. Déploiement automatique

### Cloudflare Pages (Gratuit)

1. Connecter le repository
2. Framework: Vite
3. Build command: `npm run build`
4. Build output: `dist`

## 🎯 Performances

- **Lighthouse Score**: 95+ attendu
- **Bundle size**: ~365KB
- **CSS size**: ~22KB
- **First Load**: <2s

## 🔧 Personnalisation rapide

### Couleurs (tailwind.config.js)

```js
primary: "#3B82F6"; // Bleu principal
accent: "#10B981"; // Vert accent
```

### Contenu (src/components/)

- `Hero.jsx` - Message principal et CTA
- `Services.jsx` - Liste des services
- `Testimonials.jsx` - Témoignages clients
- `Contact.jsx` - Informations de contact

---

_Prêt à lancer ? Utilisez `npm run dev` !_ 🎉
