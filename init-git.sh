#!/bin/bash

echo "🚀 Initialisation du repository Git pour le déploiement Vercel"

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Initialiser le repository si ce n'est pas déjà fait
if [ ! -d ".git" ]; then
    echo "📝 Initialisation du repository Git..."
    git init
else
    echo "✅ Repository Git déjà initialisé"
fi

# Créer .gitignore si il n'existe pas
if [ ! -f ".gitignore" ]; then
    echo "📝 Création du .gitignore..."
    cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Cache
.cache/
EOF
else
    echo "✅ .gitignore déjà existant"
fi

# Ajouter tous les fichiers
echo "📦 Ajout des fichiers au staging..."
git add .

# Commit initial
echo "💾 Création du commit initial..."
git commit -m "🎉 Site Mon Coach Informatique - Prêt pour déploiement Vercel

✨ Fonctionnalités :
- Site vitrine responsive
- Formulaire de contact EmailJS + fallback mailto
- Animations Framer Motion
- Design moderne avec TailwindCSS
- Logo personnalisé intégré
- Configuration CSP optimisée
- Prêt pour HTTPS et domaine personnalisé"

echo ""
echo "🎉 Repository Git initialisé avec succès !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Créer un repository sur GitHub"
echo "2. Ajouter l'origine remote : git remote add origin https://github.com/USERNAME/REPO.git"
echo "3. Pousser le code : git push -u origin main"
echo "4. Connecter à Vercel pour le déploiement"
echo ""
echo "📖 Consultez DEPLOYMENT-GUIDE.md pour les instructions détaillées"