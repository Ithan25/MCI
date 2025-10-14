# Guide de développement - Mon Coach Informatique

## Environnement de développement

### Mode développement (CSP contourné)

En mode développement, le formulaire de contact utilise automatiquement `mailto:` pour contourner les restrictions CSP de Vite.

**Comportement :**

- Le formulaire affiche un bandeau bleu indiquant le mode développement
- Lors de l'envoi, votre client email s'ouvre avec le message pré-rempli
- Les données sont automatiquement formatées pour l'email

### Mode production (EmailJS)

En mode production, le formulaire utilise EmailJS pour l'envoi direct d'emails.

**Configuration :**

- Service ID: `service_lz96mh9`
- Template ID: `template_guohcwe`
- Public Key: `HsRu6LSfcJC6xJFsG`
- Email de destination: `contact@moncoachinformatique.fr`

## Commandes utiles

```bash
# Développement avec contournement CSP
npm run dev

# Build pour la production avec CSP activé
npm run build

# Build de développement sans CSP
npm run build:dev

# Preview du build de production
npm run preview
```

## Structure des fichiers

### Contact Form

- **Fichier principal:** `src/components/Contact.jsx`
- **Configuration EmailJS:** `src/emailjs.js`
- **Script CSP:** `scripts/enable-csp.js`

### Mode switching

Le composant détecte automatiquement l'environnement via `import.meta.env.DEV`:

- `true`: Mode développement (mailto)
- `false`: Mode production (EmailJS)

## Résolution du problème CSP

### Problème

Vite applique par défaut une Content Security Policy stricte qui bloque les requêtes vers l'API EmailJS.

### Solutions implémentées

1. **Développement:** Contournement automatique avec mailto
2. **Production:** CSP configuré dans index.html pour autoriser EmailJS
3. **Build:** Script automatique d'activation du CSP

### Configuration CSP (production)

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.emailjs.com; img-src 'self' data: https:;"
/>
```

## Déploiement

1. Construire le projet : `npm run build`
2. Le CSP sera automatiquement activé dans le fichier `dist/index.html`
3. Déployer le contenu du dossier `dist/`

## Maintenance

### Mise à jour des clés EmailJS

Modifier le fichier `src/emailjs.js` avec les nouvelles configurations.

### Modification du template

Changer le contenu dans le tableau de bord EmailJS ou modifier les `templateParams` dans `Contact.jsx`.

### Tests

- **Développement:** Tester l'ouverture du client email
- **Production:** Tester la réception effective des emails
